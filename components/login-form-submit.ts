'use server';

import { login } from '@/core/auth.server';

export const onSubmit = async (prevState: FormData | null | void, formData: FormData | null) => {
    if (!formData) {
        return;
    }

    await login(formData);
};
