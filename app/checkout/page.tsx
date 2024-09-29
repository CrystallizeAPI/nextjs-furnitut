import dynamic from 'next/dynamic';
import { storage } from '@/core/storage.server';

const Form = dynamic(() => import('@/components/checkout-form'), {
    ssr: false,
});

export default async function Checkout() {
    const cartId = storage.getCartId();
    return (
        <main className="page">
            <h1 className="mb-5 text-2xl">Checkout</h1>
            <Form cartId={cartId ?? ''} />
        </main>
    );
}
