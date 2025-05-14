'use client';

import { createContext, useActionState, useContext, useEffect, useOptimistic, useState, useTransition } from 'react';
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
    handleVoucherCode: (voucherCode: string) => void;
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
            const index = formData.get('index') as string;
            return getNextCart({ cart, cartItem, type, itemIndex: index });
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

    const handleVoucherCode = (voucherCode: string) => {
        startTransition(() => {
            const formData = new FormData();
            formData.append('type', 'voucher-code');
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
