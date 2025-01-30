'use server';

import { hydrateCart } from '@/use-cases/add-sku-item-to-cart.server';
import { getNextCart } from '@/use-cases/get-next-cart';

import { getCart } from './get-cart';
import { Cart } from '@/use-cases/contracts/cart';

export async function handleCart(initialSate: Cart | null, formData: FormData) {
    const type = formData.get('type') as string;

    if (type === 'reset') {
        return null;
    }

    try {
        const cartItem = JSON.parse(formData.get('input') as string);
        const type = formData.get('type') as string;
        const { cart, cartId } = await getCart();
        const nextCart = getNextCart({ cart, cartItem, type });

        const items = nextCart.items.map((item) => ({
            sku: item.variant.sku,
            quantity: item.quantity,
        }));

        const updatedCart = await hydrateCart(cartId, items);

        return { ...updatedCart, lastItemAdded: nextCart.lastItemAdded };
    } catch (error) {
        console.error('Cart update failed:', error);
        return null;
    }
}
