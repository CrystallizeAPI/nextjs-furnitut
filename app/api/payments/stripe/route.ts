import { fetchCart } from "@/use-cases/fetch-cart";
import {
	Cart,
	handleStripeCreatePaymentIntentRequestPayload,
} from "@crystallize/node-service-api-request-handlers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	const { cartId } = await request.json();
	try {
		const cart = await fetchCart(cartId);
		const paymentIntent =
			await handleStripeCreatePaymentIntentRequestPayload(
				{ cartId: cartId },
				{
					secret_key: process.env.STRIPE_SECRET_KEY as string,
					fetchCart: async () => {
						return {} as Cart;
					},
					createIntentArguments: () => {
						return {
							amount: cart!.total.gross * 100,
							currency: cart!.total.currency,
						};
					},
				}
			);

		if (!paymentIntent) {
			throw new Error("No client secret in payment intent");
		}
		return NextResponse.json({ clientSecret: paymentIntent.key });
	} catch (err) {
		return Response.json(err, {
			status: 400,
		});
	}
}
