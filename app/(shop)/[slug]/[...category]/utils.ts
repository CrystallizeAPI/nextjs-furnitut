import { TenantFilter } from '@/generated/graphql';
import { PRICE_FIELD } from './constants';

export function buildFilterCriteria(
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
