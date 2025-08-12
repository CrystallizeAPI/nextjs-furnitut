import { storage } from "@/core/storage.server";
import { qliroPaymentHandler } from "@/use-cases/payments/qliro";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { cartId } = await request.json();
    try {
        const payment = await qliroPaymentHandler(cartId);
        await storage.setCartId("")
        return NextResponse.json(payment);
    } catch (error) {
        console.error(error);
        return NextResponse.json("Error generating the intent for Qliro payment", { status: 500 });
    }
}
