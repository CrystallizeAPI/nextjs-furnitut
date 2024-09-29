'use server';

import { CartItemInput } from '@/use-cases/contracts/cart';
import { storage } from '@/core/storage.server';
import { addSkuItemToCart } from '@/use-cases/add-sku-item-to-cart.server';
import { revalidatePath } from 'next/cache';

export const addToCartServerAction = async (_: any, formData: FormData) => {
    const cartId = storage.getCartId();
    const input: CartItemInput = JSON.parse(formData.get('input') as string);
    const cart = await addSkuItemToCart(cartId, input.sku, 1);
    revalidatePath('/');
    return cart;
};
