import clsx from 'classnames';
import { Media } from '@/components/media';

const themeMap = {
    muted: 'theme-muted px-4',
    pastel: 'theme-pastel px-4',
    vivid: 'theme-vivid px-4',
    light: 'theme-light',
    dark: 'theme-dark px-4',
};

type BlockLayoutProps = { block: any; children: React.ReactNode };

export const BlockLayout = ({ block, children }: BlockLayoutProps) => {
    const { layout, isFirstBlock } = block;
    const { displayWidth, theme, backgroundMedia } = layout;
    const isFullWidth = 'stretch' in displayWidth;
    const selectedTheme = Object.keys(theme)[0];
    const hasBackgroundMedia = !!backgroundMedia;

    return (
        <div
            className={clsx(
                `w-full mx-auto block  block-bg relative`,
                isFirstBlock && 'pt-60',
                isFullWidth ? 'max-w-full' : 'max-w-screen-2xl rounded-2xl',
                hasBackgroundMedia ? '!bg-transparent' : 'pt-0  pb-0',
                themeMap[selectedTheme as keyof typeof themeMap],
            )}
        >
            <div className={clsx(hasBackgroundMedia && 'z-10 w-full h-full flex items-center absolute')}>
                {children}
            </div>
            {hasBackgroundMedia && (
                <div className="relative overflow-hidden rounded-2xl my-12">
                    <div className="relative h-full w-full">
                        <Media {...backgroundMedia} preserveRatio={true} shoppableImage={false} />
                    </div>
                </div>
            )}
        </div>
    );
};
