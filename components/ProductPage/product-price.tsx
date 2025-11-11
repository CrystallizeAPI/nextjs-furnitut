import { findSuitableVariant } from '@/components/variant-selector';
import { FetchProductDocument, Paragraph, PublicationState } from '@/generated/discovery/graphql';
import { Price } from '@/components/price';
import { getPrice } from '@/utils/price';
import clsx from 'classnames';
import { SearchParams } from '@/app/(shop)/[...category]/types';
import { newFetch } from './new-fetch';

const { CRYSTALLIZE_FALLBACK_PRICE, CRYSTALLIZE_SELECTED_PRICE, CRYSTALLIZE_COMPARE_AT_PRICE } = process.env;

export const fetchProductData = async ({ path, isPreview = false }: { path: string; isPreview?: boolean }) => {
    const response = await newFetch(FetchProductDocument, {
        path,
        publicationState: isPreview ? PublicationState.Draft : PublicationState.Published,
        selectedPriceVariant: CRYSTALLIZE_SELECTED_PRICE!,
        fallbackPriceVariant: CRYSTALLIZE_FALLBACK_PRICE!,
    });
    const { story, variants, brand, breadcrumbs, meta, ...product } = response.data.browse?.product?.hits?.[0] ?? {};

    return {
        ...product,
        variants,
        brand: brand?.items?.[0],
        story: story?.filter((paragraph): paragraph is Paragraph => paragraph !== null && paragraph !== undefined),
        breadcrumbs: breadcrumbs?.[0]?.filter((item) => !!item),
        meta,
    };
};

type ProductsProps = {
    searchParams: SearchParams;
    params: { slug: string; category: string[] };
};

export async function ProductPrice(props: ProductsProps) {
    const { searchParams, params } = props;
    const url = `/${params.category.join('/')}`;
    const product = await fetchProductData({ path: url, isPreview: !!searchParams.preview });
    const currentVariant = findSuitableVariant({ variants: product.variants, searchParams });

    // const selectedCustomerPrices = await getCustomerPrices({ path: product?.path });

    // const selectedPriceVariant = selectedCustomerPrices.catalogueProductVariants?.find(
    //     (catalogueProductVariant) => catalogueProductVariant?.sku === currentVariant?.sku,
    // );

    // const selectedPrice = selectedPriceVariant?.priceVariant?.priceFor ?? currentVariant?.selectedPriceVariant;

    const currentVariantPrice = getPrice({
        fallbackPriceVariant: currentVariant?.fallbackPriceVariant,
        selectedPriceVariant: { price: 888 },
    });

    return (
        <div className="flex flex-col">
            {/* Lowest price */}
            {new Date().toISOString()}
            <span>
                <Price
                    price={{
                        price: currentVariantPrice.lowest,
                        currency: currentVariantPrice.currency,
                    }}
                />
            </span>
            {/* Compared at price */}
            <span
                className={clsx('block text-sm line-through font-normal', {
                    hidden: !currentVariantPrice.hasBestPrice,
                })}
            >
                <Price
                    price={{
                        price: currentVariantPrice.highest,
                        currency: currentVariantPrice.currency,
                    }}
                />
            </span>
        </div>
    );
}
