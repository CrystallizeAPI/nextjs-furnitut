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
import classnames from 'classnames';
import Link from 'next/link';
import { Filters } from './filters';
import { transformPriceRanges } from '@/utils/price-range';
import { ITEMS_PER_PAGE, Pagination } from '@/components/Pagination';
import { Suspense } from 'react';

interface FetchCategoryProps {
    path: string;
    limit: number;
    skip?: number;
    filters: TenantFilter;
    sorting: TenantSort;
}

const searchCategory = async ({ path, limit, skip = 0, filters, sorting }: FetchCategoryProps) => {
    const response = await apiRequest(SearchCategoryDocument, {
        path: `${path}/*`,
        browsePath: path,
        limit,
        skip,
        filters,
        sorting,
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

type ItemShape = 'category' | 'product' | null;

const fetchItemShape = async (path: string): Promise<ItemShape> => {
    const response = await apiRequest(FetchItemShapeDocument, { path });

    const itemShape = response?.data?.search?.hits?.[0]?.shape;

    if (!itemShape) {
        return null;
    }

    return itemShape as ItemShape;
};

const STOCK_FIELD = 'stock_default' as const;
const PRICE_FIELD = 'price_default' as const;

function buildFilterCriteria(
    inStock: boolean | undefined,
    priceRange: string | undefined,
    parentPath: string | undefined,
): TenantFilter {
    // @ts-expect-error
    const filterCriteria: TenantFilter = {};

    if (parentPath) {
        // @ts-expect-error
        filterCriteria.parentPaths = {
            equals: parentPath,
        };
    }

    if (inStock) {
        // @ts-expect-error
        filterCriteria[STOCK_FIELD] = { exists: true };
    }

    if (priceRange) {
        const [min = '', max = ''] = priceRange.split(',');

        filterCriteria[PRICE_FIELD] = {
            // @ts-expect-error
            range: {
                gte: Number(min),
                ...(max ? { lt: Number(max) } : {}),
            },
        };
    }

    return filterCriteria;
}

export type SortingOption = 'popular' | 'rating' | 'newest' | 'priceLow' | 'priceHigh';

interface SearchParams {
    page?: string;
    priceRange?: string;
    inStock?: string;
    sort?: SortingOption;
    parentPath?: string;
}

const SORTING_CONFIGS: Record<NonNullable<SortingOption>, Partial<TenantSort>> = {
    newest: { publishedAt: SortOrder.Asc },
    popular: { position: SortOrder.Asc },
    rating: { score: SortOrder.Asc },
    priceLow: { price_default: SortOrder.Asc },
    priceHigh: { price_default: SortOrder.Desc },
} as const;

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
    const transformed = transformPriceRanges(price);

    type ParentPathFacet = Record<string, { count: number; label: string }>;

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
                        priceRange={transformed}
                        selectedPriceRange={priceRange}
                        inStock={!!inStock}
                        sorting={sort}
                        paths={paths}
                        selectedParentPath={parentPath}
                    />
                </Suspense>
            </div>
            {blocks && (
                <div className={classnames('flex flex-col items-center pt-12', !!blocks?.length && 'pb-12')}>
                    <Blocks blocks={blocks} />
                </div>
            )}

            {/* Categories List */}
            <div className={classnames('flex gap-4 max-w-(--breakpoint-2xl) mx-auto my-4')}>
                {categories?.map((child) => (
                    // @ts-expect-error
                    <Link className="bg-dark text-light rounded-full px-4 py-2" href={child?.path} key={child?.id}>
                        {/*@ts-expect-error*/}
                        {child?.name}
                    </Link>
                ))}
            </div>

            {/* Products List */}
            <div className={classnames('grid grid-cols-4 gap-2 max-w-(--breakpoint-2xl) mx-auto my-8')}>
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
