import { HTMLAttributes } from 'react';
import clsx from 'classnames';

type BadgeProps = HTMLAttributes<HTMLDivElement>;

export function Badge({ className, ...delegated }: BadgeProps) {
    return (
        <div
            className={clsx(
                'bg-muted text-dark hover:bg-muted/80 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
                className,
            )}
            {...delegated}
        />
    );
}
