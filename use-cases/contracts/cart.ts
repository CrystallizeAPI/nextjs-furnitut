import { ImageVariant } from '@crystallize/js-api-client';

export type Price = {
    net: number;
    gross: number;
    taxAmount: number;
    currency: string;
    discounts: {
        percent: number;
        amount: number;
    }[];
};

export type CartItem = {
    name: string;
    quantity: number;
    price: Price;
    images: ImageVariant[];
    variant: {
        name: string;
        sku: string;
        product: {
            name: string;
        };
        price: Price;
    };
};

export type Cart = {
    items: CartItem[];
    total: Price;
};

export type CartItemInput = {
    sku: string;
    price: Price;
    image?: ImageVariant;
    variantName: string;
    productName: string;
    quantity: number;
};
