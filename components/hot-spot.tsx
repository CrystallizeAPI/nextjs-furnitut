'use client';

import clsx from 'classnames';
import Link from 'next/link';
import { Image as CrystallizeImage } from '@crystallize/reactjs-components';

import { Price } from './price';
import { useState } from 'react';

const classes =
    'group absolute w-8 h-8 flex items-center justify-center rounded-full bg-dark/40 -translate-x-1/2 -translate-y-1/2';

const HotspotWrapper = ({
    children,
    link,
    x,
    y,
}: {
    children: React.ReactElement[];
    link?: string;
    x: number;
    y: number;
}) => {
    const [isActive, setIsActive] = useState(false);
    const Tag = !!link ? Link : 'div';

    return (
        <Tag
            href={link ?? '#'}
            className={clsx(classes, isActive && 'z-10')}
            style={{ left: `${x}%`, top: `${y}%` }}
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
        >
            {children}
        </Tag>
    );
};

export const HotSpot = ({ showcase }: { showcase: any }) => {
    if (!showcase?.hotspot?.x) return null;
    const x = showcase?.hotspot.x * 100;
    const y = showcase?.hotspot.y * 100;
    const product = showcase?.items?.[0] || showcase?.variants?.[0];
    const image = product?.firstImage || product?.defaultVariant?.firstImage;
    const price = product?.defaultPrice || product?.defaultVariant?.defaultPrice;
    const link = product?.product?.path || product?.path;

    return (
        <HotspotWrapper link={link} x={x} y={y}>
            <div className="bg-light w-4 h-4 rounded-full z-10"></div>
            <div
                className={clsx(
                    'group-hover:w-auto group-hover:h-auto top-0 absolute w-0 h-0 overflow-hidden bg-dark rounded-lg transition-all',
                    {
                        'left-0 pl-8': x <= 50,
                        'right-0 pr-8 pl-2': x > 50,
                    },
                )}
            >
                {product && (
                    <div className=" gap-4 flex w-full text-light py-2 pr-6 text-sm items-center">
                        <div className="w-12 h-12 overflow-hidden rounded-sm shrink-0 [&_img]:object-cover [&_img]:object-center [&_img]:h-full bg-light">
                            <CrystallizeImage
                                {...image}
                                alt={image?.altText}
                                className="h-full w-12"
                                loading="lazy"
                                sizes="100px"
                            />
                        </div>
                        <div className="flex flex-col overflow-hidden gap-1">
                            <span className="text-ellipsis text-nowrap w-full">{product.name}</span>
                            <span className="text-xs font-medium">
                                <Price price={price} />
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </HotspotWrapper>
    );
};
