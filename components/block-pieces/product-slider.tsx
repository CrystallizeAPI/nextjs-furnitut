import { Typography } from '../block-fragments/typography';
import { Slider } from '../slider';
import { Product } from '@/components/product';

export const ProductSlider = ({ block }: { block: any }) => {
    if (block === null) return null;
    const { products } = block;
    console.log({ products });
    return (
        <div className="flex-col flex items-center py-12">
            <Typography {...block} />
            {[
                //Add products.variants when api is fixed
            ].length > 1 && (
                <div className="w-full pb-24">
                    <Slider options={{ loop: true, align: 'start' }}>
                        {[...products.variants].map((item: any) => (
                            <Product
                                product={{
                                    name: item,
                                    path: '/',
                                    description: 'Something in here',
                                    defaultVariant: {
                                        firstImage: null,
                                        sku: item,
                                    },
                                }}
                                key={item.path}
                            />
                        ))}
                    </Slider>
                </div>
            )}
        </div>
    );
};
