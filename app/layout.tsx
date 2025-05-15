import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { Footer } from '@/components/footer';
import { CartProvider } from '@/components/cart/cart-provider';

import './globals.css';
import { apiRequest } from '@/utils/api-request';
import { FrontPageMetadataDocument } from '@/generated/graphql';

const manrope = Manrope({ subsets: ['latin'], display: 'swap' });

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
                <CartProvider>
                    {children}
                    <Footer />
                </CartProvider>
            </body>
        </html>
    );
}
