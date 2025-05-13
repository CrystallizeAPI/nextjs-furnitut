'use client';

import { ChangeEvent, useState } from 'react';
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Field,
    Label,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Switch,
    Checkbox,
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { TransformedRange } from '@/utils/price-range';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { SortingOption } from '@/app/(shop)/[slug]/[...category]/page';

const sortOptions: { label: string; value: SortingOption }[] = [
    { label: 'Most Popular', value: 'popular' },
    { label: 'Best Rating', value: 'rating' },
    { label: 'Newest', value: 'newest' },
    { label: 'Price Highest', value: 'priceHigh' },
    { label: 'Price Lowest', value: 'priceLow' },
];

const filters = [
    // {
    //     id: 'category',
    //     name: 'Category',
    //     options: [
    //         { value: 'new-arrivals', label: 'All New Arrivals', checked: false },
    //         { value: 'tees', label: 'Tees', checked: false },
    //         { value: 'objects', label: 'Objects', checked: true },
    //     ],
    // },
    // {
    //     id: 'genre',
    //     name: 'Genre',
    //     options: [
    //         { value: 'rock', label: 'Rock', checked: true },
    //         { value: 'pop', label: 'Pop', checked: false },
    //         { value: 'electronic', label: 'Electronic', checked: false },
    //         { value: 'funk-soul', label: 'Funk Soul', checked: false },
    //         { value: 'hip-hop', label: 'Hip Hop', checked: false },
    //         { value: 'reggae', label: 'Reggae', checked: false },
    //     ],
    // },
    {
        id: 'price',
        name: 'Price',
        options: [
            { value: '0,5', label: '0-5' },
            { value: '5,10', label: '5-10' },
            { value: '10,15', label: '10-15' },
            { value: '15,20', label: '15-20' },
            { value: '20,25', label: '20-25' },
            { value: '25,30', label: '25-30' },
            { value: '30,35', label: '30-35' },
            { value: '35,40', label: '35-40' },
            { value: '40,45', label: '40-45' },
            { value: '45,50', label: '45-50' },
            { value: '50', label: '50+' },
        ],
    },
];
const activeFilters = [
    { value: 'genre', label: 'Rock' },
    { value: 'style', label: 'Alternative Rock' },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const PRICE_RANGE_KEY = 'priceRange';
const IN_STOCK_KEY = 'inStock';
const SORTING_KEY = 'sort';

interface FiltersProps {
    priceRange: TransformedRange[];
    selectedPriceRange?: string | `${string},${string}`;
    inStock?: boolean;
    sorting: SortingOption;
}

export function Filters({ inStock, priceRange, selectedPriceRange, sorting }: FiltersProps) {
    const searchParam = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    const [open, setOpen] = useState(false);

    console.log(priceRange);

    const updateUrlParams = (params: URLSearchParams, key: string, value: string | null) => {
        if (value === null) {
            params.delete(key);
        } else {
            params.set(key, value);
        }
        return `${pathname}${params.toString() ? `?${params.toString()}` : ''}`;
    };

    const handleStockChange = (checked: boolean) => {
        const params = new URLSearchParams(searchParam);
        const value = checked ? 'true' : null;

        router.push(updateUrlParams(params, IN_STOCK_KEY, value));
    };

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        const params = new URLSearchParams(searchParam);
        console.log(e.target.value, e.target.checked, e.target.name);
        const value = e.target.checked ? e.target.value : null;

        router.push(updateUrlParams(params, PRICE_RANGE_KEY, value));
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
                                            <span className="font-medium text-dark/90">{section.name}</span>
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
                                                                defaultChecked={option.value === selectedPriceRange}
                                                                onChange={handleCheckboxChange}
                                                                id={`filter-mobile-${section.id}-${optionIdx}`}
                                                                name={`${section.id}`}
                                                                type="checkbox"
                                                                className="col-start-1 row-start-1 appearance-none rounded-sm border border-dark/30 bg-light checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-dark/30 disabled:bg-dark/10 disabled:checked:bg-dark/10 forced-colors:appearance-auto"
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
                                                        className="text-sm text-dark/50"
                                                    >
                                                        {option.label}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </DisclosurePanel>
                                </Disclosure>
                            ))}
                            <Field className="px-4 flex items-center">
                                <Label>In Stock</Label>
                                <Switch
                                    checked={inStock}
                                    onChange={handleStockChange}
                                    className="group inline-flex h-6 w-11 items-center rounded-full bg-dark/20 transition data-checked:bg-accent/60"
                                >
                                    <span className="size-4 translate-x-1 rounded-full bg-light transition group-data-checked:translate-x-6" />
                                </Switch>
                            </Field>
                        </form>
                    </DialogPanel>
                </div>
            </Dialog>

            {/* Filters */}
            <section aria-labelledby="filter-heading">
                <h2 id="filter-heading" className="sr-only">
                    Filters
                </h2>

                <div className="border-b border-dark/20 pb-4">
                    <div className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <MenuButton className="group inline-flex justify-center text-sm font-medium text-dark/70 hover:text-dark/90">
                                    Sort
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className="-mr-1 ml-1 size-5 shrink-0 text-dark/40 group-hover:text-dark/50"
                                    />
                                </MenuButton>
                            </div>

                            <MenuItems
                                transition
                                className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-light shadow-2xl ring-1 ring-dark/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                onChange={(e) => {
                                    console.log(e);
                                }}
                            >
                                <div className="py-1">
                                    {sortOptions.map((option) => (
                                        <MenuItem
                                            key={option.value}
                                            as={'span'}
                                            className={classNames(
                                                option.value === sorting ? 'font-medium text-dark/90' : 'text-dark/50',
                                                'block px-4 py-2 text-sm data-focus:bg-dark/10 data-focus:outline-hidden',
                                            )}
                                            onClick={(e) => handleSortingChange(option.value)}
                                        >
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </div>
                            </MenuItems>
                        </Menu>

                        <button
                            type="button"
                            onClick={() => setOpen(true)}
                            className="inline-block text-sm font-medium text-dark/70 hover:text-dark/90 sm:hidden"
                        >
                            Filters
                        </button>

                        <div className="hidden sm:block">
                            <div className="flow-root">
                                <PopoverGroup className="-mx-4 flex items-center divide-x divide-dark/20">
                                    {filters.map((section, sectionIdx) => (
                                        <Popover key={section.name} className="relative inline-block px-4 text-left">
                                            <PopoverButton className="group inline-flex justify-center text-sm font-medium text-dark/70 hover:text-dark/90">
                                                <span>{section.name}</span>
                                                {/*{sectionIdx === 0 ? (*/}
                                                {/*    <span className="ml-1.5 rounded-sm bg-dark/20 px-1.5 py-0.5 text-xs font-semibold text-dark/70 tabular-nums">*/}
                                                {/*        1*/}
                                                {/*    </span>*/}
                                                {/*) : null}*/}
                                                <ChevronDownIcon
                                                    aria-hidden="true"
                                                    className="-mr-1 ml-1 size-5 shrink-0 text-dark/40 group-hover:text-dark/50"
                                                />
                                            </PopoverButton>

                                            <PopoverPanel
                                                transition
                                                className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-light p-4 shadow-2xl ring-1 ring-dark/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                            >
                                                <form className="space-y-4">
                                                    {section.options.map((option, optionIdx) => (
                                                        <div key={option.value} className="flex gap-3">
                                                            <div className="flex h-5 shrink-0 items-center">
                                                                <div className="group grid size-4 grid-cols-1">
                                                                    <input
                                                                        defaultValue={option.value}
                                                                        defaultChecked={option.value === selectedPriceRange}
                                                                        onChange={handleCheckboxChange}
                                                                        id={`filter-${section.id}-${optionIdx}`}
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
                                                                {/*<div className="group grid size-4 grid-cols-1">*/}
                                                                {/*<Checkbox*/}
                                                                {/*    checked={option.checked}*/}
                                                                {/*    onChange={() => {}}*/}
                                                                {/*    className="group block size-4 rounded border bg-light data-checked:bg-accent/50"*/}
                                                                {/*    // className="col-start-1 row-start-1 appearance-none rounded-sm border border-dark/30 bg-light checked:border-accent/60 checked:bg-accent/60 indeterminate:border-accent/60 indeterminate:bg-accent/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent/60 disabled:border-dark/30 disabled:bg-dark/10 disabled:checked:bg-dark/10 forced-colors:appearance-auto"*/}
                                                                {/*>*/}
                                                                {/*    /!* Checkmark icon *!/*/}
                                                                {/*    <svg*/}
                                                                {/*        className="stroke-light opacity-0 group-data-checked:opacity-100"*/}
                                                                {/*        viewBox="0 0 14 14"*/}
                                                                {/*        fill="none"*/}
                                                                {/*    >*/}
                                                                {/*        <path*/}
                                                                {/*            d="M3 8L6 11L11 3.5"*/}
                                                                {/*            strokeWidth={2}*/}
                                                                {/*            strokeLinecap="round"*/}
                                                                {/*            strokeLinejoin="round"*/}
                                                                {/*        />*/}
                                                                {/*    </svg>*/}
                                                                {/*</Checkbox>*/}
                                                                {/*</div>*/}
                                                            </div>
                                                            <label
                                                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                                                className="pr-6 text-sm font-medium whitespace-nowrap text-dark/90"
                                                            >
                                                                {option.label}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </form>
                                            </PopoverPanel>
                                        </Popover>
                                    ))}
                                    <Field className="px-4 flex items-center">
                                        <Label as="span" className="mr-3 text-sm">
                                            In Stock
                                        </Label>
                                        <Switch
                                            checked={inStock}
                                            onChange={handleStockChange}
                                            className="group inline-flex h-6 w-11 items-center rounded-full bg-dark/20 transition data-checked:bg-accent/60"
                                        >
                                            <span className="size-4 translate-x-1 rounded-full bg-light transition group-data-checked:translate-x-6" />
                                        </Switch>
                                    </Field>
                                </PopoverGroup>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Active filters */}
                {/*<div className="bg-dark/10">*/}
                {/*    <div className="mx-auto px-4 py-3 sm:flex sm:items-center sm:px-6 lg:px-8">*/}
                {/*        <h3 className="text-sm font-medium text-dark/50">*/}
                {/*            Filters*/}
                {/*            <span className="sr-only">, active</span>*/}
                {/*        </h3>*/}

                {/*        <div aria-hidden="true" className="hidden h-5 w-px bg-dark/30 sm:ml-4 sm:block" />*/}

                {/*        <div className="mt-2 sm:mt-0 sm:ml-4">*/}
                {/*            <div className="-m-1 flex flex-wrap items-center">*/}
                {/*                {activeFilters.map((activeFilter) => (*/}
                {/*                    <span*/}
                {/*                        key={activeFilter.value}*/}
                {/*                        className="m-1 inline-flex items-center rounded-full border border-dark/20 bg-light py-1.5 pr-2 pl-3 text-sm font-medium text-dark/90"*/}
                {/*                    >*/}
                {/*                        <span>{activeFilter.label}</span>*/}
                {/*                        <button*/}
                {/*                            type="button"*/}
                {/*                            className="ml-1 inline-flex size-4 shrink-0 rounded-full p-1 text-dark/40 hover:bg-dark/20 hover:text-dark/50"*/}
                {/*                        >*/}
                {/*                            <span className="sr-only">Remove filter for {activeFilter.label}</span>*/}
                {/*                            <svg fill="none" stroke="currentColor" viewBox="0 0 8 8" className="size-2">*/}
                {/*                                <path d="M1 1l6 6m0-6L1 7" strokeWidth="1.5" strokeLinecap="round" />*/}
                {/*                            </svg>*/}
                {/*                        </button>*/}
                {/*                    </span>*/}
                {/*                ))}*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </section>
        </div>
    );
}
