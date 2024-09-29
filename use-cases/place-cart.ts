import { crystallizeClient } from '@/core/crystallize-client.server';

export const placeCart = async (cartId: string) => {
    if (!cartId) {
        return;
    }
    try {
        const mutation = `#graphql
        mutation PlaceCart($id: UUID) {
          place(id: $id) {
            id
          }
        }
      `;
        const cart = await crystallizeClient.shopCartApi(mutation, {
            id: cartId,
        });
        return cart.place.id;
    } catch (exception: any) {
        console.error('Failed to fulfill cart', exception.message);
    }
};
