import { crystallizeClient } from '@/core/crystallize-client.server';
import { Customer } from '@crystallize/js-api-client';

export const setCartCustomer = async (cartId: string, customer: Customer) => {
    try {
        const mutation = `#graphql
        mutation SetCartCustomer($id: UUID, $customer: CustomerInput!) {
          setCustomer(id: $id, input: $customer) {
            id
          }
        }
      `;
        const cart = await crystallizeClient.shopCartApi(mutation, {
            id: cartId,
            customer: {
                ...customer,
                isGuest: true,
            },
        });
        return cart.setCustomer.id;
    } catch (exception: any) {
        console.error('Failed to set cart customer', exception);
    }
};
