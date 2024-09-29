'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { EmblaOptionsType } from 'embla-carousel';

import useEmblaCarousel from 'embla-carousel-react';
import { PrevButton, NextButton, usePrevNextButtons } from './arrow-buttons';

export const Slider = ({
    options,
    type = 'product',
    children,
}: {
    type?: 'story' | 'product';
    options: EmblaOptionsType;
    children?: React.ReactNode[] | React.ReactNode;
}) => {
    if (children === undefined) return null;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

    const style = {
        '--slide-size': type === 'story' ? '50%' : '25%',
    } as React.CSSProperties;

    return (
        <section className="embla w-full relative " style={style}>
            <div className="embla__viewport " ref={emblaRef}>
                <div className="embla__container ">
                    {Array.isArray(children) ? (
                        <>
                            {children.map((child: any, index: number) => (
                                <div className="embla__slide " key={index}>
                                    {child}
                                </div>
                            ))}
                        </>
                    ) : (
                        <div className="embla__slide ">{children}</div>
                    )}
                </div>
                {!prevBtnDisabled && <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />}
                {!nextBtnDisabled && <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />}
            </div>
        </section>
    );
};
