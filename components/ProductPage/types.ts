// Type for the innermost price information
export interface PriceFor {
    identifier: string | null;
    price: number | null;
}

// Type for the specific price variant ("membership")
export interface PriceVariant {
    priceFor: PriceFor | null;
}

// Type for each product variant in the list
export interface ProductVariant {
    id: string;
    sku: string;
    name: string;
    price: number | null;
    priceVariant: PriceVariant | null;
}

// Type for the main `catalogue` object
// The `variants` property is optional because it only exists on items of type `Product`.
export interface CatalogueProduct {
    id: string | null;
    path: string | null;
    variants?: (ProductVariant | null)[] | null;
}

// This is the main type for the entire query response
export interface FetchPricesForQuery {
    catalogue?: CatalogueProduct | null;
}
