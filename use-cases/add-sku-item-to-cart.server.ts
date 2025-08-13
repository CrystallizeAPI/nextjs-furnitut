import { storage } from '@/core/storage.server';
import { crystallizeClient } from '@/core/crystallize-client.server';
import { HydrateCartDocument } from '@/generated/shop/graphql';
import { print } from 'graphql';
import { getSession } from '@/core/auth.server';

const { CRYSTALLIZE_BASE_PRICE, CRYSTALLIZE_SELECTED_PRICE, CRYSTALLIZE_COMPARE_AT_PRICE } = process.env;

type Item = {
    sku: string;
    quantity: number;
};

type CartInput = {
    items: Item[];
    id?: string;
    customer?: {
        identifier: string;
        isGuest: boolean;
    };
    context?: {
        price?: {
            voucherCode?: string;
            decimals?: number;
            fallbackVariantIdentifiers?: string;
            compareAtVariantIdentifier?: string;
            selectedVariantIdentifier?: string;
            markets?: string[];
        };
    };
};

type HydrateCartProps = {
    id?: string;
    items: Item[];
    voucherCode?: string;
};

export const hydrateCart = async ({ id, items, voucherCode }: HydrateCartProps) => {
    console.log("hydrateCart");

    const session = await getSession();
    const userIdentifier = session?.user?.email ?? '';
    console.log("userIdentifier:", userIdentifier);
    const input: CartInput = {
        items,

        customer: {
            identifier: userIdentifier,
            isGuest: false
        },
        context: {
            price: {
                voucherCode: voucherCode ?? '',
                decimals: 4,
                fallbackVariantIdentifiers: CRYSTALLIZE_BASE_PRICE,
                compareAtVariantIdentifier: CRYSTALLIZE_COMPARE_AT_PRICE,
                selectedVariantIdentifier: CRYSTALLIZE_SELECTED_PRICE,
            },
        },
    };

    if (id) {
        input.id = id;
    }

    try {
        const data = await crystallizeClient.shopCartApi(print(HydrateCartDocument), { input });

        await storage.setCartId(data.hydrate.id);
        return data.hydrate;
    } catch (exception) {
        console.error('addSkuItemToCart without cartId', JSON.stringify(exception, null, 3));
        throw exception;
    }
};
