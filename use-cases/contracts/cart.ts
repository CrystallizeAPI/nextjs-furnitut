type Image = {
    url: string | null;
    height: number | null;
    width: number | null;
};

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
    images: Image[];
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
    lastItemAdded?: CartItem;
};

export type CartItemInput = {
    sku: string;
    price: Price;
    variantName: string;
    productName: string;
    quantity: number;
    image?: Image | null;
};
