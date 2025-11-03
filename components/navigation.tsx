import { FetchLayoutDocument, MenuItemFragment, TenantLanguage } from '@/generated/discovery/graphql';
import { apiRequest } from '@/utils/api-request';
import Link from 'next/link';
import { cacheLife, cacheTag } from 'next/cache';
import { CommandPalette } from '@/components/command-palette';

type NavigationProps = {
    className?: string;
    withSearch?: boolean;
};

const fetchNavigation = async () => {
    const response = await apiRequest(FetchLayoutDocument, {
        language: (process.env.CRYSTALLIZE_TENANT_LANGUAGE || 'en') as TenantLanguage,
    });

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
    'use cache';

    cacheLife('max');
    cacheTag('/menu/top');

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
            {withSearch && <CommandPalette />}
        </div>
    );
};
