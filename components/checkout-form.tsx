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
import { Badge } from '@/components/badge';
import { useTranslations } from 'next-intl';

type InitialState = { customer: Customer | null; cart: Cart | null; cartId?: string } | null;

export const CheckoutForm = () => {
    const t = useTranslations();
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
                <h2 className="font-bold mb-2">{t('Checkout.customer')}</h2>
                <form action={onSubmit}>
                    <div className="bg-light rounded-t-xl border-muted border">
                        <div className="border-b border-muted">
                            <InputField
                                type="email"
                                name="email"
                                label={t('Checkout.labelEmail')}
                                defaultValue={customer?.addresses.email}
                            />
                        </div>

                        <div className="grid md:grid-cols-2 border-b border-muted">
                            <div className="border-r border-muted">
                                <InputField
                                    type="text"
                                    name="firstName"
                                    label={t('Checkout.labelFirstName')}
                                    defaultValue={customer?.firstName}
                                />
                            </div>
                            <InputField
                                type="text"
                                name="lastName"
                                label={t('Checkout.labelLastName')}
                                defaultValue={customer?.lastName}
                            />
                        </div>
                        <div className="grid md:grid-cols-2 border-b border-muted">
                            <div className="border-r border-muted">
                                <InputField
                                    type="text"
                                    name="companyName"
                                    label={t('Checkout.labelCompany')}
                                    defaultValue={customer?.companyName}
                                />
                            </div>
                            <InputField
                                type="text"
                                name="taxNumber"
                                label={t('Checkout.labelTaxNumber')}
                                defaultValue={customer?.taxNumber}
                            />
                        </div>

                        <div className="grid md:grid-cols-2 border-b border-muted">
                            <div className="border-r border-muted">
                                <InputField
                                    type="text"
                                    name="street"
                                    label={t('Checkout.labelStreet')}
                                    defaultValue={customer?.addresses.street}
                                />
                            </div>

                            <InputField
                                type="text"
                                name="postalCode"
                                label={t('Checkout.labelPostalCode')}
                                pattern="[0-9]{4}|[0-9]{5}"
                                defaultValue={customer?.addresses.postalCode}
                            />
                        </div>

                        <div className="grid md:grid-cols-2">
                            <div className="border-r border-muted">
                                <InputField
                                    type="text"
                                    name="city"
                                    label={t('Checkout.labelCity')}
                                    defaultValue={customer?.addresses.city}
                                />
                            </div>
                            <InputField
                                type="text"
                                name="country"
                                label={t('Checkout.labelCountry')}
                                defaultValue={customer?.addresses.country}
                            />
                        </div>
                    </div>

                    <div className=" rounded-b-xl border-b border-x border-muted bg-light flex flex-col justify-center items-center py-3">
                        <p className="text-xs italic">{t('Checkout.lockCart')}</p>
                        <button
                            type="submit"
                            className="bg-dark mx-auto text-light  rounded-lg px-8 py-2 mt-2 cursor-pointer"
                            disabled={isPending || !!customer}
                        >
                            {t('Checkout.goToPayment')}
                        </button>
                    </div>
                </form>
                <div className={clsx('mt-8', !customer && 'opacity-50 pointer-events-none')}>
                    <h2 className="font-bold mb-2">{t('Checkout.payment')}</h2>
                    <div className="bg-light rounded-xl border-muted border">
                        <PaymentButton cartId={cartId} />
                    </div>
                </div>
            </div>
            <div className="col-span-4">
                <h2 className="font-bold mb-2">{t('Checkout.orderSummary')}</h2>

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
                                            <div className="shrink-0 relative h-full w-12 aspect-square border border-muted rounded-sm overflow-hidden">
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
                                                    <div className="flex items-end justify-center">
                                                        {item.quantity}x
                                                    </div>

                                                    <span className="font-bold text-sm text-end">
                                                        {item.price.discounts?.length > 0 && (
                                                            <>
                                                                <s className="text-sm text-dark/60">
                                                                    <Price
                                                                        price={{
                                                                            price:
                                                                                (item.variant?.compareAtPrice?.gross ??
                                                                                    item.price.gross) * item.quantity,
                                                                        }}
                                                                    />
                                                                </s>
                                                                <br />
                                                                <Badge className={'text-xs mr-2'}>
                                                                    -{item.price.discounts?.[0].percent.toFixed(2)}%
                                                                </Badge>
                                                            </>
                                                        )}
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
                                    <span>{t('Price.net')}</span>
                                    <span>
                                        <Price price={{ price: cart.total.net }} />
                                    </span>
                                </div>
                                <div className="text-dark/70 text-sm flex justify-between items-center mb-3">
                                    <span>{t('Price.tax')}</span>
                                    <span>
                                        <Price price={{ price: cart.total.taxAmount }} />
                                    </span>
                                </div>
                                {cart.total.discounts.length > 0 && (
                                    <div className="text-dark/70 text-sm flex justify-between items-center mb-4">
                                        <span>{t('Price.totalSavings')}</span>
                                        <span>
                                            -<Price price={{ price: cart.total.discounts[0].amount }} />
                                        </span>
                                    </div>
                                )}
                                <div className="my-4 text-base">
                                    <span className="text-gray-900  font-bold">{t('Price.total')}</span>
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
