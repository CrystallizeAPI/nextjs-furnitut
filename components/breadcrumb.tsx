import Link from 'next/link';
import classNames from 'classnames';
interface Breadcrumb {
    name: string;
    path: string;
    id: string;
}
export const Breadcrumb = ({
    breadcrumbs,
    center = false,
}: {
    breadcrumbs?: Breadcrumb[] | null | undefined;
    center?: boolean;
}) => {
    if (breadcrumbs?.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('flex gap-3 items-center font-medium text-dark ', {
                'justify-center': center,
            })}
        >
            <Link href="/">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5 12.8223C5 11.4645 5 10.7857 5.27446 10.1889C5.54892 9.59218 6.06437 9.15037 7.09525 8.26675L8.09525 7.40961C9.95857 5.81248 10.8902 5.01392 12 5.01392C13.1098 5.01392 14.0414 5.81248 15.9047 7.40961L16.9047 8.26675C17.9356 9.15037 18.4511 9.59218 18.7255 10.1889C19 10.7857 19 11.4645 19 12.8223V17.0627C19 18.9483 19 19.8911 18.4142 20.4769C17.8284 21.0627 16.8856 21.0627 15 21.0627H9C7.11438 21.0627 6.17157 21.0627 5.58579 20.4769C5 19.8911 5 18.9483 5 17.0627V12.8223Z"
                        stroke="#211A1D"
                        strokeWidth="2"
                    />
                    <path
                        d="M14.5 21.0627V16.0627C14.5 15.5105 14.0523 15.0627 13.5 15.0627H10.5C9.94772 15.0627 9.5 15.5105 9.5 16.0627V21.0627"
                        stroke="#211A1D"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </Link>
            <span className="opacity-30"> / </span>
            {[...breadcrumbs].map((item: any, index: number) => {
                if (index === breadcrumbs.length - 1) {
                    return <span className="opacity-50">{item.name}</span>;
                }
                return (
                    <>
                        <div key={index}>
                            <Link href={item.path}>{item.name}</Link>
                        </div>
                        {index !== breadcrumbs.length - 1 && <span className="opacity-30"> / </span>}
                    </>
                );
            })}
        </div>
    );
};
