import { Image } from '@/components/image';
import Link from 'next/link';
import classNames from 'classnames';
import { Price } from './price';

function reduceAttributes(variants: any) {
    return variants.reduce((acc: Record<string, any[]>, variant: any) => {
        Object.keys(variant.attributes).forEach((key) => {
            const value = variant.attributes[key];
            if (!acc[key]) {
                acc[key] = [];
            }
            if (!acc[key].find((v) => v.value === value)) {
                acc[key].push({
                    value,
                    images: variant.images,
                });
            }
        });
        return acc;
    }, {});
}

export const findSuitableVariant = (variants: any, searchParams: any) => {
    const paramKeys = Object.keys(searchParams);
    if (paramKeys.includes('sku')) {
        // If we have a sku, we don't need to check the other attributes
        return variants.find((variant: any) => variant.sku === searchParams.sku);
    } else {
        //If we have attribute keys as params, we'll do our best to find the matching variant
        return variants?.find((variant: any) => {
            return paramKeys.every((key) => {
                let properKey;
                if (key in variant?.attributes) {
                    properKey = key;
                } else {
                    const newKey = key.charAt(0).toUpperCase() + key.slice(1);
                    if (newKey in variant?.attributes) {
                        properKey = newKey;
                    }
                }
                return variant?.attributes[properKey] === searchParams[key];
            });
        });
    }
};

export const VariantSelector = ({
    variants,
    searchParams,
    path,
}: {
    variants: any;
    searchParams: any;
    path: string;
}) => {
    const useAttributeSelector = variants.every((variant) => variant.attributes !== null);

    if (!useAttributeSelector) {
        // Variants are not using attributes
        const currentSku = searchParams.sku;
        console.log({ currentSku });
        return (
            <div className="py-2 flex gap-y-1 flex-col">
                <span className="font-bold text-base pb-2 block">Variants</span>
                {[...variants].map((variant: any, index: number) => {
                    return (
                        <Link
                            key={`variant-${index}`}
                            href={path + '?sku=' + variant.sku}
                            className={classNames(
                                'bg-light rounded-lg overflow-hidden flex border-muted border p-1 gap-4 items-center',
                                { '!border-dark': variant.sku === currentSku },
                            )}
                        >
                            <div className=" overflow-hidden h-16 w-16 shrink-0 rounded-md border border-muted  ">
                                <Image {...variant.images[0]} sizes="200px" />
                            </div>
                            <div className="flex py-2 w-full justify-between px-4">
                                <span className=" flex-col flex ">
                                    <span className="text-sm font-bold">{variant.name}</span>
                                    <span className="text-xs ">{variant.sku}</span>
                                </span>
                                <span className="font-bold text-sm">
                                    <Price price={variant.defaultPrice} />
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        );
    }

    const variantSelectorOptions = reduceAttributes(variants);

    const createQueryString = (name: string, value: string) => {
        const params = new URLSearchParams(searchParams);
        params.set(name, value);
        return params.toString();
    };

    return (
        <>
            {Object.keys(variantSelectorOptions).map((key, facetIndex) => {
                const searchValue = searchParams[key];
                return (
                    <div className="py-2">
                        <span className="font-bold text-base pb-2 block">{key}</span>
                        <div className="grid grid-cols-5 gap-1">
                            {variantSelectorOptions[key].map((value, index) => {
                                return (
                                    <Link
                                        key={`attribute-variant-${index}`}
                                        href={path + '?' + createQueryString(key, value.value)}
                                        className={classNames(
                                            'bg-light rounded-lg overflow-hidden border-muted border text-xs p-1 text-center font-bold',
                                            {
                                                '!border-dark':
                                                    value.value === searchValue || (!searchValue && index === 0),
                                            },
                                        )}
                                    >
                                        {facetIndex === 0 && (
                                            <div className="aspect-square overflow-hidden rounded-md">
                                                <Image {...value.images[0]} sizes="200px" />
                                            </div>
                                        )}
                                        <span className="py-2 block">{value.value}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </>
    );
};
