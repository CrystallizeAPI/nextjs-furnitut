import { print } from 'graphql';

import { TypedDocumentNode } from '@graphql-typed-document-node/core';

const apiEndpoint = `https://api.crystallize.com/${process.env.NEXT_PUBLIC_CRYSTALLIZE_TENANT_IDENTIFIER}/discovery`;
const apiLanguage: string = process.env.CRYSTALLIZE_TENANT_LANGUAGE || 'en';
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
            query: print(query), variables:
            {
                ...variables,
                language: apiLanguage,
                selectedPriceVariant: selectedPrice,
                fallbackPriceVariant: fallbackPrice
            }
        }),
    });

    console.log(variables);
    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const result = await response.json();

    if ('errors' in result) {
        throw new Error();
    }

    return result as { data: TResult };
};
