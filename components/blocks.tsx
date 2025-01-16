import { Banner } from './block-pieces/banner';
import { FeatureHighlight } from './block-pieces/feature-highlight';
import { PictureGrid } from './block-pieces/picture-grid';
import { ProductSlider } from './block-pieces/product-slider';
import { StorySlider } from './block-pieces/story-slider';
import { BlockLayout } from './block-fragments/layout';
import type { FragmentType } from '@/generated';
import { CategoryBlocksFragmentDoc, LandingPageBlocksFragmentDoc } from '@/generated/graphql';

type Block = FragmentType<typeof CategoryBlocksFragmentDoc> | FragmentType<typeof LandingPageBlocksFragmentDoc>;

type BlocksProps = {
    blocks?: Array<Block | null> | null;
    hasFirstBlockPadding?: boolean;
};

const BlockType = ({ block }: { block: Block }) => {
    if ('banner' in block) {
        return <Banner block={block.banner} />;
    }

    if ('featureHighlights' in block) {
        return <FeatureHighlight block={block.featureHighlights} />;
    }

    if ('storySlider' in block) {
        return <StorySlider block={block.storySlider} />;
    }

    if ('pictureGrid' in block) {
        return <PictureGrid block={block.pictureGrid} />;
    }

    if ('productSlider' in block) {
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
