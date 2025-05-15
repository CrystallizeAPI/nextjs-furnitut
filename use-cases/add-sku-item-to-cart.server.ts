import { storage } from '@/core/storage.server';
import { crystallizeClient } from '@/core/crystallize-client.server';
import { print } from 'graphql/index';
import { HydrateCartDocument, CartInput, CartSkuItemInput } from '@/generated/shop/graphql';

interface HydrateCartProps {
    id: string;
    items: CartSkuItemInput[];
    voucherCode?: string;
}

export async function hydrateCart({ items, voucherCode, id }: HydrateCartProps) {
    const input: CartInput = {
        id,
        items,
        context: {
            // @ts-ignore - it complains because of the other optional properties
            price: {
                voucherCode: voucherCode ?? '',
                decimals: 4,
            },
        },
    };

    try {
        const data = await crystallizeClient.shopCartApi(print(HydrateCartDocument), { input });
        await storage.setCartId(data.hydrate.id);
        return data.hydrate;
    } catch (exception) {
        console.error('addSkuItemToCart without cartId', exception);
        throw exception;
    }
}
