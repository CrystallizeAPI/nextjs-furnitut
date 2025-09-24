import { Image } from '@/components/image';
import { Typography } from '../block-fragments/typography';
import { BannerFragment, Showcase } from '@/generated/discovery/graphql';
import classnames from 'classnames';

type BannerProps = {
    block: BannerFragment;
};

export const Banner = ({ block }: BannerProps) => {
    const { banner, layout } = block;
    const image = banner?.[0];
    const width = image?.variants?.[0]?.width;
    const height = image?.variants?.[0]?.height;
    const styles = { aspectRatio: `${width}/${height}` } as React.CSSProperties;
    const isLightTheme = 'light' in layout?.theme;
    const isContained = 'contain' in layout?.displayWidth;
    return (
        <div className="flex-col flex items-center max-w-(--breakpoint-2xl) mx-auto">
            <Typography {...block} />
            {image && (
                <div
                    className={classnames('w-full h-auto mb-0', { 'max-w-(--breakpoint-xl)': isContained })}
                    style={styles}
                >
                    <Image
                        {...image}
                        showcases={image.showcases as Showcase[]}
                        className={classnames('rounded-t-2xl overflow-hidden', {
                            'rounded-b-3xl': isLightTheme,
                        })}
                        showShowcases
                        sizes={'(max-width: 640px) 500w, (max-width: 1024px) 1024w, 1920w'}
                    />
                </div>
            )}
        </div>
    );
};
