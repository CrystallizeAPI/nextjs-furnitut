import Link from 'next/link';
import { ContentTransformer } from '@crystallize/reactjs-components';
import { Image } from '@crystallize/reactjs-components';
//@TODO types

export const Category: React.FC<{ category: any }> = ({ category }) => {
    const { path, title, intro, image } = category || {};
    const hasImage = !!image?.[0];
    return (
        <Link
            href={path}
            className="aspect-portrait rounded-2xl bg-quinary text-dark border-muted border-solid border text-primary relative block flex-col items-stretch bg-light"
            data-testid={path}
        >
            <div className="relative border h-full rounded-xl overflow-hidden  border-muted flex flex-col justify-stretch ">
                <div className=" h-full shrink relative crystallize-image ">
                    {hasImage && (
                        <Image
                            {...image?.[0]}
                            sizes="(max-width: 600px) 100vw, 600px"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                            loading="lazy"
                        />
                    )}
                </div>
                <div className="absolute h-1/3 bottom-0 w-full flex pointer-events-none items-end justify-center z-10 text-light font-black bg-gradient-to-t from-dark/70 via-dark/30 to-transparent">
                    <div className="text-2xl uppercase py-5 text-balance">{title}</div>
                </div>
            </div>
        </Link>
    );
};
