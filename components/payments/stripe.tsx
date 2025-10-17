import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js/pure';
import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';

export const StripeButton: React.FC<{
    paying?: boolean;
}> = ({ paying = false }) => {
    return (
        <button
            type="button"
            disabled={paying}
            className="bg-dark text-light text-lg rounded-xl px-8 py-2 w-full mt-5 hover:bg-dark/90"
        >
            <span>{paying ? 'Processing payment' : 'Pay now'}</span>
        </button>
    );
};

const STRIPE_PUBLIC_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY;

let stripePromise = null;
if (STRIPE_PUBLIC_KEY) {
    stripePromise = await loadStripe(STRIPE_PUBLIC_KEY);
}

export const Stripe = ({ cartId }: { cartId?: string }) => {
    const [clientSecret, setClientSecret] = useState<string>('');

    useEffect(() => {
        fetch('/api/payments/stripe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cartId }),
        })
            .then((response) => response.json())
            .then((data) => {
                setClientSecret(data.clientSecret);
            });
    }, [cartId]);

    if (!clientSecret || !stripePromise) {
        return <div className="p-8 text-vivid">Payment method not set</div>;
    }
    return (
        <Elements options={{ clientSecret }} stripe={stripePromise}>
            <StripeCheckoutForm cartId={cartId} />
        </Elements>
    );
};

export const StripeCheckoutForm = ({ cartId }: { cartId?: string }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [state, setState] = useState<{
        error: string | null;
        succeeded: boolean;
        processing: boolean;
    }>({ succeeded: false, error: null, processing: false });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        setState({
            ...state,
            processing: true,
        });

        const payload = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: 'http://' + window.location.host + '/order/cart/' + cartId,
            },
            redirect: 'always',
        });

        if (payload.error) {
            setState({
                ...state,
                error: `Payment failed ${payload.error.message}`,
                processing: false,
            });
        } else {
        }
    };

    return (
        <form id="checkout" onSubmit={handleSubmit} className="px-12 py-12">
            <PaymentElement />
            <StripeButton paying={state.processing || !stripe || !elements} />
        </form>
    );
};
