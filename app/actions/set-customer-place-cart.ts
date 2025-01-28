'use server';

import { crystallizeClient } from '@/core/crystallize-client.server';
import { Customer } from '@/use-cases/contracts/customer';
import { placeCart } from '@/use-cases/place-cart';
import { setCartCustomer } from '@/use-cases/set-customer';
import { createCustomerManager } from '@crystallize/js-api-client';

export const setCustomerPlaceCart = async (initialSate: Customer | null, formData: FormData): Promise<any> => {
    const cartId = formData.get('cartId') as string;
    const customer: Customer = {
        firstName: formData.get('firstName') as string,
        lastName: formData.get('lastName') as string,
        identifier: formData.get('email') as string,
        addresses: {
            email: formData.get('email') as string,
            city: formData.get('city') as string,
            street: formData.get('street') as string,
            country: formData.get('country') as string,
            postalCode: formData.get('postalCode') as string,
            type: 'delivery',
        },
    };
    //@ts-expect-error enum type error
    await setCartCustomer(cartId, customer);
    const response = await placeCart(cartId);

    const {
        addresses: { email, ...addressWithoutEmail },
        ...customerWithoutEmail
    } = { ...customer, email: customer.identifier };

    const crystallizeCustomer = {
        ...customerWithoutEmail,
        addresses: [addressWithoutEmail],
    };

    try {
        //@ts-expect-error enum type error
        await createCustomerManager(crystallizeClient).create(crystallizeCustomer);
    } catch (error) {
        console.error('Error creating customer', error);
    }

    return customer;
};
