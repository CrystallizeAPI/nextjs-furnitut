import { SortOrder, TenantSort } from '@/generated/graphql';
import { SortingOption } from './types';

export const STOCK_FIELD = 'stock_default' as const;
export const PRICE_FIELD = 'price_default' as const;
export const EntertainmentPriceRange = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
export const ProductsPriceRange = [0, 10, 100, 1000, 10000];

export const SORTING_CONFIGS: Record<NonNullable<SortingOption>, Partial<TenantSort>> = {
    newest: { publishedAt: SortOrder.Asc },
    popular: { position: SortOrder.Asc },
    rating: { score: SortOrder.Asc },
    priceLow: { price_default: SortOrder.Asc },
    priceHigh: { price_default: SortOrder.Desc },
} as const;
