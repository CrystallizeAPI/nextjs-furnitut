import { Typography } from '../block-fragments/typography';
import { Image } from '@/components/image';
import { PictureGridFragment } from '@/generated/graphql';
import clsx from 'classnames';

type PictureGridProps = {
    block: PictureGridFragment;
};

export const PictureGrid = ({ block }: PictureGridProps) => {
    const { images } = block;

    return (
        <div className="flex-col flex items-center max-w-screen-2xl mx-auto">
            <Typography {...block} />
            {!!images?.length && (
                <div className="grid gap-8 sm:grid-cols-7 auto-rows-[30vh] w-full h-auto pb-24">
                    {images.slice(0, 4).map((image: any, index: number) => (
                        <div
                            key={`picture-grid-image-${index}`}
                            className={clsx('flex justify-center', {
                                'sm:col-span-3 sm:row-span-2 ': index === 0,
                                'sm:col-span-4': index === 1,
                                'sm:col-span-2': index > 1,
                            })}
                        >
                            <Image {...image} className="rounded-3xl overflow-hidden" showShowcases />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
