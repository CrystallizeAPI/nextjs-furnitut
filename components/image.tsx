import { Image as CrystallizeImage } from '@crystallize/reactjs-components';
import classNames from 'classnames';

export const Image = ({
    className,
    focalPoint,
    preserveRatio = false,
    ...image
}: {
    className?: string;
    focalPoint?: any;
    preserveRatio?: boolean;
}) => {
    const styles = {
        '--focus-x': focalPoint?.x,
        '--focus-y': focalPoint?.y,
        aspectRatio: preserveRatio ? `${image?.variants?.[0].width || 'auto'}/${image?.variants?.[0].height}` : 'auto',
    } as React.CSSProperties;

    return (
        <div
            className={classNames(`${className || ''} `, {
                'crystallize-image': !preserveRatio,
            })}
            style={styles}
        >
            <CrystallizeImage {...image} alt={image?.altText} />
        </div>
    );
};
