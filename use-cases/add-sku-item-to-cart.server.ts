import { storage } from '@/core/storage.server';
import { crystallizeClient } from '@/core/crystallize-client.server';
import { HydrateCartDocument } from '@/generated/shop/graphql';
import { print } from 'graphql';

const { CRYSTALLIZE_MARKETS_PRICE, CRYSTALLIZE_SELECTED_PRICE, CRYSTALLIZE_BASE_PRICE } = process.env;

type Item = {
    sku: string;
    quantity: number;
};

type CartInput = {
    items: Item[];
    id?: string;
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
    const input: CartInput = {
        items,
        context: {
            price: {
                voucherCode: voucherCode ?? '',
                decimals: 4,
                fallbackVariantIdentifiers: CRYSTALLIZE_BASE_PRICE,
                compareAtVariantIdentifier: CRYSTALLIZE_BASE_PRICE,
                selectedVariantIdentifier: CRYSTALLIZE_SELECTED_PRICE,
                markets: CRYSTALLIZE_MARKETS_PRICE as unknown as string[],
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
