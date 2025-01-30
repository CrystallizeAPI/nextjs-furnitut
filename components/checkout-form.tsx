'use client';

import { useActionState } from 'react';
import clsx from 'classnames';

import { setCustomerPlaceCart } from '@/app/actions/set-customer-place-cart';
import { Cart, CartItem } from '@/use-cases/contracts/cart';
import { PaymentButton } from './payment-button';
import { InputField } from './input';
import { Price } from './price';
import { Image } from '@/components/image';
import { Customer } from '@/use-cases/contracts/customer';
import { useCart } from './cart/cart-provider';

type InitialState = { customer: Customer | null; cart: Cart | null; cartId?: string } | null;

export const CheckoutForm = () => {
    const { emptyCart, cart: clientCart } = useCart();
    const [data, onSubmit, isPending] = useActionState<InitialState, FormData>(async (...param) => {
        emptyCart();
        return await setCustomerPlaceCart(...param);
    }, null);

    const { customer, cartId, cart: serverCart } = data ?? {};
    const cart = serverCart ?? clientCart;

    return (
        <div className="grid grid-cols-12 gap-12 ">
            <div className="col-span-8">
                <h2 className="font-bold mb-2">Customer</h2>
                <form action={onSubmit}>
                    <div className="bg-light rounded-t-xl border-muted border">
                        <div className="border-b border-muted">
                            <InputField
                                type="email"
                                name="email"
                                label="Email address"
                                defaultValue={customer?.addresses.email}
                            />
                        </div>

                        <div className="grid md:grid-cols-2 border-b border-muted">
                            <div className="border-r border-muted">
                                <InputField
                                    type="text"
                                    name="firstName"
                                    label="First name"
                                    defaultValue={customer?.firstName}
                                />
                            </div>
                            <InputField
                                type="text"
                                name="lastName"
                                label="Last name"
                                defaultValue={customer?.lastName}
                            />
                        </div>

                        <div className="grid md:grid-cols-2 border-b border-muted">
                            <div className="border-r border-muted">
                                <InputField
                                    type="text"
                                    name="street"
                                    label="Street"
                                    defaultValue={customer?.addresses.street}
                                />
                            </div>

                            <InputField
                                type="text"
                                name="postalCode"
                                label="Zip Code"
                                pattern="[0-9]{4}|[0-9]{5}"
                                defaultValue={customer?.addresses.postalCode}
                            />
                        </div>

                        <div className="grid md:grid-cols-2">
                            <div className="border-r border-muted">
                                <InputField
                                    type="text"
                                    name="city"
                                    label="City"
                                    defaultValue={customer?.addresses.city}
                                />
                            </div>
                            <InputField
                                type="text"
                                name="country"
                                label="Country"
                                defaultValue={customer?.addresses.country}
                            />
                        </div>
                    </div>

                    <div className=" rounded-b-xl border-b border-x border-muted bg-light flex flex-col justify-center items-center py-3">
                        <p className="text-xs italic">Create a user and locking the cart</p>
                        <button
                            type="submit"
                            className="bg-dark mx-auto text-light  rounded-lg px-8 py-2 mt-2"
                            disabled={isPending || !!customer}
                        >
                            Go to payment
                        </button>
                    </div>
                </form>
                <div className={clsx('mt-8', !customer && 'opacity-50 pointer-events-none')}>
                    <h2 className="font-bold mb-2">Payment</h2>
                    <div className="bg-light rounded-xl border-muted border">
                        <PaymentButton cartId={cartId} />
                    </div>
                </div>
            </div>
            <div className="col-span-4">
                <h2 className="font-bold mb-2">Basket</h2>
                <div className="bg-light rounded-xl border-muted border ">
                    {!!cart?.items.length && (
                        <>
                            <ul>
                                {cart.items.map((item: CartItem) => (
                                    <li
                                        key={`${item.variant.sku}`}
                                        className="flex justify-between border-b border-muted pb-4 px-6 pt-4"
                                    >
                                        <div className="flex w-full">
                                            <div className="shrink-0 relative h-16 w-12 aspect-square border border-muted rounded overflow-hidden">
                                                <Image {...item.images[0]} className="object-cover" />
                                            </div>
                                            <div className="flex flex-col pl-4 text-dark w-full justify-between">
                                                <div className="flex flex-col">
                                                    <span className="text-base font-medium">{item.name}</span>
                                                    <span className="text-xs italic text-dark/70">
                                                        {item.variant.sku}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between w-full ">
                                                    <div className="flex gap-4"></div>

                                                    <span className="font-bold text-sm">
                                                        <Price price={{ price: item.price.gross }} />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 px-6">
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
                                <div className="mt-6 mb-4 text-base">
                                    <span className="text-gray-900  font-bold">Total</span>
                                    <span className="text-gray-900 font-bold float-right">
                                        <Price price={{ price: cart.total.gross }} />
                                    </span>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
