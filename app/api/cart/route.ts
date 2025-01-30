import { getCart } from "@/app/actions/get-cart";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const cart = await getCart();
        return NextResponse.json(cart.cart);
    } catch (err) {
        return Response.json(err, { status: 400 });
    }
}