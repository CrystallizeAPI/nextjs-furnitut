import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        ppr: 'incremental',
    },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
