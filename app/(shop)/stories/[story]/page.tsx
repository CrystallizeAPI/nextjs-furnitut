import Link from 'next/link';
import clsx from 'classnames';
import {
    CommonProductVariantFragment,
    FetchStoryDocument,
    Paragraph,
    Product,
    StoryContentFragment,
} from '@/generated/graphql';
import { apiRequest } from '@/utils/api-request';
import { ContentTransformer } from '@crystallize/reactjs-components';
import { Image } from '@/components/image';
import { Media } from '@/components/media';
import { ParagraphCollection } from '@/components/paragraph-collection';
import { Slider } from '@/components/slider';
import { Story } from '@/components/story';
import { Price } from '@/components/price';

const fetchData = async (path: string) => {
    const response = await apiRequest(FetchStoryDocument, { path });
    const data = response.data.browse?.story?.hits?.[0];
    const { title, media } = (data ?? {}) as StoryContentFragment;

    return {
        ...data,
        title,
        media,
        story: (data?.story ?? []).filter((paragraph): paragraph is Paragraph => !!paragraph),
    };
};

type StoriesProps = {
    params: Promise<{ story: string }>;
};

export default async function StoryPage(props: StoriesProps) {
    const params = await props.params;
    const { intro, featured, upNext, story, title, media } = await fetchData(`/stories/${params.story}`);

    return (
        <main className="mt-40">
            <div className="max-w-screen-lg mx-auto text-center mb-12">
                <h1 className="text-dark text-5xl font-medium py-4 text-balance">{title}</h1>
                <div className="text-lg  text-center mx-auto leading-8 font-medium text-dark">
                    <ContentTransformer json={intro} />
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto [&_img]:w-full [&_img]:max-w-none overflow-hidden rounded-2xl ">
                <Media {...media} preserveRatio sizes="(max-width: 600px) 100vw, 1280px" />
            </div>
            <div className="grid grid-cols-5 max-w-screen-xl mx-auto mt-24">
                <div
                    className={clsx('col-span-3 gap-24 px-12', {
                        '!col-span-5 max-w-screen-md mx-auto': featured === null,
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
                                const price = (product.defaultVariant as CommonProductVariantFragment)?.defaultPrice;

                                return (
                                    <div
                                        className="flex gap-3 px-4 py-3 border-b border-muted"
                                        key={`${product.defaultVariant?.sku}-featured-${index}`}
                                    >
                                        <div className="w-10 h-12 rounded overflow-hidden">
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
                <div className="mt-24 px-12 max-w-screen-2xl mx-auto">
                    <div className="px-0 border-t border-muted  pt-24  ">
                        <h2 className="text-2xl  py-4 font-bold">Up next</h2>
                        <Slider type="story" options={{ loop: false, align: 'start' }}>
                            {upNext.items?.map((item) => <Story story={item} key={item?.path} />)}
                        </Slider>
                    </div>
                </div>
            )}
        </main>
    );
}
