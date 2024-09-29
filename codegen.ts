import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: 'https://api-dev.crystallize.digital/furnitut/discovery',
    documents: ['app/**/*.graphql', 'components/**/*.graphql'],
    ignoreNoDocuments: true,
    overwrite: true,
    config: {
        avoidOptionals: true,
    },
    generates: {
        'generated/': {
            preset: 'client',
        },
    },
};

export default config;
