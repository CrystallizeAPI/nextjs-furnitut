import { storage } from '@/core/storage.server';
import { crystallizeClient } from '../core/crystallize-client.server';
import { FETCH_CART, PRICE_FRAGMENT } from './fetch-cart';
import { CartItemInput } from './contracts/cart';
interface CartInput {
    items: { sku: string; quantity: number }[];
    id?: string;
}

export const hydrateCart = async (cartId: string | undefined, items: CartItemInput[]) => {
    const input: CartInput = {
        items: items.map((item) => ({
            sku: item.sku,
            quantity: item.quantity,
        })),
    };
    if (cartId) {
        input.id = cartId;
    }
    try {
        const data = await crystallizeClient.shopCartApi(
            `#graphql
            mutation HYDRATE_CART($input: CartInput!){ hydrate(input: $input) { ${FETCH_CART} } }
            ${PRICE_FRAGMENT}
            `,
            {
                input,
            },
        );
        await storage.setCartId(data.hydrate.id);
        return data.hydrate;
    } catch (exception) {
        console.error('addSkuItemToCart without cartId', exception);
        throw exception;
    }
};
