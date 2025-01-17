import { StorySliderFragment } from '@/generated/graphql';
import { Typography } from '../block-fragments/typography';
import { Slider } from '../slider/index';
import { Story } from '@/components/story';

type StorySliderProps = {
    block: StorySliderFragment;
};

export const StorySlider = ({ block }: StorySliderProps) => {
    const { stories } = block;

    return (
        <div className="flex-col flex items-center  mx-auto">
            <Typography {...block} />
            {!!stories?.items?.length && (
                <div className="w-full pb-24 ">
                    <Slider options={{ loop: true, align: 'start' }} type="story">
                        {stories.items.map((item, index) => (
                            <Story story={item} key={index} />
                        ))}
                    </Slider>
                </div>
            )}
        </div>
    );
};
