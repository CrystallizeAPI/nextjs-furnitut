import classNames from 'classnames';
import { Media } from '@/components/media';
export const BlockLayout = ({ block, children }: { block: any; children: any }) => {
    const { layout, isFirstBlock } = block;
    const { displayWidth, theme, backgroundMedia } = layout;
    const isFullWidth = 'stretch' in displayWidth;
    const selectedTheme = Object.keys(theme)[0];
    const hasBackgroundMedia = !!backgroundMedia;

    return (
        <div
            className={classNames(
                `w-full mx-auto block  block-bg relative`,
                {
                    'pt-60': isFirstBlock,
                },
                {
                    'max-w-full': isFullWidth,
                },
                {
                    'max-w-screen-2xl rounded-2xl': !isFullWidth,
                },

                { 'theme-muted px-4': selectedTheme === 'muted' },
                {
                    'theme-pastel px-4': selectedTheme === 'pastel',
                },
                { 'theme-light': selectedTheme === 'light' },
                { 'theme-dark px-4': selectedTheme === 'dark' },
                { 'pt-0  pb-0 ': !hasBackgroundMedia },
                { '!bg-transparent ': hasBackgroundMedia },
            )}
        >
            <div
                className={classNames({
                    'z-10 w-full h-full flex items-center absolute': hasBackgroundMedia,
                })}
            >
                {children}
            </div>
            {hasBackgroundMedia && (
                <div className={classNames('relative overflow-hidden rounded-2xl my-12')}>
                    <div className="relative h-full w-full">
                        <Media {...backgroundMedia} imageProps={{ preserveRatio: true }} />
                    </div>
                </div>
            )}
        </div>
    );
};
