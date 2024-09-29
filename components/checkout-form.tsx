'use client';

import { useState } from 'react';
import { PaymentButton } from './payment-button';
import { InputField } from './input';
import { setCustomerPlaceCart } from '@/app/actions/set-customer-place-cart';

const CheckoutForm: React.FC<{
    cartId: string;
}> = ({ cartId }) => {
    if (!cartId) return null;

    const [showPayment, setShowPayment] = useState(false);

    return (
        <>
            <form action={setCustomerPlaceCart} onSubmit={() => setShowPayment(true)}>
                <InputField type="hidden" name="cartId" value={cartId} />
                <InputField type="email" name="email" label="Email address" />

                <div className="grid md:grid-cols-2 md:gap-6">
                    <InputField type="text" name="firstName" label="First name" />
                    <InputField type="text" name="lastName" label="Last name" />
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                    <InputField type="text" name="street" label="Street" />
                    <InputField type="text" name="zipCode" label="Zip Code" pattern="[0-9]{4}|[0-9]{5}" />
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                    <InputField type="text" name="city" label="City" />
                    <InputField type="text" name="country" label="Country" />
                </div>
                {!showPayment && (
                    <button type="submit" className="bg-dark text-light text-lg rounded-xl px-8 py-4  w-full mt-5">
                        Next
                    </button>
                )}
            </form>

            {showPayment && <PaymentButton cartId={cartId} />}
        </>
    );
};

export default CheckoutForm;
