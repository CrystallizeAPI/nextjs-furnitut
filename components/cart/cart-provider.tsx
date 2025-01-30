'use client';

import { createContext, useContext, useActionState, useOptimistic, useEffect, useState, useTransition } from 'react';
import { handleCart } from '@/app/actions/handle-cart';
import { Cart } from '@/use-cases/contracts/cart';
import { getNextCart } from '@/use-cases/get-next-cart';
import { CartSidebar } from './cart-sidebar';

type CartContextProps = {
    cart: Cart | null;
    isLoading: boolean;
    isOpen: boolean;
    emptyCart: () => void;
    setIsOpen: (isOpen: boolean) => void;
    onUpdateCart: (formData: FormData) => void;
};

const CartContext = createContext<CartContextProps | undefined>(undefined);

type CartProviderProps = {
    children: React.ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [initialCart, setInitialCart] = useState<Cart | null>(null);
    const [serverCart, handleCartAction, isLoading] = useActionState(handleCart, initialCart);
    const [cart, setOptimisticCart] = useOptimistic(serverCart ?? initialCart);
    const [, startTransition] = useTransition();

    useEffect(() => {
        fetch('/api/cart').then(async (res) => {
            if (res.ok) {
                const cart = await res.json();
                setInitialCart(cart);
            }
        });
    }, []);

    const onUpdateCart = (formData: FormData) => {
        setOptimisticCart((prevCart: Cart | null) => {
            const cartItem = JSON.parse(formData.get('input') as string);
            const type = formData.get('type') as string;
            return getNextCart({ cart: prevCart, cartItem, type });
        });

        handleCartAction(formData);
    };

    const emptyCart = () => {
        startTransition(() => {
            const formData = new FormData();
            formData.append('type', 'reset');
            handleCartAction(formData);
            setInitialCart(null);
        });
    };

    return (
        <CartContext.Provider value={{ cart, isOpen, setIsOpen, isLoading, emptyCart, onUpdateCart }}>
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
