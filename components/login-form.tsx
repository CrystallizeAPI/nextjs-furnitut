'use client';

import { useActionState } from 'react';
import { InputField } from './input';
import { onSubmit } from './login-form-submit';

export default function LoginForm({ error }: { error?: string }) {
    const [, formAction, isPending] = useActionState(onSubmit, null);

    return (
        <div className="flex flex-col justify-center items-center min-h-[50vh]">
            <div className="-translate-y-20 w-full rounded-xl max-w-96 mx-auto">
                <div className="px-2">
                    <h1 className="text-2xl font-bold ">Login</h1>
                    <p className="mb-4">We&apos;ll send you an email with login details.</p>
                </div>

                <form action={formAction}>
                    <div className="bg-light  rounded-xl w-full border border-muted">
                        <InputField type="email" name="email" label="Email" />
                    </div>

                    <button
                        type="submit"
                        disabled={isPending}
                        className="px-6 py-2 mt-4 font-medium  float-right rounded-lg bg-dark text-light hover:bg-dark/90 active:bg-dark/95"
                    >
                        Login
                    </button>
                </form>

                {error && <div className="text-red-500 mt-4">Something went wrong. Please try again.</div>}
            </div>
        </div>
    );
}
