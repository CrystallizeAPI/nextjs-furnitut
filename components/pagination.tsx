import Link from 'next/link';
import classNames from 'classnames';
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid';

export const ITEMS_PER_PAGE = 24;

type PaginationProps = {
    totalItems: number;
    url: string;
    currentPage: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
};

export function Pagination({ totalItems, currentPage, hasPreviousPage, hasNextPage, url }: PaginationProps) {
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    const previousPage = currentPage === 1 ? 1 : currentPage - 1;
    const nextPage = currentPage + 1;

    const getPageUrl = (page: number) => `${url}?page=${page}`;

    const renderPageNumbers = () => {
        const pages: (number | string)[] = [];
        const lastThreePages = [totalPages - 2, totalPages - 1, totalPages];

        // Determine the starting page for the first segment
        let startPage: number;
        if (currentPage <= 3) {
            startPage = 1;
        } else if (currentPage >= totalPages - 4) {
            startPage = totalPages - 6;
        } else {
            startPage = currentPage - 1;
        }

        // Add the first three pages based on the start page
        for (let i = 0; i < 3; i++) {
            if (startPage + i <= totalPages - 3) {
                pages.push(startPage + i);
            }
        }

        // Add ellipsis if there's a gap
        if (Number(pages[pages.length - 1]) < totalPages - 3) {
            pages.push('...');
        }

        // Add the last three pages
        lastThreePages.forEach((page) => {
            if (page > 0 && !pages.includes(page)) {
                pages.push(page);
            }
        });

        return pages.map((page, index) => {
            if (page === '...') {
                return (
                    <span
                        key={`ellipsis-${index}`}
                        className="inline-flex items-center border-t-2 border-transparent px-4 text-sm font-medium text-gray-500"
                    >
                        ...
                    </span>
                );
            }

            return (
                <Link
                    key={page}
                    prefetch={true}
                    href={getPageUrl(page as number)}
                    className={classNames(
                        `inline-flex items-center justify-center text-center h-9 w-9 rounded-full text-sm`,
                        { 'bg-dark text-light font-bold': currentPage === page },
                        { 'hover:bg-dark/10 font-medium': currentPage !== page },
                    )}
                    aria-current={currentPage === page ? 'page' : undefined}
                >
                    {page}
                </Link>
            );
        });
    };

    return (
        <nav className="flex items-center gap-4 justify-center px-4 sm:px-0 max-w-(--breakpoint-2xl) mx-auto">
            <div className="flex ">
                <Link
                    prefetch={true}
                    href={getPageUrl(previousPage)}
                    className={`inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 ${!hasPreviousPage ? 'invisible' : ''}`}
                    aria-disabled={!hasPreviousPage}
                >
                    <ArrowLongLeftIcon aria-hidden="true" className="mr-3 size-5" />
                    <span className="sr-only">Previous</span>
                </Link>
            </div>
            <div className="md:-mt-px md:flex pt-4 gap-2">{renderPageNumbers()}</div>
            <div className="flex">
                <Link
                    prefetch={true}
                    href={getPageUrl(nextPage)}
                    className={`inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 ${!hasNextPage ? 'invisible' : ''}`}
                    aria-disabled={!hasNextPage}
                >
                    <span className="sr-only">Next</span>
                    <ArrowLongRightIcon aria-hidden="true" className="ml-3 size-5" />
                </Link>
            </div>
        </nav>
    );
}
