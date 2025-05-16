import clsx from 'classnames';
import { Image as CrystallizeImage } from '@crystallize/reactjs-components';

import { ImageVariant, Showcase } from '@/generated/discovery/graphql';
import { HotSpot } from './hot-spot';

type CrystallizeImageVariants = React.ComponentProps<typeof CrystallizeImage>['variants'];

type ImageProps = {
    focalPoint?: any;
    preserveRatio?: boolean;
    showShowcases?: boolean;
    className?: string;
    wrapperClassName?: string;
    variants?: Array<Omit<ImageVariant, 'size' | 'key'> | null> | null;
    ogVariants?: Array<Omit<ImageVariant, 'size' | 'key'> | null> | null;
    sizes?: string;
    showcases?: Array<Showcase | null> | null;
    altText?: string | null;
    src?: string;
    url?: string | null;
    loading?: 'eager' | 'lazy';
};

export const Image = ({
    className,
    focalPoint,
    preserveRatio,
    showShowcases,
    altText,
    loading,
    ogVariants,
    sizes,
    wrapperClassName,
    ...image
}: ImageProps) => {
    const styles = {
        '--focus-x': focalPoint?.x,
        '--focus-y': focalPoint?.y,
        aspectRatio: preserveRatio
            ? `${image?.variants?.[0]?.width || 'auto'}/${image?.variants?.[0]?.height}`
            : 'auto',
    } as React.CSSProperties;

    const width = image?.variants?.[0]?.width ?? 0;
    const height = image?.variants?.[0]?.height ?? 0;
    const orientation = width > height ? 'img-landscape' : 'img-portrait';

    return (
        <div
            style={styles}
            className={clsx(orientation, 'w-full h-full', wrapperClassName, {
                'crystallize-image': !preserveRatio,
                relative: showShowcases,
            })}
        >
            <CrystallizeImage
                {...image}
                url={image.url ?? undefined}
                variants={image.variants as CrystallizeImageVariants}
                alt={altText ?? undefined}
                loading={loading}
                sizes={sizes ?? '(max-width: 640px) 500w, 768w'}
                className={className}
            />
            {showShowcases && (
                <div className="absolute top-0 left-0 w-full h-full">
                    {image?.showcases?.map((showcase, index) => <HotSpot key={index} showcase={showcase} />)}
                </div>
            )}
        </div>
    );
};
