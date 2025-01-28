'use client';

import { addToCartServerAction } from '@/app/actions/add-to-cart-action-server';
import { Cart, CartItem } from '@/use-cases/contracts/cart';
import { createContext, useContext, ReactNode, useActionState, useOptimistic, useEffect, useState } from 'react';

interface CartContextProps {
    cart: Cart | null;
    isLoading: boolean;
    addToCartAction: (formData: FormData) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<Cart | null>(null);
    const [data, addToCartAction, loading] = useActionState(addToCartServerAction, null);
    const [optimisticCart, setOptimisticCart] = useOptimistic(data || cart);

    useEffect(() => {
        fetch('/api/cart').then(async (res) => {
            if (res.ok) {
                const cart = await res.json();
                setCart(cart);
            }
        });
    }, []);

    const optimisticAddToCartAction = (formData: FormData) => {
        setOptimisticCart((prevCart: Cart) => {
            const input = JSON.parse(formData.get('input') as string);
            const optimisticItem: CartItem = {
                name: input.variantName,
                images: input.image ? [input.image] : [],
                price: input.price,
                quantity: 1,
                variant: {
                    sku: `optimistic-${input.sku}`,
                    name: input.variantName,
                    price: input.price,
                    product: {
                        name: input.productName,
                    },
                },
            };
            return { ...prevCart, items: [...prevCart.items, optimisticItem], lastItemAdded: [optimisticItem] };
        });
        addToCartAction(formData);
    };

    return (
        <CartContext.Provider
            value={{
                cart: optimisticCart || cart,
                addToCartAction: optimisticAddToCartAction,
                isLoading: loading,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        return {
            isLoading: true,
            cart: {
                items: [],
                total: {
                    currency: 'eur',
                    gross: 0,
                    net: 0,
                    taxAmount: 0,
                    discounts: [],
                },
                lastItemAdded: [],
            } as Cart,
            addToCartAction: () => {},
        };
    }
    return context;
};
