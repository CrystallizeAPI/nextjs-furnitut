import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
    // Static for now, we'll change this later
    const locale = process.env.CRYSTALLIZE_TENANT_LANGUAGE || 'en';

    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default,
    };
});
