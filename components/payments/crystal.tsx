import { useCart } from '@/context/cart-context';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const CrystalButton: React.FC<{
    paying?: boolean;
    onClick?: () => Promise<void> | void;
}> = ({ paying = false, onClick }) => {
    return (
        <button
            type={onClick ? 'button' : 'submit'}
            disabled={paying}
            onClick={onClick ? onClick : undefined}
            className="bg-darktext-light text-lg rounded-xl px-8 py-2"
        >
            <span>{paying ? 'Processing payment' : 'Confrim payment using Crystal coin'}</span>
        </button>
    );
};

export const Crystal = ({ cartId }: { cartId: string }) => {
    const [isPaying, setIsPaying] = useState(false);
    const router = useRouter();
    const { emptyCart, cart } = useCart();

    const handleClick = async () => {
        setIsPaying(true);
        const data = await fetch('/api/payments/crystal', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cartId }),
        });
        const response = await data.json();
        emptyCart();
        if (response.id) {
            router.push(`/order/${response.id}`);
        }
        emptyCart();

        if (response.id) {
            router.push(`/order/${response.id}`);
        }
    };

    return (
        <button
            type="button"
            disabled={isPaying}
            onClick={handleClick}
            className="bg-dark text-light text-lg rounded-xl px-8 py-2 mt-5"
        >
            <span>{isPaying ? 'Processing payment' : 'Confrim payment using Crystal coin'}</span>
        </button>
    );
};
