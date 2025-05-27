import { QliroCheckoutOrderInput } from "@/core/payments/qliro/type";
import { fetchOrderIntent } from "../fetch-order-intent";
import { qliroClient } from "@/core/qliro-client.server";
import { CreateOrderInputRequest } from '@crystallize/js-api-client';
import { pushCrystallizeOrder } from "../push-crystallize-order";

/**
 * this is the function to create the Intent for the Qliro payment.
 */
export const qliroPaymentHandler = async (cartId: string) => {
    try {
        const base_url = `${process.env.CANONICAL_URL}`
        const orderIntent = await fetchOrderIntent(cartId) as CreateOrderInputRequest | null;
        if (!orderIntent) {
            throw {
                message: `Order intent for cart ${cartId} not found`,
                status: 404,
            };
        }
        // @ts-ignore
        const shppingAddress = orderIntent.customer.addresses?.find(address => address.type === 'shipping') || orderIntent.customer.addresses?.[0];
        // @ts-ignore
        const deliveryAddress = orderIntent.customer.addresses?.find(address => address.type === 'delivery') || orderIntent.customer.addresses?.[0];

        const input: Omit<QliroCheckoutOrderInput, 'MerchantApiKey'> = {
            MerchantReference: cartId.substring(0, 25),
            MerchantProvidedMetadata: [
                {
                    Key: 'cartId',
                    Value: cartId,
                },
            ],
            Country: 'NO',
            Currency: 'NOK',
            Language: 'en-us',

            MerchantConfirmationUrl: `${base_url}/order/cart/${cartId}`,
            MerchantOrderManagementStatusPushUrl: `${base_url}/api/payments/qliro-webhook`,
            MerchantCheckoutStatusPushUrl: `${base_url}/api/payments/qliro-webhook`,
            MerchantTermsUrl: base_url,
            OrderItems: orderIntent.cart.map(item => ({
                MerchantReference: item.sku || 'unknown-sku',
                Description: item.name,
                Type: 'Product',
                Quantity: item.quantity,
                PricePerItemIncVat: item.price?.gross || 0,
                PricePerItemExVat: item.price?.net || 0,

            })),
            CustomerInformation: {
                Email: orderIntent.customer.identifier,
                ShippingAddress: {
                    FirstName: shppingAddress?.firstName || orderIntent.customer.firstName,
                    LastName: shppingAddress?.lastName || orderIntent.customer.lastName,
                    Street: shppingAddress?.street || '',
                    PostalCode: shppingAddress?.postalCode || '',
                    City: shppingAddress?.city || '',
                },
                Address: {
                    FirstName: deliveryAddress?.firstName || orderIntent.customer.firstName,
                    LastName: deliveryAddress?.lastName || orderIntent.customer.lastName,
                    Street: deliveryAddress?.street || '',
                    PostalCode: deliveryAddress?.postalCode || '',
                    City: deliveryAddress?.city || '',
                }
            }
        }

        const payment = await qliroClient.createOrder(input);
        const order = await qliroClient.getOrder(payment.OrderId);
        return {
            paymentLink: payment.PaymentLink,
            order
        }
    } catch (error) {
        console.error(error);
    }
};


/*
* this is the webhook handler for the Qliro notifications.
*/
type Notification = {
    NotificationType: string;
    OrderId: string;
    MerchantReference: string;
    Status: string;
}
export const qliroPaymentWebhookHandler = async (notification: Notification) => {

    const order = await qliroClient.getOrder(notification.OrderId);

    if (!order) {
        throw {
            message: `Order (${notification.OrderId} with MerchantReference ${notification.MerchantReference} not found`,
            status: 404,
        };
    }
    if (order.CustomerCheckoutStatus === 'Completed') {
        const cartId = order.MerchantProvidedMetadata.find(meta => meta.Key === 'cartId')?.Value;
        if (!cartId) {
            throw {
                message: `Cart ID not found in order with MerchantReference ${notification.MerchantReference}`,
                status: 404,
            };
        }

        const orderIntent = await fetchOrderIntent(cartId);
        if (!orderIntent) {
            throw {
                message: `Order intent for cart ${cartId} not found`,
                status: 404,
            };
        }
        const orderCreatedConfirmation = await pushCrystallizeOrder(orderIntent, {
            // @ts-expect-error
            provider: 'custom',
            custom: {
                properties: [
                    {
                        property: 'PaymentMethod',
                        value: 'Qliro',
                    },
                ],
            },
        });

        return orderCreatedConfirmation;
    }
}
