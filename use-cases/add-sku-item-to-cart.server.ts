import { storage } from '@/core/storage.server';
import { crystallizeClient } from '@/core/crystallize-client.server';
import { HydrateCartDocument } from '@/generated/shop/graphql';
import { print } from 'graphql';

interface Item {
    sku: string;
    quantity: number;
}

interface CartInput {
    items: Item[];
    id?: string;
    context?: {
        price?: {
            voucherCode?: string;
            decimals?: number;
        };
    };
}

interface HydrateCartProps {
    id?: string;
    items: Item[];
    voucherCode?: string;
}

export const hydrateCart = async ({ id, items, voucherCode }: HydrateCartProps) => {
    const input: CartInput = {
        items,
        context: {
            price: {
                voucherCode: voucherCode ?? '',
                decimals: 4,
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
