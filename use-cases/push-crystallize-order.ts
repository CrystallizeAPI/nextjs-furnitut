import { crystallizeClient } from '@/core/crystallize-client.server';
import { CreateOrderInputRequest, createOrderPusher, PaymentInputRequest } from '@crystallize/js-api-client';
import { fulfillCart } from './fulfill-cart.server';

export default async (
    orderIntent: CreateOrderInputRequest,
    payment: PaymentInputRequest,
    metadata?: Record<string, string>,
) => {
    orderIntent.payment = [payment];
    orderIntent.meta = [
        ...(orderIntent.meta || []),
        ...(metadata
            ? Object.entries(metadata).map(([key, value]) => ({
                  key,
                  value,
              }))
            : []),
    ];

    const pusher = createOrderPusher(crystallizeClient);

    const cartId = orderIntent?.meta.find((meta: any) => meta.key === 'cartId')?.value;

    const orderCreatedConfirmation = await pusher(orderIntent);

    if (cartId) {
        await fulfillCart(cartId, orderCreatedConfirmation.id);
    }

    return orderCreatedConfirmation;
};
