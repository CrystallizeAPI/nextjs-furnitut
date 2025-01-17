import { Cart as CartType } from '@/use-cases/contracts/cart';
import { fetchCart } from '@/use-cases/fetch-cart';

type CartProps = { params: Promise<{ id: string }> };

export default async function Cart(props: CartProps) {
    const params = await props.params;
    const cart = (await fetchCart(params.id)) as CartType;

    return (
        <main className="page">
            <h1>Cart</h1>
            <div>
                {cart?.items.map((item) => (
                    <div key={item.variant.sku}>
                        <h2>{item.variant.sku}</h2>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: {item.price.gross}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}
