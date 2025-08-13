import { getSession } from '@/core/auth.server';
import { FetchPricesForQuery } from '@/components/ProductPage/types';
import { crystallizeClient } from '@/core/crystallize-client.server';

type GetCustomerPricesProps = {
    path?: string | null;
};

export const getCustomerPrices = async ({ path }: GetCustomerPricesProps) => {
    const { CRYSTALLIZE_SELECTED_PRICE } = process.env;
    const session = await getSession();

    if (!session || !path) {
        return {
            specialPrice: null,
        };
    }

    const customerIdentifier = session?.user?.email; // Replace this with a dynamic value

    console.log('ss', session);

    // const customerIdentifier = 'petr@crystallize.com'; // Replace this with a dynamic value

    // 2. Define the GraphQL query using variables for dynamic values.
    const query = `#graphql
    query FETCH_PRICES_FOR($path: String!, $customerIdentifier: String!, $priceVariantIdentifier: String!) {
        catalogue(path: $path) {
            id
            path
            ... on Product {
                variants {
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

    // 3. Pass the query and the variables object to the API client.
    const data: FetchPricesForQuery = await crystallizeClient.catalogueApi(query, {
        path,
        customerIdentifier,
        priceVariantIdentifier: CRYSTALLIZE_SELECTED_PRICE,
    });



    return {
        specialPrice: data?.catalogue?.variants?.[0]?.priceVariant?.priceFor?.price,
    };
};
