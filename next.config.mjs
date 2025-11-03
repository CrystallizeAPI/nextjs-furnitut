import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */

const nextConfig = {
    cacheComponents: true,
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
