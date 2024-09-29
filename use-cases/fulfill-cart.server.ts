import { crystallizeClient } from '@/core/crystallize-client.server';

export const fulfillCart = async (cartId: string, orderId: string) => {
    try {
        const mutation = `#graphql
        mutation FulFillCart($id: UUID, $orderId: String!) {
          fulfill(id: $id, orderId: $orderId) {
            id
          }
        }
      `;
        const cart = await crystallizeClient.shopCartApi(mutation, {
            id: cartId,
            orderId,
        });
        return cart.fulfill.id;
    } catch (exception: any) {
        console.error('Failed to fulfill cart', exception.message);
    }
};
