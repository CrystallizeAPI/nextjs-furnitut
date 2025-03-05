import { ContentTransformer } from '@crystallize/reactjs-components';
import { Paragraph } from '@/generated/graphql';
import { Image } from './image';

type ParagraphCollectionProps = {
    paragraphs?: Paragraph[];
};

export const ParagraphCollection = ({ paragraphs }: ParagraphCollectionProps) => {
    return paragraphs?.map((paragraph, index) => (
        <div key={index} className="frntr-paragraph  w-auto py-6 first:pt-0">
            <div className="mb-10 mx-auto">
                <h2 className="font-medium mb-2 mt-10 text-2xl">{paragraph.title}</h2>
                <div className="frntr-content-transformer text-lg leading-8">
                    <ContentTransformer json={paragraph.body} />
                </div>
                {paragraph.images?.map((image, index) => (
                    <div key={index} className="rounded-2xl my-6 overflow-hidden">
                        <Image {...image} preserveRatio showShowcases={!!image?.showcases?.length} loading={'lazy'} />
                    </div>
                ))}
            </div>
        </div>
    ));
};
