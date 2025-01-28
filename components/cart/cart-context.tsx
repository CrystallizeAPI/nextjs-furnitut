'use client';

import { createContext, useContext, useActionState, useOptimistic, use, useState } from 'react';
import { addToCartServerAction } from '@/app/actions/add-to-cart-action-server';
import { Cart } from '@/use-cases/contracts/cart';
import { getNextCart } from '@/use-cases/get-next-cart';
import { CartSidebar } from './cart-sidebar';

type CartContextProps = {
    cart: Cart | null;
    isLoading: boolean;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    onUpdateCart: (formData: FormData) => void;
};

const CartContext = createContext<CartContextProps | undefined>(undefined);

type CartProviderProps = {
    cartPromise: Promise<{ cart: Cart }>;
    children: React.ReactNode;
};

export const CartProvider = ({ cartPromise, children }: CartProviderProps) => {
    const { cart } = use(cartPromise);
    const [isOpen, setIsOpen] = useState(false);
    const [, addToCartAction, isLoading] = useActionState(addToCartServerAction, null);
    const [optimisticCart, setOptimisticCart] = useOptimistic(cart);

    const optimisticAddToCartAction = (formData: FormData) => {
        setOptimisticCart((prevCart: Cart) => {
            const cartItem = JSON.parse(formData.get('input') as string);
            const type = formData.get('type') as string;

            return getNextCart({ cart: prevCart, cartItem, type });
        });

        addToCartAction(formData);
    };

    return (
        <CartContext.Provider
            value={{
                isOpen,
                setIsOpen,
                isLoading,
                cart: optimisticCart || cart,
                onUpdateCart: optimisticAddToCartAction,
            }}
        >
            {children}
            <CartSidebar />
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }

    return context;
};
