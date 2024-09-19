/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A `Datetime` scalar type represents a `Date` */
  Datetime: { input: any; output: any; }
  /** A `Hash` scalar type represents a `Record<string,any>` */
  Hash: { input: any; output: any; }
  /** A `RichText` scalar type represents a `string[]` (plainText or HTML) or a JSON */
  RichText: { input: any; output: any; }
};

export type BannerPiece = {
  __typename?: 'BannerPiece';
  banner: Maybe<Array<Maybe<Image>>>;
  callToAction: Maybe<CallToActionPiece>;
  description: Maybe<Scalars['RichText']['output']>;
  layout: Maybe<LayoutPiece>;
  title: Maybe<Scalars['String']['output']>;
};


export type BannerPieceDescriptionArgs = {
  format?: RichTextFormat;
};

export type Breadcrumb = {
  __typename?: 'Breadcrumb';
  id: Maybe<Scalars['String']['output']>;
  isShortcut: Maybe<Scalars['Boolean']['output']>;
  name: Maybe<Scalars['String']['output']>;
  path: Maybe<Scalars['String']['output']>;
  shape: Maybe<Scalars['String']['output']>;
};

/** Query the items of a tenant via their Shape identifier. */
export type BrowseQuery = {
  __typename?: 'BrowseQuery';
  /** Implicit filter on Shape: Category (folder) */
  category: Maybe<CategoryQuery>;
  /** Implicit filter on Shape: Landing page (document) */
  landingPage: Maybe<LandingPageQuery>;
  /** Implicit filter on Shape: Menu item (folder) */
  menuItem: Maybe<MenuItemQuery>;
  /** Implicit filter on Shape: Product (product) */
  product: Maybe<ProductQuery>;
  /** Implicit filter on Shape: Story (document) */
  story: Maybe<StoryQuery>;
};


/** Query the items of a tenant via their Shape identifier. */
export type BrowseQueryCategoryArgs = {
  facets: InputMaybe<CategoryFacet>;
  filters: InputMaybe<CategoryFilter>;
  language?: InputMaybe<Array<InputMaybe<TenantLanguage>>>;
  options: InputMaybe<SearchOptions>;
  pagination?: InputMaybe<Pagination>;
  path: InputMaybe<Scalars['String']['input']>;
  pathResolutionMethod: InputMaybe<Array<InputMaybe<PathResolutionMethod>>>;
  publicationState?: InputMaybe<Array<InputMaybe<PublicationState>>>;
  sorting: InputMaybe<CategorySort>;
  term: InputMaybe<Scalars['String']['input']>;
};


/** Query the items of a tenant via their Shape identifier. */
export type BrowseQueryLandingPageArgs = {
  facets: InputMaybe<LandingPageFacet>;
  filters: InputMaybe<LandingPageFilter>;
  language?: InputMaybe<Array<InputMaybe<TenantLanguage>>>;
  options: InputMaybe<SearchOptions>;
  pagination?: InputMaybe<Pagination>;
  path: InputMaybe<Scalars['String']['input']>;
  pathResolutionMethod: InputMaybe<Array<InputMaybe<PathResolutionMethod>>>;
  publicationState?: InputMaybe<Array<InputMaybe<PublicationState>>>;
  sorting: InputMaybe<LandingPageSort>;
  term: InputMaybe<Scalars['String']['input']>;
};


/** Query the items of a tenant via their Shape identifier. */
export type BrowseQueryMenuItemArgs = {
  facets: InputMaybe<MenuItemFacet>;
  filters: InputMaybe<MenuItemFilter>;
  language?: InputMaybe<Array<InputMaybe<TenantLanguage>>>;
  options: InputMaybe<SearchOptions>;
  pagination?: InputMaybe<Pagination>;
  path: InputMaybe<Scalars['String']['input']>;
  pathResolutionMethod: InputMaybe<Array<InputMaybe<PathResolutionMethod>>>;
  publicationState?: InputMaybe<Array<InputMaybe<PublicationState>>>;
  sorting: InputMaybe<MenuItemSort>;
  term: InputMaybe<Scalars['String']['input']>;
};


/** Query the items of a tenant via their Shape identifier. */
export type BrowseQueryProductArgs = {
  facets: InputMaybe<ProductFacet>;
  filters: InputMaybe<ProductFilter>;
  language?: InputMaybe<Array<InputMaybe<TenantLanguage>>>;
  options: InputMaybe<SearchOptions>;
  pagination?: InputMaybe<Pagination>;
  path: InputMaybe<Scalars['String']['input']>;
  pathResolutionMethod: InputMaybe<Array<InputMaybe<PathResolutionMethod>>>;
  publicationState?: InputMaybe<Array<InputMaybe<PublicationState>>>;
  sorting: InputMaybe<ProductSort>;
  term: InputMaybe<Scalars['String']['input']>;
};


/** Query the items of a tenant via their Shape identifier. */
export type BrowseQueryStoryArgs = {
  facets: InputMaybe<StoryFacet>;
  filters: InputMaybe<StoryFilter>;
  language?: InputMaybe<Array<InputMaybe<TenantLanguage>>>;
  options: InputMaybe<SearchOptions>;
  pagination?: InputMaybe<Pagination>;
  path: InputMaybe<Scalars['String']['input']>;
  pathResolutionMethod: InputMaybe<Array<InputMaybe<PathResolutionMethod>>>;
  publicationState?: InputMaybe<Array<InputMaybe<PublicationState>>>;
  sorting: InputMaybe<StorySort>;
  term: InputMaybe<Scalars['String']['input']>;
};

export type CallToActionPiece = {
  __typename?: 'CallToActionPiece';
  action: Maybe<Array<Maybe<ContentChunksComponentForCallToActionPieceAction>>>;
};

export type CategoryFacet = {
  blocks_banner_callToAction_action_label: InputMaybe<StringFacet>;
  blocks_banner_callToAction_action_url: InputMaybe<StringFacet>;
  blocks_banner_title: InputMaybe<StringFacet>;
  blocks_featureHighlights_usp_headline: InputMaybe<StringFacet>;
  blocks_pictureGrid_title: InputMaybe<StringFacet>;
  blocks_productSlider_title: InputMaybe<StringFacet>;
  blocks_storySlider_title: InputMaybe<StringFacet>;
  language: InputMaybe<StringFacet>;
  meta_title: InputMaybe<StringFacet>;
  name: InputMaybe<StringFacet>;
  publicationState: InputMaybe<StringFacet>;
  title: InputMaybe<StringFacet>;
  topics: InputMaybe<StringFacet>;
  type: InputMaybe<StringFacet>;
};

export type CategoryFilter = {
  /** Logical AND filter to apply to the query */
  AND: InputMaybe<Array<InputMaybe<CategoryFilter>>>;
  /** Logical OR filter to apply to the query */
  OR: InputMaybe<Array<InputMaybe<CategoryFilter>>>;
  /** Filter on "aliases" */
  aliases: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.banner.caption.plainText" */
  blocks_banner_banner_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.call-to-action.action.label" */
  blocks_banner_callToAction_action_label: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.call-to-action.action.url" */
  blocks_banner_callToAction_action_url: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.description.plainText" */
  blocks_banner_description_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.layout.background-media.image.caption.plainText" */
  blocks_banner_layout_backgroundMedia_image_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.layout.background-media.video.thumbnails.caption.plainText" */
  blocks_banner_layout_backgroundMedia_video_thumbnails_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.title" */
  blocks_banner_title: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.layout.background-media.image.caption.plainText" */
  blocks_featureHighlights_layout_backgroundMedia_image_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.layout.background-media.video.thumbnails.caption.plainText" */
  blocks_featureHighlights_layout_backgroundMedia_video_thumbnails_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.usp.description.plainText" */
  blocks_featureHighlights_usp_description_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.usp.headline" */
  blocks_featureHighlights_usp_headline: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.usp.icon.caption.plainText" */
  blocks_featureHighlights_usp_icon_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.picture-grid.description.plainText" */
  blocks_pictureGrid_description_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.picture-grid.images.caption.plainText" */
  blocks_pictureGrid_images_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.picture-grid.layout.background-media.image.caption.plainText" */
  blocks_pictureGrid_layout_backgroundMedia_image_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.picture-grid.layout.background-media.video.thumbnails.caption.plainText" */
  blocks_pictureGrid_layout_backgroundMedia_video_thumbnails_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.picture-grid.title" */
  blocks_pictureGrid_title: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.description.plainText" */
  blocks_productSlider_description_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.layout.background-media.image.caption.plainText" */
  blocks_productSlider_layout_backgroundMedia_image_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.layout.background-media.video.thumbnails.caption.plainText" */
  blocks_productSlider_layout_backgroundMedia_video_thumbnails_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.title" */
  blocks_productSlider_title: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.description.plainText" */
  blocks_storySlider_description_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.layout.background-media.image.caption.plainText" */
  blocks_storySlider_layout_backgroundMedia_image_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.layout.background-media.video.thumbnails.caption.plainText" */
  blocks_storySlider_layout_backgroundMedia_video_thumbnails_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.title" */
  blocks_storySlider_title: InputMaybe<StringFilter>;
  /** Filter on "description.plainText" */
  description_plainText: InputMaybe<StringFilter>;
  /** Filter on "history" */
  history: InputMaybe<StringFilter>;
  /** Filter on "id" */
  id: InputMaybe<StringFilter>;
  /** Filter on "image.caption.plainText" */
  image_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "itemId" */
  itemId: InputMaybe<StringFilter>;
  /** Filter on "language" */
  language: InputMaybe<StringFilter>;
  /** Filter on "meta.description.plainText" */
  meta_description_plainText: InputMaybe<StringFilter>;
  /** Filter on "meta.image.caption.plainText" */
  meta_image_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "meta.title" */
  meta_title: InputMaybe<StringFilter>;
  /** Filter on "name" */
  name: InputMaybe<StringFilter>;
  /** Filter on "parentId" */
  parentId: InputMaybe<StringFilter>;
  /** Filter on "path" */
  path: InputMaybe<StringFilter>;
  /** Filter on "publicationState" */
  publicationState: InputMaybe<StringFilter>;
  /** Filter on "shortcuts.path" */
  shortcuts_path: InputMaybe<StringFilter>;
  /** Filter on "title" */
  title: InputMaybe<StringFilter>;
  /** Filter on "topics" */
  topics: InputMaybe<StringFilter>;
  type_in: InputMaybe<Array<InputMaybe<ItemType>>>;
};

export type CategoryQuery = {
  __typename?: 'CategoryQuery';
  hits: Maybe<Array<Maybe<Category>>>;
  summary: Maybe<Summary>;
};

export type CategorySort = {
  /** Sort on "aliases" */
  aliases: InputMaybe<SortOrder>;
  /** Sort on "blocks.banner.call-to-action.action.label" */
  blocks_banner_callToAction_action_label: InputMaybe<SortOrder>;
  /** Sort on "blocks.banner.call-to-action.action.url" */
  blocks_banner_callToAction_action_url: InputMaybe<SortOrder>;
  /** Sort on "blocks.banner.title" */
  blocks_banner_title: InputMaybe<SortOrder>;
  /** Sort on "blocks.feature-highlights.usp.headline" */
  blocks_featureHighlights_usp_headline: InputMaybe<SortOrder>;
  /** Sort on "blocks.picture-grid.title" */
  blocks_pictureGrid_title: InputMaybe<SortOrder>;
  /** Sort on "blocks.product-slider.title" */
  blocks_productSlider_title: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.title" */
  blocks_storySlider_title: InputMaybe<SortOrder>;
  /** Sort on "history" */
  history: InputMaybe<SortOrder>;
  /** Sort on "id" */
  id: InputMaybe<SortOrder>;
  /** Sort on "itemId" */
  itemId: InputMaybe<SortOrder>;
  /** Sort on "language" */
  language: InputMaybe<SortOrder>;
  /** Sort on "meta.title" */
  meta_title: InputMaybe<SortOrder>;
  /** Sort on "name" */
  name: InputMaybe<SortOrder>;
  /** Sort on "parentId" */
  parentId: InputMaybe<SortOrder>;
  /** Sort on "path" */
  path: InputMaybe<SortOrder>;
  /** Sort on "publicationState" */
  publicationState: InputMaybe<SortOrder>;
  /** Sort on the Score based on the query */
  score: InputMaybe<SortOrder>;
  /** Sort on "shortcuts.path" */
  shortcuts_path: InputMaybe<SortOrder>;
  /** Sort on "title" */
  title: InputMaybe<SortOrder>;
  /** Sort on "topics" */
  topics: InputMaybe<SortOrder>;
  /** Sort on "type" */
  type: InputMaybe<SortOrder>;
};

export type ComponentChoiceComponentForCategoryBlocks = {
  __typename?: 'ComponentChoiceComponentForCategoryBlocks';
  banner: Maybe<BannerPiece>;
  featureHighlights: Maybe<FeatureHighlightsPiece>;
  pictureGrid: Maybe<PictureGridPiece>;
  productSlider: Maybe<ProductSliderPiece>;
  storySlider: Maybe<StorySliderPiece>;
};

export type ComponentChoiceComponentForLandingPageBlocks = {
  __typename?: 'ComponentChoiceComponentForLandingPageBlocks';
  banner: Maybe<BannerPiece>;
  featureHighlights: Maybe<FeatureHighlightsPiece>;
  pictureGrid: Maybe<PictureGridPiece>;
  productSlider: Maybe<ProductSliderPiece>;
  storySlider: Maybe<StorySliderPiece>;
};

export type ComponentChoiceComponentForLayoutPieceBackgroundMedia = {
  __typename?: 'ComponentChoiceComponentForLayoutPieceBackgroundMedia';
  image: Maybe<Array<Maybe<Image>>>;
  video: Maybe<Array<Maybe<Video>>>;
};

export type ComponentChoiceComponentForMenuItemLink = {
  __typename?: 'ComponentChoiceComponentForMenuItemLink';
  item: Maybe<ItemRelations>;
  url: Maybe<Scalars['String']['output']>;
};


export type ComponentChoiceComponentForMenuItemLinkItemArgs = {
  resolve?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentChoiceComponentForStoryMedia = {
  __typename?: 'ComponentChoiceComponentForStoryMedia';
  image: Maybe<Array<Maybe<Image>>>;
  shoppableImage: Maybe<Array<Maybe<Image>>>;
  video: Maybe<Array<Maybe<Video>>>;
};

export type ComponentChoiceComponentForVariantProductDescription = {
  __typename?: 'ComponentChoiceComponentForVariantProductDescription';
  alternativeDescription: Maybe<Scalars['RichText']['output']>;
  extraDescription: Maybe<Scalars['RichText']['output']>;
};


export type ComponentChoiceComponentForVariantProductDescriptionAlternativeDescriptionArgs = {
  format?: RichTextFormat;
};


export type ComponentChoiceComponentForVariantProductDescriptionExtraDescriptionArgs = {
  format?: RichTextFormat;
};

export type ContentChunksComponentForCallToActionPieceAction = {
  __typename?: 'ContentChunksComponentForCallToActionPieceAction';
  label: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
};

export type ContentChunksComponentForFeatureHighlightsPieceUsp = {
  __typename?: 'ContentChunksComponentForFeatureHighlightsPieceUsp';
  description: Maybe<Scalars['RichText']['output']>;
  headline: Maybe<Scalars['String']['output']>;
  icon: Maybe<Array<Maybe<Image>>>;
};


export type ContentChunksComponentForFeatureHighlightsPieceUspDescriptionArgs = {
  format?: RichTextFormat;
};

export type ContentChunksComponentForProductDownloads = {
  __typename?: 'ContentChunksComponentForProductDownloads';
  description: Maybe<Scalars['RichText']['output']>;
  files: Maybe<Array<Maybe<File>>>;
  title: Maybe<Scalars['String']['output']>;
};


export type ContentChunksComponentForProductDownloadsDescriptionArgs = {
  format?: RichTextFormat;
};

export type DimensionsPiece = {
  __typename?: 'DimensionsPiece';
  depth: Maybe<Scalars['Float']['output']>;
  depthUnit: Maybe<Scalars['String']['output']>;
  height: Maybe<Scalars['Float']['output']>;
  heightUnit: Maybe<Scalars['String']['output']>;
  weight: Maybe<Scalars['Float']['output']>;
  weightUnit: Maybe<Scalars['String']['output']>;
  width: Maybe<Scalars['Float']['output']>;
  widthUnit: Maybe<Scalars['String']['output']>;
};

export type Document = {
  /** The Aliases */
  aliases: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The Breadcrumbs */
  breadcrumbs: Maybe<Array<Maybe<Array<Maybe<Breadcrumb>>>>>;
  /** The History of Paths */
  history: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The version id that includes the language and the publication state */
  id: Maybe<Scalars['ID']['output']>;
  /** The item id */
  itemId: Maybe<Scalars['ID']['output']>;
  /** The Language */
  language: Maybe<Scalars['String']['output']>;
  /** The name */
  name: Maybe<Scalars['String']['output']>;
  /** To be used with searchAfter and searchBefore */
  paginationToken: Maybe<Scalars['String']['output']>;
  /** The parent document */
  parent: Maybe<SearchResults>;
  /** The parent id */
  parentId: Maybe<Scalars['ID']['output']>;
  /** The path */
  path: Maybe<Scalars['String']['output']>;
  /** The method to resolve the path */
  pathResolutionMethod: Maybe<PathResolutionMethod>;
  /** The publication state */
  publicationState: Maybe<Scalars['String']['output']>;
  /** The score */
  score: Maybe<Scalars['Float']['output']>;
  /** The shape identifier */
  shape: Maybe<Scalars['String']['output']>;
  /** The Shortcuts */
  shortcuts: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The different topics assigned */
  topics: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The type */
  type: Maybe<Scalars['String']['output']>;
};


export type DocumentBreadcrumbsArgs = {
  withShortcuts?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FeatureHighlightsPiece = {
  __typename?: 'FeatureHighlightsPiece';
  layout: Maybe<LayoutPiece>;
  usp: Maybe<Array<Maybe<ContentChunksComponentForFeatureHighlightsPieceUsp>>>;
};

export type File = {
  __typename?: 'File';
  createdAt: Maybe<Scalars['Datetime']['output']>;
  key: Maybe<Scalars['String']['output']>;
  meta: Maybe<Scalars['Hash']['output']>;
  title: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
};


export type FileMetaArgs = {
  key: InputMaybe<Scalars['String']['input']>;
};

export type Folder = {
  /** The Aliases */
  aliases: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The Breadcrumbs */
  breadcrumbs: Maybe<Array<Maybe<Array<Maybe<Breadcrumb>>>>>;
  /** Query the children of a folder. Same as a Search but with an implicit filter on the parent path. */
  children: Maybe<SearchResults>;
  /** The History of Paths */
  history: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The version id that includes the language and the publication state */
  id: Maybe<Scalars['ID']['output']>;
  /** The item id */
  itemId: Maybe<Scalars['ID']['output']>;
  /** The Language */
  language: Maybe<Scalars['String']['output']>;
  /** The name */
  name: Maybe<Scalars['String']['output']>;
  /** To be used with searchAfter and searchBefore */
  paginationToken: Maybe<Scalars['String']['output']>;
  /** The parent document */
  parent: Maybe<SearchResults>;
  /** The parent id */
  parentId: Maybe<Scalars['ID']['output']>;
  /** The path */
  path: Maybe<Scalars['String']['output']>;
  /** The method to resolve the path */
  pathResolutionMethod: Maybe<PathResolutionMethod>;
  /** The publication state */
  publicationState: Maybe<Scalars['String']['output']>;
  /** The score */
  score: Maybe<Scalars['Float']['output']>;
  /** The shape identifier */
  shape: Maybe<Scalars['String']['output']>;
  /** The Shortcuts */
  shortcuts: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The different topics assigned */
  topics: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The type */
  type: Maybe<Scalars['String']['output']>;
};


export type FolderBreadcrumbsArgs = {
  withShortcuts?: InputMaybe<Scalars['Boolean']['input']>;
};


export type FolderChildrenArgs = {
  facets: InputMaybe<TenantFacet>;
  filters: InputMaybe<TenantFilter>;
  language?: InputMaybe<Array<InputMaybe<TenantLanguage>>>;
  options: InputMaybe<SearchOptions>;
  pagination?: InputMaybe<Pagination>;
  path: InputMaybe<Scalars['String']['input']>;
  pathResolutionMethod: InputMaybe<Array<InputMaybe<PathResolutionMethod>>>;
  publicationState?: InputMaybe<Array<InputMaybe<PublicationState>>>;
  term: InputMaybe<Scalars['String']['input']>;
};

/** Maximum number of single-character edits required to match the specified search term. NONE means it will not be fuzzy. */
export enum Fuziness {
  Double = 'DOUBLE',
  None = 'NONE',
  Single = 'SINGLE'
}

export type FuzzySearchOptions = {
  /** Fuziness level. */
  fuzziness: InputMaybe<Fuziness>;
  /** The maximum number of variations to generate and search for. */
  maxExpensions: InputMaybe<Scalars['Int']['input']>;
  /** Number of characters at the beginning of each term in the result that must exactly match. Default 0. */
  prefixLength: InputMaybe<Scalars['Int']['input']>;
};

export type Image = {
  __typename?: 'Image';
  altText: Maybe<Scalars['String']['output']>;
  caption: Maybe<Scalars['RichText']['output']>;
  createAt: Maybe<Scalars['Datetime']['output']>;
  focalPoint: Maybe<Scalars['Hash']['output']>;
  key: Maybe<Scalars['String']['output']>;
  meta: Maybe<Scalars['Hash']['output']>;
  topics: Maybe<Scalars['Hash']['output']>;
  url: Maybe<Scalars['String']['output']>;
  variants: Maybe<Array<Maybe<ImageVariant>>>;
};


export type ImageFocalPointArgs = {
  key: InputMaybe<Scalars['String']['input']>;
};


export type ImageMetaArgs = {
  key: InputMaybe<Scalars['String']['input']>;
};


export type ImageTopicsArgs = {
  key: InputMaybe<Scalars['String']['input']>;
};


export type ImageVariantsArgs = {
  maxWidth: InputMaybe<Scalars['Int']['input']>;
  minWidth: InputMaybe<Scalars['Int']['input']>;
  types: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width: InputMaybe<Scalars['Int']['input']>;
};

export type ImageVariant = {
  __typename?: 'ImageVariant';
  height: Maybe<Scalars['Int']['output']>;
  key: Maybe<Scalars['String']['output']>;
  size: Maybe<Scalars['Int']['output']>;
  url: Maybe<Scalars['String']['output']>;
  width: Maybe<Scalars['Int']['output']>;
};

export type Images = {
  /** This is a syntactic sugar for getting the first image in the images list */
  firstImage: Maybe<Image>;
  images: Maybe<Array<Maybe<Image>>>;
};

export type ItemRelation = {
  __typename?: 'ItemRelation';
  itemId: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  path: Maybe<Scalars['String']['output']>;
  resolvedItem: Maybe<ItemRelationResolve>;
  shape: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};


export type ItemRelationResolvedItemArgs = {
  language?: InputMaybe<Array<InputMaybe<TenantLanguage>>>;
  publicationState?: InputMaybe<Array<InputMaybe<PublicationState>>>;
};

export type ItemRelationResolve = Category | LandingPage | MenuItem | Product | Story;

export type ItemRelations = {
  __typename?: 'ItemRelations';
  items: Maybe<Array<Maybe<ItemRelation>>>;
  skus: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ItemRelationsItemsArgs = {
  language?: InputMaybe<Array<InputMaybe<TenantLanguage>>>;
  publicationState?: InputMaybe<Array<InputMaybe<PublicationState>>>;
};

/** Crystallize Item Type */
export enum ItemType {
  Document = 'document',
  Folder = 'folder',
  Product = 'product'
}

export type LandingPageFacet = {
  blocks_banner_callToAction_action_label: InputMaybe<StringFacet>;
  blocks_banner_callToAction_action_url: InputMaybe<StringFacet>;
  blocks_banner_title: InputMaybe<StringFacet>;
  blocks_featureHighlights_usp_headline: InputMaybe<StringFacet>;
  blocks_pictureGrid_title: InputMaybe<StringFacet>;
  blocks_productSlider_title: InputMaybe<StringFacet>;
  blocks_storySlider_title: InputMaybe<StringFacet>;
  language: InputMaybe<StringFacet>;
  meta_title: InputMaybe<StringFacet>;
  name: InputMaybe<StringFacet>;
  publicationState: InputMaybe<StringFacet>;
  topics: InputMaybe<StringFacet>;
  type: InputMaybe<StringFacet>;
};

export type LandingPageFilter = {
  /** Logical AND filter to apply to the query */
  AND: InputMaybe<Array<InputMaybe<LandingPageFilter>>>;
  /** Logical OR filter to apply to the query */
  OR: InputMaybe<Array<InputMaybe<LandingPageFilter>>>;
  /** Filter on "aliases" */
  aliases: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.banner.caption.plainText" */
  blocks_banner_banner_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.call-to-action.action.label" */
  blocks_banner_callToAction_action_label: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.call-to-action.action.url" */
  blocks_banner_callToAction_action_url: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.description.plainText" */
  blocks_banner_description_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.layout.background-media.image.caption.plainText" */
  blocks_banner_layout_backgroundMedia_image_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.layout.background-media.video.thumbnails.caption.plainText" */
  blocks_banner_layout_backgroundMedia_video_thumbnails_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.title" */
  blocks_banner_title: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.layout.background-media.image.caption.plainText" */
  blocks_featureHighlights_layout_backgroundMedia_image_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.layout.background-media.video.thumbnails.caption.plainText" */
  blocks_featureHighlights_layout_backgroundMedia_video_thumbnails_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.usp.description.plainText" */
  blocks_featureHighlights_usp_description_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.usp.headline" */
  blocks_featureHighlights_usp_headline: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.usp.icon.caption.plainText" */
  blocks_featureHighlights_usp_icon_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.picture-grid.description.plainText" */
  blocks_pictureGrid_description_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.picture-grid.images.caption.plainText" */
  blocks_pictureGrid_images_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.picture-grid.layout.background-media.image.caption.plainText" */
  blocks_pictureGrid_layout_backgroundMedia_image_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.picture-grid.layout.background-media.video.thumbnails.caption.plainText" */
  blocks_pictureGrid_layout_backgroundMedia_video_thumbnails_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.picture-grid.title" */
  blocks_pictureGrid_title: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.description.plainText" */
  blocks_productSlider_description_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.layout.background-media.image.caption.plainText" */
  blocks_productSlider_layout_backgroundMedia_image_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.layout.background-media.video.thumbnails.caption.plainText" */
  blocks_productSlider_layout_backgroundMedia_video_thumbnails_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.title" */
  blocks_productSlider_title: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.description.plainText" */
  blocks_storySlider_description_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.layout.background-media.image.caption.plainText" */
  blocks_storySlider_layout_backgroundMedia_image_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.layout.background-media.video.thumbnails.caption.plainText" */
  blocks_storySlider_layout_backgroundMedia_video_thumbnails_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.title" */
  blocks_storySlider_title: InputMaybe<StringFilter>;
  /** Filter on "history" */
  history: InputMaybe<StringFilter>;
  /** Filter on "id" */
  id: InputMaybe<StringFilter>;
  /** Filter on "itemId" */
  itemId: InputMaybe<StringFilter>;
  /** Filter on "language" */
  language: InputMaybe<StringFilter>;
  /** Filter on "meta.description.plainText" */
  meta_description_plainText: InputMaybe<StringFilter>;
  /** Filter on "meta.image.caption.plainText" */
  meta_image_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "meta.title" */
  meta_title: InputMaybe<StringFilter>;
  /** Filter on "name" */
  name: InputMaybe<StringFilter>;
  /** Filter on "parentId" */
  parentId: InputMaybe<StringFilter>;
  /** Filter on "path" */
  path: InputMaybe<StringFilter>;
  /** Filter on "publicationState" */
  publicationState: InputMaybe<StringFilter>;
  /** Filter on "shortcuts.path" */
  shortcuts_path: InputMaybe<StringFilter>;
  /** Filter on "topics" */
  topics: InputMaybe<StringFilter>;
  type_in: InputMaybe<Array<InputMaybe<ItemType>>>;
};

export type LandingPageQuery = {
  __typename?: 'LandingPageQuery';
  hits: Maybe<Array<Maybe<LandingPage>>>;
  summary: Maybe<Summary>;
};

export type LandingPageSort = {
  /** Sort on "aliases" */
  aliases: InputMaybe<SortOrder>;
  /** Sort on "blocks.banner.call-to-action.action.label" */
  blocks_banner_callToAction_action_label: InputMaybe<SortOrder>;
  /** Sort on "blocks.banner.call-to-action.action.url" */
  blocks_banner_callToAction_action_url: InputMaybe<SortOrder>;
  /** Sort on "blocks.banner.title" */
  blocks_banner_title: InputMaybe<SortOrder>;
  /** Sort on "blocks.feature-highlights.usp.headline" */
  blocks_featureHighlights_usp_headline: InputMaybe<SortOrder>;
  /** Sort on "blocks.picture-grid.title" */
  blocks_pictureGrid_title: InputMaybe<SortOrder>;
  /** Sort on "blocks.product-slider.title" */
  blocks_productSlider_title: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.title" */
  blocks_storySlider_title: InputMaybe<SortOrder>;
  /** Sort on "history" */
  history: InputMaybe<SortOrder>;
  /** Sort on "id" */
  id: InputMaybe<SortOrder>;
  /** Sort on "itemId" */
  itemId: InputMaybe<SortOrder>;
  /** Sort on "language" */
  language: InputMaybe<SortOrder>;
  /** Sort on "meta.title" */
  meta_title: InputMaybe<SortOrder>;
  /** Sort on "name" */
  name: InputMaybe<SortOrder>;
  /** Sort on "parentId" */
  parentId: InputMaybe<SortOrder>;
  /** Sort on "path" */
  path: InputMaybe<SortOrder>;
  /** Sort on "publicationState" */
  publicationState: InputMaybe<SortOrder>;
  /** Sort on the Score based on the query */
  score: InputMaybe<SortOrder>;
  /** Sort on "shortcuts.path" */
  shortcuts_path: InputMaybe<SortOrder>;
  /** Sort on "topics" */
  topics: InputMaybe<SortOrder>;
  /** Sort on "type" */
  type: InputMaybe<SortOrder>;
};

export type LayoutPiece = {
  __typename?: 'LayoutPiece';
  backgroundMedia: Maybe<ComponentChoiceComponentForLayoutPieceBackgroundMedia>;
  displayWidth: Maybe<Scalars['Hash']['output']>;
  theme: Maybe<Scalars['Hash']['output']>;
};


export type LayoutPieceDisplayWidthArgs = {
  key: InputMaybe<Scalars['String']['input']>;
};


export type LayoutPieceThemeArgs = {
  key: InputMaybe<Scalars['String']['input']>;
};

export type MenuItemFacet = {
  label: InputMaybe<StringFacet>;
  language: InputMaybe<StringFacet>;
  link_url: InputMaybe<StringFacet>;
  name: InputMaybe<StringFacet>;
  publicationState: InputMaybe<StringFacet>;
  topics: InputMaybe<StringFacet>;
  type: InputMaybe<StringFacet>;
};

export type MenuItemFilter = {
  /** Logical AND filter to apply to the query */
  AND: InputMaybe<Array<InputMaybe<MenuItemFilter>>>;
  /** Logical OR filter to apply to the query */
  OR: InputMaybe<Array<InputMaybe<MenuItemFilter>>>;
  /** Filter on "aliases" */
  aliases: InputMaybe<StringFilter>;
  /** Filter on "description.plainText" */
  description_plainText: InputMaybe<StringFilter>;
  /** Filter on "history" */
  history: InputMaybe<StringFilter>;
  /** Filter on "icon.caption.plainText" */
  icon_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "id" */
  id: InputMaybe<StringFilter>;
  /** Filter on "itemId" */
  itemId: InputMaybe<StringFilter>;
  /** Filter on "label" */
  label: InputMaybe<StringFilter>;
  /** Filter on "language" */
  language: InputMaybe<StringFilter>;
  /** Filter on "link.url" */
  link_url: InputMaybe<StringFilter>;
  /** Filter on "name" */
  name: InputMaybe<StringFilter>;
  /** Filter on "parentId" */
  parentId: InputMaybe<StringFilter>;
  /** Filter on "path" */
  path: InputMaybe<StringFilter>;
  /** Filter on "publicationState" */
  publicationState: InputMaybe<StringFilter>;
  /** Filter on "shortcuts.path" */
  shortcuts_path: InputMaybe<StringFilter>;
  /** Filter on "topics" */
  topics: InputMaybe<StringFilter>;
  type_in: InputMaybe<Array<InputMaybe<ItemType>>>;
};

export type MenuItemQuery = {
  __typename?: 'MenuItemQuery';
  hits: Maybe<Array<Maybe<MenuItem>>>;
  summary: Maybe<Summary>;
};

export type MenuItemSort = {
  /** Sort on "aliases" */
  aliases: InputMaybe<SortOrder>;
  /** Sort on "history" */
  history: InputMaybe<SortOrder>;
  /** Sort on "id" */
  id: InputMaybe<SortOrder>;
  /** Sort on "itemId" */
  itemId: InputMaybe<SortOrder>;
  /** Sort on "label" */
  label: InputMaybe<SortOrder>;
  /** Sort on "language" */
  language: InputMaybe<SortOrder>;
  /** Sort on "link.url" */
  link_url: InputMaybe<SortOrder>;
  /** Sort on "name" */
  name: InputMaybe<SortOrder>;
  /** Sort on "parentId" */
  parentId: InputMaybe<SortOrder>;
  /** Sort on "path" */
  path: InputMaybe<SortOrder>;
  /** Sort on "publicationState" */
  publicationState: InputMaybe<SortOrder>;
  /** Sort on the Score based on the query */
  score: InputMaybe<SortOrder>;
  /** Sort on "shortcuts.path" */
  shortcuts_path: InputMaybe<SortOrder>;
  /** Sort on "topics" */
  topics: InputMaybe<SortOrder>;
  /** Sort on "type" */
  type: InputMaybe<SortOrder>;
};

export type MetaPiece = {
  __typename?: 'MetaPiece';
  description: Maybe<Scalars['RichText']['output']>;
  image: Maybe<Array<Maybe<Image>>>;
  title: Maybe<Scalars['String']['output']>;
};


export type MetaPieceDescriptionArgs = {
  format?: RichTextFormat;
};

export type NumberFacet = {
  /** The boundaries of the facet */
  boundaries: Array<InputMaybe<Scalars['Int']['input']>>;
  /** The key of the facet in the result */
  key: InputMaybe<Scalars['String']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
};

export type NumberFilter = {
  /** Filter on equality */
  equals: InputMaybe<Scalars['Float']['input']>;
  /** Filter on existence */
  exists: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter if is in list */
  in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** Filter on not equal to */
  not_equals: InputMaybe<Scalars['Float']['input']>;
  /** Filter if is not in list */
  not_in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** Filter if is within range */
  range: InputMaybe<NumberRange>;
};

export type NumberRange = {
  gt: InputMaybe<Scalars['Float']['input']>;
  gte: InputMaybe<Scalars['Float']['input']>;
  lt: InputMaybe<Scalars['Float']['input']>;
  lte: InputMaybe<Scalars['Float']['input']>;
};

export type Pagination = {
  /** Provide the paginationToken from the document. */
  after: InputMaybe<Scalars['String']['input']>;
  /** Provide the paginationToken from the document. */
  before: InputMaybe<Scalars['String']['input']>;
  /** The maximum number of results to return. */
  limit: InputMaybe<Scalars['Int']['input']>;
  /** Not the best in terms of performance. Use searchAfter or searchBefore instead. */
  skip: InputMaybe<Scalars['Int']['input']>;
};

export type Paragraph = Images & {
  __typename?: 'Paragraph';
  body: Maybe<Scalars['RichText']['output']>;
  /** This is a syntactic sugar for getting the first image in the images list */
  firstImage: Maybe<Image>;
  images: Maybe<Array<Maybe<Image>>>;
  title: Maybe<Scalars['String']['output']>;
};


export type ParagraphBodyArgs = {
  format?: RichTextFormat;
};

/** How to resolve the path of an item. */
export enum PathResolutionMethod {
  Alias = 'alias',
  Canonical = 'canonical',
  History = 'history',
  Shortcut = 'shortcut'
}

export type PictureGridPiece = {
  __typename?: 'PictureGridPiece';
  description: Maybe<Scalars['RichText']['output']>;
  images: Maybe<Array<Maybe<Image>>>;
  layout: Maybe<LayoutPiece>;
  title: Maybe<Scalars['String']['output']>;
};


export type PictureGridPieceDescriptionArgs = {
  format?: RichTextFormat;
};

export type Product = {
  /** The Aliases */
  aliases: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The Breadcrumbs */
  breadcrumbs: Maybe<Array<Maybe<Array<Maybe<Breadcrumb>>>>>;
  /** The default variant (generic) of the product */
  defaultVariant: Maybe<ProductVariant>;
  /** The History of Paths */
  history: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The version id that includes the language and the publication state */
  id: Maybe<Scalars['ID']['output']>;
  /** The item id */
  itemId: Maybe<Scalars['ID']['output']>;
  /** The Language */
  language: Maybe<Scalars['String']['output']>;
  /** The name */
  name: Maybe<Scalars['String']['output']>;
  /** To be used with searchAfter and searchBefore */
  paginationToken: Maybe<Scalars['String']['output']>;
  /** The parent document */
  parent: Maybe<SearchResults>;
  /** The parent id */
  parentId: Maybe<Scalars['ID']['output']>;
  /** The path */
  path: Maybe<Scalars['String']['output']>;
  /** The method to resolve the path */
  pathResolutionMethod: Maybe<PathResolutionMethod>;
  /** The publication state */
  publicationState: Maybe<Scalars['String']['output']>;
  /** The score */
  score: Maybe<Scalars['Float']['output']>;
  /** The shape identifier */
  shape: Maybe<Scalars['String']['output']>;
  /** The Shortcuts */
  shortcuts: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The different topics assigned */
  topics: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The type */
  type: Maybe<Scalars['String']['output']>;
  /** The list of the variants (generic) for the product */
  variants: Maybe<Array<Maybe<ProductVariant>>>;
  /** The VAT type */
  vatType: Maybe<VatType>;
};


export type ProductBreadcrumbsArgs = {
  withShortcuts?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductFacet = {
  dimensions_depth_number: InputMaybe<NumberFacet>;
  dimensions_height_number: InputMaybe<NumberFacet>;
  dimensions_weight_number: InputMaybe<NumberFacet>;
  dimensions_width_number: InputMaybe<NumberFacet>;
  downloads_files_title: InputMaybe<StringFacet>;
  downloads_title: InputMaybe<StringFacet>;
  language: InputMaybe<StringFacet>;
  meta_title: InputMaybe<StringFacet>;
  name: InputMaybe<StringFacet>;
  publicationState: InputMaybe<StringFacet>;
  story_title: InputMaybe<StringFacet>;
  title: InputMaybe<StringFacet>;
  topics: InputMaybe<StringFacet>;
  type: InputMaybe<StringFacet>;
  variants_attributes_key: InputMaybe<StringFacet>;
  variants_attributes_value: InputMaybe<StringFacet>;
  variants_dimensions_depth_number: InputMaybe<NumberFacet>;
  variants_dimensions_height_number: InputMaybe<NumberFacet>;
  variants_dimensions_weight_number: InputMaybe<NumberFacet>;
  variants_dimensions_width_number: InputMaybe<NumberFacet>;
  variants_name: InputMaybe<StringFacet>;
  variants_priceVariants_default_price: InputMaybe<NumberFacet>;
  variants_sku: InputMaybe<StringFacet>;
  variants_stockLocations_default_stock: InputMaybe<NumberFacet>;
};

export type ProductFilter = {
  /** Logical AND filter to apply to the query */
  AND: InputMaybe<Array<InputMaybe<ProductFilter>>>;
  /** Logical OR filter to apply to the query */
  OR: InputMaybe<Array<InputMaybe<ProductFilter>>>;
  /** Filter on "aliases" */
  aliases: InputMaybe<StringFilter>;
  /** Filter on "description.plainText" */
  description_plainText: InputMaybe<StringFilter>;
  /** Filter on "dimensions.depth.number" */
  dimensions_depth_number: InputMaybe<NumberFilter>;
  /** Filter on "dimensions.height.number" */
  dimensions_height_number: InputMaybe<NumberFilter>;
  /** Filter on "dimensions.weight.number" */
  dimensions_weight_number: InputMaybe<NumberFilter>;
  /** Filter on "dimensions.width.number" */
  dimensions_width_number: InputMaybe<NumberFilter>;
  /** Filter on "downloads.description.plainText" */
  downloads_description_plainText: InputMaybe<StringFilter>;
  /** Filter on "downloads.files.key" */
  downloads_files_key: InputMaybe<StringFilter>;
  /** Filter on "downloads.files.title" */
  downloads_files_title: InputMaybe<StringFilter>;
  /** Filter on "downloads.title" */
  downloads_title: InputMaybe<StringFilter>;
  /** Filter on "history" */
  history: InputMaybe<StringFilter>;
  /** Filter on "id" */
  id: InputMaybe<StringFilter>;
  /** Filter on "itemId" */
  itemId: InputMaybe<StringFilter>;
  /** Filter on "language" */
  language: InputMaybe<StringFilter>;
  /** Filter on "meta.description.plainText" */
  meta_description_plainText: InputMaybe<StringFilter>;
  /** Filter on "meta.image.caption.plainText" */
  meta_image_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "meta.title" */
  meta_title: InputMaybe<StringFilter>;
  /** Filter on "name" */
  name: InputMaybe<StringFilter>;
  /** Filter on "parentId" */
  parentId: InputMaybe<StringFilter>;
  /** Filter on "path" */
  path: InputMaybe<StringFilter>;
  /** Filter on "publicationState" */
  publicationState: InputMaybe<StringFilter>;
  /** Filter on "shortcuts.path" */
  shortcuts_path: InputMaybe<StringFilter>;
  /** Filter on "story.body.plainText" */
  story_body_plainText: InputMaybe<StringFilter>;
  /** Filter on "story.title" */
  story_title: InputMaybe<StringFilter>;
  /** Filter on "title" */
  title: InputMaybe<StringFilter>;
  /** Filter on "topics" */
  topics: InputMaybe<StringFilter>;
  type_in: InputMaybe<Array<InputMaybe<ItemType>>>;
  /** Filter on "variants.attributes.key" */
  variants_attributes_key: InputMaybe<StringFilter>;
  /** Filter on "variants.attributes.value" */
  variants_attributes_value: InputMaybe<StringFilter>;
  /** Filter on "variants.description.alternative-description.plainText" */
  variants_description_alternativeDescription_plainText: InputMaybe<StringFilter>;
  /** Filter on "variants.description.extra-description.plainText" */
  variants_description_extraDescription_plainText: InputMaybe<StringFilter>;
  /** Filter on "variants.dimensions.depth.number" */
  variants_dimensions_depth_number: InputMaybe<NumberFilter>;
  /** Filter on "variants.dimensions.height.number" */
  variants_dimensions_height_number: InputMaybe<NumberFilter>;
  /** Filter on "variants.dimensions.weight.number" */
  variants_dimensions_weight_number: InputMaybe<NumberFilter>;
  /** Filter on "variants.dimensions.width.number" */
  variants_dimensions_width_number: InputMaybe<NumberFilter>;
  /** Filter on "variants.name" */
  variants_name: InputMaybe<StringFilter>;
  /** Filter on "variants.priceVariants.default.price" */
  variants_priceVariants_default_price: InputMaybe<NumberFilter>;
  /** Filter on "variants.sku" */
  variants_sku: InputMaybe<StringFilter>;
  /** Filter on "variants.stockLocations.default.stock" */
  variants_stockLocations_default_stock: InputMaybe<NumberFilter>;
};

export type ProductQuery = {
  __typename?: 'ProductQuery';
  hits: Maybe<Array<Maybe<Product>>>;
  summary: Maybe<Summary>;
};

export type ProductSliderPiece = {
  __typename?: 'ProductSliderPiece';
  description: Maybe<Scalars['RichText']['output']>;
  layout: Maybe<LayoutPiece>;
  /**   */
  products: Maybe<ItemRelations>;
  title: Maybe<Scalars['String']['output']>;
};


export type ProductSliderPieceDescriptionArgs = {
  format?: RichTextFormat;
};


export type ProductSliderPieceProductsArgs = {
  resolve?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductSort = {
  /** Sort on "aliases" */
  aliases: InputMaybe<SortOrder>;
  /** Sort on "dimensions.depth.number" */
  dimensions_depth_number: InputMaybe<SortOrder>;
  /** Sort on "dimensions.height.number" */
  dimensions_height_number: InputMaybe<SortOrder>;
  /** Sort on "dimensions.weight.number" */
  dimensions_weight_number: InputMaybe<SortOrder>;
  /** Sort on "dimensions.width.number" */
  dimensions_width_number: InputMaybe<SortOrder>;
  /** Sort on "downloads.files.key" */
  downloads_files_key: InputMaybe<SortOrder>;
  /** Sort on "downloads.files.title" */
  downloads_files_title: InputMaybe<SortOrder>;
  /** Sort on "downloads.title" */
  downloads_title: InputMaybe<SortOrder>;
  /** Sort on "history" */
  history: InputMaybe<SortOrder>;
  /** Sort on "id" */
  id: InputMaybe<SortOrder>;
  /** Sort on "itemId" */
  itemId: InputMaybe<SortOrder>;
  /** Sort on "language" */
  language: InputMaybe<SortOrder>;
  /** Sort on "meta.title" */
  meta_title: InputMaybe<SortOrder>;
  /** Sort on "name" */
  name: InputMaybe<SortOrder>;
  /** Sort on "parentId" */
  parentId: InputMaybe<SortOrder>;
  /** Sort on "path" */
  path: InputMaybe<SortOrder>;
  /** Sort on "publicationState" */
  publicationState: InputMaybe<SortOrder>;
  /** Sort on the Score based on the query */
  score: InputMaybe<SortOrder>;
  /** Sort on "shortcuts.path" */
  shortcuts_path: InputMaybe<SortOrder>;
  /** Sort on "story.title" */
  story_title: InputMaybe<SortOrder>;
  /** Sort on "title" */
  title: InputMaybe<SortOrder>;
  /** Sort on "topics" */
  topics: InputMaybe<SortOrder>;
  /** Sort on "type" */
  type: InputMaybe<SortOrder>;
  /** Sort on "variants.attributes.key" */
  variants_attributes_key: InputMaybe<SortOrder>;
  /** Sort on "variants.attributes.value" */
  variants_attributes_value: InputMaybe<SortOrder>;
  /** Sort on "variants.dimensions.depth.number" */
  variants_dimensions_depth_number: InputMaybe<SortOrder>;
  /** Sort on "variants.dimensions.height.number" */
  variants_dimensions_height_number: InputMaybe<SortOrder>;
  /** Sort on "variants.dimensions.weight.number" */
  variants_dimensions_weight_number: InputMaybe<SortOrder>;
  /** Sort on "variants.dimensions.width.number" */
  variants_dimensions_width_number: InputMaybe<SortOrder>;
  /** Sort on "variants.name" */
  variants_name: InputMaybe<SortOrder>;
  /** Sort on "variants.sku" */
  variants_sku: InputMaybe<SortOrder>;
};

export type ProductVariant = {
  attributes: Maybe<Scalars['Hash']['output']>;
  /** This is a syntactic sugar for getting the 'default' stockLocation in the stockLocations list */
  defaultLocation: Maybe<Scalars['Hash']['output']>;
  /** This is a syntactic sugar for getting the 'default' priceVariant in the priceVariants list */
  defaultPrice: Maybe<Scalars['Hash']['output']>;
  /** This is a syntactic sugar for getting the first image in the images list */
  firstImage: Maybe<Image>;
  images: Maybe<Array<Maybe<Image>>>;
  isDefault: Maybe<Scalars['Boolean']['output']>;
  name: Maybe<Scalars['String']['output']>;
  priceVariants: Maybe<Scalars['Hash']['output']>;
  sku: Maybe<Scalars['String']['output']>;
  stockLocations: Maybe<Scalars['Hash']['output']>;
  subscriptionPlans: Maybe<Scalars['Hash']['output']>;
  videos: Maybe<Array<Maybe<Video>>>;
};


export type ProductVariantAttributesArgs = {
  key: InputMaybe<Scalars['String']['input']>;
};


export type ProductVariantPriceVariantsArgs = {
  key: InputMaybe<Scalars['String']['input']>;
};


export type ProductVariantStockLocationsArgs = {
  key: InputMaybe<Scalars['String']['input']>;
};


export type ProductVariantSubscriptionPlansArgs = {
  key: InputMaybe<Scalars['String']['input']>;
};

export type ProductVariantForProduct = Images & ProductVariant & {
  __typename?: 'ProductVariantForProduct';
  attributes: Maybe<Scalars['Hash']['output']>;
  /** This is a syntactic sugar for getting the 'default' stockLocation in the stockLocations list */
  defaultLocation: Maybe<Scalars['Hash']['output']>;
  /** This is a syntactic sugar for getting the 'default' priceVariant in the priceVariants list */
  defaultPrice: Maybe<Scalars['Hash']['output']>;
  description: Maybe<ComponentChoiceComponentForVariantProductDescription>;
  dimensions: Maybe<DimensionsPiece>;
  /** This is a syntactic sugar for getting the first image in the images list */
  firstImage: Maybe<Image>;
  images: Maybe<Array<Maybe<Image>>>;
  isDefault: Maybe<Scalars['Boolean']['output']>;
  name: Maybe<Scalars['String']['output']>;
  priceVariants: Maybe<Scalars['Hash']['output']>;
  sku: Maybe<Scalars['String']['output']>;
  stockLocations: Maybe<Scalars['Hash']['output']>;
  subscriptionPlans: Maybe<Scalars['Hash']['output']>;
  videos: Maybe<Array<Maybe<Video>>>;
};


export type ProductVariantForProductAttributesArgs = {
  key: InputMaybe<Scalars['String']['input']>;
};


export type ProductVariantForProductPriceVariantsArgs = {
  key: InputMaybe<Scalars['String']['input']>;
};


export type ProductVariantForProductStockLocationsArgs = {
  key: InputMaybe<Scalars['String']['input']>;
};


export type ProductVariantForProductSubscriptionPlansArgs = {
  key: InputMaybe<Scalars['String']['input']>;
};

export type Profiling = {
  __typename?: 'Profiling';
  collection: Maybe<Scalars['String']['output']>;
  executionTime: Maybe<Scalars['Float']['output']>;
  webNode: Maybe<Scalars['String']['output']>;
};

/** The publication state of an Document. */
export enum PublicationState {
  Draft = 'draft',
  Published = 'published'
}

/** The root of all Discovery queries in the Crystallize API for identifier: furnitut */
export type Query = {
  __typename?: 'Query';
  /** This query is used to help with autocomplete (hardcode on `name` so far). */
  autocomplete: Maybe<SearchResults>;
  /** This query is used to browse the Crystallize catalog per Shape First. */
  browse: Maybe<BrowseQuery>;
  /** This query is used to test the API. It will return the message you send in the 'message' argument. */
  echo: Maybe<Scalars['String']['output']>;
  /** This query is used to search the Crystallize catalog. */
  search: Maybe<SearchResults>;
};


/** The root of all Discovery queries in the Crystallize API for identifier: furnitut */
export type QueryAutocompleteArgs = {
  facets: InputMaybe<TenantFacet>;
  filters: InputMaybe<TenantFilter>;
  language?: InputMaybe<Array<InputMaybe<TenantLanguage>>>;
  options: InputMaybe<SearchOptions>;
  pagination?: InputMaybe<Pagination>;
  path: InputMaybe<Scalars['String']['input']>;
  pathResolutionMethod: InputMaybe<Array<InputMaybe<PathResolutionMethod>>>;
  publicationState?: InputMaybe<Array<InputMaybe<PublicationState>>>;
  sorting: InputMaybe<TenantSort>;
  term: InputMaybe<Scalars['String']['input']>;
};


/** The root of all Discovery queries in the Crystallize API for identifier: furnitut */
export type QueryEchoArgs = {
  message: InputMaybe<Scalars['String']['input']>;
};


/** The root of all Discovery queries in the Crystallize API for identifier: furnitut */
export type QuerySearchArgs = {
  facets: InputMaybe<TenantFacet>;
  filters: InputMaybe<TenantFilter>;
  language?: InputMaybe<Array<InputMaybe<TenantLanguage>>>;
  options: InputMaybe<SearchOptions>;
  pagination?: InputMaybe<Pagination>;
  path: InputMaybe<Scalars['String']['input']>;
  pathResolutionMethod: InputMaybe<Array<InputMaybe<PathResolutionMethod>>>;
  publicationState?: InputMaybe<Array<InputMaybe<PublicationState>>>;
  sorting: InputMaybe<TenantSort>;
  term: InputMaybe<Scalars['String']['input']>;
};

export enum RichTextFormat {
  Html = 'html',
  Json = 'json',
  PlainText = 'plainText'
}

export type SearchOptions = {
  /** Fuzzy search options. */
  fuzzy: InputMaybe<FuzzySearchOptions>;
};

export type SearchResults = {
  __typename?: 'SearchResults';
  hits: Maybe<Array<Maybe<Document>>>;
  summary: Maybe<Summary>;
};

/** The order to sort the results */
export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StoryFacet = {
  language: InputMaybe<StringFacet>;
  meta_title: InputMaybe<StringFacet>;
  name: InputMaybe<StringFacet>;
  publicationState: InputMaybe<StringFacet>;
  story_title: InputMaybe<StringFacet>;
  title: InputMaybe<StringFacet>;
  topics: InputMaybe<StringFacet>;
  type: InputMaybe<StringFacet>;
};

export type StoryFilter = {
  /** Logical AND filter to apply to the query */
  AND: InputMaybe<Array<InputMaybe<StoryFilter>>>;
  /** Logical OR filter to apply to the query */
  OR: InputMaybe<Array<InputMaybe<StoryFilter>>>;
  /** Filter on "aliases" */
  aliases: InputMaybe<StringFilter>;
  /** Filter on "history" */
  history: InputMaybe<StringFilter>;
  /** Filter on "id" */
  id: InputMaybe<StringFilter>;
  /** Filter on "intro.plainText" */
  intro_plainText: InputMaybe<StringFilter>;
  /** Filter on "itemId" */
  itemId: InputMaybe<StringFilter>;
  /** Filter on "language" */
  language: InputMaybe<StringFilter>;
  /** Filter on "media.image.caption.plainText" */
  media_image_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "media.shoppable-image.caption.plainText" */
  media_shoppableImage_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "media.video.thumbnails.caption.plainText" */
  media_video_thumbnails_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "meta.description.plainText" */
  meta_description_plainText: InputMaybe<StringFilter>;
  /** Filter on "meta.image.caption.plainText" */
  meta_image_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "meta.title" */
  meta_title: InputMaybe<StringFilter>;
  /** Filter on "name" */
  name: InputMaybe<StringFilter>;
  /** Filter on "parentId" */
  parentId: InputMaybe<StringFilter>;
  /** Filter on "path" */
  path: InputMaybe<StringFilter>;
  /** Filter on "publicationState" */
  publicationState: InputMaybe<StringFilter>;
  /** Filter on "shortcuts.path" */
  shortcuts_path: InputMaybe<StringFilter>;
  /** Filter on "story.body.plainText" */
  story_body_plainText: InputMaybe<StringFilter>;
  /** Filter on "story.title" */
  story_title: InputMaybe<StringFilter>;
  /** Filter on "title" */
  title: InputMaybe<StringFilter>;
  /** Filter on "topics" */
  topics: InputMaybe<StringFilter>;
  type_in: InputMaybe<Array<InputMaybe<ItemType>>>;
};

export type StoryQuery = {
  __typename?: 'StoryQuery';
  hits: Maybe<Array<Maybe<Story>>>;
  summary: Maybe<Summary>;
};

export type StorySliderPiece = {
  __typename?: 'StorySliderPiece';
  description: Maybe<Scalars['RichText']['output']>;
  layout: Maybe<LayoutPiece>;
  stories: Maybe<ItemRelations>;
  title: Maybe<Scalars['String']['output']>;
};


export type StorySliderPieceDescriptionArgs = {
  format?: RichTextFormat;
};


export type StorySliderPieceStoriesArgs = {
  resolve?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StorySort = {
  /** Sort on "aliases" */
  aliases: InputMaybe<SortOrder>;
  /** Sort on "history" */
  history: InputMaybe<SortOrder>;
  /** Sort on "id" */
  id: InputMaybe<SortOrder>;
  /** Sort on "itemId" */
  itemId: InputMaybe<SortOrder>;
  /** Sort on "language" */
  language: InputMaybe<SortOrder>;
  /** Sort on "meta.title" */
  meta_title: InputMaybe<SortOrder>;
  /** Sort on "name" */
  name: InputMaybe<SortOrder>;
  /** Sort on "parentId" */
  parentId: InputMaybe<SortOrder>;
  /** Sort on "path" */
  path: InputMaybe<SortOrder>;
  /** Sort on "publicationState" */
  publicationState: InputMaybe<SortOrder>;
  /** Sort on the Score based on the query */
  score: InputMaybe<SortOrder>;
  /** Sort on "shortcuts.path" */
  shortcuts_path: InputMaybe<SortOrder>;
  /** Sort on "story.title" */
  story_title: InputMaybe<SortOrder>;
  /** Sort on "title" */
  title: InputMaybe<SortOrder>;
  /** Sort on "topics" */
  topics: InputMaybe<SortOrder>;
  /** Sort on "type" */
  type: InputMaybe<SortOrder>;
};

export type StringFacet = {
  /** The key of the facet in the result */
  key: InputMaybe<Scalars['String']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
};

export type StringFilter = {
  /** Filter if contains */
  contains: InputMaybe<Scalars['String']['input']>;
  /** Filter on equality */
  equals: InputMaybe<Scalars['String']['input']>;
  /** Filter on existence */
  exists: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter if is in list */
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter if does not contain */
  not_contains: InputMaybe<Scalars['String']['input']>;
  /** Filter on not equal to */
  not_equals: InputMaybe<Scalars['String']['input']>;
  /** Filter if is not in list */
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter  not matching regex. Ex: .*something.* */
  not_regex: InputMaybe<Scalars['String']['input']>;
  /** Filter with regex. Ex: .*something.* */
  regex: InputMaybe<Scalars['String']['input']>;
};

export type Summary = {
  __typename?: 'Summary';
  facets: Maybe<Scalars['Hash']['output']>;
  /** It only makes sense if used with `skip`. Skip is not the best in terms of perofmance. Use after and/or before instead. */
  hasMoreHits: Maybe<Scalars['Boolean']['output']>;
  /** It only makes sense if used with `skip`. Skip is not the best in terms of perofmance. Use after and before instead. */
  hasPreviousHits: Maybe<Scalars['Boolean']['output']>;
  profiling: Maybe<Profiling>;
  totalHits: Maybe<Scalars['Int']['output']>;
};


export type SummaryFacetsArgs = {
  key: InputMaybe<Scalars['String']['input']>;
};

export type TenantFacet = {
  blocks_banner_callToAction_action_label: InputMaybe<StringFacet>;
  blocks_banner_callToAction_action_url: InputMaybe<StringFacet>;
  blocks_banner_title: InputMaybe<StringFacet>;
  blocks_featureHighlights_usp_headline: InputMaybe<StringFacet>;
  blocks_pictureGrid_title: InputMaybe<StringFacet>;
  blocks_productSlider_title: InputMaybe<StringFacet>;
  blocks_storySlider_title: InputMaybe<StringFacet>;
  dimensions_depth_number: InputMaybe<NumberFacet>;
  dimensions_height_number: InputMaybe<NumberFacet>;
  dimensions_weight_number: InputMaybe<NumberFacet>;
  dimensions_width_number: InputMaybe<NumberFacet>;
  downloads_files_title: InputMaybe<StringFacet>;
  downloads_title: InputMaybe<StringFacet>;
  label: InputMaybe<StringFacet>;
  language: InputMaybe<StringFacet>;
  link_url: InputMaybe<StringFacet>;
  meta_title: InputMaybe<StringFacet>;
  name: InputMaybe<StringFacet>;
  publicationState: InputMaybe<StringFacet>;
  shape: InputMaybe<StringFacet>;
  story_title: InputMaybe<StringFacet>;
  title: InputMaybe<StringFacet>;
  topics: InputMaybe<StringFacet>;
  type: InputMaybe<StringFacet>;
  variants_attributes_key: InputMaybe<StringFacet>;
  variants_attributes_value: InputMaybe<StringFacet>;
  variants_dimensions_depth_number: InputMaybe<NumberFacet>;
  variants_dimensions_height_number: InputMaybe<NumberFacet>;
  variants_dimensions_weight_number: InputMaybe<NumberFacet>;
  variants_dimensions_width_number: InputMaybe<NumberFacet>;
  variants_name: InputMaybe<StringFacet>;
  variants_priceVariants_default_price: InputMaybe<NumberFacet>;
  variants_sku: InputMaybe<StringFacet>;
  variants_stockLocations_default_stock: InputMaybe<NumberFacet>;
};

export type TenantFilter = {
  /** Logical AND filter to apply to the query */
  AND: InputMaybe<Array<InputMaybe<TenantFilter>>>;
  /** Logical OR filter to apply to the query */
  OR: InputMaybe<Array<InputMaybe<TenantFilter>>>;
  /** Filter on "aliases" */
  aliases: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.banner.caption.plainText" */
  blocks_banner_banner_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.call-to-action.action.label" */
  blocks_banner_callToAction_action_label: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.call-to-action.action.url" */
  blocks_banner_callToAction_action_url: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.description.plainText" */
  blocks_banner_description_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.layout.background-media.image.caption.plainText" */
  blocks_banner_layout_backgroundMedia_image_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.layout.background-media.video.thumbnails.caption.plainText" */
  blocks_banner_layout_backgroundMedia_video_thumbnails_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.title" */
  blocks_banner_title: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.layout.background-media.image.caption.plainText" */
  blocks_featureHighlights_layout_backgroundMedia_image_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.layout.background-media.video.thumbnails.caption.plainText" */
  blocks_featureHighlights_layout_backgroundMedia_video_thumbnails_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.usp.description.plainText" */
  blocks_featureHighlights_usp_description_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.usp.headline" */
  blocks_featureHighlights_usp_headline: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.usp.icon.caption.plainText" */
  blocks_featureHighlights_usp_icon_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.picture-grid.description.plainText" */
  blocks_pictureGrid_description_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.picture-grid.images.caption.plainText" */
  blocks_pictureGrid_images_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.picture-grid.layout.background-media.image.caption.plainText" */
  blocks_pictureGrid_layout_backgroundMedia_image_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.picture-grid.layout.background-media.video.thumbnails.caption.plainText" */
  blocks_pictureGrid_layout_backgroundMedia_video_thumbnails_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.picture-grid.title" */
  blocks_pictureGrid_title: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.description.plainText" */
  blocks_productSlider_description_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.layout.background-media.image.caption.plainText" */
  blocks_productSlider_layout_backgroundMedia_image_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.layout.background-media.video.thumbnails.caption.plainText" */
  blocks_productSlider_layout_backgroundMedia_video_thumbnails_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.title" */
  blocks_productSlider_title: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.description.plainText" */
  blocks_storySlider_description_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.layout.background-media.image.caption.plainText" */
  blocks_storySlider_layout_backgroundMedia_image_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.layout.background-media.video.thumbnails.caption.plainText" */
  blocks_storySlider_layout_backgroundMedia_video_thumbnails_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.title" */
  blocks_storySlider_title: InputMaybe<StringFilter>;
  /** Filter on "description.plainText" */
  description_plainText: InputMaybe<StringFilter>;
  /** Filter on "dimensions.depth.number" */
  dimensions_depth_number: InputMaybe<NumberFilter>;
  /** Filter on "dimensions.height.number" */
  dimensions_height_number: InputMaybe<NumberFilter>;
  /** Filter on "dimensions.weight.number" */
  dimensions_weight_number: InputMaybe<NumberFilter>;
  /** Filter on "dimensions.width.number" */
  dimensions_width_number: InputMaybe<NumberFilter>;
  /** Filter on "downloads.description.plainText" */
  downloads_description_plainText: InputMaybe<StringFilter>;
  /** Filter on "downloads.files.key" */
  downloads_files_key: InputMaybe<StringFilter>;
  /** Filter on "downloads.files.title" */
  downloads_files_title: InputMaybe<StringFilter>;
  /** Filter on "downloads.title" */
  downloads_title: InputMaybe<StringFilter>;
  /** Filter on "history" */
  history: InputMaybe<StringFilter>;
  /** Filter on "icon.caption.plainText" */
  icon_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "id" */
  id: InputMaybe<StringFilter>;
  /** Filter on "image.caption.plainText" */
  image_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "intro.plainText" */
  intro_plainText: InputMaybe<StringFilter>;
  /** Filter on "itemId" */
  itemId: InputMaybe<StringFilter>;
  /** Filter on "label" */
  label: InputMaybe<StringFilter>;
  /** Filter on "language" */
  language: InputMaybe<StringFilter>;
  /** Filter on "link.url" */
  link_url: InputMaybe<StringFilter>;
  /** Filter on "media.image.caption.plainText" */
  media_image_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "media.shoppable-image.caption.plainText" */
  media_shoppableImage_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "media.video.thumbnails.caption.plainText" */
  media_video_thumbnails_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "meta.description.plainText" */
  meta_description_plainText: InputMaybe<StringFilter>;
  /** Filter on "meta.image.caption.plainText" */
  meta_image_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "meta.title" */
  meta_title: InputMaybe<StringFilter>;
  /** Filter on "name" */
  name: InputMaybe<StringFilter>;
  /** Filter on "parentId" */
  parentId: InputMaybe<StringFilter>;
  /** Filter on "path" */
  path: InputMaybe<StringFilter>;
  /** Filter on "publicationState" */
  publicationState: InputMaybe<StringFilter>;
  /** Filter on "shape" */
  shape: InputMaybe<StringFilter>;
  /** Filter on "shortcuts.path" */
  shortcuts_path: InputMaybe<StringFilter>;
  /** Filter on "story.body.plainText" */
  story_body_plainText: InputMaybe<StringFilter>;
  /** Filter on "story.title" */
  story_title: InputMaybe<StringFilter>;
  /** Filter on "title" */
  title: InputMaybe<StringFilter>;
  /** Filter on "topics" */
  topics: InputMaybe<StringFilter>;
  type_in: InputMaybe<Array<InputMaybe<ItemType>>>;
  /** Filter on "variants.attributes.key" */
  variants_attributes_key: InputMaybe<StringFilter>;
  /** Filter on "variants.attributes.value" */
  variants_attributes_value: InputMaybe<StringFilter>;
  /** Filter on "variants.description.alternative-description.plainText" */
  variants_description_alternativeDescription_plainText: InputMaybe<StringFilter>;
  /** Filter on "variants.description.extra-description.plainText" */
  variants_description_extraDescription_plainText: InputMaybe<StringFilter>;
  /** Filter on "variants.dimensions.depth.number" */
  variants_dimensions_depth_number: InputMaybe<NumberFilter>;
  /** Filter on "variants.dimensions.height.number" */
  variants_dimensions_height_number: InputMaybe<NumberFilter>;
  /** Filter on "variants.dimensions.weight.number" */
  variants_dimensions_weight_number: InputMaybe<NumberFilter>;
  /** Filter on "variants.dimensions.width.number" */
  variants_dimensions_width_number: InputMaybe<NumberFilter>;
  /** Filter on "variants.name" */
  variants_name: InputMaybe<StringFilter>;
  /** Filter on "variants.priceVariants.default.price" */
  variants_priceVariants_default_price: InputMaybe<NumberFilter>;
  /** Filter on "variants.sku" */
  variants_sku: InputMaybe<StringFilter>;
  /** Filter on "variants.stockLocations.default.stock" */
  variants_stockLocations_default_stock: InputMaybe<NumberFilter>;
};

/** The languages available for the tenant */
export enum TenantLanguage {
  En = 'en'
}

/** The price variant identifiers available for the tenant */
export enum TenantPriceVariantIdentifier {
  Default = 'default'
}

export type TenantSort = {
  /** Sort on "aliases" */
  aliases: InputMaybe<SortOrder>;
  /** Sort on "blocks.banner.call-to-action.action.label" */
  blocks_banner_callToAction_action_label: InputMaybe<SortOrder>;
  /** Sort on "blocks.banner.call-to-action.action.url" */
  blocks_banner_callToAction_action_url: InputMaybe<SortOrder>;
  /** Sort on "blocks.banner.title" */
  blocks_banner_title: InputMaybe<SortOrder>;
  /** Sort on "blocks.feature-highlights.usp.headline" */
  blocks_featureHighlights_usp_headline: InputMaybe<SortOrder>;
  /** Sort on "blocks.picture-grid.title" */
  blocks_pictureGrid_title: InputMaybe<SortOrder>;
  /** Sort on "blocks.product-slider.title" */
  blocks_productSlider_title: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.title" */
  blocks_storySlider_title: InputMaybe<SortOrder>;
  /** Sort on "dimensions.depth.number" */
  dimensions_depth_number: InputMaybe<SortOrder>;
  /** Sort on "dimensions.height.number" */
  dimensions_height_number: InputMaybe<SortOrder>;
  /** Sort on "dimensions.weight.number" */
  dimensions_weight_number: InputMaybe<SortOrder>;
  /** Sort on "dimensions.width.number" */
  dimensions_width_number: InputMaybe<SortOrder>;
  /** Sort on "downloads.files.key" */
  downloads_files_key: InputMaybe<SortOrder>;
  /** Sort on "downloads.files.title" */
  downloads_files_title: InputMaybe<SortOrder>;
  /** Sort on "downloads.title" */
  downloads_title: InputMaybe<SortOrder>;
  /** Sort on "history" */
  history: InputMaybe<SortOrder>;
  /** Sort on "id" */
  id: InputMaybe<SortOrder>;
  /** Sort on "itemId" */
  itemId: InputMaybe<SortOrder>;
  /** Sort on "label" */
  label: InputMaybe<SortOrder>;
  /** Sort on "language" */
  language: InputMaybe<SortOrder>;
  /** Sort on "link.url" */
  link_url: InputMaybe<SortOrder>;
  /** Sort on "meta.title" */
  meta_title: InputMaybe<SortOrder>;
  /** Sort on "name" */
  name: InputMaybe<SortOrder>;
  /** Sort on "parentId" */
  parentId: InputMaybe<SortOrder>;
  /** Sort on "path" */
  path: InputMaybe<SortOrder>;
  /** Sort on "publicationState" */
  publicationState: InputMaybe<SortOrder>;
  /** Sort on the Score based on the query */
  score: InputMaybe<SortOrder>;
  /** Sort on "shape" */
  shape: InputMaybe<SortOrder>;
  /** Sort on "shortcuts.path" */
  shortcuts_path: InputMaybe<SortOrder>;
  /** Sort on "story.title" */
  story_title: InputMaybe<SortOrder>;
  /** Sort on "title" */
  title: InputMaybe<SortOrder>;
  /** Sort on "topics" */
  topics: InputMaybe<SortOrder>;
  /** Sort on "type" */
  type: InputMaybe<SortOrder>;
  /** Sort on "variants.attributes.key" */
  variants_attributes_key: InputMaybe<SortOrder>;
  /** Sort on "variants.attributes.value" */
  variants_attributes_value: InputMaybe<SortOrder>;
  /** Sort on "variants.dimensions.depth.number" */
  variants_dimensions_depth_number: InputMaybe<SortOrder>;
  /** Sort on "variants.dimensions.height.number" */
  variants_dimensions_height_number: InputMaybe<SortOrder>;
  /** Sort on "variants.dimensions.weight.number" */
  variants_dimensions_weight_number: InputMaybe<SortOrder>;
  /** Sort on "variants.dimensions.width.number" */
  variants_dimensions_width_number: InputMaybe<SortOrder>;
  /** Sort on "variants.name" */
  variants_name: InputMaybe<SortOrder>;
  /** Sort on "variants.sku" */
  variants_sku: InputMaybe<SortOrder>;
};

/** The stock locations identifiers available for the tenant */
export enum TenantStockLocationIdentifier {
  Default = 'default'
}

export type VatType = {
  __typename?: 'VatType';
  name: Maybe<Scalars['String']['output']>;
  percent: Maybe<Scalars['Float']['output']>;
};

export type Video = {
  __typename?: 'Video';
  id: Maybe<Scalars['String']['output']>;
  playlists: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  thumbnails: Maybe<Array<Maybe<Image>>>;
  title: Maybe<Scalars['String']['output']>;
};

/** Category (folder) */
export type Category = Document & Folder & {
  __typename?: 'category';
  /** The Aliases */
  aliases: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  blocks: Maybe<Array<Maybe<ComponentChoiceComponentForCategoryBlocks>>>;
  /** The Breadcrumbs */
  breadcrumbs: Maybe<Array<Maybe<Array<Maybe<Breadcrumb>>>>>;
  /** Query the children of a folder. Same as a Search but with an implicit filter on the parent path. */
  children: Maybe<SearchResults>;
  description: Maybe<Scalars['RichText']['output']>;
  /** The History of Paths */
  history: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The version id that includes the language and the publication state */
  id: Maybe<Scalars['ID']['output']>;
  image: Maybe<Array<Maybe<Image>>>;
  /** The item id */
  itemId: Maybe<Scalars['ID']['output']>;
  /** The Language */
  language: Maybe<Scalars['String']['output']>;
  meta: Maybe<MetaPiece>;
  /** The name */
  name: Maybe<Scalars['String']['output']>;
  /** To be used with searchAfter and searchBefore */
  paginationToken: Maybe<Scalars['String']['output']>;
  /** The parent document */
  parent: Maybe<SearchResults>;
  /** The parent id */
  parentId: Maybe<Scalars['ID']['output']>;
  /** The path */
  path: Maybe<Scalars['String']['output']>;
  /** The method to resolve the path */
  pathResolutionMethod: Maybe<PathResolutionMethod>;
  /** The publication state */
  publicationState: Maybe<Scalars['String']['output']>;
  /** The score */
  score: Maybe<Scalars['Float']['output']>;
  /** The shape identifier */
  shape: Maybe<Scalars['String']['output']>;
  /** The Shortcuts */
  shortcuts: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title: Maybe<Scalars['String']['output']>;
  /** The different topics assigned */
  topics: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The type */
  type: Maybe<Scalars['String']['output']>;
};


/** Category (folder) */
export type CategoryBreadcrumbsArgs = {
  withShortcuts?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Category (folder) */
export type CategoryChildrenArgs = {
  facets: InputMaybe<TenantFacet>;
  filters: InputMaybe<TenantFilter>;
  language?: InputMaybe<Array<InputMaybe<TenantLanguage>>>;
  options: InputMaybe<SearchOptions>;
  pagination?: InputMaybe<Pagination>;
  path: InputMaybe<Scalars['String']['input']>;
  pathResolutionMethod: InputMaybe<Array<InputMaybe<PathResolutionMethod>>>;
  publicationState?: InputMaybe<Array<InputMaybe<PublicationState>>>;
  term: InputMaybe<Scalars['String']['input']>;
};


/** Category (folder) */
export type CategoryDescriptionArgs = {
  format?: RichTextFormat;
};

/** Landing page (document) */
export type LandingPage = Document & {
  __typename?: 'landingPage';
  /** The Aliases */
  aliases: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  blocks: Maybe<Array<Maybe<ComponentChoiceComponentForLandingPageBlocks>>>;
  /** The Breadcrumbs */
  breadcrumbs: Maybe<Array<Maybe<Array<Maybe<Breadcrumb>>>>>;
  /** The History of Paths */
  history: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The version id that includes the language and the publication state */
  id: Maybe<Scalars['ID']['output']>;
  /** The item id */
  itemId: Maybe<Scalars['ID']['output']>;
  /** The Language */
  language: Maybe<Scalars['String']['output']>;
  meta: Maybe<MetaPiece>;
  /** The name */
  name: Maybe<Scalars['String']['output']>;
  /** To be used with searchAfter and searchBefore */
  paginationToken: Maybe<Scalars['String']['output']>;
  /** The parent document */
  parent: Maybe<SearchResults>;
  /** The parent id */
  parentId: Maybe<Scalars['ID']['output']>;
  /** The path */
  path: Maybe<Scalars['String']['output']>;
  /** The method to resolve the path */
  pathResolutionMethod: Maybe<PathResolutionMethod>;
  /** The publication state */
  publicationState: Maybe<Scalars['String']['output']>;
  /** The score */
  score: Maybe<Scalars['Float']['output']>;
  /** The shape identifier */
  shape: Maybe<Scalars['String']['output']>;
  /** The Shortcuts */
  shortcuts: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The different topics assigned */
  topics: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The type */
  type: Maybe<Scalars['String']['output']>;
};


/** Landing page (document) */
export type LandingPageBreadcrumbsArgs = {
  withShortcuts?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Menu item (folder) */
export type MenuItem = Document & Folder & {
  __typename?: 'menuItem';
  /** The Aliases */
  aliases: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The Breadcrumbs */
  breadcrumbs: Maybe<Array<Maybe<Array<Maybe<Breadcrumb>>>>>;
  /** Query the children of a folder. Same as a Search but with an implicit filter on the parent path. */
  children: Maybe<SearchResults>;
  description: Maybe<Scalars['RichText']['output']>;
  /** The History of Paths */
  history: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  icon: Maybe<Array<Maybe<Image>>>;
  /** The version id that includes the language and the publication state */
  id: Maybe<Scalars['ID']['output']>;
  /** The item id */
  itemId: Maybe<Scalars['ID']['output']>;
  label: Maybe<Scalars['String']['output']>;
  /** The Language */
  language: Maybe<Scalars['String']['output']>;
  link: Maybe<ComponentChoiceComponentForMenuItemLink>;
  /** The name */
  name: Maybe<Scalars['String']['output']>;
  /** To be used with searchAfter and searchBefore */
  paginationToken: Maybe<Scalars['String']['output']>;
  /** The parent document */
  parent: Maybe<SearchResults>;
  /** The parent id */
  parentId: Maybe<Scalars['ID']['output']>;
  /** The path */
  path: Maybe<Scalars['String']['output']>;
  /** The method to resolve the path */
  pathResolutionMethod: Maybe<PathResolutionMethod>;
  /** The publication state */
  publicationState: Maybe<Scalars['String']['output']>;
  /** The score */
  score: Maybe<Scalars['Float']['output']>;
  /** The shape identifier */
  shape: Maybe<Scalars['String']['output']>;
  /** The Shortcuts */
  shortcuts: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The different topics assigned */
  topics: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The type */
  type: Maybe<Scalars['String']['output']>;
};


/** Menu item (folder) */
export type MenuItemBreadcrumbsArgs = {
  withShortcuts?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Menu item (folder) */
export type MenuItemChildrenArgs = {
  facets: InputMaybe<TenantFacet>;
  filters: InputMaybe<TenantFilter>;
  language?: InputMaybe<Array<InputMaybe<TenantLanguage>>>;
  options: InputMaybe<SearchOptions>;
  pagination?: InputMaybe<Pagination>;
  path: InputMaybe<Scalars['String']['input']>;
  pathResolutionMethod: InputMaybe<Array<InputMaybe<PathResolutionMethod>>>;
  publicationState?: InputMaybe<Array<InputMaybe<PublicationState>>>;
  term: InputMaybe<Scalars['String']['input']>;
};


/** Menu item (folder) */
export type MenuItemDescriptionArgs = {
  format?: RichTextFormat;
};

/** Product (product) */
export type Product = Document & Product & {
  __typename?: 'product';
  /** The Aliases */
  aliases: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The Breadcrumbs */
  breadcrumbs: Maybe<Array<Maybe<Array<Maybe<Breadcrumb>>>>>;
  /** The default variant for Product */
  defaultVariant: Maybe<ProductVariantForProduct>;
  description: Maybe<Scalars['RichText']['output']>;
  dimensions: Maybe<DimensionsPiece>;
  downloads: Maybe<ContentChunksComponentForProductDownloads>;
  /** The History of Paths */
  history: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The version id that includes the language and the publication state */
  id: Maybe<Scalars['ID']['output']>;
  /** The item id */
  itemId: Maybe<Scalars['ID']['output']>;
  /** The Language */
  language: Maybe<Scalars['String']['output']>;
  meta: Maybe<MetaPiece>;
  /** The name */
  name: Maybe<Scalars['String']['output']>;
  /** To be used with searchAfter and searchBefore */
  paginationToken: Maybe<Scalars['String']['output']>;
  /** The parent document */
  parent: Maybe<SearchResults>;
  /** The parent id */
  parentId: Maybe<Scalars['ID']['output']>;
  /** The path */
  path: Maybe<Scalars['String']['output']>;
  /** The method to resolve the path */
  pathResolutionMethod: Maybe<PathResolutionMethod>;
  /** The publication state */
  publicationState: Maybe<Scalars['String']['output']>;
  relatedProducts: Maybe<ItemRelations>;
  /** The score */
  score: Maybe<Scalars['Float']['output']>;
  /** The shape identifier */
  shape: Maybe<Scalars['String']['output']>;
  /** The Shortcuts */
  shortcuts: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  story: Maybe<Array<Maybe<Paragraph>>>;
  title: Maybe<Scalars['String']['output']>;
  /** The different topics assigned */
  topics: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The type */
  type: Maybe<Scalars['String']['output']>;
  /** The list of the variants for Product */
  variants: Maybe<Array<Maybe<ProductVariantForProduct>>>;
  /** The VAT type */
  vatType: Maybe<VatType>;
};


/** Product (product) */
export type ProductBreadcrumbsArgs = {
  withShortcuts?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Product (product) */
export type ProductDescriptionArgs = {
  format?: RichTextFormat;
};


/** Product (product) */
export type ProductRelatedProductsArgs = {
  resolve?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Story (document) */
export type Story = Document & {
  __typename?: 'story';
  /** The Aliases */
  aliases: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The Breadcrumbs */
  breadcrumbs: Maybe<Array<Maybe<Array<Maybe<Breadcrumb>>>>>;
  featured: Maybe<ItemRelations>;
  /** The History of Paths */
  history: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The version id that includes the language and the publication state */
  id: Maybe<Scalars['ID']['output']>;
  intro: Maybe<Scalars['RichText']['output']>;
  /** The item id */
  itemId: Maybe<Scalars['ID']['output']>;
  /** The Language */
  language: Maybe<Scalars['String']['output']>;
  media: Maybe<ComponentChoiceComponentForStoryMedia>;
  meta: Maybe<MetaPiece>;
  /** The name */
  name: Maybe<Scalars['String']['output']>;
  /** To be used with searchAfter and searchBefore */
  paginationToken: Maybe<Scalars['String']['output']>;
  /** The parent document */
  parent: Maybe<SearchResults>;
  /** The parent id */
  parentId: Maybe<Scalars['ID']['output']>;
  /** The path */
  path: Maybe<Scalars['String']['output']>;
  /** The method to resolve the path */
  pathResolutionMethod: Maybe<PathResolutionMethod>;
  /** The publication state */
  publicationState: Maybe<Scalars['String']['output']>;
  /** The score */
  score: Maybe<Scalars['Float']['output']>;
  /** The shape identifier */
  shape: Maybe<Scalars['String']['output']>;
  /** The Shortcuts */
  shortcuts: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  story: Maybe<Array<Maybe<Paragraph>>>;
  title: Maybe<Scalars['String']['output']>;
  /** The different topics assigned */
  topics: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The type */
  type: Maybe<Scalars['String']['output']>;
  upNext: Maybe<ItemRelations>;
};


/** Story (document) */
export type StoryBreadcrumbsArgs = {
  withShortcuts?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Story (document) */
export type StoryFeaturedArgs = {
  resolve?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Story (document) */
export type StoryIntroArgs = {
  format?: RichTextFormat;
};


/** Story (document) */
export type StoryUpNextArgs = {
  resolve?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FetchLayoutQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchLayoutQuery = { __typename?: 'Query', browse: { __typename?: 'BrowseQuery', header: { __typename?: 'MenuItemQuery', hits: Array<{ __typename?: 'menuItem', children: { __typename?: 'SearchResults', hits: Array<{ __typename?: 'category', name: string | null } | { __typename?: 'landingPage', name: string | null } | { __typename?: 'menuItem', label: string | null, name: string | null, link: { __typename?: 'ComponentChoiceComponentForMenuItemLink', url: string | null, item: { __typename?: 'ItemRelations', items: Array<{ __typename?: 'ItemRelation', path: string | null } | null> | null } | null } | null } | { __typename?: 'product', name: string | null } | { __typename?: 'story', name: string | null } | null> | null } | null } | null> | null } | null } | null };

export type FetchProductQueryVariables = Exact<{
  path: Scalars['String']['input'];
}>;


export type FetchProductQuery = { __typename?: 'Query', browse: { __typename?: 'BrowseQuery', product: { __typename?: 'ProductQuery', hits: Array<{ __typename?: 'product', name: string | null, path: string | null, description: any | null, breadcrumbs: Array<Array<{ __typename?: 'Breadcrumb', name: string | null, path: string | null } | null> | null> | null, story: Array<{ __typename?: 'Paragraph', title: string | null, body: any | null, images: Array<{ __typename?: 'Image', key: string | null, url: string | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null } | null> | null, relatedProducts: { __typename?: 'ItemRelations', items: Array<{ __typename?: 'ItemRelation', resolvedItem: { __typename?: 'category' } | { __typename?: 'landingPage' } | { __typename?: 'menuItem' } | { __typename?: 'product', path: string | null, name: string | null, variants: Array<{ __typename?: 'ProductVariantForProduct', firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null } | null> | null, defaultVariant: { __typename?: 'ProductVariantForProduct', defaultPrice: any | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null } | null } | { __typename?: 'story' } | null } | null> | null } | null, variants: Array<{ __typename?: 'ProductVariantForProduct', name: string | null, sku: string | null, priceVariants: any | null, defaultPrice: any | null, attributes: any | null, dimensions: { __typename?: 'DimensionsPiece', depth: number | null, depthUnit: string | null, height: number | null, heightUnit: string | null, width: number | null, widthUnit: string | null, weight: number | null, weightUnit: string | null } | null, images: Array<{ __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, key: string | null, width: number | null, height: number | null } | null> | null } | null> | null } | null> | null } | null> | null } | null } | null };

export type FetchCategoryQueryVariables = Exact<{
  path: Scalars['String']['input'];
}>;


export type FetchCategoryQuery = { __typename?: 'Query', browse: { __typename?: 'BrowseQuery', category: { __typename?: 'CategoryQuery', hits: Array<{ __typename?: 'category', name: string | null, breadcrumbs: Array<Array<{ __typename?: 'Breadcrumb', name: string | null, path: string | null, id: string | null } | null> | null> | null, children: { __typename?: 'SearchResults', hits: Array<{ __typename: 'category' } | { __typename: 'landingPage' } | { __typename: 'menuItem' } | { __typename: 'product', name: string | null, path: string | null, description: any | null, defaultVariant: { __typename?: 'ProductVariantForProduct', sku: string | null, defaultPrice: any | null, firstImage: { __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null } | null, variants: Array<{ __typename?: 'ProductVariantForProduct', sku: string | null, isDefault: boolean | null, name: string | null, firstImage: { __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null } | null> | null } | { __typename: 'story' } | null> | null } | null } | null> | null } | null } | null };

export type FetchAllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchAllCategoriesQuery = { __typename?: 'Query', browse: { __typename?: 'BrowseQuery', category: { __typename?: 'CategoryQuery', hits: Array<{ __typename?: 'category', id: string | null, name: string | null, breadcrumbs: Array<Array<{ __typename?: 'Breadcrumb', id: string | null, name: string | null, path: string | null } | null> | null> | null, children: { __typename?: 'SearchResults', hits: Array<{ __typename?: 'category', id: string | null, name: string | null, path: string | null } | { __typename?: 'landingPage', id: string | null, name: string | null } | { __typename?: 'menuItem', id: string | null, name: string | null } | { __typename?: 'product', id: string | null, name: string | null } | { __typename?: 'story', id: string | null, name: string | null } | null> | null } | null } | null> | null } | null } | null };

export type FetchLandingPageQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchLandingPageQuery = { __typename?: 'Query', browse: { __typename?: 'BrowseQuery', landingPage: { __typename?: 'LandingPageQuery', hits: Array<{ __typename?: 'landingPage', name: string | null, blocks: Array<{ __typename?: 'ComponentChoiceComponentForLandingPageBlocks', storySlider: (
            { __typename?: 'StorySliderPiece' }
            & { ' $fragmentRefs'?: { 'StorySliderFragment': StorySliderFragment } }
          ) | null, banner: (
            { __typename?: 'BannerPiece' }
            & { ' $fragmentRefs'?: { 'BannerFragment': BannerFragment } }
          ) | null, featureHighlights: (
            { __typename?: 'FeatureHighlightsPiece' }
            & { ' $fragmentRefs'?: { 'FeatureHighlightsFragment': FeatureHighlightsFragment } }
          ) | null, productSlider: (
            { __typename?: 'ProductSliderPiece' }
            & { ' $fragmentRefs'?: { 'ProductSliderFragment': ProductSliderFragment } }
          ) | null, pictureGrid: (
            { __typename?: 'PictureGridPiece' }
            & { ' $fragmentRefs'?: { 'PictureGridFragment': PictureGridFragment } }
          ) | null } | null> | null } | null> | null } | null } | null };

export type BannerFragment = { __typename?: 'BannerPiece', title: string | null, description: any | null, layout: (
    { __typename?: 'LayoutPiece' }
    & { ' $fragmentRefs'?: { 'LayoutFragment': LayoutFragment } }
  ) | null, banner: Array<(
    { __typename?: 'Image' }
    & { ' $fragmentRefs'?: { 'ImageFragment': ImageFragment } }
  ) | null> | null, callToAction: { __typename?: 'CallToActionPiece', action: Array<{ __typename?: 'ContentChunksComponentForCallToActionPieceAction', label: string | null, url: string | null } | null> | null } | null } & { ' $fragmentName'?: 'BannerFragment' };

export type FeatureHighlightsFragment = { __typename?: 'FeatureHighlightsPiece', layout: (
    { __typename?: 'LayoutPiece' }
    & { ' $fragmentRefs'?: { 'LayoutFragment': LayoutFragment } }
  ) | null, usp: Array<{ __typename?: 'ContentChunksComponentForFeatureHighlightsPieceUsp', headline: string | null, description: any | null, icon: Array<(
      { __typename?: 'Image' }
      & { ' $fragmentRefs'?: { 'ImageFragment': ImageFragment } }
    ) | null> | null } | null> | null } & { ' $fragmentName'?: 'FeatureHighlightsFragment' };

export type ProductSliderFragment = { __typename?: 'ProductSliderPiece', title: string | null, description: any | null, products: { __typename?: 'ItemRelations', skus: Array<string | null> | null, items: Array<{ __typename?: 'ItemRelation', itemId: string | null } | null> | null } | null, layout: (
    { __typename?: 'LayoutPiece' }
    & { ' $fragmentRefs'?: { 'LayoutFragment': LayoutFragment } }
  ) | null } & { ' $fragmentName'?: 'ProductSliderFragment' };

export type StorySliderFragment = { __typename?: 'StorySliderPiece', title: string | null, description: any | null, stories: { __typename?: 'ItemRelations', items: Array<{ __typename?: 'ItemRelation', resolvedItem: { __typename?: 'category' } | { __typename?: 'landingPage' } | { __typename?: 'menuItem' } | { __typename?: 'product' } | { __typename?: 'story', path: string | null, title: string | null, intro: any | null, media: { __typename?: 'ComponentChoiceComponentForStoryMedia', image: Array<(
            { __typename?: 'Image' }
            & { ' $fragmentRefs'?: { 'ImageFragment': ImageFragment } }
          ) | null> | null, shoppableImage: Array<(
            { __typename?: 'Image' }
            & { ' $fragmentRefs'?: { 'ImageFragment': ImageFragment } }
          ) | null> | null, video: Array<{ __typename?: 'Video', title: string | null, playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, height: number | null, url: string | null } | null> | null } | null> | null } | null> | null } | null } | null } | null> | null } | null, layout: (
    { __typename?: 'LayoutPiece' }
    & { ' $fragmentRefs'?: { 'LayoutFragment': LayoutFragment } }
  ) | null } & { ' $fragmentName'?: 'StorySliderFragment' };

export type PictureGridFragment = { __typename?: 'PictureGridPiece', title: string | null, description: any | null, images: Array<(
    { __typename?: 'Image' }
    & { ' $fragmentRefs'?: { 'ImageFragment': ImageFragment } }
  ) | null> | null, layout: (
    { __typename?: 'LayoutPiece' }
    & { ' $fragmentRefs'?: { 'LayoutFragment': LayoutFragment } }
  ) | null } & { ' $fragmentName'?: 'PictureGridFragment' };

export type ImageFragment = { __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } & { ' $fragmentName'?: 'ImageFragment' };

export type LayoutFragment = { __typename?: 'LayoutPiece', displayWidth: any | null, theme: any | null, backgroundMedia: { __typename?: 'ComponentChoiceComponentForLayoutPieceBackgroundMedia', image: Array<(
      { __typename?: 'Image' }
      & { ' $fragmentRefs'?: { 'ImageFragment': ImageFragment } }
    ) | null> | null, video: Array<{ __typename?: 'Video', id: string | null, playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, caption: any | null, meta: any | null, focalPoint: any | null, createAt: any | null } | null> | null } | null> | null } | null } & { ' $fragmentName'?: 'LayoutFragment' };

export type FetchStoryQueryVariables = Exact<{
  path: Scalars['String']['input'];
}>;


export type FetchStoryQuery = { __typename?: 'Query', browse: { __typename?: 'BrowseQuery', story: { __typename?: 'StoryQuery', hits: Array<(
        { __typename?: 'story', breadcrumbs: Array<Array<{ __typename?: 'Breadcrumb', path: string | null, name: string | null, id: string | null } | null> | null> | null, featured: { __typename?: 'ItemRelations', skus: Array<string | null> | null, items: Array<{ __typename?: 'ItemRelation', path: string | null, resolvedItem: { __typename?: 'category' } | { __typename?: 'landingPage' } | { __typename?: 'menuItem' } | { __typename?: 'product', name: string | null, description: any | null, defaultVariant: { __typename?: 'ProductVariantForProduct', firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null } | null } | { __typename?: 'story' } | null } | null> | null } | null, upNext: { __typename?: 'ItemRelations', items: Array<{ __typename?: 'ItemRelation', path: string | null, resolvedItem: { __typename?: 'category' } | { __typename?: 'landingPage' } | { __typename?: 'menuItem' } | { __typename?: 'product' } | (
              { __typename?: 'story' }
              & { ' $fragmentRefs'?: { 'StoryContentFragment': StoryContentFragment } }
            ) | null } | null> | null } | null, story: Array<{ __typename?: 'Paragraph', title: string | null, body: any | null, images: Array<{ __typename?: 'Image', url: string | null, key: string | null, altText: string | null, caption: any | null, focalPoint: any | null } | null> | null } | null> | null }
        & { ' $fragmentRefs'?: { 'StoryContentFragment': StoryContentFragment } }
      ) | null> | null } | null } | null };

export type StoryContentFragment = { __typename?: 'story', title: string | null, media: { __typename?: 'ComponentChoiceComponentForStoryMedia', image: Array<{ __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, shoppableImage: Array<{ __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, video: Array<{ __typename?: 'Video', playlists: Array<string | null> | null, title: string | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, key: string | null, altText: string | null, caption: any | null, focalPoint: any | null } | null> | null } | null> | null } | null } & { ' $fragmentName'?: 'StoryContentFragment' };

export type FetchAllStoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchAllStoriesQuery = { __typename?: 'Query', browse: { __typename?: 'BrowseQuery', category: { __typename?: 'CategoryQuery', hits: Array<{ __typename?: 'category', title: string | null, breadcrumbs: Array<Array<{ __typename?: 'Breadcrumb', path: string | null, name: string | null, id: string | null } | null> | null> | null, children: { __typename?: 'SearchResults', hits: Array<{ __typename?: 'category', id: string | null, path: string | null } | { __typename?: 'landingPage', id: string | null, path: string | null } | { __typename?: 'menuItem', id: string | null, path: string | null } | { __typename?: 'product', id: string | null, path: string | null } | { __typename?: 'story', title: string | null, intro: any | null, id: string | null, path: string | null, media: { __typename?: 'ComponentChoiceComponentForStoryMedia', image: Array<{ __typename?: 'Image', url: string | null, altText: string | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, shoppableImage: Array<{ __typename?: 'Image', url: string | null, altText: string | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, video: Array<{ __typename?: 'Video', playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null } | null> | null } | null } | null> | null } | null } | null> | null } | null } | null };

export const ImageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]} as unknown as DocumentNode<ImageFragment, unknown>;
export const LayoutFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"layout"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayoutPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayWidth"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"playlists"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"meta"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"createAt"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]} as unknown as DocumentNode<LayoutFragment, unknown>;
export const BannerFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"banner"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BannerPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"layout"}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"callToAction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"action"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"layout"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayoutPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayWidth"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"playlists"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"meta"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"createAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<BannerFragment, unknown>;
export const FeatureHighlightsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"featureHighlights"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FeatureHighlightsPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"layout"}}]}},{"kind":"Field","name":{"kind":"Name","value":"usp"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"headline"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"layout"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayoutPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayWidth"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"playlists"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"meta"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"createAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FeatureHighlightsFragment, unknown>;
export const ProductSliderFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"productSlider"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductSliderPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"resolve"},"value":{"kind":"BooleanValue","value":true}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"skus"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"layout"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"layout"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayoutPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayWidth"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"playlists"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"meta"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"createAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProductSliderFragment, unknown>;
export const StorySliderFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"storySlider"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StorySliderPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"stories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resolvedItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"story"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"intro"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shoppableImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thumbnails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"playlists"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"layout"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"layout"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayoutPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayWidth"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"playlists"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"meta"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"createAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<StorySliderFragment, unknown>;
export const PictureGridFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"pictureGrid"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PictureGridPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"layout"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"layout"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayoutPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayWidth"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"playlists"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"meta"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"createAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<PictureGridFragment, unknown>;
export const StoryContentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"storyContent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"story"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"shoppableImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"playlists"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}}]}}]}}]}}]}}]} as unknown as DocumentNode<StoryContentFragment, unknown>;
export const FetchLayoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchLayout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"browse"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"header"},"name":{"kind":"Name","value":"menuItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"StringValue","value":"/menu/top","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"menuItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<FetchLayoutQuery, FetchLayoutQueryVariables>;
export const FetchProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"browse"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"format"},"value":{"kind":"EnumValue","value":"json"}}]},{"kind":"Field","name":{"kind":"Name","value":"breadcrumbs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"withShortcuts"},"value":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"story"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"format"},"value":{"kind":"EnumValue","value":"json"}}]},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"relatedProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resolvedItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}},{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"defaultVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"defaultPrice"}},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}},{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"500"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"priceVariants"}},{"kind":"Field","name":{"kind":"Name","value":"defaultPrice"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"}},{"kind":"Field","name":{"kind":"Name","value":"dimensions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"depthUnit"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"heightUnit"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"widthUnit"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"weightUnit"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"800"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<FetchProductQuery, FetchProductQueryVariables>;
export const FetchCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"browse"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"breadcrumbs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"format"},"value":{"kind":"EnumValue","value":"json"}}]},{"kind":"Field","name":{"kind":"Name","value":"defaultVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"defaultPrice"}},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"500"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"100"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<FetchCategoryQuery, FetchCategoryQueryVariables>;
export const FetchAllCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchAllCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"browse"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"StringValue","value":"/products","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"breadcrumbs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<FetchAllCategoriesQuery, FetchAllCategoriesQueryVariables>;
export const FetchLandingPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchLandingPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"browse"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"landingPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"StringValue","value":"/index","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"storySlider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"storySlider"}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"banner"}}]}},{"kind":"Field","name":{"kind":"Name","value":"featureHighlights"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"featureHighlights"}}]}},{"kind":"Field","name":{"kind":"Name","value":"productSlider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"productSlider"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pictureGrid"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"pictureGrid"}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"layout"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayoutPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayWidth"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"playlists"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"meta"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"createAt"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"storySlider"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StorySliderPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"stories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resolvedItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"story"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"intro"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shoppableImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thumbnails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"playlists"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"layout"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"banner"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BannerPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"layout"}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"callToAction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"action"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"featureHighlights"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FeatureHighlightsPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"layout"}}]}},{"kind":"Field","name":{"kind":"Name","value":"usp"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"headline"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"productSlider"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductSliderPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"resolve"},"value":{"kind":"BooleanValue","value":true}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"skus"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"layout"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"pictureGrid"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PictureGridPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"layout"}}]}}]}}]} as unknown as DocumentNode<FetchLandingPageQuery, FetchLandingPageQueryVariables>;
export const FetchStoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchStory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"browse"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"story"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"storyContent"}},{"kind":"Field","name":{"kind":"Name","value":"breadcrumbs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"featured"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"skus"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"resolvedItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"defaultVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"upNext"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"resolvedItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"storyContent"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"story"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"storyContent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"story"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"shoppableImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"playlists"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FetchStoryQuery, FetchStoryQueryVariables>;
export const FetchAllStoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchAllStories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"browse"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"StringValue","value":"/stories","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"breadcrumbs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"story"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"intro"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"shoppableImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thumbnails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"playlists"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<FetchAllStoriesQuery, FetchAllStoriesQueryVariables>;