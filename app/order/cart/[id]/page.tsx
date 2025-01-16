import { Cart } from '@/components/cart';
import { fetchCart } from '@/use-cases/fetch-cart';

type OrderCartProps = {
    params: {
        id: string;
    };
    searchParams: Record<string, string>;
};

export default async function OrderCart({ params, searchParams }: OrderCartProps) {
    const cart = await fetchCart(params.id);

    return (
        <main className="page">
            <h1>Order Cart</h1>
            {cart && cart.items.length === 0 && <p>Your cart is empty.</p>}
            {cart && cart.items.length > 0 && <Cart cart={cart} />}
        </main>
    );
}
