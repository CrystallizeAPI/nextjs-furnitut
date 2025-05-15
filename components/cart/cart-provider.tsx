'use client';

import { createContext, useActionState, useContext, useEffect, useOptimistic, useState, useTransition } from 'react';
import { handleCart } from '@/app/actions/handle-cart';
import { getNextCart } from '@/use-cases/get-next-cart';
import { CART_ACTION, CartAction } from '@/use-cases/types';
import { CartSidebar } from './cart-sidebar';
import { Cart, CartItem } from '@/generated/shop/graphql';

interface ExtendedCart extends Cart {
    lastItemAdded: CartItem | null;
}

type CartContextProps = {
    cart: ExtendedCart | null;
    isLoading: boolean;
    isOpen: boolean;
    emptyCart: () => void;
    setIsOpen: (isOpen: boolean) => void;
    onUpdateCart: (formData: FormData) => void;
    handleVoucherCode: (voucherCode: string) => void;
};

const CartContext = createContext<CartContextProps | undefined>(undefined);

type CartProviderProps = {
    children: React.ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [initialCart, setInitialCart] = useState<ExtendedCart | null>(null);
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
        setOptimisticCart(() => {
            const cartItem = JSON.parse(formData.get('input') as string) as CartItem;
            const action = formData.get('action') as CartAction;
            const index = formData.get('index') as string;

            return getNextCart({ cart, cartItem, action, itemIndex: index });
        });

        handleCartAction(formData);
    };

    const emptyCart = () => {
        startTransition(() => {
            const formData = new FormData();
            formData.append('action', CART_ACTION.reset);
            handleCartAction(formData);
            setInitialCart(null);
        });
    };

    const handleVoucherCode = (voucherCode: string) => {
        startTransition(() => {
            const formData = new FormData();
            formData.append('voucher-code', voucherCode);

            handleCartAction(formData);
        });
    };

    return (
        <CartContext.Provider
            value={{ cart, isOpen, setIsOpen, isLoading, emptyCart, onUpdateCart, handleVoucherCode }}
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
