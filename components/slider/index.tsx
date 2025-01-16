'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { PrevButton, NextButton, usePrevNextButtons } from './arrow-buttons';

type SliderProps = {
    type?: 'story' | 'product';
    options: Parameters<typeof useEmblaCarousel>[0];
    children?: React.ReactNode[] | React.ReactNode;
};

export const Slider = ({ options, type = 'product', children }: SliderProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

    if (children === undefined) {
        return null;
    }

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
