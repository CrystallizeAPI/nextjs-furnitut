import { crystallizeClient } from '@/core/crystallize-client.server';
import { print } from 'graphql';
import { PlaceCartDocument } from '@/generated/shop/graphql';

export const placeCart = async (cartId: string) => {
    if (!cartId) {
        return;
    }

    try {
        const cart = await crystallizeClient.shopCartApi(print(PlaceCartDocument), {
            id: cartId,
        });
        return cart.place.id;
    } catch (exception: any) {
        console.error('Failed to fulfill cart', exception.message);
    }
};
