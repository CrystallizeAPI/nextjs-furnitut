import { crystallizeClient } from '@/core/crystallize-client.server';
import { CreateOrderInputRequest, createOrderPusher, PaymentInputRequest } from '@crystallize/js-api-client';
import { fulfillCart } from './fulfill-cart.server';

export const pushCrystallizeOrder = async (
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

    /**
     * TODO: To manage order fulfillment, you can place the order in a fulfillment pipeline.
     * Use the appropriate pipeline and stage IDs to assign the order accordingly.
     * import { createOrderPipelineStageSetter } from '@crystallize/js-api-client';
     * Instantiate the function
     * const setOrderPipeline = createOrderPipelineStageSetter(crystallizeClient);
     * And assign the order to the pipeline ID and stage ID
     * await setOrderPipeline(orderCreatedConfirmation.id, "<YOUR_PIPELINE_ID>", "<YOUR_STAGE_ID>")
     */

    return orderCreatedConfirmation;
};
