'use server';

import { storage } from '@/core/storage.server';
import { fetchCart } from '@/use-cases/fetch-cart';
import { Cart } from '@/use-cases/contracts/cart';

export const getCart = async () => {
    const cartId = await storage.getCartId();

    const cart = cartId
        ? await fetchCart(cartId)
        : {
              items: [],
              total: {
                  currency: 'eur',
                  gross: 0,
                  net: 0,
                  taxAmount: 0,
              },
          };

    return { cart: cart as Cart, cartId };
};
