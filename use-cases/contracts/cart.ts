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
        compareAtPrice: Price;
        price: Price;
    };
};

export type MechanismEnumType = 'Percentage' | 'Fixed' | 'DynamicFixed' | 'XforY';

export type PromotionSlimMechanism = {
    type: MechanismEnumType;
    value: number;
};

export type PromotionSlim = {
    identifier: string;
    name: string;
    mechanism: PromotionSlimMechanism;
};

export type Cart = {
    id: string;
    items: CartItem[];
    total: Price;
    lastItemAdded?: CartItem;
    appliedPromotions: PromotionSlim[];
    orderId?: string;
    state: string;
};

export type CartItemInput = {
    sku: string;
    price: Price;
    variantName: string;
    productName: string;
    quantity: number;
    image?: Image | null;
};
