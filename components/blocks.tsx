import { Banner } from './block-pieces/banner';
import { FeatureHighlight } from './block-pieces/feature-highlight';
import { PictureGrid } from './block-pieces/picture-grid';
import { ProductSlider } from './block-pieces/product-slider';
import { StorySlider } from './block-pieces/story-slider';
import { BlockLayout } from './block-fragments/layout';
const BlockType = ({ selectedBlock }: { selectedBlock: any }) => {
    if (selectedBlock === null) return null;

    if ('banner' in selectedBlock) return <Banner block={{ ...selectedBlock.banner }} />;
    if ('featureHighlights' in selectedBlock)
        return (
            <FeatureHighlight
                block={{
                    ...selectedBlock.featureHighlights,
                }}
            />
        );

    if ('storySlider' in selectedBlock) return <StorySlider block={{ ...selectedBlock.storySlider }} />;

    if ('pictureGrid' in selectedBlock) return <PictureGrid block={{ ...selectedBlock.pictureGrid }} />;

    if ('productSlider' in selectedBlock) {
        return <ProductSlider block={{ ...selectedBlock.productSlider }} />;
    } else {
        return null;
    }
};

export const Blocks = ({ blocks, paddingFirstBlock = false }: { blocks: any[]; paddingFirstBlock?: boolean }) => {
    return (
        <>
            {blocks.map((block, index) => {
                const selectedBlock = Object.fromEntries(Object.entries(block).filter(([, value]) => value !== null));
                const isFirstBlock = paddingFirstBlock ? index === 0 : false;
                return (
                    <div className="w-full block" key={`block-renderer-${index}`}>
                        <BlockLayout
                            block={{
                                layout: Object.values(selectedBlock)[0]?.layout || {},
                                isFirstBlock,
                            }}
                        >
                            <BlockType selectedBlock={{ ...selectedBlock, isFirstBlock }} />
                        </BlockLayout>
                    </div>
                );
            })}
        </>
    );
};
