import { getSession } from '@/core/auth.server';
import LoginForm from '@/components/login-form';
import { createOrderFetcher, type Order } from '@crystallize/js-api-client';
import { crystallizeClient } from '@/core/crystallize-client.server';
import { Price } from '@/components/price';
import { logout } from '@/core/auth.server';
import { Image } from '@/components/image';

const formatDate = (incomingDate: string) => {
    const date = new Date(incomingDate);
    return date.toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        minute: '2-digit',
        hour: '2-digit',
    });
};

type OrdersPageProps = { searchParams: Promise<{ error?: string }> };

export default async function AccountPage(props: OrdersPageProps) {
    const searchParams = await props.searchParams;
    const session = await getSession();

    if (!session) {
        return (
            <main className="page">
                <LoginForm error={searchParams.error} />
            </main>
        );
    }

    const customer = await crystallizeClient.nextPimApi(
        `#graphql
            query GetCustomer($identifier: String!) {
                customer(identifier: $identifier) {
                ... on Customer {
                        identifier
                        firstName
                        lastName
                        email
                        addresses {
                            city
                            country
                            postalCode
                            state
                            street
                            type
                        }
                    }
                }
          }`,
        {
            identifier: session.user.email,
        },
    );

    const orders = await createOrderFetcher(crystallizeClient).byCustomerIdentifier(
        session.user.email,
        {},
        {
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
        {},
        {
            reference: true,
        },
    );

    return (
        <main className="page min-h-screen">
            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-8">
                    <h1 className="font-medium">Orders</h1>
                    {orders?.orders.map((item) => {
                        const order = item as Order & { reference: string; createdAt: string };
                        return (
                            <details
                                key={order.id}
                                className="mt-2 bg-light rounded-2xl border border-muted hover:bg-light/70 cursor-pointer"
                            >
                                <summary className="px-6   flex justify-between py-4">
                                    <span>
                                        <h2 className="text-lg font-bold">{order?.reference}</h2>
                                        <span className="text-dark/90 text-sm">{formatDate(order.createdAt)}</span>
                                    </span>
                                    <div className="flex font-bold text-sm  text-right">
                                        <Price price={{ price: order?.total?.gross ?? 0 }} />
                                    </div>
                                </summary>
                                <div className="border-t border-muted">
                                    {order.cart.map((item: any, index: number) => {
                                        return (
                                            <div
                                                key={index}
                                                className="px-6 py-2 mb-2 gap-2 w-full flex items-center border-b border-muted"
                                            >
                                                <div className="flex justify-between w-full gap-8 ">
                                                    <div className="overflow-hidden relative rounded-md w-16 h-20 bg-soft border border-muted">
                                                        <Image
                                                            src={item.imageUrl}
                                                            altText={item.name}
                                                            className="object-contain"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col w-full justify-center">
                                                        <span className="text-base">{item.name}</span>
                                                        <span className="text-sm italic text-dark/70">{item.sku}</span>
                                                        <span className="text-sm">Qty: {item.quantity}</span>
                                                    </div>
                                                </div>
                                                <div className="text-base">
                                                    <Price price={{ price: item.price.gross }} />
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="flex flex-col gap-2  py-4 items-end mt-2 px-6">
                                    <div className="flex justify-between w-60 text-sm text-dark/70">
                                        <p>Net</p>
                                        <Price price={{ price: order?.total?.net ?? 0 }} />
                                    </div>
                                    <div className="flex justify-between w-60 text-sm text-dark/70">
                                        <p>Tax</p>
                                        <p>
                                            <Price
                                                price={{
                                                    price: (order?.total?.gross ?? 0) - (order?.total?.net ?? 0),
                                                }}
                                            />
                                        </p>
                                    </div>
                                    <div className="flex font-bold text-lgxl justify-between w-60">
                                        <p>Paid</p>
                                        <p>
                                            <Price price={{ price: order?.total?.gross ?? 0 }} />
                                        </p>
                                    </div>
                                </div>
                            </details>
                        );
                    })}
                </div>
                <div className="col-span-4">
                    <p className="font-medium">Account</p>

                    {!!customer.customer && (
                        <div className="p-8 bg-light rounded-xl mt-2 border border-muted">
                            <p className="text-lg font-bold">
                                {customer.customer?.firstName} {customer.customer?.lastName}
                            </p>
                            <p>{customer.customer?.email}</p>
                            <ul className="py-2">
                                {customer.customer?.addresses?.map((address: any, index: number) => (
                                    <li key={index}>
                                        <span className="block">{address?.street},</span>
                                        <span>{address?.postalCode}</span>
                                        <span>{address?.city}</span>
                                        <span className="block">{address?.country}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <form
                        action={async () => {
                            'use server';
                            await logout();
                        }}
                    >
                        <button
                            type="submit"
                            className="px-6 py-2 mt-4 font-medium  float-right rounded-lg bg-dark text-light hover:bg-dark/90 active:bg-dark/95"
                        >
                            Logut
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
