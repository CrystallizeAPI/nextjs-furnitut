'use client';
import { useCart } from '@/context/cart-context';
import { CartItemInput } from '@/use-cases/contracts/cart';

export const AddToCartButton = (input: CartItemInput) => {
    const { addToCartAction, isLoading } = useCart();

    return (
        <form action={addToCartAction}>
            <input type="hidden" name="input" value={JSON.stringify(input)} />
            <button className="bg-dark text-light text-lg rounded-xl px-8 py-2" type="submit">
                {isLoading ? 'Adding to cart...' : 'Add to cart'}
            </button>
        </form>
    );
};
