'use client';

import { useActionState } from 'react';
import { InputField } from './input';
import { onSubmit } from './login-form-submit';
import { useTranslations } from 'next-intl';
export default function LoginForm({ error }: { error?: string }) {
    const [, formAction, isPending] = useActionState(onSubmit, null);
    const t = useTranslations('Account');

    return (
        <div className="flex flex-col justify-center items-center min-h-[50vh]">
            <div className="-translate-y-20 w-full rounded-xl max-w-96 mx-auto">
                <div className="px-2">
                    <h1 className="text-2xl font-bold ">{t('login')}</h1>
                    <p className="mb-4">{t('loginDescription')}</p>
                </div>

                <form action={formAction}>
                    <div className="bg-light  rounded-xl w-full border border-muted">
                        <InputField type="email" name="email" label={t('email')} />
                    </div>

                    <button
                        type="submit"
                        disabled={isPending}
                        className="px-6 py-2 mt-4 font-medium  float-right rounded-lg bg-dark text-light hover:bg-dark/90 active:bg-dark/95"
                    >
                        {t('login')}
                    </button>
                </form>

                {error && <div className="text-red-500 mt-4">{t('somethingWentWrong')}</div>}
            </div>
        </div>
    );
}
