import { FetchAllStoriesDocument } from '@/generated/graphql';
import { apiRequest } from '@/utils/api-request';
import { Story } from '@/components/story';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Metadata } from 'next';

const fetchData = async () => {
    const response = await apiRequest(FetchAllStoriesDocument);
    const { title, children, breadcrumbs, meta } = response.data.browse?.category?.hits?.[0] ?? {};

    return { title, meta, children: children?.hits, breadcrumbs: breadcrumbs?.[0]?.filter((item) => !!item) };
};

export async function generateMetadata(): Promise<Metadata> {
    const { meta } = await fetchData();
    const { title, description, image } = meta ?? {};

    return {
        title,
        description: description?.[0].textContent ?? '',
        openGraph: {
            title: `${title} | Furnitut`,
            description: description?.[0].textContent ?? '',
            url: `/stories`,
            images: [
                {
                    url: image?.[0]?.url ?? '',
                    alt: image?.[0]?.altText ?? '',
                    height: image?.[0]?.height ?? 0,
                    width: image?.[0]?.width ?? 0,
                },
            ],
        },
    };
}

export default async function Stories() {
    const { title, children, breadcrumbs } = await fetchData();

    return (
        <main>
            <div className="page pb-6">
                {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
                <h1 className="text-4xl font-bold py-4">{title}</h1>
            </div>
            <div className="pt-12">
                <div className="grid grid-cols-2 gap-4 items-stretch max-w-(--breakpoint-2xl) mx-auto ">
                    {children?.map((story, index) => <Story story={story} key={index} />)}
                </div>
            </div>
        </main>
    );
}
