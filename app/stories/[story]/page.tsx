import { FetchStoryDocument, FetchStoryQuery, Paragraph } from '@/generated/graphql';
import { apiRequest } from '@/utils/api-request';
import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { Product } from '@/components/product';
import { ContentTransformer } from '@crystallize/reactjs-components';
import { Image } from '@/components/image';
import { Media } from '@/components/media';
import { ParagraphCollection } from '@/components/paragraph-collection';
import classNames from 'classnames';
import { Slider } from '@/components/slider';
import { Story } from '@/components/story';
import { Price } from '@/components/price';
import Link from 'next/link';
import { AddToCartButton } from '@/components/add-to-cart-button';
const fetchData = async <Result, Variables>(query: TypedDocumentNode<Result, Variables>, variables: Variables) => {
    const response = (await apiRequest(query, variables)) as {
        data: FetchStoryQuery;
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
    const article = await fetchData(FetchStoryDocument, {
        path: `/stories/${params.story}`,
    });
    const { title, intro, media, featured, upNext } = article;

    const story = (article?.story ?? []).filter(
        (paragraph): paragraph is Paragraph => paragraph !== null && paragraph !== undefined,
    );
    console.log({ featured });
    return (
        <main className="mt-40">
            <div className="max-w-screen-md mx-auto text-center mb-12">
                <h1 className="text-dark text-5xl font-medium py-4 text-balance">{title}</h1>
                <div className="text-lg leading-8 font-medium text-dark">
                    <ContentTransformer json={intro} />
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto [&_img]:w-full [&_img]:max-w-none overflow-hidden rounded-2xl ">
                <Media {...media} className="" preserveRatio={true} />
            </div>
            <div className="grid grid-cols-5 max-w-screen-xl mx-auto mt-24">
                <div
                    className={classNames('col-span-3 gap-24 px-12', {
                        '!col-span-5 max-w-screen-md mx-auto': featured === null,
                    })}
                >
                    <ParagraphCollection paragraphs={story} />
                </div>
                {featured && (
                    <div className="col-span-2 px-12 pt-6">
                        <h3 className="font-bold text-sm mb-4">Featured products</h3>
                        <div className="sticky top-20 min-h-[200px] bg-light rounded-lg border border-muted flex flex-col">
                            {featured?.items?.map((product, index) => {
                                return (
                                    <div
                                        className="flex gap-3 px-4 py-3 border-b border-muted"
                                        key={`${product.defaultVariant.sku}-featured-${index}`}
                                    >
                                        <div className="w-10 h-12 rounded overflow-hidden">
                                            <Image {...product.defaultVariant.firstImage} />
                                        </div>
                                        <div className="flex flex-col">
                                            <Link href={product.path}>{product.name}</Link>
                                            <span className="text-sm font-bold">
                                                <Price price={product.defaultVariant.defaultPrice} />{' '}
                                            </span>
                                        </div>
                                        <div>
                                            {/* <AddToCartButton
                                    variantName={product.name || product?.name || 'Variant'}
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
                                /> */}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
            {upNext && (
                <div className="mt-24 px-12 max-w-screen-2xl mx-auto">
                    <div className="px-0 border-t border-muted  pt-24  ">
                        <h2 className="text-2xl  py-4 font-bold">Up next</h2>

                        <Slider type="story" options={{ loop: false, align: 'start' }}>
                            {[...upNext.items].map((item, index) => {
                                return <Story story={item} key={item.path} />;
                            })}
                        </Slider>
                    </div>
                </div>
            )}
        </main>
    );
}
