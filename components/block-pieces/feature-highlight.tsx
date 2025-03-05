import { ContentTransformer } from '@crystallize/reactjs-components';
import { Image } from '../image';
import { FeatureHighlightsFragment } from '@/generated/graphql';

type FeatureHighlightProps = {
    block: FeatureHighlightsFragment;
};

export const FeatureHighlight = ({ block }: FeatureHighlightProps) => {
    const { usp } = block;

    return (
        <div className="flex justify-between py-16 sm:py-24 gap-8 sm:flex-row flex-col">
            {usp?.map((feature, index) => {
                const { headline, description, icon } = feature ?? {};
                const image = icon?.[0];

                return (
                    <div key={index} className="flex items-start gap-2 sm:gap-6">
                        <div className="w-1/12 aspect-square sm:mt-1 min-w-1/12 shrink-0">
                            <Image {...image} loading={'lazy'} />
                        </div>
                        <div className="w-11/12">
                            <h3 className="block-title text-xl font-bold pb-2">{headline}</h3>
                            <div className="block-description text-base sm:text-lg leading-7">
                                <ContentTransformer json={description} />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
