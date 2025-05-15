'use server';

import { hydrateCart } from '@/use-cases/add-sku-item-to-cart.server';
import { Cart, CartItem, CartSkuItemInput } from '@/generated/shop/graphql';

import { getCart } from './get-cart';
import { CART_ACTION } from '@/use-cases/types';

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
    const action = formData.get('action') as string;
    const voucherCode = formData.get('voucher-code') as string;
    const cartItem = JSON.parse(formData.get('input') as string) as CartItem;
    const itemIndex = formData.get('index') as string;
    const itemIndexNumber = Number(itemIndex);
    const { cart, cartId } = await getCart();

    if (!cartId) {
        throw new Error('Cart ID not found');
    }

    if (!cart) {
        throw new Error('Cart not found');
    }
    let items = cart.items.map((item) => ({
        sku: item.variant.sku as string,
        quantity: item.quantity as number,
    }));
    const item = items[itemIndexNumber];

    switch (action) {
        case CART_ACTION.increase:
            const updatedQuantity = item.quantity + 1;
            items[itemIndexNumber] = {
                sku: item.sku,
                quantity: updatedQuantity,
            };
            break;

        case CART_ACTION.decrease:
            if (item.quantity === 1) {
                items.splice(itemIndexNumber, 1);
            } else {
                const updatedQuantity = item.quantity - 1;

                items[itemIndexNumber] = {
                    sku: item.sku,
                    quantity: updatedQuantity,
                };
            }
            break;

        case CART_ACTION.add:
            items.push({
                sku: cartItem.variant.sku!,
                quantity: cartItem.quantity,
            });
            break;

        case CART_ACTION.remove:
            items.splice(itemIndexNumber, 1);
            break;

        case CART_ACTION.reset:
            items = [];
            break;

        default:
            console.error(`Unknown action: ${action}`);
            break;
    }

    try {
        return await hydrateCart({
            id: cartId,
            items: mergeItemsBySku(items) as CartSkuItemInput[],
            voucherCode,
        });
    } catch (e) {
        console.error('Error hydrating cart: ', e);
        return null;
    }
}
