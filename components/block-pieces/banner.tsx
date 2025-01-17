import { Image } from '@/components/image';
import { Typography } from '../block-fragments/typography';
import { BannerFragment, Showcase } from '@/generated/graphql';

type BannerProps = {
    block: BannerFragment;
};

export const Banner = ({ block }: BannerProps) => {
    const { banner } = block;
    const image = banner?.[0];
    const width = image?.variants?.[0]?.width;
    const height = image?.variants?.[0]?.height;
    const styles = { aspectRatio: `${width}/${height}` } as React.CSSProperties;

    return (
        <div className="flex-col flex items-center max-w-screen-2xl mx-auto">
            <Typography {...block} />
            {image && (
                <div className="mt-12 max-w-screen-xl w-full h-auto mb-24 " style={styles}>
                    <Image
                        {...image}
                        showcases={image.showcases as Showcase[]}
                        className="rounded-3xl overflow-hidden"
                        preserveRatio
                        showShowcases
                    />
                </div>
            )}
        </div>
    );
};
