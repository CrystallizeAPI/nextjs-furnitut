import { storage } from '@/core/storage.server';
import Form from '@/components/checkout-form';

export default async function Checkout() {
    const cartId = await storage.getCartId();

    return (
        <main className="page !max-w-screen-xl">
            <Form cartId={cartId ?? ''} />
        </main>
    );
}
