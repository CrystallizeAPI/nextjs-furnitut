'use client';

import { useState } from 'react';
import { Image } from '@/components/image';

import { CartSidebar } from './cart-sidebar';
import { CartButton } from './cart-button';
import { useCart } from './cart-context';

export const CartClient = () => {
    const { cart } = useCart();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <CartButton onClick={() => setIsOpen((prev) => !prev)} />
            {!!cart?.lastItemAdded?.length && (
                <div className="starting:opacity-0 starting:translate-y-10 opacity-100 transition-all absolute border translate-y-4 border-muted top-full right-0 bg-light text-dark p-2 rounded-lg shadow">
                    {cart.lastItemAdded.map((item, index) => (
                        <div className="flex gap-2 items-center pr-6" key={index}>
                            <div className="w-8 h-8 relative overflow-hidden rounded border border-muted ">
                                <Image {...item.images?.[0]} sizes="100px" className="relative [&_img]:object-cover" />
                            </div>
                            <div className="flex gap-1">
                                <span className="text-sm italic font-bold text-dark ">{item.variant.product.name}</span>
                                <span className="text-sm text-dark ">added to cart</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <CartSidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
};
