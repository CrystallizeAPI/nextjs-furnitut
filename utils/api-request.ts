import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { GraphQLError, print } from 'graphql';

type GraphQLResponse<GraphQLData> =
    | {
          data: GraphQLData;
      }
    | {
          errors: GraphQLError[];
      };

const apiEndpoint = `https://api-dev.crystallize.digital/${process.env.CRYSTALLIZE_TENANT_IDENTIFIER}/discovery`;

export const apiRequest = async <Result, Variables>(
    query: TypedDocumentNode<Result, Variables>,
    variables?: Variables,
) => {
    const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: print(query), variables }),
    });
    if ('errors' in response) {
        throw new Error();
    }
    const result = (await response.json()) as Promise<GraphQLResponse<Result>>;
    return result;
};
