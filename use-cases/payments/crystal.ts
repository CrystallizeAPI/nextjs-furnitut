import { fetchOrderIntent } from '../fetch-order-intent';
import { pushCrystallizeOrder } from '../push-crystallize-order';

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

        return orderCreatedConfirmation;
    } catch (error) {
        console.error(error);
    }
};
