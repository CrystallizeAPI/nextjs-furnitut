import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { FetchAllCategoriesDocument } from '@/generated/graphql';
import { apiRequest } from '@/utils/api-request';
import Link from 'next/link';
import { Blocks } from '@/components/blocks';

type Slug = 'products' | 'room';

type PageProps = {
    params: Promise<{ slug: 'products' | 'room' }>;
};

export async function generateStaticParams() {
    return [{ slug: 'products' }, { slug: 'room' }];
}

const fetchData = async (slug: Slug) => {
    const response = await apiRequest(FetchAllCategoriesDocument, { path: `/${slug}` });
    const { blocks, breadcrumbs, name, children } = response.data.browse?.category?.hits?.[0] ?? {};

    return { name, blocks, breadcrumbs: breadcrumbs?.[0]?.filter((item) => !!item), children: children?.hits };
};

export default async function Page({ params }: PageProps) {
    const { slug } = await params;

    if (slug !== 'products' && slug !== 'room') {
        return notFound();
    }

    const { name, children, breadcrumbs, blocks } = await fetchData(slug);

    return (
        <main>
            <div className="page  pb-6">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                <h1 className="text-4xl font-bold py-4">{name}</h1>
                <div className="gap-4 flex">
                    {children?.map((child) => {
                        const href = !!child && 'path' in child ? child?.path : undefined;

                        return !!href ? (
                            <Link href={href} key={child?.id} className="bg-dark text-light rounded-full px-4 py-2">
                                {child?.name}
                            </Link>
                        ) : null;
                    })}
                </div>
            </div>
            <div className="min-h-screen pt-12">
                <Blocks blocks={blocks} />
            </div>
        </main>
    );
}
