import { stripeWebhookHandler } from '@/use-cases/payments/stripe';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const event = await request.text();
    const data = await stripeWebhookHandler(request.headers.get('stripe-signature') as string, event);
    return NextResponse.json({ data });
}
