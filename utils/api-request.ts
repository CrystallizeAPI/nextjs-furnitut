import { print } from 'graphql';

import { TypedDocumentNode } from '@graphql-typed-document-node/core';

const apiEndpoint = `https://api.crystallize.com/${process.env.NEXT_PUBLIC_CRYSTALLIZE_TENANT_IDENTIFIER}/discovery`;

export const apiRequest = async <TResult, TVariables = {}>(
    query: TypedDocumentNode<TResult, TVariables>,
    ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
) => {
    const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: print(query), variables }),
    });


    if (!response.ok) {
        const errorBody = await response.text();

        console.error('GraphQL request failed:', response.status, errorBody);
        throw new Error(`[${response.status}] ${response.statusText} - See console for full error body.`);

    }

    const result = await response.json();

    if ('errors' in result) {
        // Throw to make sure we catch GraphQL-specific errors
        throw new Error(result.errors.map((e: any) => e.message).join('\n'));
    }


    return result as { data: TResult };
};
