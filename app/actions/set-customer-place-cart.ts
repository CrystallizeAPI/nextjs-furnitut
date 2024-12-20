'use server';

import { crystallizeClient } from '@/core/crystallize-client.server';
import { placeCart } from '@/use-cases/place-cart';
import { setCartCustomer } from '@/use-cases/set-customer';
import { createCustomerManager } from '@crystallize/js-api-client';

export const setCustomerPlaceCart = async (formData: FormData): Promise<any> => {
    const cartId = formData.get('cartId') as string;
    const customer = {
        firstName: formData.get('firstName') as string,
        lastName: formData.get('lastName') as string,
        identifier: formData.get('email') as string,
        addresses: {
            email: formData.get('email') as string,
            city: formData.get('city') as string,
            street: formData.get('street') as string,
            country: formData.get('country') as string,
            type: 'delivery',
        },
    };
    //@ts-expect-error enum type error
    const response = await setCartCustomer(cartId, customer).then(async () => {
        return await placeCart(cartId);
    });
    const {
        addresses: { email, ...addressWithoutEmail },
        ...customerWithoutEmail
    } = { ...customer, email: customer.identifier };

    const crystallizeCustomer = {
        ...customerWithoutEmail,
        addresses: [addressWithoutEmail],
    }
    
    try {
      //@ts-expect-error enum type error
      await createCustomerManager(crystallizeClient).create(crystallizeCustomer);
    } catch (error) {
      console.error('Error creating customer', error);
    }
    return {
        response,
    };
};
