import { ContentTransformer } from '@crystallize/reactjs-components';

export const Typography = ({
    title,
    description,
    callToAction,
    isFirstBlock,
}: {
    title: string;
    description: any;
    callToAction: any;
    isFirstBlock: boolean;
}) => {
    const actions = callToAction?.action;
    return (
        <>
            {isFirstBlock && title ? (
                <h1 className="block-title text-5xl font-bold text-center max-w-screen-sm leading-16 pt-24">{title}</h1>
            ) : (
                <h2 className="block-title text-5xl font-bold text-center max-w-screen-sm leading-16 pt-24">{title}</h2>
            )}
            {description && (
                <div className="block-description text-lg text-center max-w-screen-md pt-4 font-medium pb-12">
                    <ContentTransformer json={description} />
                </div>
            )}
            {actions && actions.length > 0 && (
                <div className="flex pb-12">
                    {actions?.map((action: any, index: number) => (
                        <a className="btn block-btn" href={action.url} key={index}>
                            {action.label}
                        </a>
                    ))}
                </div>
            )}
        </>
    );
};
