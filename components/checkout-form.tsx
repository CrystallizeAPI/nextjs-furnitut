'use client';

import { useState } from 'react';
import clsx from 'classnames';

import { setCustomerPlaceCart } from '@/app/actions/set-customer-place-cart';
import { useCart } from '@/context/cart-context';
import { CartItem } from '@/use-cases/contracts/cart';
import { PaymentButton } from './payment-button';
import { InputField } from './input';
import { Price } from './price';
import { Image } from '@/components/image';

type CheckoutFormProps = {
    cartId: string;
};

const CheckoutForm = ({ cartId }: CheckoutFormProps) => {
    const { cart } = useCart();
    const [showPayment, setShowPayment] = useState(false);

    if (!cartId) {
        return null;
    }

    return (
        <div className="grid grid-cols-12 gap-12 ">
            <div className="col-span-8">
                <h2 className="font-bold mb-2">Customer</h2>
                <form action={setCustomerPlaceCart} onSubmit={() => setShowPayment(true)}>
                    <div className="bg-light rounded-t-xl border-muted border">
                        <div className="hidden">
                            <InputField type="hidden" name="cartId" value={cartId} />
                        </div>
                        <div className="border-b border-muted">
                            <InputField type="email" name="email" label="Email address" />
                        </div>

                        <div className="grid md:grid-cols-2 border-b border-muted">
                            <div className="border-r border-muted">
                                <InputField type="text" name="firstName" label="First name" />
                            </div>
                            <InputField type="text" name="lastName" label="Last name" />
                        </div>

                        <div className="grid md:grid-cols-2 border-b border-muted">
                            <div className="border-r border-muted">
                                <InputField type="text" name="street" label="Street" />
                            </div>

                            <InputField type="text" name="zipCode" label="Zip Code" pattern="[0-9]{4}|[0-9]{5}" />
                        </div>

                        <div className="grid md:grid-cols-2">
                            <div className="border-r border-muted">
                                <InputField type="text" name="city" label="City" />
                            </div>
                            <InputField type="text" name="country" label="Country" />
                        </div>
                    </div>

                    <div className=" rounded-b-xl border-b border-x border-muted bg-light flex flex-col justify-center items-center py-3">
                        <p className="text-xs italic">Create a user and locking the cart</p>
                        <button type="submit" className="bg-dark mx-auto text-light  rounded-lg px-8 py-2 mt-2 ">
                            Go to payment
                        </button>
                    </div>
                </form>
                <div className={clsx('mt-8', !showPayment && 'opacity-50 pointer-events-none')}>
                    <h2 className="font-bold mb-2">Payment</h2>
                    <div className="bg-light rounded-xl border-muted border">
                        <PaymentButton cartId={cartId} />
                    </div>
                </div>
            </div>
            <div className="col-span-4">
                <h2 className="font-bold mb-2">Basket</h2>
                <div className="bg-light rounded-xl border-muted border ">
                    {cart && cart.items.length > 0 && (
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
                                                <span className="text-xs italic text-dark/70">{item.variant.sku}</span>
                                            </div>
                                            <div className="flex justify-between w-full ">
                                                <div className="flex gap-4">
                                                    {/* <button type="button">-</button>
                                                    <span>{item.quantity}</span>
                                                    <button type="button">+</button> */}
                                                </div>

                                                <span className="font-bold text-sm">
                                                    <Price price={{ price: item.price.gross }} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                    {cart && cart.items.length > 0 && (
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
                    )}
                </div>
            </div>
        </div>
    );
};

export default CheckoutForm;
