import { storage } from '@/core/storage.server';
import { crystallizeClient } from '@/core/crystallize-client.server';
import { Cart, GetCartDocument, HydrateCartDocument } from '@/generated/shop/graphql';
import { print } from 'graphql';

export const fetchCart = async (cartId: string): Promise<Cart> => {
    if (!cartId) {
        try {
            const data = await crystallizeClient.shopCartApi(print(HydrateCartDocument), {
                input: {
                    items: [],
                },
            });

            await storage.setCartId(data.hydrate.id);

            return data.hydrate;
        } catch (exception) {
            console.error('Fetch cart without cartId', exception);
            throw exception;
        }
    }

    try {
        const data = await crystallizeClient.shopCartApi(print(GetCartDocument), {
            id: cartId,
        });

        return data.cart;
    } catch (exception) {
        console.error('Fetch cart with cartId', exception);
        throw exception;
    }
};
