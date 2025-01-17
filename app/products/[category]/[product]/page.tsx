import clsx from 'classnames';
import Link from 'next/link';
import { ContentTransformer } from '@crystallize/reactjs-components';

import { FetchProductDocument, Paragraph } from '@/generated/graphql';
import { apiRequest } from '@/utils/api-request';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Price } from '@/components/price';
import { Image } from '@/components/image';
import { VariantSelector, findSuitableVariant } from '@/components/variant-selector';
import { Slider } from '@/components/slider';
import { Product } from '@/components/product';
import { Accordion } from '@/components/accordion';
import { AddToCartButton } from '@/components/add-to-cart-button';
import { ParagraphCollection } from '@/components/paragraph-collection';

export const revalidate = 4;

type ProductsProps = {
    searchParams: Record<string, string>;
    params: {
        category: string;
        product: string;
    };
};

const fetchData = async ({ path, searchParams }: { path: string; searchParams: ProductsProps['searchParams'] }) => {
    const response = await apiRequest(FetchProductDocument, { path });
    const { story, variants, brand, breadcrumbs, ...product } = response.data.browse?.product?.hits?.[0] ?? {};

    return {
        ...product,
        variants,
        brand: brand?.items?.[0],
        story: story?.filter((paragraph): paragraph is Paragraph => paragraph !== null && paragraph !== undefined),
        currentVariant: findSuitableVariant({ variants, searchParams }),
        breadcrumbs: breadcrumbs?.[0]?.filter((item) => !!item),
    };
};

export default async function CategoryProduct({ params, searchParams }: ProductsProps) {
    const product = await fetchData({
        path: `/products/${params.category}/${params.product}`,
        searchParams,
    });
    const currentVariant = product.currentVariant;
    const dimensions = currentVariant?.dimensions;
    console.log(currentVariant);

    return (
        <>
            <main className="page">
                <div className="grid grid-cols-12 gap-24 rounded-xl">
                    <div className="col-span-7">
                        <Breadcrumbs breadcrumbs={product.breadcrumbs} />
                        <div className="mt-6 grid grid-cols-2 mb-6 pb-6 gap-4 [&_.img-landscape]:col-span-2">
                            {product.currentVariant?.images?.map((image, index) => {
                                return (
                                    <Image
                                        key={index}
                                        {...image}
                                        preserveRatio
                                        sizes={index > 0 ? '400px' : '800px'}
                                        className={clsx(
                                            index === 0 && '!col-span-2',
                                            'overflow-hidden rounded-2xl border border-muted bg-light relative h-full max-w-full',
                                            '[&_img]:object-cover [&_img]:max-w-none [&_img]:w-full [&_img]:h-full [&_figure]:h-full',
                                        )}
                                    />
                                );
                            })}
                        </div>
                        <Accordion defaultOpen className="py-8" title="Product">
                            <div className="text-lg leading-10 font-normal">
                                <ParagraphCollection paragraphs={product.story} />
                            </div>
                        </Accordion>

                        {product.details && (
                            <Accordion title="Details" defaultOpen className="py-8">
                                {product.details.map((detail, index) => (
                                    <div className="grid grid-cols-4 gap-y-4 py-8 pr-24 text-lg gap-4" key={index}>
                                        <span className="font-bold">{detail?.title}</span>
                                        <span className="col-span-3">
                                            <ContentTransformer json={detail?.description} />
                                        </span>
                                    </div>
                                ))}
                            </Accordion>
                        )}
                        {dimensions && (
                            <Accordion title="Dimensions" defaultOpen className="py-8">
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
                            </Accordion>
                        )}
                    </div>

                    <div className="col-span-5 relative">
                        <div className="flex justify-between items-center ">
                            <span className="text-xs font-bold opacity-50">{product.currentVariant?.sku}</span>
                            {product.brand && (
                                <span className="w-16 h-10 flex items-center">
                                    {'logo' in product.brand ? (
                                        <Image className="object-contain" preserveRatio {...product.brand.logo?.[0]} />
                                    ) : (
                                        product.brand.name
                                    )}
                                </span>
                            )}
                        </div>
                        <div className="py-4 sticky top-20">
                            <h1 className="text-2xl font-bold">
                                {product.name} {product.currentVariant?.name}
                            </h1>
                            <div className="line-clamp-2">
                                <ContentTransformer json={product.description?.[0]} />
                            </div>
                            {!!product.variants?.length && (
                                <div className="py-4">
                                    <VariantSelector
                                        variants={product.variants}
                                        searchParams={searchParams}
                                        path={product?.path ?? '/'}
                                    />
                                </div>
                            )}
                            <div className="text-4xl flex items-center font-bold py-4 justify-between w-full">
                                <span>
                                    <Price price={currentVariant?.priceVariants.default} />
                                </span>
                                {!!currentVariant && !!currentVariant.sku && (
                                    <AddToCartButton
                                        input={{
                                            variantName: currentVariant.name || product.name || 'Variant',
                                            productName: product.name || 'Variant',
                                            sku: currentVariant.sku,
                                            image: currentVariant?.images?.[0]?.variants?.[0],
                                            quantity: 1,
                                            price: {
                                                currency: currentVariant.defaultPrice?.currency || 'EUR',
                                                gross: currentVariant.defaultPrice?.price || 0,
                                                net: currentVariant.defaultPrice?.price || 0,
                                                taxAmount: 0,
                                                discounts: [],
                                            },
                                        }}
                                    />
                                )}
                            </div>
                            {!!currentVariant?.matchingProducts?.variants?.length && (
                                <Accordion
                                    className="py-8 text-lg"
                                    defaultOpen={!!currentVariant?.matchingProducts?.variants?.length}
                                    title={`Matching products (${
                                        currentVariant?.matchingProducts?.variants?.length || 0
                                    })`}
                                >
                                    {currentVariant?.matchingProducts?.variants?.map((product, index) => {
                                        return (
                                            <div
                                                key={`${product?.sku}-featured-${index}`}
                                                className="flex gap-3 justify-between px-4 py-3 border items-center border-muted bg-light rounded-lg last:border-b-0"
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-12 rounded overflow-hidden">
                                                        <Image {...product?.firstImage} />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        {!!product?.product?.path && (
                                                            <Link href={product.product.path}>{product?.name}</Link>
                                                        )}
                                                        <span className="text-sm font-bold">
                                                            <Price price={product?.defaultPrice} />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="justify-end">
                                                    {!!product && !!product.sku && (
                                                        <AddToCartButton
                                                            type="micro"
                                                            input={{
                                                                variantName: product.name || 'Variant',
                                                                productName: product.name || 'Variant',
                                                                sku: product.sku,
                                                                image: product.firstImage?.variants?.[0],
                                                                quantity: 1,
                                                                price: {
                                                                    currency: product.defaultPrice?.currency || 'EUR',
                                                                    gross: product.defaultPrice?.price || 0,
                                                                    net: currentVariant.defaultPrice.price || 0,
                                                                    taxAmount: 0,
                                                                    discounts: [],
                                                                },
                                                            }}
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </Accordion>
                            )}
                            <div className="border-muted border-t"></div>
                        </div>
                    </div>
                </div>
            </main>
            <div className="mt-24 border-t border-muted">
                <div className="px-0  max-w-screen-2xl pt-24  mx-auto ">
                    <h2 className="text-2xl py-4 font-bold">Related products</h2>

                    <Slider type="product" options={{ loop: false, align: 'start' }}>
                        {product?.relatedProducts?.items?.map((item, index) =>
                            !!item && 'path' in item ? <Product product={item} key={index} /> : null,
                        )}
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
                        image: currentVariant?.images?.[0]?.url,
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
                                ratingValue: '5',
                                bestRating: '5',
                            },
                        },
                    }),
                }}
            />
        </>
    );
}
