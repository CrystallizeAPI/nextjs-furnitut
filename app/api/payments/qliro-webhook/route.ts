import { qliroPaymentWebhookHandler } from "@/use-cases/payments/qliro";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const notificatition = await request.json();
    try {
        if (notificatition) {
            await qliroPaymentWebhookHandler(notificatition);
        }
        return NextResponse.json({
            CallbackResponse: "received"
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json("Error receiving notification from Qliro payment", { status: 500 });
    }
}
