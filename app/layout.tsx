import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { Footer } from '@/components/footer';
import { CartProvider } from '@/components/cart/cart-provider';

import './globals.css';
import { apiRequest } from '@/utils/api-request';
import { FrontPageMetadataDocument } from '@/generated/graphql';

const manrope = Manrope({ subsets: ['latin'], display: 'swap' });

export async function generateMetadata(): Promise<Metadata> {
    const { data } = await apiRequest(FrontPageMetadataDocument);

    const meta = data.browse?.landingPage?.hits?.[0]?.meta;
    const title = meta?.title ?? '';
    const description = meta?.description[0].textContent;
    const image = meta?.image?.[0];
    const baseUrl  = new URL(process.env.NEXT_PUBLIC_CANONICAL_URL ?? 'http://localhost:3000')

    return {
        title: {
            default: title,
            template: '%s | Furnitut',
            absolute: `${title} | Furnitut`,
        },
        alternates: {
            canonical: baseUrl
        },
        metadataBase: baseUrl,
        description,
        creator: 'Crystallize Team',
        openGraph: {
            title: `${title} | Furnitut`,
            description,
            images: [
                {
                    url: image?.url ?? '',
                    alt: image?.altText ?? '',
                    height: image?.height ?? 0,
                    width: image?.width ?? 0,
                },
            ],
        },
    };
}

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
