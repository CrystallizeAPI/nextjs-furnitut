'use client';

import { useActionState, useTransition } from 'react';
import clsx from 'classnames';
import { CartItemInput } from '@/use-cases/contracts/cart';
import { addToCartServerAction } from '@/app/actions/add-to-cart-action-server';

type AddToCartButtonProps = { type?: string; input: CartItemInput };

export const AddToCartButton = ({ input, type = 'default' }: AddToCartButtonProps) => {
    const [, addToCartAction, isPending] = useActionState(addToCartServerAction, null);

    return (
        <form action={addToCartAction}>
            <input type="hidden" name="input" value={JSON.stringify(input)} />
            <button
                type="submit"
                disabled={isPending}
                className={clsx({
                    'bg-dark text-light text-base rounded-2xl px-8 py-4 hover:bg-dark/90': type === 'default',
                    'bg-dark h-10 w-10 text-light rounded-xl text-lg font-bold aspect-square hover:bg-dark/90':
                        type === 'micro',
                })}
            >
                {type === 'micro' ? '+' : isPending ? 'Adding...' : 'Add to cart'}
            </button>
        </form>
    );
};
