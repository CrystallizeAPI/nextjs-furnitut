import {
    FetchItemShapeDocument,
    SearchCategoryDocument,
    SortOrder,
    TenantFilter,
    TenantSort,
} from '@/generated/graphql';
import { apiRequest } from '@/utils/api-request';
import { Product } from '@/components/product';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Blocks } from '@/components/blocks';
import ProductPage from '@/components/ProductPage';
import classNames from 'classnames';
import Link from 'next/link';
import { Filters } from './filters';
import { ITEMS_PER_PAGE, Pagination } from '@/components/Pagination';
import { Suspense } from 'react';
import { buildFilterCriteria } from './utils';
import { EntertainmentPriceRange, ProductsPriceRange, SORTING_CONFIGS } from './constants';
import { SortingOption } from './types';

interface FetchCategoryProps {
    path: string;
    limit: number;
    skip?: number;
    filters: TenantFilter;
    sorting: TenantSort;
}

type ItemShape = 'category' | 'product' | null;

interface SearchParams {
    page?: string;
    priceRange?: string;
    inStock?: string;
    sort?: SortingOption;
    parentPath?: string;
}

const searchCategory = async ({ path, limit, skip = 0, filters, sorting }: FetchCategoryProps) => {
    const response = await apiRequest(SearchCategoryDocument, {
        path: `${path}/*`,
        browsePath: path,
        limit,
        skip,
        filters,
        sorting,
        boundaries: path.includes('entertainment') ? EntertainmentPriceRange : ProductsPriceRange,
    });
    const { hits, summary } = response.data.search ?? {};
    const { breadcrumbs, name, blocks, children } = response.data.browse?.category?.hits?.[0] ?? {};

    return {
        name,
        blocks,
        breadcrumbs: breadcrumbs?.[0]?.filter((item) => !!item),
        categories: children?.hits?.filter((item) => item?.shape === 'category'),
        products: hits?.filter((item) => item?.shape === 'product'),
        summary,
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

function createAdjacentPairs<T>(array: T[]): { value: string; label: string }[] {
    return array.map((item, index) => {
        const nextElement = array[index + 1] ?? '+';

        return {
            value: nextElement === '+' ? `${item}` : `${item},${nextElement}`,
            label: nextElement === '+' ? `${item}${nextElement}` : `${item}-${nextElement}`,
        };
    });
}

interface CategoryOrProductProps {
    params: Promise<{ slug: string; category: string[] }>;
    searchParams: Promise<SearchParams>;
}

export default async function CategoryOrProduct(props: CategoryOrProductProps) {
    const params = await props.params;
    const { page, priceRange, inStock, sort = 'popular', parentPath } = await props.searchParams;
    const currentPage = Number(page ?? 1);
    const limit = ITEMS_PER_PAGE;
    const skip = currentPage ? (currentPage - 1) * limit : 0;
    const path = `/${params.slug}/${params.category.join('/')}`;

    const itemShape = await fetchItemShape(path);
    if (!itemShape) {
        // TODO: do a proper not found section
        return <div>Nothing found</div>;
    }

    if (itemShape === 'product') {
        return <ProductPage params={props.params} searchParams={props.searchParams} />;
    }

    const { breadcrumbs, name, categories, blocks, products, summary } = await searchCategory({
        path,
        limit,
        skip,
        filters: buildFilterCriteria(!!inStock, priceRange, parentPath),
        sorting: SORTING_CONFIGS[sort] as TenantSort,
    });
    const { totalHits, hasPreviousHits, hasMoreHits, price, parentPaths } = summary ?? {};

    type ParentPathFacet = Record<string, { count: number; label: string }>;
    const priceCounts = Object.values(price) as { count: number }[];
    const pairs = createAdjacentPairs(path.includes('entertainment') ? EntertainmentPriceRange : ProductsPriceRange);

    const priceRangeOptions = pairs.map((pair, index) => ({
        value: pair.value,
        label: pair.label,
        count: priceCounts[index].count,
    }));

    const paths = Object.entries(parentPaths as ParentPathFacet)
        .map(([key, value]) => ({
            value: key,
            label: value.label,
            count: value.count,
        }))
        .sort((a, b) => a.value.localeCompare(b.value));

    return (
        <main>
            <div className="page  pb-6">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                <h1 className="text-4xl font-bold py-4">{name}</h1>
                {/* Filters */}
                <Suspense fallback={null}>
                    <Filters
                        priceRange={priceRangeOptions}
                        selectedPriceRange={priceRange}
                        inStock={!!inStock}
                        sorting={sort}
                        paths={paths}
                        selectedParentPath={parentPath}
                    />
                </Suspense>
            </div>
            {blocks && (
                <div className={classNames('flex flex-col items-center pt-12', !!blocks?.length && 'pb-12')}>
                    <Blocks blocks={blocks} />
                </div>
            )}

            {/* Categories List */}
            <div className={classNames('flex flex-wrap mx-auto gap-x-2 gap-y-2 max-w-(--breakpoint-2xl) px-12')}>
                {categories?.map((child) => (
                    // @ts-expect-error
                    <Link className="bg-dark text-light rounded-full px-4 py-2" href={child?.path} key={child?.id}>
                        {/*@ts-expect-error*/}
                        {child?.name}
                    </Link>
                ))}
            </div>

            {/* Products List */}
            <div
                className={classNames(
                    'grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4 max-w-(--breakpoint-2xl) mx-auto my-8',
                )}
            >
                {/*@ts-expect-error*/}
                {products?.map((child) => <Product key={child?.path} product={child} />)}
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
