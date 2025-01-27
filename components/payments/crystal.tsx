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
            <span>{paying ? 'Processing payment' : 'Confirm payment using Crystal coin'}</span>
        </button>
    );
};

export const Crystal = ({ cartId }: { cartId: string }) => {
    const [isPaying, setIsPaying] = useState(false);
    const router = useRouter();

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

        if (response.id) {
            // emptyCart();
            router.push(`/order/${response.id}`);
        }
    };

    return (
        <div className="bg-soft mx-8 mt-4 rounded-lg px-6 py-4 flex gap-8 items-center ">
            <p className="text-sm italic">Crystal coin is for testing purposes only, no real transaction will occur.</p>
            <button
                type="button"
                disabled={isPaying}
                onClick={handleClick}
                className="bg-dark text-light font-medium rounded px-6 py-2 text-nowrap"
            >
                <span>{isPaying ? 'Processing payment' : 'Confirm payment'}</span>
            </button>
        </div>
    );
};
