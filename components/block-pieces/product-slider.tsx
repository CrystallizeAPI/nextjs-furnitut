import { ProductSliderFragment } from '@/generated/graphql';
import { Typography } from '../block-fragments/typography';
import { Slider } from '../slider';
import { Product } from '@/components/product';

type ProductSliderProps = {
    block: ProductSliderFragment;
};

export const ProductSlider = ({ block }: ProductSliderProps) => {
    const { products } = block;

    return (
        <div className="flex-col flex items-center py-12">
            <Typography {...block} />
            {!!products?.variants?.length && (
                <div className="w-full pb-24">
                    <Slider options={{ loop: true, align: 'start' }}>
                        {products.variants.map((item) =>
                            !!item?.product ? (
                                <Product
                                    key={item.product.path}
                                    product={{
                                        name: item.name,
                                        path: item.product.path,
                                        variants: null,
                                        defaultVariant: {
                                            firstImage: item.firstImage,
                                            defaultPrice: item.defaultPrice,
                                        },
                                    }}
                                />
                            ) : null,
                        )}
                    </Slider>
                </div>
            )}
        </div>
    );
};
