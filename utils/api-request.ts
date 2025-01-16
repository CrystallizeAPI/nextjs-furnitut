import { print } from 'graphql';

import { TypedDocumentNode } from '@graphql-typed-document-node/core';

const apiEndpoint = `https://api.crystallize.com/${process.env.CRYSTALLIZE_TENANT_IDENTIFIER}/discovery`;

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
        throw new Error();
    }

    const result = await response.json();

    if ('errors' in result) {
        throw new Error();
    }

    return result as { data: TResult };
};
