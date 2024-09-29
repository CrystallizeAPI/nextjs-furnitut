'use client';

import { addToCartServerAction } from '@/app/actions/add-to-cart-action-server';
import { Cart, CartItem } from '@/use-cases/contracts/cart';
import { createContext, useContext, ReactNode, useState, use, useOptimistic } from 'react';
import { useFormState } from 'react-dom';

interface CartContextProps {
    cart: Cart | null;
    isLoading: boolean;
    addToCartAction: (formData: FormData) => void;
    isCartOpen: boolean;
    setIsCartOpen: (value: boolean) => void;
    emptyCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children, cartPromise }: { children: ReactNode; cartPromise: Promise<Cart> }) => {
    const cart = use(cartPromise);
    const [formState, formAction, isPending] = useFormState(addToCartServerAction, cart);

    const [optimisticCart, setOptimisticCart] = useOptimistic(formState);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const optimisticAddToCartAction = (formData: FormData) => {
        const input = JSON.parse(formData.get('input') as string);
        setOptimisticCart((prevCart: Cart) => {
            const existingItemIndex = prevCart.items.findIndex((item) => item.variant.sku === input.sku);

            // If the item exists, update the quantity
            if (existingItemIndex !== -1) {
                const updatedItems = prevCart.items.map((item, index) => {
                    if (index === existingItemIndex) {
                        return {
                            ...item,
                            quantity: item.quantity + 1,
                        };
                    }
                    return item;
                });

                return { ...prevCart, items: updatedItems };
            }

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
            return { ...prevCart, items: [...prevCart.items, optimisticItem] };
        });

        formAction(formData);
    };

    const emptyCart = () => {
        setOptimisticCart({
            items: [],
            total: {
                currency: cart.total.currency,
                gross: 0,
                net: 0,
                taxAmount: 0,
                discounts: [],
            },
        });
    };

    return (
        <CartContext.Provider
            value={{
                cart: optimisticCart || cart,
                addToCartAction: optimisticAddToCartAction,
                isLoading: isPending,
                isCartOpen,
                setIsCartOpen,
                emptyCart,
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
                    currency: 'EUR',
                    gross: 0,
                    net: 0,
                    taxAmount: 0,
                    discounts: [],
                },
            },
            addToCartAction: () => {},
            isCartOpen: false,
            setIsCartOpen: () => {},
            emptyCart: () => {},
        };
    }
    return context;
};
