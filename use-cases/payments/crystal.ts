import { createMailer } from '@/core/mail-server.server';
import { fetchOrderIntent } from '../fetch-order-intent';
import pushCrystallizeOrder from '../push-crystallize-order';
import { sendOrderConfirmation } from '../send-order-confirmation';

export const crystalPaymentHandler = async (cartId: string) => {
    try {
        const orderIntent = await fetchOrderIntent(cartId);
        if (!orderIntent) {
            throw {
                message: `Order intent for cart ${cartId} not found`,
                status: 404,
            };
        }
        const orderCreatedConfirmation = await pushCrystallizeOrder(orderIntent, {
            //@ts-expect-error
            provider: 'custom',
            custom: {
                properties: [
                    {
                        property: 'PaymentMethod',
                        value: 'Crystal',
                    },
                ],
            },
        });
        if (orderCreatedConfirmation) {
            const mailer = createMailer(process.env.MAILER_DSN as string);
            await sendOrderConfirmation(orderCreatedConfirmation.id, {
                mailer,
            });
        }
        return orderCreatedConfirmation;
    } catch (error) {
        console.error(error);
    }
};
