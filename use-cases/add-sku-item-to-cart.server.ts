import { storage } from '@/core/storage.server';
import { crystallizeClient } from '../core/crystallize-client.server';
import { FETCH_CART, PRICE_FRAGMENT } from './fetch-cart';

type Item = { sku: string; quantity: number };

type CartInput = {
    items: Item[];
    id?: string;
};

export const hydrateCart = async (cartId: string | undefined, items: Item[]) => {
    const input: CartInput = { items };

    if (cartId) {
        input.id = cartId;
    }

    try {
        const data = await crystallizeClient.shopCartApi(
            `#graphql
            mutation HYDRATE_CART($input: CartInput!){ hydrate(input: $input) { ${FETCH_CART} } }
            ${PRICE_FRAGMENT}
            `,
            { input },
        );
        await storage.setCartId(data.hydrate.id);
        return data.hydrate;
    } catch (exception) {
        console.error('addSkuItemToCart without cartId', exception);
        throw exception;
    }
};
