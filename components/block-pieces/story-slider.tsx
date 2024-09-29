import { Typography } from '../block-fragments/typography';
import { Slider } from '../slider/index';
import { Story } from '@/components/story';
export const StorySlider = ({ block }: { block: any }) => {
    if (block === null) return null;
    const { stories } = block;

    return (
        <div className="flex-col flex items-center  mx-auto">
            <Typography {...block} />
            {[...stories.items].length > 1 && (
                <div className="w-full pb-24 ">
                    <Slider options={{ loop: true, align: 'start' }} type="story">
                        {stories.items.map((item: any) => (
                            <Story story={item} key={item.path} />
                        ))}
                    </Slider>
                </div>
            )}
        </div>
    );
};
