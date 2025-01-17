import { storage } from '@/core/storage.server';
import { crystallizeClient } from '@/core/crystallize-client.server';
import { Cart } from './contracts/cart';

export const FETCH_CART = `#graphql
    id
    items {
        quantity
        variant {
            sku
            product {
                name
            }
            price {
                ...price
            }
        }
        name
        images {
            url
            height
            width
        }
        price {
            ...price
        }
    }
    total {
        ...price
    }
`;

export const PRICE_FRAGMENT = `#graphql
  fragment price on Price {
      gross
      net
      taxAmount
      currency
      discounts {
        percent
        amount
      }
    }
  `;

export const fetchCart = async (cartId: string): Promise<Cart> => {
    if (!cartId) {
        try {
            const data = await crystallizeClient.shopCartApi(
                `#graphql
            mutation HYDRATE_CART($input: CartInput!){ hydrate(input: $input) { ${FETCH_CART} } } 
            ${PRICE_FRAGMENT}`,
                {
                    input: {
                        items: [],
                    },
                },
            );
            await storage.setCartId(data.hydrate.id);
            return data.hydrate;
        } catch (exception) {
            console.error('Fetch cart without cartId', exception);
            throw exception;
        }
    }

    try {
        const data = await crystallizeClient.shopCartApi(
            `#graphql
            query GET_CART($cartId: UUID!){ cart(id: $cartId) { ${FETCH_CART} } },
            ${PRICE_FRAGMENT}`,
            {
                cartId,
            },
        );
        return data.cart;
    } catch (exception) {
        console.error('Fetch cart with cartId', exception);
        throw exception;
    }
};
