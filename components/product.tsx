import Link from 'next/link';
import { Image } from '@/components/image';
import { Product as ProductType, ProductVariant } from '@/generated/graphql';
import { Price } from './price';

type ProductProps = {
    product: {
        name?: string | null;
        path?: string | null;
        defaultVariant?: { firstImage: { url: string | null } | null; defaultPrice: any | null } | null;
        variants?: Array<{ sku?: string | null; firstImage: { url: string | null } | null } | null> | null;
    } | null;
};

export const Product = ({ product }: ProductProps) => {
    const { name, path, defaultVariant, variants } = product ?? {};
    const { firstImage, defaultPrice } = defaultVariant ?? {};
    const totalVariants = variants?.length || 0;

    return (
        <Link
            href={path ?? '/'}
            className="rounded-2xl bg-quinary p-2 pb-0 text-dark border-muted border-solid border text-primary relative flex flex-col items-stretch bg-light"
        >
            <div className="relative justify-stretch h-full max-h-5/6 flex flex-col">
                <div className="rounded-xl overflow-hidden border grow border-muted aspect-portrait row-span-5">
                    <Image {...firstImage} />
                </div>
                {totalVariants > 1 && (
                    <div className="grid grid-cols-6 gap-1.5 pt-1.5 ">
                        {variants?.slice(0, 5).map((variant) =>
                            !!variant ? (
                                <div
                                    key={variant.sku}
                                    className="aspect-square w-full rounded relative border border-solid  border-muted"
                                >
                                    <Image {...variant?.firstImage} />
                                </div>
                            ) : null,
                        )}
                        {totalVariants > 5 && (
                            <span className="aspect-square flex text-sm  font-bold items-center justify-center  rounded relative border-solid overflow-hidden border border-muted">
                                +{totalVariants - 5}
                            </span>
                        )}
                    </div>
                )}
            </div>
            <div className="flex flex-col px-2 py-2 pb-4 justify-start min-h-1/6 ">
                <span>{name}</span>
                <b>
                    <Price price={defaultPrice} />
                </b>
            </div>
        </Link>
    );
};
