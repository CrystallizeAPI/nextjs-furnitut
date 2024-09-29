'use client';

import Link from 'next/link';
import { useCart } from '@/context/cart-context';
import { CartViewer } from './cart';

export const SidebarCart = () => {
    const { cart, isCartOpen, setIsCartOpen } = useCart();

    return (
        <>
            {isCartOpen && (
                <div className="bg-soft shadow-lg py-6 px-10 w-96 h-full z-10 overflow-y-auto absolute top-0 right-0">
                    <h2 className="text-xl mb-4">Your Cart</h2>
                    <button className="mb-4" onClick={() => setIsCartOpen(false)}>
                        Close
                    </button>

                    <CartViewer cart={cart} />
                    <Link
                        href="/checkout"
                        className="bg-dark text-light text-lg rounded-xl px-8 py-2 w-full border border-10 block text-center"
                    >
                        Checkout
                    </Link>
                </div>
            )}
        </>
    );
};
