import { CategorySliderFragment } from '@/generated/discovery/graphql';
import { Typography } from '../block-fragments/typography';
import { Slider } from '../slider';
import { Category } from '@/components/category';

type CategorySliderProps = {
    block: CategorySliderFragment;
};

export const CategorySlider = ({ block }: CategorySliderProps) => {
    const { categories } = block;
    return (
        <div className="flex-col flex items-center py-12">
            <Typography {...block} />
            <div className="w-full pb-24">
                <Slider options={{ loop: true, align: 'start' }}>
                    {categories?.items?.map((item, index) => (
                        <Category key={index} category={item} />
                    ))}
                </Slider>
            </div>
        </div>
    );
};
