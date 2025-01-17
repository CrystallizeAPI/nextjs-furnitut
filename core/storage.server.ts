import { cookies } from 'next/headers';

export const storage = {
    getCartId: async () => {
        const cookieStore = await cookies();
        const cartId = cookieStore.get('cartId');
        if (!cartId) {
            return undefined;
        }
        return cartId.value;
    },
    setCartId: async (cartId: string) => {
        const cookieStore = await cookies();
        cookieStore.set('cartId', cartId);
    },
};
