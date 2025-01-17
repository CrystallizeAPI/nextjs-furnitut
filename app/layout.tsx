import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FetchLayoutDocument, MenuItemFragment } from '@/generated/graphql';

import { apiRequest } from '@/utils/api-request';
import { CartProvider } from '@/context/cart-context';
import { storage } from '@/core/storage.server';
import { fetchCart } from '@/use-cases/fetch-cart';
import { Cart } from '@/use-cases/contracts/cart';
import { SidebarCart } from '@/components/sidebar-cart';

import './globals.css';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Furnitut: Furniture for the future',
    description: 'Furnitut is a boilerplate created by Crystallize using Next.js.',
};

const fetchLayout = async () => {
    const response = await apiRequest(FetchLayoutDocument);

    const navigation = (
        response.data.browse?.header?.hits?.[0]?.children?.hits as MenuItemFragment[] | undefined
    )?.reduce<{ href: string; name: string }[]>((acc, nav) => {
        const link = !!nav && 'link' in nav ? nav.link : undefined;
        const href = !!link ? link.url || link.item?.items?.[0]?.path : undefined;
        !!href && acc.push({ href, name: nav.name ?? '' });
        return acc;
    }, []);

    return { navigation };
};

type LayoutProps = { children: React.ReactNode };

export default async function Layout({ children }: LayoutProps) {
    const { navigation } = await fetchLayout();
    const getMyCart = async () => {
        const cartId = await storage.getCartId();
        const cart = cartId
            ? await fetchCart(cartId)
            : {
                  items: [],
                  total: {
                      currency: 'eur',
                      gross: 0,
                      net: 0,
                      taxAmount: 0,
                  },
              };
        return cart as Cart;
    };

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className={`${manrope.className} bg-soft`}>
                <CartProvider cartPromise={getMyCart()}>
                    <Header navigation={navigation} />
                    {children}
                    <SidebarCart />
                    <Footer navigation={navigation} />
                </CartProvider>
            </body>
        </html>
    );
}
