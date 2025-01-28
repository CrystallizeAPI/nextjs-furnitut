import { verifyToken } from '@/core/auth.server';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const token = searchParams.get('token');

    if (!token) {
        console.error('Missing token');
        return;
    }

    try {
        const result = await verifyToken(token);
        if (result?.error) {
            return NextResponse.redirect(new URL(`/account?error=${result.error}`, request.url));
        }

        return NextResponse.redirect(new URL('/account', request.url));
    } catch (error) {
        console.error(error);
    }
}
