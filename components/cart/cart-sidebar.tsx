'use client';

import Link from 'next/link';
import classNames from 'classnames';

import { CartItems } from './cart-items';
import { Price } from '../price';
import { useCart } from './cart-provider';
import { Badge } from '@/components/badge';

export const CartSidebar = () => {
    const { cart, isOpen, setIsOpen } = useCart();
    const onClose = () => setIsOpen(false);

    if (!cart) {
        return <p>Your cart is empty.</p>;
    }

    return (
        <div
            className={classNames(
                'bg-light transition-all border-l-muted border-l py-8 px-10 w-[500px] h-full z-10 overflow-y-auto',
                'flex flex-col fixed top-0 right-0',
                !isOpen && '-right-[505px]!',
            )}
        >
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Shopping Cart</h2>
                <button
                    aria-label="Close cart button"
                    className="bg-light h-8 w-8 font-bold border border-muted rounded-sm hover:bg-muted/50 cursor-pointer"
                    onClick={onClose}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="3"
                        stroke="currentColor"
                        className="size-4 mx-auto"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className="grow h-full  overflow-y-scroll">
                <CartItems />
            </div>
            {cart?.appliedPromotions?.length > 0 && (
                <div className="flex flex-row my-1 justify-between">
                    <span className="text-gray-900 font-bold text-sm">
                        Applied Promotion{cart.appliedPromotions.length > 1 ? '(s)' : ''}
                    </span>
                    <div className="flex flex-row flex-wrap gap-2">
                        {cart.appliedPromotions.map((promotion) => (
                            <Badge key={promotion.identifier} className={'text-xs'}>
                                {promotion.name}
                            </Badge>
                        ))}
                    </div>
                </div>
            )}
            <div>
                {!!cart?.items.length && (
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
                        <div className="text-dark/70 text-sm flex justify-between items-center mb-3">
                            <span>Tax:</span>
                            <span>
                                <Price price={{ price: cart.total.taxAmount }} />
                            </span>
                        </div>
                        {cart.total.discounts?.length > 0 && (
                            <div className="text-dark/70 text-sm flex justify-between items-center mb-4">
                                <span>Total savings:</span>
                                <span>
                                    -<Price price={{ price: cart.total.discounts[0].amount }} />
                                </span>
                            </div>
                        )}
                    </div>
                )}
                <Link
                    href="/checkout"
                    className="bg-dark text-light text-lg rounded-md px-8 py-4 w-full block text-center"
                    onClick={onClose}
                    data-testid="checkout-button"
                >
                    Checkout
                </Link>
            </div>
        </div>
    );
};
