import { FetchCategoryDocument, FetchCategoryQuery } from '@/generated/graphql';
import { apiRequest } from '@/utils/api-request';
import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { Product } from '@/components/product';

const fetchData = async <Result, Variables>(query: TypedDocumentNode<Result, Variables>, variables: Variables) => {
    const response = (await apiRequest(query, variables)) as {
        data: FetchCategoryQuery;
    };

    return response.data.browse?.story?.hits?.[0];
};

export default async function Products({
    params,
}: {
    params: {
        story: string;
    };
}) {
    const story = await fetchData(FetchCategoryDocument, {
        path: `/stories/${params.story}`,
    });
    return (
        <main className="page">
            <h1 className="text-2xl font-bold py-4">{story?.title}</h1>
        </main>
    );
}
