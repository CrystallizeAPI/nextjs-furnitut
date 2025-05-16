import { crystallizeClient } from '@/core/crystallize-client.server';
import { print } from 'graphql';
import { FulfillCartDocument } from '@/generated/shop/graphql';

export const fulfillCart = async (cartId: string, orderId: string) => {
    try {
        const cart = await crystallizeClient.shopCartApi(print(FulfillCartDocument), {
            id: cartId,
            orderId,
        });
        return cart.fulfill.id;
    } catch (exception: any) {
        console.error('Failed to fulfill cart', exception.message);
    }
};
