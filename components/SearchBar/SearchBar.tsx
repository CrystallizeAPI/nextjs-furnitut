'use client';

import { debounce } from '@/utils/debounce';
import { useEffect, useRef, useState } from 'react';
import { GlobalSearchDocument } from '@/generated/graphql';
import { apiRequest } from '@/utils/api-request';

const DEBOUNCE_TIME = 300;

export function SearchBar() {
    interface SearchResult {
        id: string;
        path: string;
        name: string;
        description?: string;
        defaultVariant?: {
            firstImage?: {
                variants?: Array<{
                    url?: string;
                }>;
            };
        };
    }

    const [results, setResults] = useState<SearchResult[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const inputRef = useRef<HTMLInputElement>(null);
    const dropdownRef = useRef<HTMLUListElement>(null);

    const handleSearch = debounce(async (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;

        if (!term.length) {
            return;
        }

        const response = await apiRequest(GlobalSearchDocument, { term });
        const results = response?.data?.search?.hits ?? [];
        setSelectedIndex(-1);

        // @ts-expect-error
        setResults(results);
        setIsOpen(!!results.length);
    }, DEBOUNCE_TIME);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        // remove focus from input
        if (event.key === 'Escape') {
            inputRef.current?.blur();
        }

        if (!results.length) {
            return;
        }

        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();
                setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
                break;
            case 'ArrowUp':
                event.preventDefault();
                setSelectedIndex((prev) => (prev > -1 ? prev - 1 : prev));
                break;
            case 'Enter':
                if (selectedIndex >= 0) {
                    handleSelect();
                }
                break;
            case 'Escape':
                setIsOpen(false);
                setSelectedIndex(-1);
                break;
        }
    };

    const handleSelect = () => {
        setIsOpen(false);
        setSelectedIndex(-1);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node) &&
                !inputRef.current?.contains(event.target as Node)
            ) {
                setIsOpen(false);

                if (inputRef.current) {
                    inputRef.current.value = '';
                }
            }
        };

        const handleCommandK = (event: KeyboardEvent) => {
            if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
                event.preventDefault();
                inputRef.current?.focus();
            }
        };

        if (typeof window === 'undefined') {
            return;
        }

        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('keydown', handleCommandK);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('keydown', handleCommandK);
        };
    }, []);

    return (
        <div className="relative w-full max-w-md mr-2 ml-auto">
            <div className="relative">
                <input
                    ref={inputRef}
                    type="text"
                    onChange={handleSearch}
                    onKeyDown={handleKeyDown}
                    className="w-full px-8 py-2 border border-muted rounded-full pr-10 focus:outline-none focus:ring-1 focus:ring-dark placeholder:text-dark/25"
                    placeholder="Search..."
                    role="combobox"
                    aria-expanded={isOpen}
                    aria-controls="search-results"
                    aria-activedescendant={selectedIndex >= 0 ? `result-${selectedIndex}` : undefined}
                />
                <span className="absolute inset-y-0 left-2 flex items-center pr-3">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </span>
                <span className="absolute top-1/2 -translate-y-1/2 right-3 flex-none text-xs text-dark/25 font-semibold text-gray-400 group-data-focus:text-dark/70">
                    <kbd className="font-sans">⌘</kbd>
                    <kbd className="font-sans">K</kbd>
                </span>
            </div>

            {isOpen && (
                <ul
                    ref={dropdownRef}
                    className="absolute z-10 w-full mt-1 bg-light border rounded-md shadow-lg max-h-60 overflow-auto"
                    role="listbox"
                    id="search-results"
                >
                    {results.length === 0 && (
                        <p className="p-4 text-sm text-gray-500">Nothing found with that search string</p>
                    )}

                    {results.map((result, index) => (
                        <a key={result.id} href={result.path} onClick={handleSelect}>
                            <li
                                id={`result-${index}`}
                                role="option"
                                aria-selected={index === selectedIndex}
                                className={`px-4 py-2 cursor-pointer flex items-center gap-4 ${
                                    index === selectedIndex ? 'bg-blue-100 text-blue-900' : 'hover:bg-gray-100'
                                }`}
                            >
                                <img
                                    className="aspect-square h-12"
                                    src={result?.defaultVariant?.firstImage?.variants?.[0]?.url}
                                    alt={result.name}
                                />
                                <div className="font-medium">{result.name}</div>
                                {result.description && (
                                    <div className="text-sm text-gray-500">{result.description}</div>
                                )}
                            </li>
                        </a>
                    ))}
                </ul>
            )}
        </div>
    );
}
