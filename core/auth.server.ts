import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { createMailer } from './mail-server.server';
import { redirect } from 'next/navigation';

const secretKey = 'secret';
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('1 week')
        .sign(key);
}

export async function decrypt(input: string): Promise<any> {
    const { payload } = await jwtVerify(input, key, {
        algorithms: ['HS256'],
    });
    return payload;
}

export async function login(formData: FormData) {
    const email = formData.get('email');

    if (!email || typeof email !== 'string') {
        throw new Error('Invalid email');
    }

    const user = { email };
    const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    const token = await encrypt({ user, expires });

    const mailer = createMailer(process.env.MAILER_DSN!);
    await mailer('Magic Link', email, 'hello@crystallize.com', {
        html: `<a href=${process.env.NEXT_PUBLIC_CANONICAL_URL}/account/verify?token=${token}">Click here to log in</a>`,
        text: `Click here to log in: ${process.env.NEXT_PUBLIC_CANONICAL_URL}/account/verify?token=${token}`,
    });

    return { success: true };
}

export async function logout() {
    (await cookies()).set('session', '', { expires: new Date(0) });
}

export async function verifyToken(token: string) {
    try {
        const payload = await decrypt(token);

        if (new Date(payload.expires) < new Date()) {
            return { error: 'expired-token' };
        }

        const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
        const session = await encrypt({ user: payload.user, expires });
        console.log({ session });
        (await cookies()).set('session', session, { expires, httpOnly: true });
        redirect('/account');
    } catch (error) {
        console.error(error);
    }
}

export async function getSession() {
    const session = (await cookies()).get('session')?.value;
    if (!session) return null;
    return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
    const session = request.cookies.get('session')?.value;
    if (!session) return;
    const parsed = await decrypt(session);
    parsed.expires = new Date(Date.now() + 10 * 1000);
    const res = NextResponse.next();
    res.cookies.set({
        name: 'session',
        value: await encrypt(parsed),
        httpOnly: true,
        expires: parsed.expires,
    });
    return res;
}
