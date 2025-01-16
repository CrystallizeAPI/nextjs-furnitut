import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: 'https://api.crystallize.com/furnitut/discovery',
    documents: ['app/**/*.graphql', 'components/**/*.graphql', 'app/**/*.tsx'],
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
