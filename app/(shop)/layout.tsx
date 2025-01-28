import { Header } from '@/components/header';

type ShopLayoutProps = { children: React.ReactNode };

export default async function ShopLayout({ children }: ShopLayoutProps) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}
