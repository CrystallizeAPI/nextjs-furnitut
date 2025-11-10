// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;
    // If the path ends with .pdf, log or handle it
    if (pathname.endsWith('.pdf')) {
        request.nextUrl.pathname = `/pdf${pathname.replace(/\.pdf$/, '/pdf')}`;
        return NextResponse.rewrite(request.nextUrl);
    }

    return NextResponse.next();
}

// Limit middleware to only product routes if desired
export const config = {
    matcher: ['/products/:path*', '/entertainment/:path*'],
};
