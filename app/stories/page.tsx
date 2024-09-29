import { FetchAllStoriesQuery } from '@/generated/graphql';
import { FetchAllStoriesDocument } from '@/generated/graphql';
import { apiRequest } from '@/utils/api-request';
import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { Story } from '@/components/story';
import { Breadcrumb } from '@/components/breadcrumb';
import Link from 'next/link';
const fetchData = async <Result, Variables>(query: TypedDocumentNode<Result, Variables>) => {
    const response = (await apiRequest(query)) as {
        data: FetchAllStoriesQuery;
    };

    return response.data.browse?.category?.hits?.[0];
};

export default async function Products() {
    const stories = await fetchData(FetchAllStoriesDocument);
    if (stories === undefined) return null;
    const children = stories?.children.hits;
    const breadcrumbs = stories?.breadcrumbs?.[0];
    return (
        <main className="page">
            <div>
                {breadcrumbs && <Breadcrumb breadcrumbs={breadcrumbs} />}
                <h1 className="text-4xl font-bold py-4">{stories?.title}</h1>
            </div>
            <div className="grid grid-cols-2 gap-4 items-stretch">
                {children.map((story: any, index: number) => {
                    return <Story story={story} key={index} />;
                })}
            </div>
        </main>
    );
}
