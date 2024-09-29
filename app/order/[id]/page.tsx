import { Price } from '@/components/price';
import { crystallizeClient } from '@/core/crystallize-client.server';
import { createOrderFetcher } from '@crystallize/js-api-client';

const fetchData = async (orderId: string) => {
    const response = await createOrderFetcher(crystallizeClient).byId(orderId);
    return response;
};

export default async function Order({
    params,
}: {
    params: {
        id: string;
    };
}) {
    const { id } = params;

    const orderCart = await fetchData(id);

    return (
        <main className="page w-3/4 mx-auto">
            <div className="mt-10">
                <h1 className="font-bold text-3xl">Order Confirmation</h1>
                <p className="mt-4">Your order has been received. Order Id is {orderCart.id}.</p>
                <div className="mt-2">
                    {orderCart.cart.map((item: any, index: number) => {
                        return (
                            <div key={index} className="px-3 py-2 mb-2 gap-2 flex items-center">
                                <div className="img-container overflow-hidden rounded-md img-contain w-[50px] h-[70px]">
                                    <img src={item.imageUrl} />
                                </div>
                                <div className="flex w-full justify-between">
                                    <div>
                                        <p className="font-semibold">
                                            {item.name} x {item.quantity}
                                        </p>
                                    </div>

                                    <Price price={{ price: item.price.gross }} />
                                </div>
                            </div>
                        );
                    })}
                    <div className="flex flex-col gap-4 border-t-2 py-4 items-end px-4 mt-5">
                        <div className="flex justify-between w-60">
                            <p>Net</p>

                            <Price price={{ price: orderCart?.total?.net ?? 0 }} />
                        </div>
                        <div className="flex justify-between w-60">
                            <p>Tax</p>
                            <p>
                                <Price
                                    price={{
                                        price: (orderCart?.total?.gross ?? 0) - (orderCart?.total?.net ?? 0),
                                    }}
                                />
                            </p>
                        </div>
                        <div className="flex font-bold text-xl justify-between w-60">
                            <p>Paid</p>
                            <p>
                                <Price price={{ price: orderCart?.total?.gross ?? 0 }} />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
