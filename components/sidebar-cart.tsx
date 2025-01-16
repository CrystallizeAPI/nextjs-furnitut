'use client';

import Link from 'next/link';
import { useCart } from '@/context/cart-context';
import { Cart } from './cart';
import { Price } from './price';
import classNames from 'classnames';

export const SidebarCart = () => {
    const { cart, isCartOpen, setIsCartOpen } = useCart();

    return (
        <div
            className={classNames(
                'bg-light transition-all border-l-muted border-l py-8 px-10 w-[500px] h-full z-10 overflow-y-auto',
                'flex flex-col fixed top-0 right-0',
                !isCartOpen && '!-right-[505px]',
            )}
        >
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold ">Cart</h2>
                <button
                    aria-label="Close cart button"
                    className="bg-light h-8 w-8 font-bold border border-muted rounded hover:bg-muted/50"
                    onClick={() => setIsCartOpen(false)}
                >
                    x
                </button>
            </div>
            <div className="grow h-full  overflow-y-scroll">
                <Cart cart={cart} />
            </div>
            <div>
                {cart && cart.items.length > 0 && (
                    <div className="mt-4">
                        <div className="mb-2">
                            <span className="text-gray-900 text-xl font-bold">Total</span>
                            <span className="text-gray-900 font-bold float-right text-xl">
                                <Price price={{ price: cart.total.gross }} />
                            </span>
                        </div>
                        <div className="text-dark/70 text-sm flex justify-between items-center">
                            <span>Net:</span>
                            <span>
                                <Price price={{ price: cart.total.net }} />
                            </span>
                        </div>
                        <div className="text-dark/70 text-sm flex justify-between items-center mb-4">
                            <span>Tax:</span>
                            <span>
                                <Price price={{ price: cart.total.taxAmount }} />
                            </span>
                        </div>
                    </div>
                )}
                <Link
                    href="/checkout"
                    className="bg-dark text-light text-lg rounded-xl px-8 py-4 w-full border border-10 block text-center"
                    onClick={() => setIsCartOpen(false)}
                >
                    Checkout
                </Link>
            </div>
        </div>
    );
};
