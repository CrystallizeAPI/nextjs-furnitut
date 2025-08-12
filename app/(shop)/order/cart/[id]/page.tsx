import { fetchCart } from "@/use-cases/fetch-cart";
import { Suspense, use } from "react";
import { fetchData } from "../../[id]/page";
import { CartOrderTotal } from "@/components/order-page/total";
import { CartOrderItem } from "@/components/order-page/item";

type OrderProps = {
    params: Promise<{ id: string }>;
};


export default async function CartWaitingOrder(props: OrderProps) {
    const params = await props.params;
    const { id } = params;
    const cart = await fetchCart(id);
    async function waitForCartToHaveOrderId(id: string) {
        let retry = 0;
        while (retry < 10) {
            const cart = await fetchCart(id);
            if (cart.orderId) {
                const orderCart = await fetchData(cart.orderId);
                return orderCart;
            }
            await new Promise(res => setTimeout(res, 1000));
            retry++;
        }
        throw new Error('Cart never got an orderId');
    }

    function CartContent({ id }: { id: string }) {
        const orderCart = use(waitForCartToHaveOrderId(id));
        return <span className="px-6  border-b border-muted flex justify-between py-4">
            <span>
                <h2 className="text-lg font-bold">Order</h2>
                <i className="text-dark/70 text-sm">#{orderCart.id}</i>
            </span>
            <p className="font-bold text-lg">{orderCart?.reference}</p>
        </span>
    }
    return (
        <main className="mt-48 max-w-(--breakpoint-md) mx-auto">
            <div className="mt-10 ">
                <h1 className="font-bold text-3xl text-center text-balance">
                    Thank you
                </h1>
                <p className="mt-4 text-center text-balance">
                    We&apos;re on it! Your order is beein created, and a confirmation email is on its way. Keep an eye out—it&apos;ll be there shortly!
                </p>
                <div className="mt-8 bg-light rounded-2xl border border-muted">
                    <Suspense fallback={<span className="px-6  border-b border-muted flex justify-between py-4">
                        <span>
                            <h2 className="text-lg font-bold">Cart</h2>
                            <i className="text-dark/70 text-sm">#{cart.id}</i>
                        </span>
                    </span>}>
                        <CartContent id={cart.id} />
                    </Suspense>
                    {cart.items.map((item, index) => <CartOrderItem key={index} item={item} />)}
                    <CartOrderTotal total={cart.total} />
                </div>
            </div>
        </main>
    );
}
