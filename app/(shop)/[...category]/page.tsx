import {
    Category,
    FetchItemShapeDocument,
    Product as ProductShape,
    PublicationState,
    SearchCategoryDocument,
    TenantFilter,
    TenantLanguage,
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
        selectedPriceVariant: process.env.NEXT_PUBLIC_CRYSTALLIZE_SELECTED_PRICE || 'default',
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

export async function generateStaticParams() {
    return [{ category: ['products', 'plants', 'golden-pothos'] }];
}

export const revalidate = 3600;

export default async function CategoryOrProduct(props: CategoryOrProductProps) {
    const params = await props.params;
    const searchParams = await props.searchParams;
    const { page, priceRange, sort = 'popular', parentPath, preview, inStock } = searchParams;
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
        return <ProductPage params={params} searchParams={searchParams} />;
    }

    return null;
}
