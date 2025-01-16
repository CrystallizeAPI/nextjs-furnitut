'use client';
import { useCart } from '@/context/cart-context';
import { CartItemInput } from '@/use-cases/contracts/cart';
import classNames from 'classnames';

export const AddToCartButton = ({ type = 'default', input }: { type?: string; input: CartItemInput }) => {
    const { addToCartAction, isLoading } = useCart();

    return (
        <form action={addToCartAction}>
            <input type="hidden" name="input" value={JSON.stringify(input)} />
            <button
                type="submit"
                className={classNames({
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
