'use client';

import { ChangeEvent, useState } from 'react';
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FilterOption, SortingOption } from './types';
import classNames from 'classnames';

const sortOptions: { label: string; value: SortingOption }[] = [
    { label: 'Most Popular', value: 'popular' },
    { label: 'Best Rating', value: 'rating' },
    { label: 'Newest', value: 'newest' },
    { label: 'Price Highest', value: 'priceHigh' },
    { label: 'Price Lowest', value: 'priceLow' },
];

type Filter = {
    id: string;
    name: string;
    symbol?: string;
    options: {
        value: string;
        label: string;
        count: number;
        checked: boolean;
    }[];
};

const filters: Filter[] = [
    {
        id: 'parentPaths',
        name: 'Category',
        options: [],
    },
    {
        id: 'price',
        name: 'Price',
        symbol: '€',
        options: [],
    },
    {
        id: 'stock',
        name: 'Stock',
        options: [],
    },
];

const PRICE_RANGE_KEY = 'priceRange';
const STOCK_KEY = 'stock';
const SORTING_KEY = 'sort';
const PARENT_PATHS_KEY = 'parentPath';

type FiltersProps = {
    priceRange: FilterOption[];
    sorting: SortingOption;
    paths: FilterOption[];
    stockOptions: FilterOption[];
    totalHits: number;
};

export function Filters({ priceRange, sorting, paths, stockOptions, totalHits }: FiltersProps) {
    const searchParam = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    const [open, setOpen] = useState(false);

    filters.find((filter) => filter.id === 'parentPaths')!.options = paths;
    filters.find((filter) => filter.id === 'price')!.options = priceRange;
    filters.find((filter) => filter.id === 'stock')!.options = stockOptions;

    const updateUrlParams = (params: URLSearchParams, key: string, value: string | null) => {
        if (value === null) {
            params.delete(key);
        } else {
            params.append(key, value);
        }
        return `${pathname}${params.toString() ? `?${params.toString()}` : ''}`;
    };

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        const params = new URLSearchParams(searchParam);

        const { checked, name } = e.target;
        const value = checked ? e.target.value : null;

        if (name === 'parentPaths') {
            return router.push(updateUrlParams(params, PARENT_PATHS_KEY, value));
        }

        if (name === 'price') {
            return router.push(updateUrlParams(params, PRICE_RANGE_KEY, value));
        }

        if (name === 'stock') {
            return router.push(updateUrlParams(params, STOCK_KEY, value));
        }
    };

    const handleSortingChange = (value: SortingOption) => {
        const params = new URLSearchParams(searchParam);

        const sortingValue = value === 'popular' ? null : value;

        router.push(updateUrlParams(params, SORTING_KEY, sortingValue));
    };

    return (
        <div className="">
            {/* Mobile filter dialog */}
            <Dialog open={open} onClose={setOpen} className="relative z-40 sm:hidden">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-dark/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
                />

                <div className="fixed inset-0 z-40 flex">
                    <DialogPanel
                        transition
                        className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-light py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
                    >
                        <div className="flex items-center justify-between px-4">
                            <h2 className="text-lg font-medium text-dark/90">Filters</h2>
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="-mr-2 flex size-10 items-center justify-center rounded-md bg-light p-2 text-dark/40"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                        </div>

                        {/* Filters */}
                        <form className="mt-4">
                            {filters.map((section) => (
                                <Disclosure key={section.name} as="div" className="border-t border-dark/20 px-4 py-6">
                                    <h3 className="-mx-2 -my-3 flow-root">
                                        <DisclosureButton className="group flex w-full items-center justify-between bg-light px-2 py-3 text-sm text-dark/40">
                                            <span className="font-medium text-dark/90">
                                                {section.name} {section.symbol}
                                            </span>
                                            <span className="ml-6 flex items-center">
                                                <ChevronDownIcon
                                                    aria-hidden="true"
                                                    className="size-5 rotate-0 transform group-data-open:-rotate-180"
                                                />
                                            </span>
                                        </DisclosureButton>
                                    </h3>
                                    <DisclosurePanel className="pt-6">
                                        <div className="space-y-6">
                                            {section.options.map((option, optionIdx) => (
                                                <div key={option.value} className="flex gap-3">
                                                    <div className="flex h-5 shrink-0 items-center">
                                                        <div className="group grid size-4 grid-cols-1">
                                                            <input
                                                                defaultValue={option.value}
                                                                defaultChecked={option.checked}
                                                                disabled={option.count === 0}
                                                                onChange={handleCheckboxChange}
                                                                id={`filter-mobile-${section.id}-${optionIdx}`}
                                                                name={`${section.id}`}
                                                                type="checkbox"
                                                                className="col-start-1 row-start-1 appearance-none rounded-sm border border-dark/30 bg-light checked:border-accent/60 checked:bg-accent/60 indeterminate:border-accent/60 indeterminate:bg-accent/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent/60 disabled:border-dark/30 disabled:bg-dark/10 disabled:checked:bg-dark/10 forced-colors:appearance-auto"
                                                            />
                                                            <svg
                                                                fill="none"
                                                                viewBox="0 0 14 14"
                                                                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-light group-has-disabled:stroke-dark/25"
                                                            >
                                                                <path
                                                                    d="M3 8L6 11L11 3.5"
                                                                    strokeWidth={2}
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="opacity-0 group-has-checked:opacity-100"
                                                                />
                                                                <path
                                                                    d="M3 7H11"
                                                                    strokeWidth={2}
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="opacity-0 group-has-indeterminate:opacity-100"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <label
                                                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                        className="text-sm text-dark/50 flex justify-between w-full"
                                                    >
                                                        {option.label}
                                                        <span className="ml-4 text-dark/50">{option.count}</span>
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </DisclosurePanel>
                                </Disclosure>
                            ))}
                        </form>
                    </DialogPanel>
                </div>
            </Dialog>

            {/* Filters */}
            <section aria-labelledby="filter-heading">
                <h2 id="filter-heading" className="sr-only">
                    Filters
                </h2>

                <div>
                    <div className="mx-auto flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Menu as="div" className="relative inline-block text-left">
                                {({ open }) => (
                                    <>
                                        <div>
                                            <MenuButton
                                                className={classNames(
                                                    'group cursor-pointer inline-flex justify-center text-sm font-medium text-dark bg-muted px-4 py-2 rounded-full hover:border-dark active:border-dark border',
                                                    open ? 'border-dark' : 'border-transparent',
                                                )}
                                            >
                                                <span className="font-bold">
                                                    {sortOptions.find((options) => options.value === sorting)?.label}
                                                </span>
                                                <ChevronDownIcon
                                                    aria-hidden="true"
                                                    className={classNames(
                                                        '-mr-1 ml-1 size-5 shrink-0 text-dark/40 group-hover:text-dark/50',
                                                        open ? 'rotate-180' : '',
                                                    )}
                                                />
                                            </MenuButton>
                                        </div>

                                        <MenuItems
                                            transition
                                            className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-light shadow-2xl ring-1 ring-dark/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                        >
                                            <div className="py-1">
                                                {sortOptions.map((option) => (
                                                    <MenuItem
                                                        key={option.value}
                                                        as={'span'}
                                                        className={classNames(
                                                            option.value === sorting
                                                                ? 'font-medium text-dark/90'
                                                                : 'text-dark/50',
                                                            'block cursor-pointer px-4 py-2 text-sm  data-focus:bg-dark/10 data-focus:outline-hidden',
                                                        )}
                                                        onClick={(e) => handleSortingChange(option.value)}
                                                    >
                                                        <span className="font-bold">{option.label}</span>
                                                    </MenuItem>
                                                ))}
                                            </div>
                                        </MenuItems>
                                    </>
                                )}
                            </Menu>
                            <p className="m-0 p-0">
                                <strong>{totalHits}</strong> products
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={() => setOpen(true)}
                            className="inline-block text-sm font-medium text-dark/70 hover:text-dark/90 sm:hidden"
                        >
                            Filters
                        </button>

                        <div className="hidden sm:block">
                            <div className="flow-root">
                                <PopoverGroup className="flex items-center">
                                    {filters.map((section, sectionIdx) => (
                                        <Popover key={section.name} className="relative inline-block px-1 text-left">
                                            {({ open }) => (
                                                <>
                                                    <PopoverButton
                                                        className={classNames(
                                                            'group cursor-pointer inline-flex justify-center text-sm font-medium text-dark bg-muted px-4 py-2 rounded-full hover:border-dark active:border-dark border',
                                                            open ? 'border-dark' : 'border-transparent',
                                                        )}
                                                    >
                                                        <span className="font-bold">{section.name}</span>

                                                        <ChevronDownIcon
                                                            aria-hidden="true"
                                                            className={classNames(
                                                                '-mr-1 ml-1 size-5 shrink-0 text-dark/40 group-hover:text-dark/50',
                                                                open ? 'rotate-180' : '',
                                                            )}
                                                        />
                                                    </PopoverButton>

                                                    <PopoverPanel
                                                        transition
                                                        className="absolute min-w-64 right-0 z-10 mt-2 origin-top-right rounded-md bg-light p-4 shadow-2xl ring-1 ring-dark/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                                    >
                                                        <form className="space-y-4">
                                                            {section.options.map((option, optionIdx) => (
                                                                <div
                                                                    key={option.value}
                                                                    className={classNames(
                                                                        'flex gap-3 group cursor-pointer',
                                                                        {
                                                                            'cursor-not-allowed text-dark/30':
                                                                                option.count === 0,
                                                                            'text-dark/90': option.count !== 0,
                                                                        },
                                                                    )}
                                                                >
                                                                    <div className="flex h-5 shrink-0 items-center">
                                                                        <div className="group grid size-4 grid-cols-1">
                                                                            <input
                                                                                defaultValue={option.value}
                                                                                defaultChecked={option.checked}
                                                                                disabled={option.count === 0}
                                                                                onChange={handleCheckboxChange}
                                                                                id={`filter-${section.id}-${optionIdx}`}
                                                                                name={`${section.id}`}
                                                                                type="checkbox"
                                                                                className="col-start-1 row-start-1 appearance-none rounded-sm border border-dark/30 bg-light checked:border-dark checked:bg-dark indeterminate:border-accent/60 indeterminate:bg-accent/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent/60 disabled:border-dark/30 disabled:bg-dark/10 disabled:checked:bg-dark/10 forced-colors:appearance-auto"
                                                                            />
                                                                            <svg
                                                                                fill="none"
                                                                                viewBox="0 0 14 14"
                                                                                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-light group-has-disabled:stroke-dark/25"
                                                                            >
                                                                                <path
                                                                                    d="M3 8L6 11L11 3.5"
                                                                                    strokeWidth={2}
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    className="opacity-0 group-has-checked:opacity-100"
                                                                                />
                                                                                <path
                                                                                    d="M3 7H11"
                                                                                    strokeWidth={2}
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    className="opacity-0 group-has-indeterminate:opacity-100"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <label
                                                                        htmlFor={`filter-${section.id}-${optionIdx}`}
                                                                        className="pr-6 text-sm font-medium whitespace-nowrap text-dark/90 w-full flex justify-between"
                                                                    >
                                                                        {`${section.symbol || ''} ${option.label?.split('>')?.pop()}`}

                                                                        <span className="ml-4 text-dark/50">
                                                                            {option.count}
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                            ))}
                                                        </form>
                                                    </PopoverPanel>
                                                </>
                                            )}
                                        </Popover>
                                    ))}
                                </PopoverGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
