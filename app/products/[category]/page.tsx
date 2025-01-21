import { FetchCategoryDocument } from '@/generated/graphql';
import { apiRequest } from '@/utils/api-request';
import { Product } from '@/components/product';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Blocks } from '@/components/blocks';
import classnames from 'classnames';

export const revalidate = 60;

type ProductsProps = {
    params: Promise<{ category: string }>;
};

const fetchData = async (path: string) => {
    const response = await apiRequest(FetchCategoryDocument, { path });
    const { blocks, breadcrumbs, name, children } = response.data.browse?.category?.hits?.[0] ?? {};

    return {
        name,
        blocks,
        breadcrumbs: breadcrumbs?.[0]?.filter((item) => !!item),
        children: children?.hits?.filter((item) => item?.__typename === 'product'),
    };
};

export default async function Products(props: ProductsProps) {
    const params = await props.params;
    const { breadcrumbs, name, blocks, children } = await fetchData(`/products/${params.category}`);

    return (
        <main>
            <div className="page  pb-6">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                <h1 className="text-4xl font-bold py-4">{name}</h1>
            </div>
            <div className={classnames('flex flex-col items-center pt-12', !!blocks?.length && 'pb-12')}>
                <Blocks blocks={blocks} />
            </div>
            <div className={classnames('grid grid-cols-4 gap-2 max-w-screen-2xl mx-auto')}>
                {children?.map((child) => <Product key={child?.path} product={child} />)}
            </div>
        </main>
    );
}
