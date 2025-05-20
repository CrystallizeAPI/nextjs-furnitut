import { crystallizeClient } from '@/core/crystallize-client.server';
import { Customer } from '@/use-cases/contracts/customer';
import { print } from 'graphql';
import { SetCustomerDocument } from '@/generated/shop/graphql';

export const setCartCustomer = async (cartId: string, customer: Customer) => {
    try {
        const cart = await crystallizeClient.shopCartApi(print(SetCustomerDocument), {
            id: cartId,
            customer: { ...customer, isGuest: true },
        });
        return cart.setCustomer.id;
    } catch (exception: any) {
        console.error('Failed to set cart customer', exception);
    }
};
