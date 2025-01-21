'use client';

import { createContext, useContext, ReactNode, useState, use, useOptimistic, useTransition } from 'react';
import { addToCartServerAction } from '@/app/actions/add-to-cart-action-server';
import { Cart, CartItem } from '@/use-cases/contracts/cart';

type CartContextProps = {
    cart: Cart | null;
    isLoading: boolean;
    addToCartAction: (formData: FormData, type?: 'remove' | 'add' | 'reduce') => void;
    isCartOpen: boolean;
    setIsCartOpen: (value: boolean) => void;
    emptyCart: () => void;
};

export const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children, cartPromise }: { children: ReactNode; cartPromise: Promise<Cart> }) => {
    const cart = use(cartPromise);
    const [optimisticCart, setOptimisticCart] = useOptimistic(cart);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isPending, startTransition] = useTransition();

    const optimisticAddToCartAction = (formData: FormData, type?: 'remove' | 'add' | 'reduce') => {
        const input = JSON.parse(formData.get('input') as string);

        const updatedCart = (() => {
            const prevCart = optimisticCart;
            const existingItemIndex = prevCart.items.findIndex((item) => item.variant.sku === input.sku);

            let updatedItems = [...prevCart.items];
            let lastItemAdded = [] as CartItem[];

            if (existingItemIndex !== -1) {
                switch (type) {
                    case 'remove':
                        updatedItems = updatedItems.filter((item) => item.variant.sku !== input.sku);
                        lastItemAdded = [];

                        break;

                    case 'reduce':
                        const item = updatedItems[existingItemIndex];
                        const newQuantity = Math.max(0, item.quantity - 1);
                        if (newQuantity === 0) {
                            updatedItems = updatedItems.filter((item) => item.variant.sku !== input.sku);
                        } else {
                            updatedItems[existingItemIndex] = { ...item, quantity: newQuantity };
                            lastItemAdded = [];
                        }
                        break;

                    case 'add':
                    default:
                        updatedItems[existingItemIndex] = {
                            ...updatedItems[existingItemIndex],
                            quantity: updatedItems[existingItemIndex].quantity + 1,
                        };
                        lastItemAdded = [updatedItems[existingItemIndex]];

                        break;
                }
            } else {
                const optimisticItem: CartItem = {
                    name: input.variantName,
                    images: input.image ? [input.image] : [],
                    price: input.price,
                    quantity: 1,
                    variant: {
                        sku: input.sku,
                        name: input.variantName,
                        price: input.price,
                        product: {
                            name: input.productName,
                        },
                    },
                };
                updatedItems = [...prevCart.items, optimisticItem];
                lastItemAdded = [optimisticItem];
            }

            return {
                ...prevCart,
                lastItemAdded,
                items: updatedItems,
            };
        })();

        startTransition(async () => {
            setOptimisticCart(updatedCart);

            const serverFormData = new FormData();
            serverFormData.set('cart', JSON.stringify(updatedCart));
            await addToCartServerAction(cart, serverFormData);
        });
    };

    const emptyCart = () => {
        const emptyCartData: Cart = {
            items: [],
            lastItemAdded: [],
            total: {
                currency: cart.total.currency,
                gross: 0,
                net: 0,
                taxAmount: 0,
                discounts: [],
            },
        };

        startTransition(async () => {
            setOptimisticCart(emptyCartData);

            const serverFormData = new FormData();
            serverFormData.set('cart', JSON.stringify(emptyCartData));
            await addToCartServerAction(cart, serverFormData);
        });
    };

    return (
        <CartContext.Provider
            value={{
                cart: optimisticCart,
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
            isLoading: false,
            cart: {
                items: [],
                lastItemAdded: [],
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
