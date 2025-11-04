'use cache: private';

import { getSession } from '@/core/auth.server';
import { cacheLife, cacheTag } from 'next/cache';

import { FetchPricesForQuery } from './types';
import { crystallizeClient } from '@/core/crystallize-client.server';

type GetCustomerPricesProps = {
    path?: string | null;
};

export const getCustomerPrices = async ({ path }: GetCustomerPricesProps) => {
    const { CRYSTALLIZE_SELECTED_PRICE } = process.env;
    const session = await getSession();

    if (!session || !path) {
        return {
            catalogueProductVariants: null,
        };
    }

    const customerIdentifier = session?.user?.email;

    cacheTag(`customer-${customerIdentifier}`);
    cacheLife({ stale: 60 });

    const query = `#graphql
    query FETCH_PRICES_FOR($path: String!, $customerIdentifier: String!, $priceVariantIdentifier: String!) {
        catalogue(path: $path) {
            id
            path
            ... on Product {
                variants {
                    id
                    sku
                    name
                    price
                    priceVariant(identifier: $priceVariantIdentifier) {
                        # Use the variable for the customer identifier
                        priceFor(customerIdentifiers: [$customerIdentifier]) {
                            identifier
                            price
                        }
                    }
                }
            }
        }
    }
    `;

    const data: FetchPricesForQuery = await crystallizeClient.catalogueApi(query, {
        path,
        customerIdentifier,
        priceVariantIdentifier: CRYSTALLIZE_SELECTED_PRICE,
    });

    return {
        catalogueProductVariants: data?.catalogue?.variants,
    };
};
