'use server';

import { hydrateCart } from '@/use-cases/add-sku-item-to-cart.server';
import { getNextCart } from '@/use-cases/get-next-cart';

import { getCart } from './get-cart';
import { Cart, type CartItemInput } from '@/use-cases/contracts/cart';
import { CART_ACTION, CartAction } from '@/use-cases/types';

/**
 * Merges an array of items with the same SKU by summing their quantities.
 *
 * @param items - An array of objects where each object contains a `sku` and a `quantity`.
 * @return A new array of objects where items with the same `sku` have been merged and their quantities summed.
 */
function mergeItemsBySku(items: { sku: string; quantity: number }[]) {
    return Object.values(
        items.reduce(
            (acc, item) => {
                if (!acc[item.sku]) {
                    acc[item.sku] = { ...item };
                } else {
                    acc[item.sku].quantity += item.quantity;
                }
                return acc;
            },
            {} as Record<string, { sku: string; quantity: number }>,
        ),
    );
}

export async function handleCart(initialSate: Cart | null, formData: FormData) {
    const action = formData.get('action') as CartAction;
    const voucherCode = formData.get('voucher-code') as string;
    const cartItem = JSON.parse(formData.get('input') as string) as CartItemInput;
    const itemIndex = formData.get('index') as string;
    const { cart, cartId } = await getCart();

    if (action === CART_ACTION.reset) {
        return null;
    }

    try {
        const nextCart = getNextCart({ cart, cartItem, action, itemIndex });

        const items = nextCart.items.map((item) => ({
            sku: item.variant.sku,
            quantity: item.quantity,
        }));

        const updatedCart = await hydrateCart({ id: cartId, items: mergeItemsBySku(items), voucherCode });

        return { ...updatedCart, lastItemAdded: nextCart.lastItemAdded };
    } catch (error) {
        console.error('Cart update failed:', error);
        return null;
    }
}
