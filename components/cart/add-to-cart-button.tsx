'use client';

import clsx from 'classnames';
import { CartItemInput } from '@/use-cases/contracts/cart';
import { useCart } from './cart-context';

type AddToCartButtonProps = { type?: string; input: CartItemInput };

export const AddToCartButton = ({ input, type = 'default' }: AddToCartButtonProps) => {
    const { isLoading, onUpdateCart } = useCart();

    return (
        <form action={onUpdateCart}>
            <input type="hidden" name="input" value={JSON.stringify(input)} />
            <button
                type="submit"
                className={clsx({
                    'bg-dark text-light text-base rounded-2xl px-8 py-4 hover:bg-dark/90': type === 'default',
                    'bg-dark h-10 w-10 text-light rounded-xl text-lg font-bold aspect-square hover:bg-dark/90':
                        type === 'micro',
                })}
            >
                {type === 'micro' ? '+' : isLoading ? 'Adding...' : 'Add to cart'}
            </button>
        </form>
    );
};
