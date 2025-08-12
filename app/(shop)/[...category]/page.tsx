import {
    Category,
    FetchItemShapeDocument,
    Product as ProductShape,
    PublicationState,
    SearchCategoryDocument,
    TenantFilter,
    TenantSort,
} from '@/generated/discovery/graphql';
import { apiRequest } from '@/utils/api-request';
import { Product } from '@/components/product';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Blocks } from '@/components/blocks';
import ProductPage, { fetchProductData } from '@/components/ProductPage';
import classNames from 'classnames';
import Link from 'next/link';
import { Filters } from './filters';
import { ITEMS_PER_PAGE, Pagination } from '@/components/pagination';
import { Suspense } from 'react';
import { buildFilterCriteria, createAdjacentPairs, isChecked, ParentPathFacet } from './utils';
import { ENTERTAINMENT_PRICE_RANGE, PRODUCTS_PRICE_RANGE, SORTING_CONFIGS } from './constants';
import { FilterOption, SearchParams } from './types';
import { notFound } from 'next/navigation';

import { Image } from '@/components/image';
import type { Metadata } from 'next';
import { findSuitableVariant } from '@/components/variant-selector';

interface FetchCategoryProps {
    path: string;
    limit: number;
    skip?: number;
    filters: TenantFilter;
    sorting: TenantSort;
    isPreview?: boolean;
}

type ItemShape = 'category' | 'product' | null;

const searchCategory = async ({ path, limit, skip = 0, filters, sorting, isPreview = false }: FetchCategoryProps) => {
    const response = await apiRequest(SearchCategoryDocument, {
        path: `${path}/*`,
        browsePath: path,
        limit,
        skip,
        filters,
        sorting,
        boundaries: path.includes('entertainment') ? ENTERTAINMENT_PRICE_RANGE : PRODUCTS_PRICE_RANGE,
        publicationState: isPreview ? PublicationState.Draft : PublicationState.Published,
    });

    const { hits, summary: searchSummary } = response.data.search ?? {};
    const { summary: filterSummary } = response.data.filters ?? {};
    const { breadcrumbs, name, blocks, children, meta } = response.data.browse?.category?.hits?.[0] ?? {};

    return {
        name,
        blocks,
        breadcrumbs: breadcrumbs?.[0]?.filter((item) => !!item),
        categories: children?.hits?.filter((item) => item?.shape === 'category'),
        products: hits?.filter((item) => item?.shape === 'product'),
        summary: {
            ...searchSummary,
            ...filterSummary,
        },
        meta,
    };
};

const fetchItemShape = async (path: string): Promise<ItemShape> => {
    const response = await apiRequest(FetchItemShapeDocument, { path });
    const itemShape = response?.data?.search?.hits?.[0]?.shape;

    if (!itemShape) {
        return null;
    }

    return itemShape as ItemShape;
};

type CategoryOrProductProps = {
    params: Promise<{ slug: string; category: string[] }>;
    searchParams: Promise<SearchParams>;
};

export async function generateMetadata(props: CategoryOrProductProps): Promise<Metadata> {
    const searchParams = await props.searchParams;
    const params = await props.params;
    const url = `/${params.category.join('/')}`;
    const { page, priceRange, sort = 'popular', parentPath, inStock } = await props.searchParams;
    const currentPage = Number(page ?? 1);
    const limit = ITEMS_PER_PAGE;
    const skip = currentPage ? (currentPage - 1) * limit : 0;
    const itemShape = await fetchItemShape(url);

    if (itemShape === 'product') {
        const { meta, variants } = await fetchProductData({ path: url });
        const currentVariant = findSuitableVariant({ variants: variants, searchParams });
        const title = currentVariant?.name ?? '';
        const description = meta?.description?.[0]?.textContent;
        const image = currentVariant?.images?.[0];
        const ogImage = image?.ogVariants?.[0];
        const attributesQueryParams = new URLSearchParams(currentVariant?.attributes ?? {});

        return {
            title: `${title}`,
            description,
            openGraph: {
                title: `${title} | Furnitut`,
                description,
                url: `${url}?${attributesQueryParams.toString()}`,
                images: [
                    {
                        url: ogImage?.url ?? '',
                        alt: image?.altText ?? '',
                        height: ogImage?.height ?? 0,
                        width: ogImage?.width ?? 0,
                    },
                ],
            },
        };
    }

    const { meta, name } = await searchCategory({
        path: url,
        limit,
        skip,
        filters: buildFilterCriteria({ priceRange, parentPath, inStock: !!inStock }),
        sorting: SORTING_CONFIGS[sort] as TenantSort,
    });
    const { title, description, image } = meta ?? {};

    return {
        title: title || name,
        description: description?.[0]?.textContent ?? '',
        openGraph: {
            title: `${title} | Furnitut`,
            description: description?.[0]?.textContent ?? '',
            url: `/${url}`,
            images: [
                {
                    url: image?.[0]?.url ?? '',
                    alt: image?.[0]?.altText ?? '',
                    height: image?.[0]?.height ?? 0,
                    width: image?.[0]?.width ?? 0,
                },
            ],
        },
    };
}

export default async function CategoryOrProduct(props: CategoryOrProductProps) {
    const params = await props.params;
    const { page, priceRange, sort = 'popular', parentPath, preview, inStock } = await props.searchParams;
    const currentPage = Number(page ?? 1);
    const limit = ITEMS_PER_PAGE;
    const skip = currentPage ? (currentPage - 1) * limit : 0;
    const path = `/${params.category.join('/')}`;

    const itemShape = await fetchItemShape(path);
    if (!itemShape) {
        // TODO: do a proper not found section
        return notFound();
    }

    if (itemShape === 'product') {
        return <ProductPage params={props.params} searchParams={props.searchParams} />;
    }

    const { breadcrumbs, name, categories, blocks, products, summary } = await searchCategory({
        path,
        limit,
        skip,
        filters: buildFilterCriteria({ priceRange, parentPath, inStock: !!inStock }),
        sorting: SORTING_CONFIGS[sort] as TenantSort,
        isPreview: !!preview,
    });
    const { totalHits, hasPreviousHits, hasMoreHits, price, parentPaths } = summary ?? {};

    const priceCounts = Object.values(price) as { count: number }[];
    const pairs = createAdjacentPairs(
        path.includes('entertainment') ? ENTERTAINMENT_PRICE_RANGE : PRODUCTS_PRICE_RANGE,
    );

    const priceRangeOptions: FilterOption[] = pairs.map((pair, index) => ({
        value: pair.value,
        label: pair.label,
        count: priceCounts[index].count,
        checked: isChecked({ filterValue: priceRange, value: pair.value }),
    }));

    const paths: FilterOption[] = Object.entries(parentPaths as ParentPathFacet)
        .map(([key, value]) => ({
            value: key,
            label: value.label.split(' > ').at(-1) as string,
            count: value.count,
            checked: isChecked({
                filterValue: parentPath,
                value: key,
            }),
        }))
        .sort((a, b) => a.label.localeCompare(b.label));

    return (
        <main>
            <div className="border-muted border-b border-0">
                <div className="page  pb-2 ">
                    <Breadcrumbs breadcrumbs={breadcrumbs} />
                    <h1 className="text-6xl font-bold py-4 ">{name}</h1>
                </div>
                {/* Categories List */}
                <div className={classNames('flex flex-wrap mx-auto gap-2  max-w-(--breakpoint-2xl) empty:pb-0 pb-4 ')}>
                    {categories?.map((child) => {
                        if (!child) {
                            return null;
                        }

                        return (
                            <Link
                                className={classNames(
                                    'group w-28 pt-2 text-center text-dark divide divide-black divide-solid hover:border-dark transition-all',
                                    'bg-light border-muted border border-solid rounded-lg  flex flex-col gap-1  justify-start  items-center',
                                )}
                                href={(child as Category).path ?? '#'}
                                key={(child as Category).id}
                            >
                                <div className="w-24 h-24 text-center rounded-lg overflow-hidden border border-muted relative ">
                                    {(child as Category).image?.map((img) => {
                                        return <Image {...img} key={img?.url} sizes="200px" />;
                                    })}
                                </div>
                                <span className="group-hover:font-bold py-2 text-sm text-wrap max-w-full">
                                    {(child as Category).name}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Blocks */}
            {blocks && (
                <div className={classNames('flex flex-col items-center pt-12', !!blocks?.length && 'pb-12')}>
                    <Blocks blocks={blocks} />
                </div>
            )}

            {/* Products List */}
            <div
                className={classNames(
                    'grid  mt-2 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4 max-w-(--breakpoint-2xl) mx-auto mb-8 relative',
                )}
            >
                <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 pb-4 mt-4">
                    {/* Filters */}
                    <Suspense fallback={null}>
                        <Filters
                            priceRange={priceRangeOptions}
                            sorting={sort}
                            totalHits={totalHits ?? 0}
                            paths={paths}
                            inStock={!!inStock}
                        />
                    </Suspense>
                </div>
                {products?.map((child) => {
                    if (!child) {
                        return null;
                    }

                    return <Product key={(child as ProductShape).id} product={child} />;
                })}
            </div>

            {/* Pagination */}
            {totalHits && totalHits > ITEMS_PER_PAGE && (
                <Pagination
                    totalItems={totalHits ?? 0}
                    currentPage={currentPage}
                    hasPreviousPage={hasPreviousHits ?? false}
                    hasNextPage={hasMoreHits ?? false}
                    url={path}
                />
            )}
        </main>
    );
}
