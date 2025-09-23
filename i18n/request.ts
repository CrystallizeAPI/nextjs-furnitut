import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
    // Static for now, we'll change this later
    const locale = process.env.NEXT_PUBLIC_STOREFRONT_LANGUAGE || 'en';

    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default,
    };
});
