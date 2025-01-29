'use client';

import { Image } from '@/components/image';
import { useCart } from './cart-context';
import { useEffect, useState } from 'react';

export const CartButton = () => {
    const { cart, setIsOpen } = useCart();
    const [item, setItem] = useState(cart?.lastItemAdded);

    useEffect(() => {
        setItem(cart?.lastItemAdded);
        const timeout = setTimeout(() => setItem(undefined), 3000);
        return () => clearTimeout(timeout);
    }, [cart?.lastItemAdded]);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center font-medium px-4 sm:px-6 gap-2 hover:bg-muted/20 active:bg-muted/40 rounded-r-full"
            >
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M4 4.47778H5.62563C6.193 4.47778 6.47669 4.47778 6.70214 4.60212C6.79511 4.65339 6.87933 4.71914 6.95162 4.7969C7.12692 4.98547 7.19573 5.26069 7.33333 5.81112L7.51493 6.5375C7.616 6.9418 7.66654 7.14395 7.74455 7.31354C8.01534 7.90227 8.5546 8.32332 9.19144 8.44324C9.37488 8.47778 9.58326 8.47778 10 8.47778V8.47778"
                        stroke="#222222"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                    />
                    <path
                        d="M18 17.4778H7.55091C7.40471 17.4778 7.33162 17.4778 7.27616 17.4716C6.68857 17.4058 6.28605 16.8473 6.40945 16.2691C6.42109 16.2145 6.44421 16.1452 6.49044 16.0065V16.0065C6.54177 15.8525 6.56743 15.7755 6.59579 15.7075C6.88607 15.0119 7.54277 14.5386 8.29448 14.4832C8.3679 14.4778 8.44906 14.4778 8.61137 14.4778H14"
                        stroke="#222222"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M15.7639 14.4778H9.69425C8.71658 14.4778 7.8822 13.771 7.72147 12.8066L7.2911 10.2244C7.13872 9.31008 7.84378 8.47778 8.77069 8.47778H18.382C19.1253 8.47778 19.6088 9.2601 19.2764 9.925L17.5528 13.3722C17.214 14.0498 16.5215 14.4778 15.7639 14.4778Z"
                        stroke="#222222"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                    />
                    <circle cx="17" cy="20.4778" r="1" fill="#222222" />
                    <circle cx="9" cy="20.4778" r="1" fill="#222222" />
                </svg>
                <span className="pr-4 sm:pr-8 relative flex items-start justify-center">
                    <span className="hidden sm:inline">Cart </span>
                    {cart && cart?.items.length > 0 && (
                        <span className="text-sm absolute right-0 h-5 w-5 text-bold bg-vivid text-light rounded top-1/2 -translate-y-1/2">
                            {cart?.items.reduce((acc, item) => acc + (item.quantity ?? 0), 0)}
                        </span>
                    )}
                </span>
            </button>
            {!!item && (
                <div
                    key={item.variant.sku}
                    className="starting:opacity-0 starting:translate-y-10 opacity-100 transition-all absolute border translate-y-4 border-muted top-full right-0 bg-light text-dark p-2 rounded-lg shadow"
                >
                    <div className="flex gap-2 items-center pr-6">
                        <div className="w-8 h-8 relative overflow-hidden rounded border border-muted ">
                            <Image {...item.images?.[0]} sizes="100px" className="relative [&_img]:object-cover" />
                        </div>
                        <div className="flex gap-1">
                            <span className="text-sm italic font-bold text-dark">{item.variant.product.name}</span>
                            <span className="text-sm text-dark ">added to cart</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
