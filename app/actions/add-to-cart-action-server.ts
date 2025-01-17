'use server';

import { CartItem, CartItemInput } from '@/use-cases/contracts/cart';
import { storage } from '@/core/storage.server';
import { hydrateCart } from '@/use-cases/add-sku-item-to-cart.server';

export async function addToCartServerAction(prevState: any, formData: FormData) {
    try {
        const currentCart = JSON.parse(formData.get('cart') as string);
        const cartId = await storage.getCartId();

        const items: CartItemInput[] = currentCart.items.map((item: CartItem) => ({
            sku: item.variant.sku,
            quantity: item.quantity,
        }));

        const updatedCart = await hydrateCart(cartId, items);

        const newCart = { ...updatedCart, lastItemAdded: currentCart.lastItemAdded };
        return newCart;
    } catch (error) {
        console.error('Cart update failed:', error);
        return prevState;
    }
}
