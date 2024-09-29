import { FetchProductDocument, FetchProductQuery, Paragraph } from '@/generated/graphql';
import classNames from 'classnames';
import { ContentTransformer } from '@crystallize/reactjs-components';
import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { apiRequest } from '@/utils/api-request';
import { Breadcrumb } from '@/components/breadcrumb';
import { Price } from '@/components/price';
import { Image } from '@/components/image';
import { VariantSelector, findSuitableVariant } from '@/components/variant-selector';
import { Slider } from '@/components/slider';
import { Product } from '@/components/product';
import { Accordination } from '@/components/accordination';
import { AddToCartButton } from '@/components/add-to-cart-button';
import { ParagraphCollection } from '@/components/paragraph-collection';
// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
//https://developers.google.com/search/docs/appearance/structured-data/product-variants

const details = [
    {
        title: 'Frame',
        description: 'FSC-certified wooden frame in solid wood and plywood with elastic webbing. Legs with felt pads',
    },
    {
        title: 'Cushions',
        description:
            'Inner cushions with 50% recycled PE fiber balls, and 50% recycled shredded foam, made from leftover material in production.',
    },
    {
        title: 'Cover',
        description: 'Removable covers in fabric or leather.',
    },
    {
        title: 'Construction',
        description:
            'Wooden frame of solid wood and veneered side/back support with loose cushions consisting of 50% recycled fiberball from recycled PE and 50% shreaded foam.',
    },
    {
        title: 'Country of origin',
        description: 'Lithuania',
    },
    {
        title: 'Warrenty',
        description:
            '5-year product warranty. Spare parts are available throughout the 5-year warranty period. Please contact the HAY sales team for further information about the warranty terms and conditions.',
    },
    {
        title: 'Sustainability',
        description:
            'HAY focuses on developing long-lasting products that minimise our environmental impact. We optimise the use of sustainable materials such as recycled materials, FSC-certified wood and water-based lacquer, with a growing number of eco-certified products. We have strict regulatory requirements, and the majority of our products are tested to comply with international standards for strength, durability and safety.',
    },
];

const fetchData = async <Result, Variables>(query: TypedDocumentNode<Result, Variables>, variables: Variables) => {
    const response = (await apiRequest(query, variables)) as {
        data: FetchProductQuery;
    };
    return response.data.browse?.product?.hits?.[0];
};

export default async function Products({
    params,
    searchParams,
}: {
    params: {
        category: string;
        product: string;
    };
    searchParams: Record<string, string>;
}) {
    const product = await fetchData(FetchProductDocument, {
        path: `/products/${params.category}/${params.product}`,
    });
    const story = (product?.story ?? []).filter(
        (paragraph): paragraph is Paragraph => paragraph !== null && paragraph !== undefined,
    );

    const currentVariant = findSuitableVariant(product?.variants, searchParams) ?? product?.variants?.[0];

    const { dimensions } = currentVariant;

    return (
        <>
            <main className="page">
                <div className="grid grid-cols-12 gap-24 rounded-xl">
                    <div className="col-span-7">
                        <Breadcrumb breadcrumbs={product?.breadcrumbs[0]} />
                        <div className="mt-6 grid grid-cols-2 mb-6 pb-6 ">
                            {currentVariant?.images?.map((image, index: number) => {
                                return (
                                    <div
                                        className={classNames(
                                            'overflow-hidden rounded-2xl border border-muted bg-light',
                                            { 'col-span-2': index === 0 },
                                        )}
                                        key={index}
                                    >
                                        <Image {...image} preserveRatio={true} />
                                    </div>
                                );
                            })}
                        </div>
                        <Accordination defaultOpen={true} className="py-8" title="Product">
                            <div className="text-lg leading-10 font-normal">
                                <ParagraphCollection paragraphs={story} />
                            </div>
                        </Accordination>

                        {details && (
                            <Accordination title="Details" defaultOpen={true} className="py-8">
                                {details.map((detail, index) => (
                                    <div className="grid grid-cols-4 gap-y-4 py-8 pr-24 text-lg" key={index}>
                                        <span className="font-bold">{detail.title}</span>
                                        <span className="col-span-3">{detail.description}</span>
                                    </div>
                                ))}
                            </Accordination>
                        )}
                        {dimensions && (
                            <Accordination title="Dimensions" defaultOpen={true} className="py-8">
                                <div className="grid grid-cols-2 gap-x-48 gap-y-4 py-12 pr-24 text-lg">
                                    {dimensions.height && (
                                        <div className="flex justify-between">
                                            <span className="font-bold">Height</span>
                                            <span>
                                                {dimensions.height} {dimensions.heightUnit}
                                            </span>
                                        </div>
                                    )}
                                    {dimensions.width && (
                                        <div className="flex justify-between">
                                            <span className="font-bold">Width</span>
                                            <span>
                                                {dimensions.width} {dimensions.widthUnit}
                                            </span>
                                        </div>
                                    )}
                                    {dimensions.depth && (
                                        <div className="flex justify-between">
                                            <span className="font-bold">Depth</span>
                                            <span>
                                                {dimensions.depth} {dimensions.depthUnit}
                                            </span>
                                        </div>
                                    )}
                                    {dimensions.weight && (
                                        <div className="flex justify-between">
                                            <span className="font-bold">Weight</span>
                                            <span>
                                                {dimensions.weight} {dimensions.weightUnit}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </Accordination>
                        )}
                    </div>

                    <div className="col-span-5 relative">
                        <div className="flex justify-between items-center opacity-50">
                            <span className="text-xs font-bold">{currentVariant.sku}</span>
                            <span>
                                <b>HAY</b>
                            </span>
                        </div>
                        <div className="py-4 sticky top-20">
                            <h1 className="text-2xl font-bold">
                                {product?.name} {currentVariant.name}
                            </h1>
                            <div className="line-clamp-2">
                                <ContentTransformer json={product?.description?.[0]} />
                            </div>
                            {[...product.variants].length > 1 && (
                                <div className="py-4">
                                    <VariantSelector
                                        variants={product?.variants}
                                        searchParams={searchParams}
                                        path={product?.path || '/'}
                                    />
                                </div>
                            )}
                            <div className="text-2xl flex items-center font-bold py-4 justify-between w-full">
                                <Price price={currentVariant?.defaultPrice} />

                                <AddToCartButton
                                    variantName={currentVariant.name || product?.name || 'Variant'}
                                    productName={product?.name || 'Variant'}
                                    sku={currentVariant.sku}
                                    image={currentVariant.images?.[0]?.variants?.[0]}
                                    quantity={1}
                                    price={{
                                        currency: 'EUR',
                                        gross: currentVariant.price || 0,
                                        net: currentVariant.price || 0,
                                        taxAmount: 0,
                                        discounts: [],
                                    }}
                                />
                            </div>
                            <Accordination className="py-8 text-lg" title="Matching products (3)">
                                Something something
                            </Accordination>
                            <div className="border-muted border-t"></div>
                        </div>
                    </div>
                </div>
            </main>
            <div className="border-t border-muted mt-24">
                <div className="px-0 max-w-screen-2xl pt-24  mx-auto ">
                    <h2 className="text-2xl px-12 py-4 font-bold">Related products</h2>

                    <Slider type="product" options={{ loop: false, align: 'start' }}>
                        {[...product?.relatedProducts.items].map((item, index) => {
                            return <Product product={item} key={index} />;
                        })}
                    </Slider>
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org/',
                        '@type': 'Product',
                        name: product?.name,
                        image: currentVariant?.[0]?.images?.[0]?.url,
                        description: product?.description?.[0]?.text,
                        sku: currentVariant?.sku,
                        offers: {
                            '@type': 'Offer',
                            price: currentVariant?.defaultPrice?.price,
                            priceCurrency: currentVariant?.defaultPrice?.currency,
                        },
                        brand: {
                            '@type': 'Brand',
                            name: 'HAY',
                        },
                        review: {
                            '@type': 'Review',
                            reviewRating: {
                                '@type': 'Rating',
                                ratingValue: '4',
                                bestRating: '5',
                            },
                        },
                    }),
                }}
            />
        </>
    );
}
