import { ContentTransformer } from '@crystallize/reactjs-components';
import { Paragraph } from '@/generated/graphql';
import { Image } from './image';
export const ParagraphCollection: React.FC<{ paragraphs: Paragraph[] }> = ({ paragraphs }) => {
    if (paragraphs.length === 0) {
        return null;
    }
    return (
        <>
            {paragraphs.map((paragraph, index) => (
                <div key={index}>
                    <div className="max-w-[800px] frntr-paragraph  w-auto">
                        <div className="mb-10 mx-auto">
                            <h2 className="font-bold mt-10 text-xl">{paragraph.title}</h2>
                            <div className="frntr-content-transformer leading-8">
                                <ContentTransformer json={paragraph.body} />
                            </div>
                            {paragraph.images?.map((image, index) => (
                                <div key={index} className="rounded-2xl my-6 overflow-hidden">
                                    <Image {...image} preserveRatio={true} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};
