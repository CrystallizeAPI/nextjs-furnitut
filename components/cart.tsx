import { getCart } from '@/app/actions/get-cart';
import { CartClient } from './cart-client';

export const Cart = async () => {
    const { cart } = await getCart();

    return <CartClient cart={cart} />;
};
