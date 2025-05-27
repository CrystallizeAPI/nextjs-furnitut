import clsx from 'classnames';
import Link from 'next/link';
import schemas from 'schema-dts';
import { ContentTransformer } from '@crystallize/reactjs-components';

import { FetchProductDocument, Paragraph, PublicationState } from '@/generated/discovery/graphql';
import { apiRequest } from '@/utils/api-request';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Price } from '@/components/price';
import { Image as CrystallizeImage } from '@/components/image';
import { findSuitableVariant, VariantSelector } from '@/components/variant-selector';
import { Slider } from '@/components/slider';
import { Product } from '@/components/product';
import { Accordion } from '@/components/accordion';
import { AddToCartButton } from '@/components/cart/add-to-cart-button';
import { ParagraphCollection } from '@/components/paragraph-collection';
import { SearchParams } from '@/app/(shop)/[...category]/types';
import downloadIcon from '@/assets/icon-download.svg';

import Image from 'next/image';
import classNames from 'classnames';
import { getPrice } from '@/utils/price';

// TODO: get these from the environment variables
const { CRYSTALLIZE_BASE_PRICE, CRYSTALLIZE_SELECTED_PRICE, CRYSTALLIZE_MARKETS_PRICE } = process.env;

type ProductsProps = {
    searchParams: Promise<SearchParams>;
    params: Promise<{ slug: string; category: string[] }>;
};

export const fetchProductData = async ({ path, isPreview = false }: { path: string; isPreview?: boolean }) => {
    const response = await apiRequest(FetchProductDocument, {
        path,
        publicationState: isPreview ? PublicationState.Draft : PublicationState.Published,
        selectedPrice: CRYSTALLIZE_SELECTED_PRICE!,
        basePrice: CRYSTALLIZE_BASE_PRICE!,
        marketIdentifiers: CRYSTALLIZE_MARKETS_PRICE!,
    });
    const { story, variants, brand, breadcrumbs, meta, ...product } = response.data.browse?.product?.hits?.[0] ?? {};

    return {
        ...product,
        variants,
        brand: brand?.items?.[0],
        story: story?.filter((paragraph): paragraph is Paragraph => paragraph !== null && paragraph !== undefined),
        breadcrumbs: breadcrumbs?.[0]?.filter((item) => !!item),
        meta,
    };
};

export default async function CategoryProduct(props: ProductsProps) {
    const searchParams = await props.searchParams;
    const params = await props.params;
    const url = `/${params.category.join('/')}`;
    const product = await fetchProductData({ path: url, isPreview: !!searchParams.preview });
    const currentVariant = findSuitableVariant({ variants: product.variants, searchParams });
    const currentVariantPrice = getPrice({
        base: currentVariant?.basePrice,
        selected: currentVariant?.selectedPrice,
        market: currentVariant?.marketPrice ?? null,
    });
    const dimensions = currentVariant?.dimensions;
    // TODO: this should be for how long the price will be valid
    const TWO_DAYS_FROM_NOW = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);

    const productVariantsSchema =
        product.variants?.map<schemas.WithContext<schemas.Product>>((variant) => ({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: variant?.name ?? '',
            image: variant?.images?.[0]?.url ?? '',
            description: variant?.description?.extraDescription ?? '',
            sku: variant?.sku ?? '',
            // TODO: Enable the color, to display the variant varies by the color.
            // color: variant?.attributes?.Color,
            offers: {
                '@type': 'Offer',
                itemCondition: 'https://schema.org/NewCondition',
                availability: 'https://schema.org/InStock',
                price: currentVariantPrice.lowest ?? 0,
                priceCurrency: currentVariantPrice.currency ?? 'EUR',
                priceValidUntil: TWO_DAYS_FROM_NOW.toLocaleString(),
            },
        })) ?? [];

    const productSchema: schemas.WithContext<schemas.ProductGroup> = {
        '@context': 'https://schema.org',
        '@type': 'ProductGroup',
        name: product?.name ?? '',
        description: product?.description?.[0]?.text,
        // TODO: Enable the variesBy, to display by which the variants in the ProductGroup vary.
        //  See: https://schema.org/variesBy
        // variesBy: [
        //     'https://schema.org/color',
        // ],
        hasVariant: productVariantsSchema,
        brand: {
            '@type': 'Brand',
            name: 'HAY',
        },
        // TODO: replace with actual reviews from users
        review: [
            {
                '@type': 'Review',
                author: {
                    '@type': 'Person',
                    name: 'John Doe',
                },
                reviewRating: {
                    '@type': 'Rating',
                    ratingValue: '5',
                    bestRating: '5',
                },
            },
        ],
    };

    return (
        <>
            <main className="page">
                <div className="lg:grid lg:grid-cols-12 lg:gap-24 rounded-xl px-4 lg:px-0">
                    <div className="lg:col-span-7">
                        <Breadcrumbs breadcrumbs={product.breadcrumbs} />
                        <div className="mt-6 grid grid-cols-2 mb-6 pb-6 gap-4 [&_.img-landscape]:col-span-2">
                            {currentVariant?.images?.map((image, index) => {
                                return (
                                    <CrystallizeImage
                                        key={index}
                                        {...image}
                                        preserveRatio
                                        sizes={index > 0 ? '400px' : '800px'}
                                        wrapperClassName={clsx(index === 0 && 'col-span-2!')}
                                        className={clsx(
                                            'overflow-hidden rounded-2xl border border-muted bg-light h-full max-w-full',
                                            '[&_img]:object-cover [&_img]:max-w-none [&_img]:w-full [&_img]:h-full',
                                        )}
                                    />
                                );
                            })}
                        </div>
                        {product.story && (
                            <Accordion defaultOpen className="py-8" title="Product">
                                <div className="text-lg leading-10 font-normal">
                                    <ParagraphCollection paragraphs={product.story} />
                                </div>
                            </Accordion>
                        )}

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
                        {product.downloads && (
                            <Accordion title="Downloads" defaultOpen className="py-8">
                                <div className="">
                                    {product.downloads.map((download, index) => {
                                        if (!download) return null;
                                        return (
                                            <div key={index} className="py-6  border-b mb-6 border-muted gap-x-8">
                                                <span className="px-1 text-lg mb-2 font-bold">{download.title}</span>
                                                <span className="px-1 block">
                                                    <ContentTransformer json={download.description} />
                                                </span>
                                                <div className="flex flex-col gap-y-2 pt-4">
                                                    {download.files?.map((file, fileIndex) => {
                                                        if (!file || !file.url) return null;
                                                        const uploadDate = new Date(file.createdAt);
                                                        const formattedDate = uploadDate.toLocaleDateString('en-US', {
                                                            year: 'numeric',
                                                            month: 'long',
                                                            day: 'numeric',
                                                        });
                                                        return (
                                                            <div
                                                                key={fileIndex}
                                                                className="flex justify-between text-dark font-medium border border-muted bg-light pl-6 pr-3 py-3 rounded-xl"
                                                            >
                                                                <span className="flex flex-col">
                                                                    <span className="font-bold">{file.title}</span>
                                                                    <span className="text-sm">{formattedDate}</span>
                                                                </span>
                                                                <a
                                                                    href={file.url}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    download={file.title}
                                                                    className="bg-dark rounded-xl h-12 w-12 flex items-center justify-center hover:bg-dark/80 transition-colors"
                                                                >
                                                                    <Image
                                                                        src={downloadIcon}
                                                                        alt={`Download ${file.title}`}
                                                                    />
                                                                </a>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </Accordion>
                        )}
                    </div>

                    <div className="mt-10 lg:mt-0! lg:col-span-5 relative">
                        <div className="flex justify-between items-center ">
                            <span className="text-xs font-bold opacity-50">{currentVariant?.sku}</span>
                            {product.brand && (
                                <span className="w-16 h-10 flex items-center">
                                    {'logo' in product.brand ? (
                                        <CrystallizeImage
                                            className="object-contain"
                                            preserveRatio
                                            {...product.brand.logo?.[0]}
                                        />
                                    ) : (
                                        product.brand.name
                                    )}
                                </span>
                            )}
                        </div>
                        <div className="py-4 sticky top-20">
                            <h1 className="text-2xl font-bold">{currentVariant?.name ?? product.name}</h1>
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
                                <div className="flex flex-col">
                                    {/* Lowest price */}
                                    <span>
                                        <Price
                                            price={{
                                                price: currentVariantPrice.lowest,
                                                currency: currentVariantPrice.currency,
                                            }}
                                        />
                                    </span>
                                    {/* Compared at price */}
                                    <span
                                        className={classNames('block text-sm line-through font-normal', {
                                            hidden: !currentVariantPrice.hasBestPrice,
                                        })}
                                    >
                                        <Price
                                            price={{
                                                price: currentVariantPrice.highest,
                                                currency: currentVariantPrice.currency,
                                            }}
                                        />
                                    </span>
                                </div>
                                {!!currentVariant && !!currentVariant.sku && (
                                    <AddToCartButton
                                        input={{
                                            variantName: currentVariant.name || product.name || 'Variant',
                                            productName: product.name || 'Variant',
                                            sku: currentVariant.sku,
                                            image:
                                                currentVariant?.images?.[0]?.variants?.[0] ??
                                                currentVariant?.images?.[0],
                                            quantity: 1,
                                            price: {
                                                currency: currentVariantPrice.currency,
                                                gross: currentVariantPrice.lowest,
                                                net: currentVariantPrice.lowest,
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
                                        if (!product) {
                                            return null;
                                        }

                                        const matchingProductPrice = getPrice({
                                            base: product.basePrice,
                                            selected: product.selectedPrice,
                                            market: product.marketPrice,
                                        });
                                        return (
                                            <div
                                                key={`${product?.sku}-featured-${index}`}
                                                className="flex gap-3 justify-between px-4 py-3 border items-center border-muted bg-light rounded-lg last:border-b-0"
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-12 rounded-sm overflow-hidden">
                                                        <CrystallizeImage {...product?.firstImage} />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        {!!product?.product?.path && (
                                                            <Link href={product.product.path}>{product?.name}</Link>
                                                        )}
                                                        <span className="text-sm font-bold">
                                                            <Price
                                                                price={{
                                                                    price: matchingProductPrice.lowest,
                                                                    currency: matchingProductPrice.currency,
                                                                }}
                                                            />
                                                        </span>
                                                        <span
                                                            className={classNames('text-xs line-through', {
                                                                hidden: !matchingProductPrice.hasBestPrice,
                                                            })}
                                                        >
                                                            <Price
                                                                price={{
                                                                    price: matchingProductPrice.highest,
                                                                    currency: matchingProductPrice.currency,
                                                                }}
                                                            />
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
                                                                    currency: matchingProductPrice.currency,
                                                                    gross: matchingProductPrice.lowest,
                                                                    net: matchingProductPrice.lowest,
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
            {product?.relatedProducts && (
                <div className="mt-24 border-t border-muted">
                    <div className=" max-w-(--breakpoint-2xl) pt-24  mx-auto ">
                        <h2 className="text-2xl py-4 font-bold">Related products</h2>

                        <Slider type="product" options={{ loop: false, align: 'start' }}>
                            {product?.relatedProducts?.items?.map((item, index) =>
                                !!item && 'path' in item ? <Product product={item} key={index} /> : null,
                            )}
                        </Slider>
                    </div>
                </div>
            )}

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(productSchema),
                }}
            />
        </>
    );
}
