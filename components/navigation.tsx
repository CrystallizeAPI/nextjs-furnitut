import { FetchLayoutDocument, MenuItemFragment } from '@/generated/graphql';
import { apiRequest } from '@/utils/api-request';
import Link from 'next/link';
import { SearchBar } from '@/components/SearchBar';

type NavigationProps = {
    className?: string;
    withSearch?: boolean;
};

const fetchNavigation = async () => {
    const response = await apiRequest(FetchLayoutDocument);

    const navigation = (
        response.data.browse?.header?.hits?.[0]?.children?.hits as MenuItemFragment[] | undefined
    )?.reduce<{ href: string; name: string }[]>((acc, nav) => {
        const link = !!nav && 'link' in nav ? nav.link : undefined;
        const href = !!link ? link.url || link.item?.items?.[0]?.path : undefined;
        !!href && acc.push({ href, name: nav.name ?? '' });
        return acc;
    }, []);

    return { navigation };
};

export const Navigation = async ({ className, withSearch }: NavigationProps) => {
    const { navigation } = await fetchNavigation();

    return (
        <div className={className}>
            {navigation?.map(({ href, name }) => (
                <Link
                    href={href}
                    className="h-full flex items-center"
                    key={name}
                    data-testid={`navigation-link-${name.toLowerCase()}`}
                >
                    {name}
                </Link>
            ))}
            {withSearch && <SearchBar />}
        </div>
    );
};
