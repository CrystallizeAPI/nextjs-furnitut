import { CartOrderItem } from '@/components/order-page/item';
import { CartOrderTotal } from '@/components/order-page/total';
import { getTranslations } from 'next-intl/server';
import { fetchData } from '../utils';

type OrderProps = {
    params: Promise<{ id: string }>;
};

export default async function Order(props: OrderProps) {
    const params = await props.params;
    const { id } = params;
    const orderCart = await fetchData(id);
    const t = await getTranslations('Confirmation');

    return (
        <main className="mt-48 max-w-(--breakpoint-md) mx-auto">
            <div className="mt-10 ">
                <h1 className="font-bold text-3xl text-center text-balance">
                    {t('thankYou', { name: orderCart.customer?.firstName || '' })}
                </h1>
                <p className="mt-4 text-center text-balance">
                    {t('orderReceived', { email: orderCart?.customer?.identifier || 'your email' })}
                </p>
                <div className="mt-8 bg-light rounded-2xl border border-muted">
                    <span className="px-6  border-b border-muted flex justify-between py-4">
                        <span>
                            <h2 className="text-lg font-bold">{t('order')}</h2>
                            <i className="text-dark/70 text-sm">#{orderCart.id}</i>
                        </span>
                        <p className="font-bold text-lg">{orderCart?.reference}</p>
                    </span>

                    {orderCart.cart.map((item, index) => (
                        <CartOrderItem key={index} item={item} currency={orderCart.total?.currency} />
                    ))}
                    <CartOrderTotal
                        total={{
                            gross: orderCart.total?.gross || 0,
                            net: orderCart.total?.net || 0,
                            currency: orderCart.total?.currency || 'EUR',
                        }}
                    />
                </div>
            </div>
        </main>
    );
}
