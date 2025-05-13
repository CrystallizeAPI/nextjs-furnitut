export const ITEMS_PER_PAGE = 24;

interface PaginationProps {
    totalItems: number;
    url: string;
    currentPage: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
}

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

        // Add first three pages based on the start page
        for (let i = 0; i < 3; i++) {
            if (startPage + i <= totalPages - 3) {
                pages.push(startPage + i);
            }
        }

        // Add ellipsis if there's a gap
        // @ts-expect-error
        if (pages[pages.length - 1] < totalPages - 3) {
            pages.push('...');
        }

        // Add last three pages
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
                        className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500"
                    >
                        ...
                    </span>
                );
            }

            return (
                <a
                    key={page}
                    href={getPageUrl(page as number)}
                    className={`inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium ${
                        currentPage === page
                            ? 'border-indigo-500 text-indigo-600'
                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                    aria-current={currentPage === page ? 'page' : undefined}
                >
                    {page}
                </a>
            );
        });
    };

    return (
        <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0 max-w-(--breakpoint-2xl) mx-auto">
            <div className="-mt-px flex w-0 flex-1">
                <a
                    href={getPageUrl(previousPage)}
                    className={`inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 ${!hasPreviousPage ? 'invisible' : ''}`}
                    aria-disabled={!hasPreviousPage}
                >
                    <svg
                        className="mr-3 size-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                    >
                        <path
                            fillRule="evenodd"
                            d="M18 10a.75.75 0 0 1-.75.75H4.66l2.1 1.95a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 1 1 1.02 1.1l-2.1 1.95h12.59A.75.75 0 0 1 18 10Z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Previous
                </a>
            </div>
            <div className="hidden md:-mt-px md:flex">{renderPageNumbers()}</div>
            <div className="-mt-px flex w-0 flex-1 justify-end">
                <a
                    href={getPageUrl(nextPage)}
                    className={`inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 ${!hasNextPage ? 'invisible' : ''}`}
                    aria-disabled={!hasNextPage}
                >
                    Next
                    <svg
                        className="ml-3 size-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                    >
                        <path
                            fillRule="evenodd"
                            d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </a>
            </div>
        </nav>
    );
}
