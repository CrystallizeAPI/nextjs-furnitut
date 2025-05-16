import { ContentTransformer } from '@crystallize/reactjs-components';
import { Paragraph, VideoComponent } from '@/generated/discovery/graphql';
import { Image } from './image';
import { Video } from './video';
import clsx from 'classnames';

type ParagraphCollectionProps = {
    paragraphs?: Paragraph[];
};

export const ParagraphCollection = ({ paragraphs }: ParagraphCollectionProps) => {
    return paragraphs?.map((paragraph, index) => (
        <div key={index} className="frntr-paragraph  w-auto py-6 first:pt-0">
            <div className="mb-10 mx-auto">
                <h2 className="font-medium mb-2 mt-10 text-2xl">{paragraph.title}</h2>
                <div
                    className={clsx(
                        'frntr-content-transformer text-lg leading-8',
                        '[&>ol]:list-decimal [&>ol]:list-inside [&>ol]:py-4',
                        '[&>ul]:list-disc [&>ul]:list-inside [&>ul]:py-4',
                        '[&_a]:underline [&_a]:decoration-1 [&_a]:underline-offset-2 [&_a]:font-bold',
                    )}
                >
                    <ContentTransformer json={paragraph.body} />
                </div>
                <div className="mt-6 grid grid-cols-4 mb-6 pb-6 gap-4 [&_.img-portrait]:col-span-2 [&_.img-landscape]:col-span-4 grid-flow-row-dense">
                    {paragraph.images?.map((image, index) => {
                        return (
                            <Image
                                key={index}
                                {...image}
                                loading="lazy"
                                preserveRatio
                                sizes={index > 0 ? '400px' : '800px'}
                                showShowcases={!!image?.showcases?.length}
                                className={clsx(
                                    'overflow-hidden rounded-2xl border border-muted bg-light h-full max-w-full',
                                    '[&_img]:object-cover [&_img]:max-w-none [&_img]:w-full [&_img]:h-full',
                                    {
                                        'col-span-4!': index === 0 && paragraph.images && paragraph.images.length < 1,
                                    },
                                )}
                            />
                        );
                    })}
                    {paragraph.videos?.map((video, index) => {
                        return (
                            <div
                                className="col-span-4 overflow-hidden rounded-2xl border border-muted bg-light relative h-full max-w-full"
                                key={index}
                            >
                                <Video {...video} options={{ controls: true }} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    ));
};
