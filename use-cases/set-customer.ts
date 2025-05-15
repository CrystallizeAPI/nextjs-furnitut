import { crystallizeClient } from '@/core/crystallize-client.server';
import { print } from 'graphql';
import { SetCartCustomerDocument, Customer } from '@/generated/shop/graphql';

export const setCartCustomer = async (cartId: string, customer: Customer) => {
    try {
        const cart = await crystallizeClient.shopCartApi(print(SetCartCustomerDocument), {
            id: cartId,
            customer: { ...customer, isGuest: true },
        });
        return cart.setCustomer.id;
    } catch (exception: any) {
        console.error('Failed to set cart customer', exception);
    }
};
