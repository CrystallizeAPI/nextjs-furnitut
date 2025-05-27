import { CartOrderItem } from '@/components/order-page/item';
import { CartOrderTotal } from '@/components/order-page/total';
import { crystallizeClient } from '@/core/crystallize-client.server';
import { createOrderFetcher, type Order } from '@crystallize/js-api-client';

export const fetchData = async (orderId: string) => {
    const response = await createOrderFetcher(crystallizeClient).byId(
        orderId,
        {},
        {},
        {
            reference: true,
            customer: {
                identifier: true,
                firstName: true,
                lastName: true,
                addresses: {
                    city: true,
                    country: true,
                    postalCode: true,
                    state: true,
                    street: true,
                    type: true,
                },
            },
        },
    );
    return response as Order & { reference: string };
};

type OrderProps = {
    params: Promise<{ id: string }>;
};

export default async function Order(props: OrderProps) {
    const params = await props.params;
    const { id } = params;
    const orderCart = await fetchData(id);

    return (
        <main className="mt-48 max-w-(--breakpoint-md) mx-auto">
            <div className="mt-10 ">
                <h1 className="font-bold text-3xl text-center text-balance">
                    Thank you {orderCart.customer?.firstName}!
                </h1>
                <p className="mt-4 text-center text-balance">
                    We&apos;re on it! Your order is already in motion, and a confirmation email is on its way to{' '}
                    <i>{orderCart?.customer?.identifier}</i>. Keep an eye out—it&apos;ll be there shortly!
                </p>
                <div className="mt-8 bg-light rounded-2xl border border-muted">
                    <span className="px-6  border-b border-muted flex justify-between py-4">
                        <span>
                            <h2 className="text-lg font-bold">Order</h2>
                            <i className="text-dark/70 text-sm">#{orderCart.id}</i>
                        </span>
                        <p className="font-bold text-lg">{orderCart?.reference}</p>
                    </span>

                    {orderCart.cart.map((item, index) => <CartOrderItem key={index} item={item} />)}
                    <CartOrderTotal total={{
                        gross: orderCart.total?.gross || 0,
                        net: orderCart.total?.net || 0,
                    }} />
                </div>
            </div>
        </main>
    );
}
