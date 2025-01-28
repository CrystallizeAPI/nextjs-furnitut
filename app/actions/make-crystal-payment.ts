'use server';

import { redirect } from 'next/navigation';
import { storage } from '@/core/storage.server';
import { crystalPaymentHandler } from '@/use-cases/payments/crystal';

export const makeCrystalPayment = async (initialSate: null, formData: FormData) => {
    const cartId = formData.get('cartId') as string;
    let paymentId: string | undefined = undefined;

    try {
        const payment = await crystalPaymentHandler(cartId);
        paymentId = payment?.id;
    } catch (error) {
        console.error('Error making payment', error);
    }

    if (!!paymentId) {
        await storage.setCartId('');
        redirect(`/order/${paymentId}`);
    }

    return null;
};
