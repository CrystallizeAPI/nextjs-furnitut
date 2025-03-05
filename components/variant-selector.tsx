import { Image } from '@/components/image';
import Link from 'next/link';
import classNames from 'classnames';
import { Price } from './price';
import { ProductVariantFragment } from '@/generated/graphql';

function reduceAttributes(variants?: ProductVariantFragment[]) {
    return variants?.reduce((acc: Record<string, any[]>, variant: any) => {
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

type GetHrefProps = { path: string; name: string; value: string; searchParams: Record<string, string> };

const getHref = ({ path, name, value, searchParams }: GetHrefProps) => {
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    return `${path}?${params.toString()}`;
};

type FindSuitableVariantProps = {
    searchParams: Record<string, string>;
    variants?: Array<ProductVariantFragment | null> | null;
};

export const findSuitableVariant = (props: FindSuitableVariantProps) => {
    const variants = props.variants as ProductVariantFragment[] | null;
    const searchParams = props.searchParams;
    const paramKeys = Object.keys(props.searchParams);

    if (paramKeys.includes('sku')) {
        // If we have a sku, we don't need to check the other attributes
        return variants?.find((variant) => variant?.sku === searchParams.sku);
    }

    //If we have attribute keys as params, we'll do our best to find the matching variant
    return (
        variants?.find((variant) => {
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

                return !!properKey ? variant?.attributes[properKey] === searchParams[key] : false;
            });
        }) ?? variants?.[0]
    );
};

type VariantSelectorProps = {
    variants?: Array<ProductVariantFragment | null> | null;
    searchParams: Record<string, string>;
    path: string;
};

export const VariantSelector = (props: VariantSelectorProps) => {
    const { searchParams, path } = props;
    const variants = props.variants?.reduce<ProductVariantFragment[]>((acc, item) => {
        const variant = item as ProductVariantFragment | null;
        !!variant && acc.push(variant);
        return acc;
    }, []);

    const hasAttributeSelector = variants?.every((variant) => variant?.attributes !== null);

    if (!hasAttributeSelector) {
        // Variants are not using attributes
        const currentSku = searchParams.sku;
        return (
            <div className="py-2 flex gap-y-1 flex-col">
                <span className="font-bold text-base pb-2 block">Variants</span>
                {variants?.map((variant, index) => {
                    return (
                        <Link
                            key={`variant-${index}`}
                            href={path + '?sku=' + variant.sku}
                            className={classNames(
                                'bg-light rounded-lg overflow-hidden flex border-muted border p-1 gap-4 items-center',
                                { 'border-dark!': variant.sku === currentSku },
                            )}
                        >
                            <div className=" overflow-hidden h-16 w-16 shrink-0 rounded-md border border-muted  ">
                                <Image {...variant.images?.[0]} sizes="(max-width: 640px) 100w, 200w" />
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

    return Object.keys(variantSelectorOptions ?? {}).map((key, facetIndex) => {
        const searchValue = searchParams[key];
        return (
            <div className="py-2" key={`${key}-${facetIndex}-selector`}>
                <span className="font-bold text-base pb-2 block">{key}</span>
                <div className="grid grid-cols-5 gap-1">
                    {variantSelectorOptions?.[key].map((value, index: number) => {
                        return (
                            <Link
                                key={index}
                                href={getHref({ path, name: key, value: value.value, searchParams })}
                                className={classNames(
                                    'bg-light rounded-lg overflow-hidden border-muted border text-xs p-1 text-center font-bold',
                                    {
                                        'border-dark!': value.value === searchValue || (!searchValue && index === 0),
                                    },
                                )}
                            >
                                {facetIndex === 0 && (
                                    <div className="aspect-square overflow-hidden rounded-md">
                                        <Image {...value.images[0]} sizes="(max-width: 640px) 100w, 200w" />
                                    </div>
                                )}
                                <span className="py-2 block">{value.value}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        );
    });
};
