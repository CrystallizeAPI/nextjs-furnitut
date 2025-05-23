import { Footer } from '@/components/footer';

type ShopLayoutProps = { children: React.ReactNode };

export default async function ShopLayout({ children }: ShopLayoutProps) {
    return (
        <>
            {children}
            <Footer />
        </>
    );
}
