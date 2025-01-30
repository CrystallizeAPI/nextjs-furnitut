import { crystallizeClient } from '@/core/crystallize-client.server';
import { Customer } from '@/use-cases/contracts/customer';

const mutation = `#graphql
mutation SetCartCustomer($id: UUID, $customer: CustomerInput!) {
  setCustomer(id: $id, input: $customer) {
    id
  }
}
`;

export const setCartCustomer = async (cartId: string, customer: Customer) => {
    try {
        const cart = await crystallizeClient.shopCartApi(mutation, {
            id: cartId,
            customer: { ...customer, isGuest: true },
        });
        return cart.setCustomer.id;
    } catch (exception: any) {
        console.error('Failed to set cart customer', exception);
    }
};
