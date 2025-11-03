'use cache';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

type ShopLayoutProps = { children: React.ReactNode };

export default async function ShopLayout({ children }: ShopLayoutProps) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
