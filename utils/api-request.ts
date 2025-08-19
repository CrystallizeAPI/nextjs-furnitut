import { print } from 'graphql';

import { TypedDocumentNode } from '@graphql-typed-document-node/core';

const apiEndpoint = `https://api.crystallize.com/${process.env.NEXT_PUBLIC_CRYSTALLIZE_TENANT_IDENTIFIER}/discovery`;
const apiLanguage: string = process.env.CRYSTALLIZE_TENANT_LANGUAGE || 'en';

export const apiRequest = async <TResult, TVariables = {}>(
    query: TypedDocumentNode<TResult, TVariables>,
    ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
) => {
    const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: print(query), variables: { ...variables, language: apiLanguage } }),
    });



    if (!response.ok) {
        const result42 = await response.json();

        console.log(result42);
        console.log(JSON.stringify({ query: print(query), variables: { ...variables, language: apiLanguage } }));
        console.log(response);
        throw new Error(response.statusText);
    }

    const result = await response.json();

    if ('errors' in result) {
        throw new Error();
    }

    return result as { data: TResult };
};
