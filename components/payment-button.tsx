import { useState } from 'react';
import { Stripe } from './payments/stripe';
import { Crystal } from './payments/crystal';
import StripeLogo from '@/assets/stripe-logo.svg';
import CrystallizeLogo from '@/assets/crystallize-logo.svg';
import Image from 'next/image';

type PaymentMethod = 'Stripe' | 'Crystal' | null;

const paymentMethods = [
    {
        name: 'Crystal',
        component: Crystal,
        img: CrystallizeLogo,
    },
    {
        name: 'Stripe',
        component: Stripe,
        img: StripeLogo,
    },
];

interface PaymentButtonProps {
    cartId: string;
}

export function PaymentButton({ cartId }: PaymentButtonProps) {
    const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>(null);

    return (
        <div>
            <h2>Choose payment method</h2>
            <div className="flex flex-wrap gap-5">
                {paymentMethods.map((method) => (
                    <button
                        key={method.name}
                        onClick={() => setSelectedMethod(method.name as PaymentMethod)}
                        className={`-[300px] mt-2 px-8 py-4 cursor-pointer ${
                            selectedMethod === method.name ? 'border border-dark border-1' : ''
                        }`}
                    >
                        {method.img && (
                            <Image
                                src={method.img}
                                alt={method.name}
                                width={140}
                                height={140}
                                className="object-cover"
                            />
                        )}
                    </button>
                ))}
            </div>

            {selectedMethod === 'Stripe' && <Stripe cartId={cartId} />}
            {selectedMethod === 'Crystal' && <Crystal cartId={cartId} />}
        </div>
    );
}
