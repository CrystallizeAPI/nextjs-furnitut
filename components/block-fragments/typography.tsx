import { ContentTransformer } from '@crystallize/reactjs-components';

type TypographyProps = {
    title: string | null;
    description: any | null;
    isFirstBlock?: boolean;
    callToAction?: {
        action: Array<{ label: string | null; url: string | null } | null> | null;
    } | null;
};

const className = 'block-title text-5xl font-bold text-center max-w-(--breakpoint-sm) leading-16 pt-12';

export const Typography = ({ title, description, callToAction, isFirstBlock }: TypographyProps) => {
    const actions = callToAction?.action;
    return (
        <>
            {!!title ? (
                <>{isFirstBlock ? <h1 className={className}>{title}</h1> : <h2 className={className}>{title}</h2>}</>
            ) : null}
            {description.length ? (
                <div className="block-description text-lg text-center max-w-(--breakpoint-md) pt-4 font-medium pb-12">
                    <ContentTransformer json={description} />
                </div>
            ) : null}
            {!!actions?.length && (
                <div className="flex pb-12 gap-4">
                    {actions?.map((action) =>
                        !!action?.url ? (
                            <a
                                key={action.url}
                                className="btn block-btn"
                                href={action.url}
                                data-testid={action.label?.toLowerCase().replaceAll(' ', '-')}
                            >
                                {action.label}
                            </a>
                        ) : null,
                    )}
                </div>
            )}
        </>
    );
};
