import { handleStripePaymentIntentWebhookRequestPayload } from '@crystallize/node-service-api-request-handlers';
import { fetchOrderIntent } from '../fetch-order-intent';
import pushCrystallizeOrder from '../push-crystallize-order';

export const stripeWebhookHandler = async (signature: string, payload: any) => {
    try {
        return await handleStripePaymentIntentWebhookRequestPayload(payload, {
            secret_key: process.env.STRIPE_SECRET_KEY ?? '',
            endpointSecret: process.env.STRIPE_WEBHOOK_SECRET ?? '',
            signature,
            rawBody: payload,
            handleEvent: async (eventName: string, event: any) => {
                const cartId = event.data.object.metadata.cartId;
                const orderIntent = await fetchOrderIntent(cartId);
                if (!orderIntent) {
                    throw {
                        message: `Order intent for cart ${cartId} not found`,
                        status: 404,
                    };
                }
                switch (eventName) {
                    case 'payment_intent.succeeded':
                        console.log('Payment intent succeeded');
                        const orderCreatedConfirmation = await pushCrystallizeOrder(orderIntent, {
                            //@ts-expect-error enum type error
                            provider: 'stripe',
                            stripe: {
                                paymentIntentId: event.data.object.id,
                                paymentMethod: event.data.object.charges.data[0].payment_method_details.type,
                                stripe: `eventId:${event.id}`,
                                metadata: event.data.object.charges.data[0].receipt_url,
                            },
                        });
                        console.log('Order created confirmation', orderCreatedConfirmation);
                        return orderCreatedConfirmation;
                }
            },
        });
    } catch (error) {
        console.error(error);
    }
};
