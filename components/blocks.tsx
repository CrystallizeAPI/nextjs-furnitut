import { Banner } from './block-pieces/banner';
import { FeatureHighlight } from './block-pieces/feature-highlight';
import { PictureGrid } from './block-pieces/picture-grid';
import { ProductSlider } from './block-pieces/product-slider';
import { StorySlider } from './block-pieces/story-slider';
import { BlockLayout } from './block-fragments/layout';
import type { CategoryBlocksFragment, LandingPageBlocksFragment } from '@/generated/graphql';

type Block = CategoryBlocksFragment | LandingPageBlocksFragment;

type BlocksProps = {
    blocks?: Array<Block | null> | null;
    hasFirstBlockPadding?: boolean;
};

const BlockType = ({ block }: { block: Block }) => {
    if ('banner' in block && block.banner) {
        return <Banner block={block.banner} />;
    }

    if ('featureHighlights' in block && block.featureHighlights) {
        return <FeatureHighlight block={block.featureHighlights} />;
    }

    if ('storySlider' in block && block.storySlider) {
        return <StorySlider block={block.storySlider} />;
    }

    if ('pictureGrid' in block && block.pictureGrid) {
        return <PictureGrid block={block.pictureGrid} />;
    }

    if ('productSlider' in block && block.productSlider) {
        return <ProductSlider block={block.productSlider} />;
    }

    return null;
};

export const Blocks = ({ blocks, hasFirstBlockPadding }: BlocksProps) => {
    return blocks?.map((block, index) => {
        const filteredBlock = Object.entries(block ?? {}).filter(([, value]) => value !== null);
        const selectedBlock = Object.fromEntries(filteredBlock) as Block;
        const firstBlock = Object.values(selectedBlock)[0] as Block;
        const layout = !!firstBlock && 'layout' in firstBlock ? firstBlock.layout : {};
        const isFirstBlock = hasFirstBlockPadding ? index === 0 : false;

        return (
            <div key={index} className="w-full block">
                <BlockLayout block={{ layout, isFirstBlock }}>
                    <BlockType block={selectedBlock} />
                </BlockLayout>
            </div>
        );
    });
};
