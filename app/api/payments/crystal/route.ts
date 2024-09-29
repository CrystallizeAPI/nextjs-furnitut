"use server";

import { storage } from "@/core/storage.server";
import { crystalPaymentHandler } from "@/use-cases/payments/crystal";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	const { cartId } = await request.json();
	try {
		const payment = await crystalPaymentHandler(cartId);
    storage.setCartId("")
		return NextResponse.json(payment);
	} catch (error) {
		console.error(error);
    return NextResponse.json("Error processing payment", { status: 500 });
	}
}
