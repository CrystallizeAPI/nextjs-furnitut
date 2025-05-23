import {
    Category,
    Product as ProductShape,
    FetchItemShapeDocument,
    SearchCategoryDocument,
    TenantFilter,
    TenantSort,
} from '@/generated/discovery/graphql';
import { apiRequest } from '@/utils/api-request';
import { Product } from '@/components/product';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Blocks } from '@/components/blocks';
import ProductPage from '@/components/ProductPage';
import classNames from 'classnames';
import Link from 'next/link';
import { Filters } from './filters';
import { ITEMS_PER_PAGE, Pagination } from '@/components/pagination';
import { Suspense } from 'react';
import {
    buildFilterCriteria,
    createAdjacentPairs,
    createStockFilterOptions,
    isChecked,
    ParentPathFacet,
    StockLocation,
} from './utils';
import { ENTERTAINMENT_PRICE_RANGE, PRODUCTS_PRICE_RANGE, SORTING_CONFIGS, STOCK_RANGE } from './constants';
import { FilterOption, SortingOption } from './types';
import { notFound } from 'next/navigation';

import { Image } from '@/components/image';

interface FetchCategoryProps {
    path: string;
    limit: number;
    skip?: number;
    filters: TenantFilter;
    sorting: TenantSort;
}

type ItemShape = 'category' | 'product' | null;

type SearchParams = {
    page?: string;
    priceRange?: string | string[];
    sort?: SortingOption;
    parentPath?: string | string[];
    stock?: string | string[];
};

const searchCategory = async ({ path, limit, skip = 0, filters, sorting }: FetchCategoryProps) => {
    const response = await apiRequest(SearchCategoryDocument, {
        path: `${path}/*`,
        browsePath: path,
        limit,
        skip,
        filters,
        sorting,
        boundaries: path.includes('entertainment') ? ENTERTAINMENT_PRICE_RANGE : PRODUCTS_PRICE_RANGE,
        stockBoundaries: STOCK_RANGE,
    });
    const { hits, summary: searchSummary } = response.data.search ?? {};
    const { summary: filterSummary } = response.data.filters ?? {};
    const { breadcrumbs, name, blocks, children } = response.data.browse?.category?.hits?.[0] ?? {};

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

export default async function CategoryOrProduct(props: CategoryOrProductProps) {
    const params = await props.params;
    const { page, priceRange, sort = 'popular', parentPath, stock } = await props.searchParams;
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
        filters: buildFilterCriteria({ priceRange, parentPath, stock }),
        sorting: SORTING_CONFIGS[sort] as TenantSort,
    });
    const { totalHits, hasPreviousHits, hasMoreHits, price, parentPaths, toronto, online, oslo } = summary ?? {};

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

    const stockLocations: StockLocation[] = [
        { data: online as ParentPathFacet, label: 'Online' },
        { data: oslo as ParentPathFacet, label: 'Oslo' },
        { data: toronto as ParentPathFacet, label: 'Toronto' },
    ];

    const stockOptions = createStockFilterOptions(stockLocations, stock);

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
                            stockOptions={stockOptions}
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
