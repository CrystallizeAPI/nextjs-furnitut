'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { ChangeEvent } from 'react';
import { TransformedRange } from '@/utils/price-range';

const PRICE_RANGE_KEY = 'priceRange';
const IN_STOCK_KEY = 'inStock';

interface FiltersProps {
    priceRange: TransformedRange[];
    selectedPriceRange?: string | `${string},${string}`;
    inStock?: boolean;
}

export function Filters({ priceRange, selectedPriceRange, inStock }: FiltersProps) {
    const searchParam = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const updateUrlParams = (params: URLSearchParams, key: string, value: string | null) => {
        if (value === null) {
            params.delete(key);
        } else {
            params.set(key, value);
        }
        return `${pathname}${params.toString() ? `?${params.toString()}` : ''}`;
    };

    const handlePriceChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const range = e.target.value.split(',').filter(Boolean) as [string, string];
        const params = new URLSearchParams(searchParam);
        const value = range.includes('All') ? null : range.join(',');

        router.push(updateUrlParams(params, PRICE_RANGE_KEY, value));
    };

    const handleStockChange = () => {
        const params = new URLSearchParams(searchParam);
        const newInStock = !inStock;
        const value = newInStock ? 'true' : null;

        router.push(updateUrlParams(params, IN_STOCK_KEY, value));
    };

    if (!priceRange) {
        return null;
    }

    return (
        <div className="flex gap-4 max-w-(--breakpoint-2xl) mx-auto">
            <div>
                <label htmlFor="price-range" className="block text-sm/6 font-medium text-gray-900">
                    Price Range
                </label>
                <div className="mt-2 grid grid-cols-1">
                    <select
                        id="price-range"
                        name="price-range"
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        onChange={handlePriceChange}
                        value={selectedPriceRange}
                    >
                        <option>All</option>
                        {priceRange.map(({ min, max, count }) => (
                            <option key={min} value={[min.toString(), max?.toString() ?? '']}>
                                {max ? `${min} - ${max}` : `${min}+`} ({count})
                            </option>
                        ))}
                    </select>
                    <svg
                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </div>

            <div>
                <label htmlFor="stock" className="block text-sm/6 font-medium text-gray-900">
                    In Stock
                </label>
                <button
                    type="button"
                    className={`mt-2 relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:outline-hidden ${inStock ? 'bg-dark' : 'bg-light'}`}
                    role="switch"
                    aria-checked="false"
                    onClick={handleStockChange}
                >
                    <span className="sr-only">In Stock</span>
                    <span
                        aria-hidden="true"
                        className={`pointer-events-none inline-block size-5 transform rounded-full bg-light shadow-sm ring-0 transition duration-200 ease-in-out ${inStock ? 'translate-x-5' : 'translate-x-0'}`}
                    ></span>
                </button>
            </div>
        </div>
    );
}
