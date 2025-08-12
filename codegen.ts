import type { CodegenConfig } from '@graphql-codegen/cli';
import { getIntrospectionQuery, buildClientSchema } from 'graphql/utilities';

const SHOP_API_BASE_URL = `https://shop-api.crystallize.com`;
const TENANT_IDENTIFIER = process.env.CRYSTALLIZE_TENANT_IDENTIFIER;
const TOKEN_ID = process.env.CRYSTALLIZE_ACCESS_TOKEN_ID;
const TOKEN_SECRET = process.env.CRYSTALLIZE_ACCESS_TOKEN_SECRET;
const SHOP_API_ENDPOINT = `${SHOP_API_BASE_URL}/${TENANT_IDENTIFIER}/cart`;
const SHOP_API_AUTH_TOKEN_ENDPOINT = `${SHOP_API_BASE_URL}/${TENANT_IDENTIFIER}/auth/token`;
const DISCOVERY_API_ENDPOINT = `https://api.crystallize.com/${TENANT_IDENTIFIER}/discovery`;

if (!TOKEN_ID || !TOKEN_SECRET || !TENANT_IDENTIFIER) {
    throw new Error('Missing env variable(s) when generating api shop schema');
}

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
                    'shop-api': {
                        // @ts-expect-error - we can pass a loader function
                        loader: async function shopApiLoader() {
                            const introspectionQuery = getIntrospectionQuery();
                            const authTokenResponse = await fetch(SHOP_API_AUTH_TOKEN_ENDPOINT, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'X-Crystallize-Access-Token-Id': TOKEN_ID,
                                    'X-Crystallize-Access-Token-Secret': TOKEN_SECRET,
                                },
                                body: JSON.stringify({
                                    scopes: ['cart', 'cart:admin'],
                                    expiresIn: 1000,
                                }),
                            });

                            const authTokenJson = await authTokenResponse.json();

                            const response = await fetch(SHOP_API_ENDPOINT, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    Authorization: `Bearer ${authTokenJson.token}`,
                                },
                                body: JSON.stringify({ query: introspectionQuery }),
                            });

                            const json = await response.json();

                            return buildClientSchema(json.data);
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
