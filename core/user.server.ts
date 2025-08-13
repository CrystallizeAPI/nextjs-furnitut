import { cookies } from 'next/headers';
import { crystallizeClient } from '@/core/crystallize-client.server';

const CUSTOMER_QUERY = `#graphql
query GetCustomer($identifier: String!) {
    customer(identifier: $identifier) {
        ... on Customer {
            identifier
            parents {
                identifier
                type
            }
        }
    }
}`;


export const getMarkets = async (identifier: string) => {
  const markets = [] as string[];

  const customer = await crystallizeClient.nextPimApi(CUSTOMER_QUERY, {
    identifier
  });

    console.log("customer: ", customer);
  // get the grandparent
  if (customer.customer?.parents?.[0].identifier) {
    markets.push(customer.customer?.parents[0].identifier?.toLowerCase());
    const grandParentCustomer = await crystallizeClient.nextPimApi(CUSTOMER_QUERY, {
      identifier: customer.customer.parents[0].identifier,
    });

    if (grandParentCustomer.customer?.parents?.[0].identifier) {
      markets.push(grandParentCustomer.customer?.parents[0].identifier?.toLowerCase());
    }
  }

  return markets
}