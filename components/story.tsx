import { Image } from '@/components/image';
import Link from 'next/link';
import { ContentTransformer } from '@crystallize/reactjs-components';
import { Media } from '@/components/media';
//@TODO types
export const Story: React.FC<{ story: any }> = ({ story }) => {
    const { title, intro, media, path } = story;
    return (
        <Link
            href={path}
            className="rounded-2xl bg-quinary p-2 text-dark border-muted border-solid border text-primary relative block flex-col items-stretch bg-light"
        >
            <div className="relative aspect-video  flex flex-col justify-stretch ">
                <div className="rounded-xl overflow-hidden  h-full shrink border border-muted">
                    {media && (
                        <Media
                            {...{
                                // We dont want to use shoppable images in the microformat
                                image: media.image || media.shoppableImage,
                                video: media.video,
                            }}
                        />
                    )}
                </div>
            </div>
            <div className="px-10 py-5">
                <span className="text-2xl font-bold text-left">{title}</span>
                <div className="line-clamp-2 pt-2 text-lg">
                    <ContentTransformer json={intro} />
                </div>
            </div>
        </Link>
    );
};
