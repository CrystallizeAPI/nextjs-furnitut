'use client';

import { useRouter } from 'next/navigation';

import {
    Combobox,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
    Dialog,
    DialogPanel,
    DialogBackdrop,
} from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { useCallback, useEffect, useState } from 'react';
import { apiRequest } from '@/utils/api-request';
import { GlobalSearchDocument } from '@/generated/discovery/graphql';
import { debounce } from '@/utils/debounce';

type ImageVariant = {
    url: string;
    width: number;
    height: number;
};

type FirstImage = {
    variants: ImageVariant[];
};

type DefaultVariant = {
    firstImage: FirstImage;
    defaultPrice: number;
};

type Product = {
    id: string;
    name: string;
    path: string;
    defaultVariant: DefaultVariant;
};

export function CommandPalette() {
    const [query, setQuery] = useState('');
    const [open, setOpen] = useState(false);
    const [results, setResults] = useState<Product[]>([]);
    const router = useRouter();

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        const handleCommandK = (event: KeyboardEvent) => {
            if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
                event.preventDefault();
                setOpen(true);
            }
        };

        window.addEventListener('keydown', handleCommandK);

        return () => {
            window.removeEventListener('keydown', handleCommandK);
        };
    }, []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedApiCall = useCallback(
        debounce(async (term: string) => {
            const response = await apiRequest(GlobalSearchDocument, { term });
            const results = response?.data?.search?.hits ?? [];

            setResults(results as Product[]);
        }, 150),
        [],
    );

    useEffect(() => {
        if (query === '') {
            return;
        }

        debouncedApiCall(query);
    }, [debouncedApiCall, query]);

    const resetCommandPalette = () => {
        setOpen(false);
        setQuery('');
        setResults([]);
    };

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="ml-auto mr-4 group flex items-center border border-dark/40  rounded-full p-2 cursor-pointer"
            >
                <MagnifyingGlassIcon className="pointer-events-none size-5 text-dark/40" aria-hidden="true" />
                <span className="ml-3 flex-none text-xs font-semibold text-dark/40 group-data-focus:text-indigo-100">
                    <kbd className="font-sans">⌘</kbd>
                    <kbd className="font-sans">k</kbd>
                </span>
            </button>
            <Dialog className="relative z-10" open={open} onClose={resetCommandPalette}>
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-dark/25 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
                    <DialogPanel
                        transition
                        className="mx-auto max-w-xl transform divide-y divide-dark/10 overflow-hidden rounded-xl bg-light shadow-2xl ring-1 ring-black/5 transition-all data-closed:scale-95 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
                    >
                        <Combobox
                            onChange={(item: Product | null) => {
                                if (item) {
                                    router.push(item.path);
                                    resetCommandPalette();
                                }
                            }}
                        >
                            <div className="grid grid-cols-1">
                                <ComboboxInput
                                    autoFocus
                                    className="col-start-1 row-start-1 h-12 w-full pr-4 pl-11 text-base text-dark/90 outline-hidden placeholder:text-dark/40 sm:text-sm"
                                    placeholder="Search..."
                                    onChange={(event) => setQuery(event.target.value)}
                                    onBlur={() => setQuery('')}
                                />
                                <MagnifyingGlassIcon
                                    className="pointer-events-none col-start-1 row-start-1 ml-4 size-5 self-center text-dark/40"
                                    aria-hidden="true"
                                />
                            </div>

                            {results.length > 0 && (
                                <ComboboxOptions
                                    static
                                    className="max-h-96 transform-gpu scroll-py-3 overflow-y-auto p-3"
                                >
                                    {results.map((item) => (
                                        <ComboboxOption
                                            key={item.id}
                                            value={item}
                                            className="group flex cursor-default rounded-xl p-3 select-none data-focus:bg-dark/10 data-focus:outline-hidden"
                                        >
                                            <div
                                                className={
                                                    'flex size-10 flex-none items-center justify-center rounded-lg'
                                                }
                                            >
                                                <img
                                                    className="aspect-square h-12"
                                                    src={item.defaultVariant.firstImage.variants[0].url}
                                                    width={item.defaultVariant.firstImage.variants[0].width}
                                                    alt={item.name}
                                                />
                                            </div>
                                            <div className="ml-4 flex-auto">
                                                <p className="text-sm font-medium text-dark/70 group-data-focus:text-dark/90">
                                                    {item.name}
                                                </p>
                                                <p className="text-sm text-dark/50 group-data-focus:text-dark/70">
                                                    {item.defaultVariant.defaultPrice}€
                                                </p>
                                            </div>
                                        </ComboboxOption>
                                    ))}
                                </ComboboxOptions>
                            )}

                            {query !== '' && results.length === 0 && (
                                <div className="px-6 py-14 text-center text-sm sm:px-14">
                                    <ExclamationCircleIcon
                                        type="outline"
                                        name="exclamation-circle"
                                        className="mx-auto size-6 text-dark/40"
                                    />
                                    <p className="mt-4 font-semibold text-dark/90">No results found</p>
                                    <p className="mt-2 text-dark/50">
                                        No products found for this search term. Please try again.
                                    </p>
                                </div>
                            )}
                        </Combobox>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    );
}
