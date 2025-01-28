import { FetchLayoutDocument, MenuItemFragment } from '@/generated/graphql';
import { apiRequest } from '@/utils/api-request';
import Link from 'next/link';

type NavigationProps = {
    className?: string;
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

export const Navigation = async ({ className }: NavigationProps) => {
    const { navigation } = await fetchNavigation();

    return (
        <div className={className}>
            {navigation?.map(({ href, name }) => (
                <Link href={href} className="h-full flex items-center" key={name}>
                    {name}
                </Link>
            ))}
        </div>
    );
};
