import dynamic from 'next/dynamic';
import { storage } from '@/core/storage.server';

const Form = dynamic(() => import('@/components/checkout-form'), {
    ssr: false,
});

export default async function Checkout() {
    const cartId = storage.getCartId();

    return (
        <main className="page !max-w-screen-xl">
            <Form cartId={cartId ?? ''} />
        </main>
    );
}
