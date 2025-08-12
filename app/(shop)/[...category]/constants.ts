import { SortOrder, TenantSort } from '@/generated/discovery/graphql';
import { SortingOption } from './types';

export const PRICE_FIELD = 'price_default' as const;
export const ENTERTAINMENT_PRICE_RANGE = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
export const PRODUCTS_PRICE_RANGE = [0, 10, 100, 1000, 10000];

export const SORTING_CONFIGS: Record<NonNullable<SortingOption>, Partial<TenantSort>> = {
    newest: { publishedAt: SortOrder.Asc },
    popular: { position: SortOrder.Asc },
    rating: { score: SortOrder.Asc },
    priceLow: { price_default: SortOrder.Asc },
    priceHigh: { price_default: SortOrder.Desc },
} as const;
