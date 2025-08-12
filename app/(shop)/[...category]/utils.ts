import { NumberFilter, StringFilter, TenantFilter } from '@/generated/discovery/graphql';
import { PRICE_FIELD } from './constants';

const INFINITY_FALLBACK = Number.NEGATIVE_INFINITY;
const STOCK_FIELD = 'stock_default' as const;

type PriceRange = {
    min: number;
    max: number;
};

function parsePriceRangeString(range: string): PriceRange {
    const [min = '', max = ''] = range.split(',');
    return {
        min: min ? Number(min) : Number.POSITIVE_INFINITY,
        max: max ? Number(max) : Number.NEGATIVE_INFINITY,
    };
}

function processPriceRanges(priceRange: string | string[]): PriceRange {
    const ranges = Array.isArray(priceRange)
        ? priceRange.map(parsePriceRangeString)
        : [parsePriceRangeString(priceRange)];

    return {
        min: Math.min(...ranges.map((r) => r.min)),
        max: Math.max(...ranges.map((r) => r.max)),
    };
}

type BuildFilterCriteriaProps = {
    priceRange?: string | string[];
    parentPath?: string | string[];
    inStock?: boolean;
};

export function buildFilterCriteria({ parentPath, priceRange, inStock }: BuildFilterCriteriaProps) {
    const filterCriteria = {} as TenantFilter;

    if (!parentPath && !priceRange && !inStock) {
        return filterCriteria;
    }

    if (parentPath) {
        filterCriteria.parentPaths = {
            in: Array.isArray(parentPath) ? parentPath : [parentPath],
        } as StringFilter;
    }

    if (inStock) {
        filterCriteria[STOCK_FIELD] = {
            exists: true,
        } as NumberFilter;
    }

    if (priceRange) {
        filterCriteria[PRICE_FIELD] = buildPriceFilter(priceRange);
    }

    return filterCriteria;
}

function buildPriceFilter(priceRange: string | string[]): NumberFilter {
    const { min, max } = processPriceRanges(priceRange);
    return {
        range: {
            gte: min,
            ...(max !== INFINITY_FALLBACK ? { lt: max } : {}),
        },
    } as NumberFilter;
}

export function isChecked({ value, filterValue }: { value: string; filterValue: string | string[] | undefined }) {
    if (typeof filterValue === 'string') {
        return value === filterValue;
    }
    if (Array.isArray(filterValue)) {
        return filterValue.includes(value);
    }
    return false;
}

export type ParentPathFacet = Record<string, { count: number; label: string; filter: string }>;

export function createAdjacentPairs<T>(array: T[]): { value: string; label: string }[] {
    return array.map((item, index) => {
        const nextElement = array[index + 1] ?? '+';

        return {
            value: nextElement === '+' ? `${item}` : `${item},${nextElement}`,
            label: nextElement === '+' ? `${item}${nextElement}` : `${item}-${nextElement}`,
        };
    });
}
