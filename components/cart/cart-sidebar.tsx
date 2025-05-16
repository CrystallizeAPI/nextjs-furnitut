'use client';

import Link from 'next/link';
import classNames from 'classnames';

import { CartItems } from './cart-items';
import { Price } from '../price';
import { useCart } from './cart-provider';
import { Badge } from '@/components/badge';

const COUPON_CODE_NAME = 'voucher-code';

export const CartSidebar = () => {
    const { cart, isOpen, setIsOpen, handleVoucherCode, isLoading } = useCart();
    const onClose = () => setIsOpen(false);

    const handleApplyCoupon = async (formData: FormData) => {
        const voucherCode = formData.get(COUPON_CODE_NAME) as string;

        if (!cart?.id || !voucherCode) {
            return;
        }

        handleVoucherCode(voucherCode);
    };

    if (!cart) {
        return null;
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
            <div className={classNames('flex flex-row my-3 justify-between', { hidden: cart.items.length })}>
                <form className="flex-1" action={handleApplyCoupon}>
                    <label htmlFor={COUPON_CODE_NAME} className="block text-sm/6 font-medium text-dark/70">
                        Coupon code
                    </label>
                    <div className="mt-2 flex space-x-4">
                        <input
                            type="text"
                            id={COUPON_CODE_NAME}
                            name={COUPON_CODE_NAME}
                            className="block w-full rounded-md bg-white px-3 py-2 text-base text-dark/90 outline-1 -outline-offset-1 outline-dark/30 placeholder:text-dark/40 focus:outline-2 focus:-outline-offset-2 focus:outring-accent/60 sm:text-sm/6"
                        />
                        <button
                            type="submit"
                            className={classNames(
                                'rounded-md bg-dark px-4 text-sm font-medium text-light hover:bg-dark/30 focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-dark/5 focus:outline-hidden',
                                { 'opacity-50 cursor-not-allowed': isLoading },
                            )}
                            disabled={isLoading}
                        >
                            Apply
                        </button>
                    </div>
                </form>
            </div>
            {cart.appliedPromotions?.length > 0 && (
                <div className="flex flex-row my-1 justify-between">
                    <span className="text-dark/90 font-bold text-sm">
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
