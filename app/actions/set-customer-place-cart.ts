'use server';

import { crystallizeClient } from '@/core/crystallize-client.server';
import { Customer } from '@/use-cases/contracts/customer';
import { placeCart } from '@/use-cases/place-cart';
import { setCartCustomer } from '@/use-cases/set-customer';
import { createCustomerManager } from '@crystallize/js-api-client';
import { Cart } from '@/use-cases/contracts/cart';
import { getCart } from './get-cart';

type Data = Record<(typeof formFields)[number], string>;
type InitialState = { customer: Customer | null; cart: Cart | null; cartId?: string };

const formFields = ['firstName', 'lastName', 'email', 'city', 'street', 'country', 'postalCode'] as const;

export const setCustomerPlaceCart = async (initialSate: InitialState | null, formData: FormData) => {
    const data = formFields.reduce((acc, field) => {
        acc[field] = formData.get(field) as string;
        return acc;
    }, {} as Data);

    const { firstName, lastName, email, ...rest } = data;
    const address = { ...rest, type: 'delivery' } as const;
    const customer = { firstName, lastName, identifier: email };
    const cartCustomer: Customer = { ...customer, addresses: { ...address, email } };

    const { cart, cartId } = await getCart();

    if (!cartId) {
        throw Error('cartId not found');
    }
    await setCartCustomer(cartId, { ...customer, addresses: { ...address, email } });
    await placeCart(cartId);

    try {
        // @ts-expect-error address.type requires enum type delivery
        await createCustomerManager(crystallizeClient).create({ ...customer, email, addresses: [address] });
    } catch (error) {
        console.error('Error creating customer', error);
    }

    return { customer: cartCustomer, cart, cartId };
};
