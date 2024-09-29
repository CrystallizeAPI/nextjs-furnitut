import { CartViewer } from '@/components/cart';
import { fetchCart } from '@/use-cases/fetch-cart';

export default async function OrderCart({
    params,
    searchParams,
}: {
    params: {
        id: string;
    };
    searchParams: Record<string, string>;
}) {
    const cart = await fetchCart(params.id);

    return (
        <main className="page">
            <h1>Order Cart</h1>
            {cart && cart.items.length === 0 && <p>Your cart is empty.</p>}
            {cart && cart.items.length > 0 && <CartViewer cart={cart} />}
        </main>
    );
}
