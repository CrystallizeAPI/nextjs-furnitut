import { FetchCategoryDocument, FetchCategoryQuery } from '@/generated/graphql';
import { apiRequest } from '@/utils/api-request';
import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { Product } from '@/components/product';
import { Breadcrumb } from '@/components/breadcrumb';
import { Blocks } from '@/components/blocks';
const fetchData = async <Result, Variables>(query: TypedDocumentNode<Result, Variables>, variables: Variables) => {
    const response = (await apiRequest(query, variables)) as {
        data: FetchCategoryQuery;
    };

    return response.data.browse?.category?.hits?.[0];
};

export default async function Products({
    params,
}: {
    params: {
        category: string;
    };
}) {
    const category = await fetchData(FetchCategoryDocument, {
        path: `/products/${params.category}`,
    });
    const breadcrumbs = category?.breadcrumbs?.[0];
    const blocks = category?.blocks;
    return (
        <main className="pt-32">
            <div className="max-w-screen-2xl mx-auto border-b border-muted pb-2 mb-2 ">
                {breadcrumbs && <Breadcrumb breadcrumbs={breadcrumbs} />}
                <h1 className="text-4xl font-bold py-4">{category?.name}</h1>
            </div>
            <div className="flex flex-col items-center">
                <Blocks blocks={blocks || []} />
            </div>
            <div className="grid grid-cols-4 gap-2 max-w-screen-2xl mx-auto pt-12 border-t border-muted">
                {category?.children?.hits?.map(
                    (child) => child?.__typename === 'product' && <Product key={child?.path} product={child} />,
                )}
            </div>
        </main>
    );
}
