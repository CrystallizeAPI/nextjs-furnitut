import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FetchLayoutQuery, FetchLayoutDocument } from '@/generated/graphql';

import { apiRequest } from '@/utils/api-request';
import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { CartProvider } from '@/context/cart-context';
import { storage } from '@/core/storage.server';
import { fetchCart } from '@/use-cases/fetch-cart';
import { Cart } from '@/use-cases/contracts/cart';
import { SidebarCart } from '@/components/sidebar-cart';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Furnitut: Furniture for the future',
    description: 'Furnitut is a boilerplate created by Crystallize using Next.js.',
};

const fetchLayout = async <Result, Variables>(query: TypedDocumentNode<Result, Variables>, variables?: Variables) => {
    const response = (await apiRequest(query, variables)) as {
        data: FetchLayoutQuery;
    };

    return {
        header: response.data.browse?.header?.hits?.[0]?.children?.hits,
        footer: null,
    };
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const layout = await fetchLayout(FetchLayoutDocument);
    const getMyCart = async () => {
        const cartId = storage.getCartId();
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
                    <Header navigation={layout.header} />
                    {children}
                    <SidebarCart />
                    <Footer />
                </CartProvider>
            </body>
        </html>
    );
}
