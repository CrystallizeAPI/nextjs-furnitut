import { print } from 'graphql';

import { TypedDocumentNode } from '@graphql-typed-document-node/core';

export const camelCaseHyphens = (string: string): string => string.replace(/-([a-z])/g, (g) => g[1].toUpperCase());

const normalizeForGraphQLName = (name: string): string => {
    const startsWithValidChars = /^[_a-zA-Z]/;
    if (!startsWithValidChars.test(name)) {
        return normalizeForGraphQLName(`_${name}`);
    }
    const validChars = /^[_a-zA-Z0-9]+$/;
    if (!validChars.test(name)) {
        const chars = name.split('');
        const replacedChars = chars.map((char) => {
            if (validChars.test(char)) {
                return char;
            } else {
                return '_';
            }
        });
        return replacedChars.join('');
    }
    return name;
};

export const normalizeForGraphQL = (string: string): string => normalizeForGraphQLName(camelCaseHyphens(string));

const apiEndpoint = `https://api.crystallize.com/${process.env.CRYSTALLIZE_TENANT_IDENTIFIER}/discovery`;

const apiLanguage: string = normalizeForGraphQL(process.env.CRYSTALLIZE_TENANT_LANGUAGE || 'en');

const selectedPrice: string = process.env.CRYSTALLIZE_SELECTED_PRICE || 'default';
const fallbackPrice: string = process.env.CRYSTALLIZE_FALLBACK_PRICE || 'default';

export const apiRequest = async <TResult, TVariables = {}>(
    query: TypedDocumentNode<TResult, TVariables>,
    ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
) => {
    const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: print(query),
            variables: {
                ...variables,
                language: apiLanguage,
                selectedPriceVariant: selectedPrice,
                fallbackPriceVariant: fallbackPrice,
            },
        }),
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const result = await response.json();

    if ('errors' in result) {
        console.log('GraphQL errors:', result.errors);
        throw new Error(`GraphQL errors: ${JSON.stringify(result.errors)}`);
    }

    return result as { data: TResult };
};
