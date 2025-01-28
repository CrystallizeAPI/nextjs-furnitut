import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { Footer } from '@/components/footer';
import { CartProvider } from '@/components/cart/cart-context';
import { getCart } from './actions/get-cart';

import './globals.css';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Furnitut: Furniture for the future',
    description: 'Furnitut is a boilerplate created by Crystallize using Next.js.',
};

type LayoutProps = { children: React.ReactNode };

export default async function Layout({ children }: LayoutProps) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className={`${manrope.className} bg-soft`}>
                <CartProvider cartPromise={getCart()}>
                    {children}
                    <Footer />
                </CartProvider>
            </body>
        </html>
    );
}
