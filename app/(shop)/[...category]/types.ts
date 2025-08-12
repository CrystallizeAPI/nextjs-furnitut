export type SortingOption = 'popular' | 'rating' | 'newest' | 'priceLow' | 'priceHigh';

export type FilterOption = {
    value: string;
    label: string;
    count: number;
    checked: boolean;
};

export type SearchParams = {
    page?: string;
    priceRange?: string | string[];
    sort?: SortingOption;
    parentPath?: string | string[];
    inStock?: string;
    sku?: string | string[];
    preview?: string;
};
