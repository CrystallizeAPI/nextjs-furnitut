import { crystallizeClient } from '@/core/crystallize-client.server';
import { print } from 'graphql';
import { OrderIntentDocument } from '@/generated/shop/graphql';

export const fetchOrderIntent = async (cartId: string) => {
    try {
        const data = await crystallizeClient.shopCartApi(print(OrderIntentDocument), {
            id: cartId,
        });
        return data.orderIntent.order;
    } catch (exception) {
        console.error('Fetching order intent: ', exception);
        throw exception;
    }
};
