'use cache';

import { cacheLife } from 'next/cache';
import { Footer } from '@/components/footer';

type ShopLayoutProps = { children: React.ReactNode };

export default async function CheckoutLayout({ children }: ShopLayoutProps) {
    cacheLife('max');

    return (
        <>
            {children}
            <Footer />
        </>
    );
}
