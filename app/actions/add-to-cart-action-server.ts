'use server';

import { storage } from '@/core/storage.server';
import { hydrateCart } from '@/use-cases/add-sku-item-to-cart.server';
import { getNextCart } from '@/use-cases/get-next-cart';

import { getCart } from './get-cart';

export async function addToCartServerAction(initialSate: null, formData: FormData) {
    try {
        const cartItem = JSON.parse(formData.get('input') as string);
        const type = formData.get('type') as string;
        const { cart } = await getCart();
        const nextCart = getNextCart({ cart, cartItem, type });

        const items = nextCart.items.map((item) => ({
            sku: item.variant.sku,
            quantity: item.quantity,
        }));

        const cartId = await storage.getCartId();
        const updatedCart = await hydrateCart(cartId, items);

        return { ...updatedCart, lastItemAdded: nextCart.lastItemAdded };
    } catch (error) {
        console.error('Cart update failed:', error);
        return null;
    }
}
