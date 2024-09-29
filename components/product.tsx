import { Image } from '@/components/image';
import Link from 'next/link';
//@TODO types
export const Product: React.FC<{ product: any }> = ({ product }) => {
    const { name, path, description, defaultVariant, variants } = product;
    const { firstImage, sku } = defaultVariant;
    const totalVariants = variants?.length || 0;
    return (
        <Link
            href={path}
            className="rounded-2xl bg-quinary p-2 pb-0 text-dark border-muted border-solid border text-primary relative flex flex-col items-stretch bg-light"
        >
            <div className="relative justify-stretch h-full max-h-5/6 flex flex-col">
                <div className="rounded-xl overflow-hidden border grow border-muted aspect-portrait row-span-5">
                    <Image {...firstImage} />
                </div>
                {totalVariants > 1 && (
                    <div className="grid grid-cols-6 gap-1.5 pt-1.5 ">
                        {variants.slice(0, 5).map((variant: any) => (
                            <div
                                key={variant.sku}
                                className="aspect-square w-full rounded relative border border-solid  border-muted"
                            >
                                <Image {...variant.firstImage} />
                            </div>
                        ))}
                        {totalVariants > 5 && (
                            <span className="aspect-square flex text-sm  font-bold items-center justify-center  rounded relative border-solid overflow-hidden border border-muted">
                                +{totalVariants - 5}
                            </span>
                        )}
                    </div>
                )}
            </div>
            <div className="flex flex-col px-2 py-2 pb-4 justify-start min-h-1/6 ">
                <span className="">{name}</span>
                <b>$2,999</b>
            </div>
        </Link>
    );
};
