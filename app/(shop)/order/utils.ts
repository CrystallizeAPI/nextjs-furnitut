import { createOrderFetcher, type Order } from '@crystallize/js-api-client';
import { crystallizeClient } from '@/core/crystallize-client.server';

export const fetchData = async (orderId: string) => {
    const response = await createOrderFetcher(crystallizeClient).byId(
        orderId,
        {},
        {},
        {
            reference: true,
            customer: {
                identifier: true,
                firstName: true,
                lastName: true,
                addresses: {
                    city: true,
                    country: true,
                    postalCode: true,
                    state: true,
                    street: true,
                    type: true,
                },
            },
        },
    );
    return response as Order & { reference: string };
};
