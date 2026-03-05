import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        ppr: 'incremental',
    },
    async redirects() {
        return [
            {
                source: '/index',
                destination: '/',
                permanent: true,
            },
        ];
    },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
