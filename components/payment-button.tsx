import { useState } from 'react';
import { Stripe } from './payments/stripe';
import { Crystal } from './payments/crystal';
import StripeLogo from '@/assets/stripe-logo.svg';
import CrystallizeLogo from '@/assets/crystallize-logo.svg';
import Image from 'next/image';
import classNames from 'classnames';

type PaymentMethod = number | null;

const paymentMethods = [
    {
        id: 1,
        name: 'crystal coin',
        component: Crystal,
        description: 'For test purposes only',
        img: CrystallizeLogo,
    },
    {
        id: 2,
        name: 'Stripe',
        component: Stripe,
        description: 'Pay with your credit card',
        img: StripeLogo,
    },
];

type PaymentButtonProps = {
    cartId: string;
};

export function PaymentButton({ cartId }: PaymentButtonProps) {
    const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>(null);

    return (
        <div>
            {paymentMethods.map((method) => {
                const PaymentGate = method.component;

                return (
                    <div
                        key={method.id}
                        className="py-4 border-b border-muted"
                        onClick={() => setSelectedMethod(method.id)}
                    >
                        <button type="button" className="flex text-left px-3  gap-3 w-full">
                            <span
                                className={classNames(
                                    'w-5 h-5 rounded-full border border-muted mt-1 flex items-center justify-center shrink-0',
                                    selectedMethod === method.id && '!border-dark',
                                )}
                            >
                                <div
                                    className={classNames(
                                        'w-2 h-2 rounded-full',
                                        selectedMethod === method.id && 'bg-dark ',
                                    )}
                                />
                            </span>
                            <div className="flex flex-col w-full">
                                <span className="font-bold">Pay with {method.name}</span>
                                <span className="text-dark/60 text-sm font-normal">{method.description}</span>
                            </div>
                            <div className="self-start shrink-0">
                                <Image
                                    src={method.img}
                                    alt={method.name}
                                    width={80}
                                    height={80}
                                    className="object-cover"
                                />
                            </div>
                        </button>
                        {selectedMethod === method.id && <PaymentGate cartId={cartId} />}
                    </div>
                );
            })}
        </div>
    );
}
