import { storage } from '@/core/storage.server';
import { crystallizeClient } from '../core/crystallize-client.server';
import { FETCH_CART, PRICE_FRAGMENT } from './fetch-cart';

export const addSkuItemToCart = async (cartId: string | undefined, sku: string, quantity: number) => {
    if (!cartId) {
        try {
            const data = await crystallizeClient.shopCartApi(
                `#graphql
            mutation HYDRATE_CART($input: CartInput!){ hydrate(input: $input) { ${FETCH_CART} } }
            ${PRICE_FRAGMENT}
            `,
                {
                    input: {
                        // context: cartContext,
                        items: [
                            {
                                sku,
                                quantity,
                            },
                        ],
                    },
                },
            );
            storage.setCartId(data.hydrate.id);
            return data.hydrate;
        } catch (exception) {
            console.error('addSkuItemToCart without cartId', exception);
            throw exception;
        }
    }

    try {
        const data = await crystallizeClient.shopCartApi(
            `#graphql
            mutation ADD_TO_CART($cartId: UUID!, $input: CartSkuItemInput!){ addSkuItem(id: $cartId, input: $input) { ${FETCH_CART} } }
            ${PRICE_FRAGMENT}
            `,
            {
                cartId,
                input: {
                    sku,
                    quantity,
                },
            },
        );
        return data.addSkuItem;
    } catch (exception) {
        console.error('addSkuItemToCart with cartId', exception);
        throw exception;
    }
};
