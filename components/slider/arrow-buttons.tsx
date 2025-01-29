import { ComponentPropsWithRef, useCallback, useEffect, useState } from 'react';
import type useEmblaCarousel from 'embla-carousel-react';
import clsx from 'classnames';

type EmblaApi = ReturnType<typeof useEmblaCarousel>[1];

type UsePrevNextButtonsType = {
    prevBtnDisabled: boolean;
    nextBtnDisabled: boolean;
    onPrevButtonClick: () => void;
    onNextButtonClick: () => void;
};

export const usePrevNextButtons = (emblaApi: EmblaApi): UsePrevNextButtonsType => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollPrev();
    }, [emblaApi]);

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback((emblaApi: EmblaApi) => {
        setPrevBtnDisabled(!emblaApi?.canScrollPrev());
        setNextBtnDisabled(!emblaApi?.canScrollNext());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onSelect(emblaApi);
        emblaApi.on('reInit', onSelect).on('select', onSelect);
    }, [emblaApi, onSelect]);

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    };
};

type ButtonProps = ComponentPropsWithRef<'button'>;

const buttonClassName =
    'absolute w-14 h-14 rounded-full bg-light border-muted border flex items-center justify-center top-1/2 -translate-y-1/2 max-[1680px]:translate-x-0';

export const PrevButton = (props: ButtonProps) => {
    return (
        <button className={clsx(buttonClassName, 'left-1 -translate-x-1/2')} type="button" {...props}>
            <svg className="embla__button__svg" viewBox="0 0 532 532">
                <path
                    fill="currentColor"
                    d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
                />
            </svg>
            <span className="sr-only">Previous</span>
        </button>
    );
};

export const NextButton = (props: ButtonProps) => {
    return (
        <button className={clsx(buttonClassName, 'right-1 translate-x-1/2')} type="button" {...props}>
            <svg className="embla__button__svg" viewBox="0 0 532 532">
                <path
                    fill="currentColor"
                    d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
                />
            </svg>
            <span className="sr-only">Next</span>
        </button>
    );
};
