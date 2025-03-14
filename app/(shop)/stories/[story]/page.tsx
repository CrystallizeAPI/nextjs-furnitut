import Link from 'next/link';
import clsx from 'classnames';
import {
    CommonProductVariantFragment,
    FetchStoryDocument,
    Paragraph,
    Product,
    ProductVariantForProduct,
} from '@/generated/graphql';
import { apiRequest } from '@/utils/api-request';
import { ContentTransformer } from '@crystallize/reactjs-components';
import { Image } from '@/components/image';
import { Media } from '@/components/media';
import { ParagraphCollection } from '@/components/paragraph-collection';
import { Slider } from '@/components/slider';
import { Story } from '@/components/story';
import { Price } from '@/components/price';
import { Metadata } from 'next';
import { WithContext, Article, Product as ProductSchema } from 'schema-dts';

const fetchData = async (path: string) => {
    const response = await apiRequest(FetchStoryDocument, { path });
    const { title, media, meta, story, ...rest } = response.data.browse?.story?.hits?.[0] ?? {};

    return {
        ...rest,
        title,
        meta,
        media,
        story: (story ?? []).filter((paragraph): paragraph is Paragraph => !!paragraph),
    };
};

type StoriesProps = {
    params: Promise<{ story: string }>;
};

export async function generateMetadata({ params }: StoriesProps): Promise<Metadata> {
    const { story } = await params;
    const { meta, media } = await fetchData(`/stories/${story}`);
    const { title, description } = meta ?? {};
    const image = media?.image?.[0]?.variants?.find((image) => image?.width === 1024);

    return {
        title: `${title}`,
        description: description?.[0].textContent ?? '',
        openGraph: {
            title: `${title} | Furnitut`,
            description: description?.[0].textContent ?? '',
            url: `/stories/${story}`,
            images: [
                {
                    url: image?.url ?? '',
                    alt: media?.image?.[0]?.altText ?? '',
                    height: image?.height ?? 0,
                    width: image?.width ?? 0,
                },
            ],
        },
    };
}

export default async function StoryPage(props: StoriesProps) {
    const params = await props.params;
    const { intro, featured, upNext, story, title, media, publishedAt } = await fetchData(
        `/stories/${params.story}`,
    );

    const storySchema: WithContext<Article> = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title ?? '',
        image: media?.image?.[0]?.url ?? '',
        description: intro?.[0]?.textContent ?? '',
        datePublished: new Date(publishedAt).toLocaleString(),
        author: {
            '@type': 'Person',
            // TODO: replace with the correct author name
            name: 'John Doe',
        },
    };

    const productsSchema = featured?.items?.map<WithContext<ProductSchema>>((item) => ({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: (item as Product)?.name ?? '',
        image: (item as Product)?.defaultVariant?.firstImage?.url ?? '',
        // @ts-expect-error complains about the description
        description: (item as ProductVariantForProduct)?.description?.[0].textContent ?? '',
        sku: (item as Product)?.defaultVariant?.sku ?? '',
        offers: {
            '@type': 'Offer',
            itemCondition: 'https://schema.org/NewCondition',
            availability: 'https://schema.org/InStock',
            // @ts-expect-error thinks default price is a floating value
            price: (item as Product)?.defaultVariant?.defaultPrice?.price ?? '',
            // @ts-expect-error thinks default price is a floating value
            priceCurrency: (item as Product)?.defaultVariant?.defaultPrice?.currency ?? '',
        },
    }));

    return (
        <>
            <main className="mt-40">
                <div className="max-w-(--breakpoint-lg) mx-auto text-center mb-12">
                    <h1 className="text-dark text-5xl font-medium py-4 text-balance">{title}</h1>
                    <div className="text-lg  text-center mx-auto leading-8 font-medium text-dark">
                        <ContentTransformer json={intro} />
                    </div>
                </div>
                <div className="max-w-(--breakpoint-xl) mx-auto [&_img]:w-full [&_img]:max-w-none overflow-hidden rounded-2xl ">
                    <Media {...media} preserveRatio sizes="(max-width: 600px) 100vw, 1280px" />
                </div>
                <div className="grid grid-cols-5 max-w-(--breakpoint-xl) mx-auto mt-24">
                    <div
                        className={clsx('col-span-3 gap-24 px-12', {
                            'col-span-5! max-w-(--breakpoint-md) mx-auto': featured === null,
                        })}
                    >
                        <ParagraphCollection paragraphs={story} />
                    </div>
                    {featured && (
                        <div className="col-span-2 px-12 pt-6">
                            <h3 className="font-bold text-sm mb-4">Featured products</h3>
                            <div className="sticky top-20 min-h-[200px] bg-light rounded-lg border border-muted flex flex-col">
                                {featured?.items?.map((item, index) => {
                                    const product = item as Product;
                                    const price = (product.defaultVariant as CommonProductVariantFragment)
                                        ?.defaultPrice;

                                    return (
                                        <div
                                            className="flex gap-3 px-4 py-3 border-b border-muted"
                                            key={`${product.defaultVariant?.sku}-featured-${index}`}
                                        >
                                            <div className="w-10 h-12 rounded-sm overflow-hidden">
                                                <Image {...product.defaultVariant?.firstImage} />
                                            </div>
                                            <div className="flex flex-col">
                                                {!!product.path && <Link href={product.path}>{product.name}</Link>}
                                                <span className="text-sm font-bold">
                                                    <Price price={price} />
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
                {upNext && (
                    <div className="mt-24 px-12 max-w-(--breakpoint-2xl) mx-auto">
                        <div className="px-0 border-t border-muted  pt-24  ">
                            <h2 className="text-2xl  py-4 font-bold">Up next</h2>
                            <Slider type="story" options={{ loop: false, align: 'start' }}>
                                {upNext.items?.map((item) => <Story story={item} key={item?.path} />)}
                            </Slider>
                        </div>
                    </div>
                )}
            </main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(storySchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(productsSchema),
                }}
            />
        </>
    );
}
