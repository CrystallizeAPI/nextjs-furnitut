import { ContentTransformer } from '@crystallize/reactjs-components';

type TypographyProps = {
    title: string | null;
    description: any | null;
    isFirstBlock?: boolean;
    callToAction?: {
        action: Array<{ label: string | null; url: string | null } | null> | null;
    } | null;
};

const className = 'block-title text-5xl font-bold text-center max-w-screen-sm leading-16 pt-24';

export const Typography = ({ title, description, callToAction, isFirstBlock }: TypographyProps) => {
    const actions = callToAction?.action;

    return (
        <>
            {isFirstBlock && title ? <h1 className={className}>{title}</h1> : <h2 className={className}>{title}</h2>}
            {description && (
                <div className="block-description text-lg text-center max-w-screen-md pt-4 font-medium pb-12">
                    <ContentTransformer json={description} />
                </div>
            )}
            {!!actions?.length && (
                <div className="flex pb-12">
                    {actions?.map((action) =>
                        !!action?.url ? (
                            <a key={action.url} className="btn block-btn" href={action.url}>
                                {action.label}
                            </a>
                        ) : null,
                    )}
                </div>
            )}
        </>
    );
};
