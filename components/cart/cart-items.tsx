import { CartItem } from '@/use-cases/contracts/cart';
import { Image } from '@/components/image';

import { Price } from '../price';
import { useCart } from './cart-provider';
import clsx from 'classnames';
import { Badge } from '@/components/badge';
import { Fragment } from 'react';
import { CART_ACTION } from '@/use-cases/types';

export const CartItems = () => {
    const { cart, onUpdateCart } = useCart();
    const { items } = cart ?? {};

    if (!items?.length) {
        return <p>Your cart is empty.</p>;
    }

    return (
        <ul>
            {items.map((item: CartItem, index) => (
                <Fragment key={item.variant.sku + '-' + index}>
                    <li className="flex mb-4 justify-between">
                        <div className="flex w-full">
                            <div className="shrink-0 relative h-24 w-20 aspect-square border border-muted rounded-sm overflow-hidden">
                                <Image {...item.images[0]} className="object-cover" />
                            </div>
                            <div className="flex flex-col pl-4 text-dark w-full justify-between">
                                <div className="flex flex-col">
                                    <span className="text-lg font-bold">{item.name}</span>
                                    <span className="text-sm italic text-dark/70">{item.variant.sku}</span>
                                </div>
                                <div className="flex justify-between w-full items-end">
                                    <div className="flex items-center rounded-lg">
                                        <form action={onUpdateCart}>
                                            <input
                                                type="hidden"
                                                name="input"
                                                value={JSON.stringify({
                                                    sku: item.variant.sku,
                                                    variantName: item.variant.name,
                                                    price: item.price,
                                                    productName: item.variant.product.name,
                                                    image: item.images[0],
                                                })}
                                            />
                                            <input type="hidden" name="action" value={CART_ACTION.decrease} />
                                            <input type="hidden" name="index" value={index.toString()} />
                                            <button
                                                type="submit"
                                                className="w-8 h-8 flex items-center justify-center rounded-sm hover:bg-muted/20 active:bg-muted/40"
                                            >
                                                -
                                            </button>
                                        </form>

                                        <span className="w-8 text-center">{item.quantity}</span>

                                        <form action={onUpdateCart}>
                                            <input
                                                type="hidden"
                                                name="input"
                                                value={JSON.stringify({
                                                    sku: item.variant.sku,
                                                    variantName: item.variant.name,
                                                    price: item.price,
                                                    productName: item.variant.product.name,
                                                    image: item.images[0],
                                                })}
                                            />
                                            <input type="hidden" name="action" value={CART_ACTION.increase} />
                                            <input type="hidden" name="index" value={index.toString()} />
                                            <button
                                                type="submit"
                                                className="w-8 h-8 flex items-center justify-center  rounded-sm hover:bg-muted/20 active:bg-muted/40"
                                            >
                                                +
                                            </button>
                                        </form>
                                    </div>

                                    <span className="font-bold text-end">
                                        {item.price.discounts?.length > 0 && (
                                            <>
                                                <s className="text-sm text-dark/60">
                                                    <Price price={{ price: item.variant.price.gross}} />
                                                </s>
                                                <br />
                                                <Badge className={'text-xs mr-2'}>
                                                    -{Math.round((item.price.discounts?.[0].percent + Number.EPSILON) * 100) / 100}%
                                                </Badge>
                                            </>
                                        )}
                                        <Price price={{ price: item.price.gross }} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <hr
                        className={clsx('my-4 text-dark/20', {
                            hidden: index === items.length - 1,
                        })}
                    />
                </Fragment>
            ))}
        </ul>
    );
};
