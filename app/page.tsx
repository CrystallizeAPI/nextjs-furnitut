import { FetchLandingPageQuery, FetchLandingPageDocument } from '@/generated/graphql';
import { apiRequest } from '@/utils/api-request';
import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { Blocks } from '@/components/blocks';

const fetchLandingPage = async <Result, Variables>(
    query: TypedDocumentNode<Result, Variables>,
    variables?: Variables,
) => {
    const response = (await apiRequest(query, variables)) as {
        data: FetchLandingPageQuery;
    };

    return {
        blocks: response.data.browse?.landingPage?.hits?.[0]?.blocks,
    };
};

export default async function LandingPage() {
    const { blocks } = await fetchLandingPage(FetchLandingPageDocument);
    return (
        <main className="flex min-h-screen flex-col items-center">
            <Blocks blocks={blocks || []} paddingFirstBlock={true} />
        </main>
    );
}
