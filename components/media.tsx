import { Image } from '@/components/image';
import { Video } from '@/components/video';

export const Media = ({
    video,
    shoppableImage,
    image,
    imageProps,
    preserveRatio = false,
    sizes,
}: {
    video?: any;
    shoppableImage?: any;
    image?: any;
    imageProps?: any;
    preserveRatio?: boolean;
    sizes?: string;
}) => {
    if (video?.[0]) {
        return <Video {...video[0]} sizes={sizes} />;
    }
    if (shoppableImage) {
        return (
            <Image
                {...shoppableImage[0]}
                showShowcases={true}
                sizes={sizes}
                {...imageProps}
                preserveRatio={preserveRatio}
                loading="lazy"
            />
        );
    }
    if (image?.[0]) {
        return <Image {...image[0]} {...imageProps} sizes={sizes} preserveRatio={preserveRatio} loading="lazy" />;
    }
    return null;
};
