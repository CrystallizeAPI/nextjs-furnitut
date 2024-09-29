import { Cart as CartType } from '@/use-cases/contracts/cart';
import { fetchCart } from '@/use-cases/fetch-cart';

export default async function Cart({ params }: { params: { id: string } }) {
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
