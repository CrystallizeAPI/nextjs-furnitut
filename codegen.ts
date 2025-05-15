import type { CodegenConfig } from '@graphql-codegen/cli';

const tenantIdentifier = process.env.CRYSTALLIZE_TENANT_IDENTIFIER;

const SHOP_API_ENDPOINT = `https://shop-api.crystallize.com/${tenantIdentifier}/cart`;
const DISCOVERY_API_ENDPOINT = `https://api.crystallize.com/${tenantIdentifier}/discovery`;

const config: CodegenConfig = {
    ignoreNoDocuments: true,
    overwrite: true,
    config: {
        avoidOptionals: true,
    },
    generates: {
        'generated/shop/': {
            schema: [
                {
                    [SHOP_API_ENDPOINT]: {
                        headers: {
                            Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
                        },
                    },
                },
            ],
            documents: ['graphql/shop/**/*.shop.graphql'],
            preset: 'client',
            presetConfig: { fragmentMasking: false },
            plugins: [{ add: { content: '//@ts-nocheck' } }],
        },
        'generated/discovery/': {
            schema: DISCOVERY_API_ENDPOINT,
            documents: ['app/**/*.graphql', 'components/**/*.graphql'],
            preset: 'client',
            presetConfig: { fragmentMasking: false },
            plugins: [{ add: { content: '//@ts-nocheck' } }],
        },
    },
};

export default config;
