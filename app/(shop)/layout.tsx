'use cache';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Suspense } from 'react';

type ShopLayoutProps = { children: React.ReactNode };

export default async function ShopLayout({ children }: ShopLayoutProps) {
    return (
        <>
            <Header />
            <Suspense fallback={<div className="h-screen" />}>{children}</Suspense>
            <Footer />
        </>
    );
}
