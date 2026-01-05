import Link from 'next/link';
import { Image } from '@/components/image';
import { Price } from './price';
import type { Price as PriceProp } from './price';
import { Fragment } from 'react';
import { getPromotionValues } from '@/utils/topics';
import { PercentBadgeIcon } from '@heroicons/react/16/solid';

type ProductProps = {
    product: {
        name?: string | null;
        path?: string | null;
        defaultVariant?: {
            firstImage: { url: string | null } | null;
            defaultPrice: PriceProp;
            fallbackPriceVariant: PriceProp;
            selectedPriceVariant: PriceProp;
        } | null;
        variants?: Array<{ sku?: string | null; firstImage: { url: string | null } | null } | null> | null;
        topics?: Record<string, string>;
    } | null;
};

export const Product = ({ product }: ProductProps) => {
    const { name, path, defaultVariant, variants, topics } = product ?? {};
    const { firstImage, defaultPrice, fallbackPriceVariant, selectedPriceVariant } = defaultVariant ?? {};
    const totalVariants = variants?.length || 0;
    const promos = getPromotionValues(topics);

    const price = selectedPriceVariant || fallbackPriceVariant || defaultPrice;
    const hasPromotion = Boolean(selectedPriceVariant);
    return (
        <Link
            href={path ?? '/'}
            prefetch={true}
            className="rounded-2xl bg-quinary p-2 pb-0 text-dark border-muted border-solid border text-primary relative flex flex-col items-stretch bg-light"
            data-testid={path}
        >
            <div className="relative justify-stretch h-full max-h-5/6 flex flex-col">
                <div className="rounded-xl overflow-hidden border grow border-muted aspect-portrait row-span-5 relative">
                    <div className="absolute top-0 right-0 z-10 flex">
                        {promos.map((promo) => (
                            <span
                                key={promo}
                                className="mr-2 my-2 rounded-full bg-vivid pl-1 pr-3 py-1 text-xs font-semibold text-light border flex items-center gap-1"
                            >
                                <PercentBadgeIcon className="size-4" />
                                {promo}
                            </span>
                        ))}
                    </div>
                    <Image {...firstImage} loading="lazy" />
                </div>
                {totalVariants > 1 && (
                    <div className="grid grid-cols-6 gap-1.5 pt-1.5 ">
                        {variants?.slice(0, 5).map((variant, index) => (
                            <Fragment key={variant?.sku ?? index}>
                                {!!variant ? (
                                    <div className="aspect-square w-full rounded-sm relative border border-solid  border-muted">
                                        <Image {...variant?.firstImage} loading={'lazy'} />
                                    </div>
                                ) : null}
                            </Fragment>
                        ))}
                        {totalVariants > 5 && (
                            <span className="aspect-square flex text-sm  font-bold items-center justify-center  rounded-sm relative border-solid overflow-hidden border border-muted">
                                +{totalVariants - 5}
                            </span>
                        )}
                    </div>
                )}
            </div>
            <div className="flex flex-col px-2 py-2 pb-4 justify-start min-h-1/6 ">
                <span>{name}</span>
                <b className="flex gap-1">
                    <div className={hasPromotion ? 'text-vivid' : ''}>
                        <Price price={price} />
                    </div>
                    {hasPromotion && (
                        <div className="line-through text-sm text-dark/70 font-normal">
                            <Price price={fallbackPriceVariant} />
                        </div>
                    )}
                </b>
            </div>
        </Link>
    );
};
