// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const BASIC_AUTH = Boolean(process.env.BASIC_AUTH);
const BASIC_USER = process.env.BASIC_USER;
const BASIC_PASSWORD = process.env.BASIC_PASSWORD;

export function middleware(request: NextRequest) {
    const basicAuth = request.headers.get('authorization');
    const url = request.nextUrl;

    // If basic auth is enabled, check the request headers
    if (BASIC_AUTH && BASIC_USER && BASIC_PASSWORD) {
        // If the request is authenticated, let the user continue
        if (basicAuth) {
            const authValue = basicAuth.split(' ')[1];
            const [user, pwd] = atob(authValue).split(':');

            // If the user is authenticated, allow the request to continue
            if (user === BASIC_USER && pwd === BASIC_PASSWORD) {
                // If the path ends with .pdf, handle it
                if (url.pathname.endsWith('.pdf')) {
                    url.pathname = `/pdf${url.pathname.replace(/\.pdf$/, '/pdf')}`;
                    return NextResponse.rewrite(url);
                }

                return NextResponse.next();
            }
        }

        // If the request is not authenticated, ask for credentials
        url.pathname = '/api/auth';
        return NextResponse.rewrite(url);
    }

    // If the path ends with .pdf, handle it
    if (url.pathname.endsWith('.pdf')) {
        url.pathname = `/pdf${url.pathname.replace(/\.pdf$/, '/pdf')}`;
        return NextResponse.rewrite(url);
    }

    return NextResponse.next();
}

// Limit middleware to only product routes if desired
export const config = {
    matcher: ['/', '/index', '/:path*'],
};
