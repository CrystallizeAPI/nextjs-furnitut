import { cookies } from 'next/headers';

export const storage = {
    getCartId: () => {
        const cookieStore = cookies();
        const cartId = cookieStore.get('cartId');
        if (!cartId) {
            return undefined;
        }
        return cartId.value;
    },
    setCartId: (cartId: string) => {
        const cookieStore = cookies();
        cookieStore.set('cartId', cartId);
    },
};
