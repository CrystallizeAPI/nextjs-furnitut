/* eslint-disable */
//@ts-nocheck
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

export type BrandFacet = {
  component_name: InputMaybe<StringFacet>;
  language: InputMaybe<StringFacet>;
  name: InputMaybe<StringFacet>;
  parentPaths: InputMaybe<StringFacet>;
  publicationState: InputMaybe<StringFacet>;
  topics: InputMaybe<StringFacet>;
  type: InputMaybe<StringFacet>;
};

export type BrandFilter = {
  /** Logical AND filter to apply to the query */
  AND: InputMaybe<Array<InputMaybe<BrandFilter>>>;
  /** Logical OR filter to apply to the query */
  OR: InputMaybe<Array<InputMaybe<BrandFilter>>>;
  /** Filter on "aliases" */
  aliases: InputMaybe<StringFilter>;
  /** Filter on "component_name" */
  component_name: InputMaybe<StringFilter>;
  /** Filter on "createdAt" */
  createdAt: InputMaybe<DateFilter>;
  /** Filter on "depth" */
  depth: InputMaybe<NumberFilter>;
  /** Filter on "description.plainText" */
  description_plainText: InputMaybe<StringFilter>;
  /** Filter on "history" */
  history: InputMaybe<StringFilter>;
  /** Filter on "id" */
  id: InputMaybe<StringFilter>;
  /** Filter on "itemId" */
  itemId: InputMaybe<StringFilter>;
  /** Filter on "language" */
  language: InputMaybe<StringFilter>;
  /** Filter on "logo.caption.plainText" */
  logo_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "name" */
  name: InputMaybe<StringFilter>;
  /** Filter on "parentId" */
  parentId: InputMaybe<StringFilter>;
  /** Filter on "parentPaths" */
  parentPaths: InputMaybe<StringFilter>;
  /** Filter on "path" */
  path: InputMaybe<StringFilter>;
  /** Filter on "position" */
  position: InputMaybe<NumberFilter>;
  /** Filter on "publicationState" */
  publicationState: InputMaybe<StringFilter>;
  /** Filter on "publishedAt" */
  publishedAt: InputMaybe<DateFilter>;
  /** Filter on "shortcuts.parentId" */
  shortcuts_parentId: InputMaybe<StringFilter>;
  /** Filter on "shortcuts.path" */
  shortcuts_path: InputMaybe<StringFilter>;
  /** Filter on "shortcuts.position" */
  shortcuts_position: InputMaybe<NumberFilter>;
  /** Filter on "topics" */
  topics: InputMaybe<StringFilter>;
  /** Filter on "updatedAt" */
  updatedAt: InputMaybe<DateFilter>;
};

export type BrandQuery = {
  __typename?: 'BrandQuery';
  hits: Maybe<Array<Maybe<Brand>>>;
  summary: Maybe<SearchSummary>;
};

export type BrandSort = {
  /** Sort on "aliases" */
  aliases: InputMaybe<SortOrder>;
  /** Sort on "component_name" */
  component_name: InputMaybe<SortOrder>;
  /** Sort on "createdAt" */
  createdAt: InputMaybe<SortOrder>;
  /** Sort on "depth" */
  depth: InputMaybe<SortOrder>;
  /** Sort on "history" */
  history: InputMaybe<SortOrder>;
  /** Sort on "id" */
  id: InputMaybe<SortOrder>;
  /** Sort on "itemId" */
  itemId: InputMaybe<SortOrder>;
  /** Sort on "language" */
  language: InputMaybe<SortOrder>;
  /** Sort on "name" */
  name: InputMaybe<SortOrder>;
  /** Sort on "parentId" */
  parentId: InputMaybe<SortOrder>;
  /** Sort on "parentPaths" */
  parentPaths: InputMaybe<SortOrder>;
  /** Sort on "path" */
  path: InputMaybe<SortOrder>;
  /** Sort on "position" */
  position: InputMaybe<SortOrder>;
  /** Sort on "publicationState" */
  publicationState: InputMaybe<SortOrder>;
  /** Sort on "publishedAt" */
  publishedAt: InputMaybe<SortOrder>;
  /** Sort on the Score based on the query */
  score: InputMaybe<SortOrder>;
  /** Sort on "shortcuts.parentId" */
  shortcuts_parentId: InputMaybe<SortOrder>;
  /** Sort on "shortcuts.path" */
  shortcuts_path: InputMaybe<SortOrder>;
  /** Sort on "shortcuts.position" */
  shortcuts_position: InputMaybe<SortOrder>;
  /** Sort on "topics" */
  topics: InputMaybe<SortOrder>;
  /** Sort on "type" */
  type: InputMaybe<SortOrder>;
  /** Sort on "updatedAt" */
  updatedAt: InputMaybe<SortOrder>;
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
  /** Implicit filter on Shape: Brand (document) */
  brand: Maybe<BrandQuery>;
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
export type BrowseQueryBrandArgs = {
  facets: InputMaybe<BrandFacet>;
  filters: InputMaybe<BrandFilter>;
  language?: InputMaybe<Array<InputMaybe<TenantLanguage>>>;
  options: InputMaybe<SearchOptions>;
  pagination?: InputMaybe<Pagination>;
  path: InputMaybe<Scalars['String']['input']>;
  pathResolutionMethod: InputMaybe<Array<InputMaybe<PathResolutionMethod>>>;
  publicationState?: InputMaybe<Array<InputMaybe<PublicationState>>>;
  sorting: InputMaybe<BrandSort>;
  term: InputMaybe<Scalars['String']['input']>;
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
  blocks_banner_layout_displayWidth_contain: InputMaybe<StringFacet>;
  blocks_banner_layout_displayWidth_stretch: InputMaybe<StringFacet>;
  blocks_banner_layout_theme_dark: InputMaybe<StringFacet>;
  blocks_banner_layout_theme_light: InputMaybe<StringFacet>;
  blocks_banner_layout_theme_muted: InputMaybe<StringFacet>;
  blocks_banner_layout_theme_pastel: InputMaybe<StringFacet>;
  blocks_banner_layout_theme_vivid: InputMaybe<StringFacet>;
  blocks_banner_title: InputMaybe<StringFacet>;
  blocks_featureHighlights_layout_displayWidth_contain: InputMaybe<StringFacet>;
  blocks_featureHighlights_layout_displayWidth_stretch: InputMaybe<StringFacet>;
  blocks_featureHighlights_layout_theme_dark: InputMaybe<StringFacet>;
  blocks_featureHighlights_layout_theme_light: InputMaybe<StringFacet>;
  blocks_featureHighlights_layout_theme_muted: InputMaybe<StringFacet>;
  blocks_featureHighlights_layout_theme_pastel: InputMaybe<StringFacet>;
  blocks_featureHighlights_layout_theme_vivid: InputMaybe<StringFacet>;
  blocks_featureHighlights_usp_headline: InputMaybe<StringFacet>;
  blocks_pictureGrid_layout_displayWidth_contain: InputMaybe<StringFacet>;
  blocks_pictureGrid_layout_displayWidth_stretch: InputMaybe<StringFacet>;
  blocks_pictureGrid_layout_theme_dark: InputMaybe<StringFacet>;
  blocks_pictureGrid_layout_theme_light: InputMaybe<StringFacet>;
  blocks_pictureGrid_layout_theme_muted: InputMaybe<StringFacet>;
  blocks_pictureGrid_layout_theme_pastel: InputMaybe<StringFacet>;
  blocks_pictureGrid_layout_theme_vivid: InputMaybe<StringFacet>;
  blocks_pictureGrid_title: InputMaybe<StringFacet>;
  blocks_productSlider_layout_displayWidth_contain: InputMaybe<StringFacet>;
  blocks_productSlider_layout_displayWidth_stretch: InputMaybe<StringFacet>;
  blocks_productSlider_layout_theme_dark: InputMaybe<StringFacet>;
  blocks_productSlider_layout_theme_light: InputMaybe<StringFacet>;
  blocks_productSlider_layout_theme_muted: InputMaybe<StringFacet>;
  blocks_productSlider_layout_theme_pastel: InputMaybe<StringFacet>;
  blocks_productSlider_layout_theme_vivid: InputMaybe<StringFacet>;
  blocks_productSlider_products_skus: InputMaybe<StringFacet>;
  blocks_productSlider_title: InputMaybe<StringFacet>;
  blocks_storySlider_layout_displayWidth_contain: InputMaybe<StringFacet>;
  blocks_storySlider_layout_displayWidth_stretch: InputMaybe<StringFacet>;
  blocks_storySlider_layout_theme_dark: InputMaybe<StringFacet>;
  blocks_storySlider_layout_theme_light: InputMaybe<StringFacet>;
  blocks_storySlider_layout_theme_muted: InputMaybe<StringFacet>;
  blocks_storySlider_layout_theme_pastel: InputMaybe<StringFacet>;
  blocks_storySlider_layout_theme_vivid: InputMaybe<StringFacet>;
  blocks_storySlider_stories_items_name: InputMaybe<StringFacet>;
  blocks_storySlider_stories_items_path: InputMaybe<StringFacet>;
  blocks_storySlider_title: InputMaybe<StringFacet>;
  language: InputMaybe<StringFacet>;
  meta_title: InputMaybe<StringFacet>;
  name: InputMaybe<StringFacet>;
  parentPaths: InputMaybe<StringFacet>;
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
  /** Filter on "blocks.banner.layout.display-width.contain" */
  blocks_banner_layout_displayWidth_contain: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.layout.display-width.stretch" */
  blocks_banner_layout_displayWidth_stretch: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.layout.theme.dark" */
  blocks_banner_layout_theme_dark: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.layout.theme.light" */
  blocks_banner_layout_theme_light: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.layout.theme.muted" */
  blocks_banner_layout_theme_muted: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.layout.theme.pastel" */
  blocks_banner_layout_theme_pastel: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.layout.theme.vivid" */
  blocks_banner_layout_theme_vivid: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.title" */
  blocks_banner_title: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.layout.background-media.image.caption.plainText" */
  blocks_featureHighlights_layout_backgroundMedia_image_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.layout.background-media.video.thumbnails.caption.plainText" */
  blocks_featureHighlights_layout_backgroundMedia_video_thumbnails_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.layout.display-width.contain" */
  blocks_featureHighlights_layout_displayWidth_contain: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.layout.display-width.stretch" */
  blocks_featureHighlights_layout_displayWidth_stretch: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.layout.theme.dark" */
  blocks_featureHighlights_layout_theme_dark: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.layout.theme.light" */
  blocks_featureHighlights_layout_theme_light: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.layout.theme.muted" */
  blocks_featureHighlights_layout_theme_muted: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.layout.theme.pastel" */
  blocks_featureHighlights_layout_theme_pastel: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.layout.theme.vivid" */
  blocks_featureHighlights_layout_theme_vivid: InputMaybe<StringFilter>;
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
  /** Filter on "blocks.picture-grid.layout.display-width.contain" */
  blocks_pictureGrid_layout_displayWidth_contain: InputMaybe<StringFilter>;
  /** Filter on "blocks.picture-grid.layout.display-width.stretch" */
  blocks_pictureGrid_layout_displayWidth_stretch: InputMaybe<StringFilter>;
  /** Filter on "blocks.picture-grid.layout.theme.dark" */
  blocks_pictureGrid_layout_theme_dark: InputMaybe<StringFilter>;
  /** Filter on "blocks.picture-grid.layout.theme.light" */
  blocks_pictureGrid_layout_theme_light: InputMaybe<StringFilter>;
  /** Filter on "blocks.picture-grid.layout.theme.muted" */
  blocks_pictureGrid_layout_theme_muted: InputMaybe<StringFilter>;
  /** Filter on "blocks.picture-grid.layout.theme.pastel" */
  blocks_pictureGrid_layout_theme_pastel: InputMaybe<StringFilter>;
  /** Filter on "blocks.picture-grid.layout.theme.vivid" */
  blocks_pictureGrid_layout_theme_vivid: InputMaybe<StringFilter>;
  /** Filter on "blocks.picture-grid.title" */
  blocks_pictureGrid_title: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.description.plainText" */
  blocks_productSlider_description_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.layout.background-media.image.caption.plainText" */
  blocks_productSlider_layout_backgroundMedia_image_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.layout.background-media.video.thumbnails.caption.plainText" */
  blocks_productSlider_layout_backgroundMedia_video_thumbnails_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.layout.display-width.contain" */
  blocks_productSlider_layout_displayWidth_contain: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.layout.display-width.stretch" */
  blocks_productSlider_layout_displayWidth_stretch: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.layout.theme.dark" */
  blocks_productSlider_layout_theme_dark: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.layout.theme.light" */
  blocks_productSlider_layout_theme_light: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.layout.theme.muted" */
  blocks_productSlider_layout_theme_muted: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.layout.theme.pastel" */
  blocks_productSlider_layout_theme_pastel: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.layout.theme.vivid" */
  blocks_productSlider_layout_theme_vivid: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.products.skus" */
  blocks_productSlider_products_skus: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.title" */
  blocks_productSlider_title: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.description.plainText" */
  blocks_storySlider_description_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.layout.background-media.image.caption.plainText" */
  blocks_storySlider_layout_backgroundMedia_image_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.layout.background-media.video.thumbnails.caption.plainText" */
  blocks_storySlider_layout_backgroundMedia_video_thumbnails_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.layout.display-width.contain" */
  blocks_storySlider_layout_displayWidth_contain: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.layout.display-width.stretch" */
  blocks_storySlider_layout_displayWidth_stretch: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.layout.theme.dark" */
  blocks_storySlider_layout_theme_dark: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.layout.theme.light" */
  blocks_storySlider_layout_theme_light: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.layout.theme.muted" */
  blocks_storySlider_layout_theme_muted: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.layout.theme.pastel" */
  blocks_storySlider_layout_theme_pastel: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.layout.theme.vivid" */
  blocks_storySlider_layout_theme_vivid: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.stories.items.itemId" */
  blocks_storySlider_stories_items_itemId: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.stories.items.name" */
  blocks_storySlider_stories_items_name: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.stories.items.parentId" */
  blocks_storySlider_stories_items_parentId: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.stories.items.path" */
  blocks_storySlider_stories_items_path: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.stories.items.shape" */
  blocks_storySlider_stories_items_shape: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.stories.items.type" */
  blocks_storySlider_stories_items_type: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.title" */
  blocks_storySlider_title: InputMaybe<StringFilter>;
  /** Filter on "createdAt" */
  createdAt: InputMaybe<DateFilter>;
  /** Filter on "depth" */
  depth: InputMaybe<NumberFilter>;
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
  /** Filter on "parentPaths" */
  parentPaths: InputMaybe<StringFilter>;
  /** Filter on "path" */
  path: InputMaybe<StringFilter>;
  /** Filter on "position" */
  position: InputMaybe<NumberFilter>;
  /** Filter on "publicationState" */
  publicationState: InputMaybe<StringFilter>;
  /** Filter on "publishedAt" */
  publishedAt: InputMaybe<DateFilter>;
  /** Filter on "shortcuts.parentId" */
  shortcuts_parentId: InputMaybe<StringFilter>;
  /** Filter on "shortcuts.path" */
  shortcuts_path: InputMaybe<StringFilter>;
  /** Filter on "shortcuts.position" */
  shortcuts_position: InputMaybe<NumberFilter>;
  /** Filter on "title" */
  title: InputMaybe<StringFilter>;
  /** Filter on "topics" */
  topics: InputMaybe<StringFilter>;
  /** Filter on "updatedAt" */
  updatedAt: InputMaybe<DateFilter>;
};

export type CategoryQuery = {
  __typename?: 'CategoryQuery';
  hits: Maybe<Array<Maybe<Category>>>;
  summary: Maybe<SearchSummary>;
};

export type CategorySort = {
  /** Sort on "aliases" */
  aliases: InputMaybe<SortOrder>;
  /** Sort on "blocks.banner.call-to-action.action.label" */
  blocks_banner_callToAction_action_label: InputMaybe<SortOrder>;
  /** Sort on "blocks.banner.call-to-action.action.url" */
  blocks_banner_callToAction_action_url: InputMaybe<SortOrder>;
  /** Sort on "blocks.banner.layout.display-width.contain" */
  blocks_banner_layout_displayWidth_contain: InputMaybe<SortOrder>;
  /** Sort on "blocks.banner.layout.display-width.stretch" */
  blocks_banner_layout_displayWidth_stretch: InputMaybe<SortOrder>;
  /** Sort on "blocks.banner.layout.theme.dark" */
  blocks_banner_layout_theme_dark: InputMaybe<SortOrder>;
  /** Sort on "blocks.banner.layout.theme.light" */
  blocks_banner_layout_theme_light: InputMaybe<SortOrder>;
  /** Sort on "blocks.banner.layout.theme.muted" */
  blocks_banner_layout_theme_muted: InputMaybe<SortOrder>;
  /** Sort on "blocks.banner.layout.theme.pastel" */
  blocks_banner_layout_theme_pastel: InputMaybe<SortOrder>;
  /** Sort on "blocks.banner.layout.theme.vivid" */
  blocks_banner_layout_theme_vivid: InputMaybe<SortOrder>;
  /** Sort on "blocks.banner.title" */
  blocks_banner_title: InputMaybe<SortOrder>;
  /** Sort on "blocks.feature-highlights.layout.display-width.contain" */
  blocks_featureHighlights_layout_displayWidth_contain: InputMaybe<SortOrder>;
  /** Sort on "blocks.feature-highlights.layout.display-width.stretch" */
  blocks_featureHighlights_layout_displayWidth_stretch: InputMaybe<SortOrder>;
  /** Sort on "blocks.feature-highlights.layout.theme.dark" */
  blocks_featureHighlights_layout_theme_dark: InputMaybe<SortOrder>;
  /** Sort on "blocks.feature-highlights.layout.theme.light" */
  blocks_featureHighlights_layout_theme_light: InputMaybe<SortOrder>;
  /** Sort on "blocks.feature-highlights.layout.theme.muted" */
  blocks_featureHighlights_layout_theme_muted: InputMaybe<SortOrder>;
  /** Sort on "blocks.feature-highlights.layout.theme.pastel" */
  blocks_featureHighlights_layout_theme_pastel: InputMaybe<SortOrder>;
  /** Sort on "blocks.feature-highlights.layout.theme.vivid" */
  blocks_featureHighlights_layout_theme_vivid: InputMaybe<SortOrder>;
  /** Sort on "blocks.feature-highlights.usp.headline" */
  blocks_featureHighlights_usp_headline: InputMaybe<SortOrder>;
  /** Sort on "blocks.picture-grid.layout.display-width.contain" */
  blocks_pictureGrid_layout_displayWidth_contain: InputMaybe<SortOrder>;
  /** Sort on "blocks.picture-grid.layout.display-width.stretch" */
  blocks_pictureGrid_layout_displayWidth_stretch: InputMaybe<SortOrder>;
  /** Sort on "blocks.picture-grid.layout.theme.dark" */
  blocks_pictureGrid_layout_theme_dark: InputMaybe<SortOrder>;
  /** Sort on "blocks.picture-grid.layout.theme.light" */
  blocks_pictureGrid_layout_theme_light: InputMaybe<SortOrder>;
  /** Sort on "blocks.picture-grid.layout.theme.muted" */
  blocks_pictureGrid_layout_theme_muted: InputMaybe<SortOrder>;
  /** Sort on "blocks.picture-grid.layout.theme.pastel" */
  blocks_pictureGrid_layout_theme_pastel: InputMaybe<SortOrder>;
  /** Sort on "blocks.picture-grid.layout.theme.vivid" */
  blocks_pictureGrid_layout_theme_vivid: InputMaybe<SortOrder>;
  /** Sort on "blocks.picture-grid.title" */
  blocks_pictureGrid_title: InputMaybe<SortOrder>;
  /** Sort on "blocks.product-slider.layout.display-width.contain" */
  blocks_productSlider_layout_displayWidth_contain: InputMaybe<SortOrder>;
  /** Sort on "blocks.product-slider.layout.display-width.stretch" */
  blocks_productSlider_layout_displayWidth_stretch: InputMaybe<SortOrder>;
  /** Sort on "blocks.product-slider.layout.theme.dark" */
  blocks_productSlider_layout_theme_dark: InputMaybe<SortOrder>;
  /** Sort on "blocks.product-slider.layout.theme.light" */
  blocks_productSlider_layout_theme_light: InputMaybe<SortOrder>;
  /** Sort on "blocks.product-slider.layout.theme.muted" */
  blocks_productSlider_layout_theme_muted: InputMaybe<SortOrder>;
  /** Sort on "blocks.product-slider.layout.theme.pastel" */
  blocks_productSlider_layout_theme_pastel: InputMaybe<SortOrder>;
  /** Sort on "blocks.product-slider.layout.theme.vivid" */
  blocks_productSlider_layout_theme_vivid: InputMaybe<SortOrder>;
  /** Sort on "blocks.product-slider.products.skus" */
  blocks_productSlider_products_skus: InputMaybe<SortOrder>;
  /** Sort on "blocks.product-slider.title" */
  blocks_productSlider_title: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.layout.display-width.contain" */
  blocks_storySlider_layout_displayWidth_contain: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.layout.display-width.stretch" */
  blocks_storySlider_layout_displayWidth_stretch: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.layout.theme.dark" */
  blocks_storySlider_layout_theme_dark: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.layout.theme.light" */
  blocks_storySlider_layout_theme_light: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.layout.theme.muted" */
  blocks_storySlider_layout_theme_muted: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.layout.theme.pastel" */
  blocks_storySlider_layout_theme_pastel: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.layout.theme.vivid" */
  blocks_storySlider_layout_theme_vivid: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.stories.items.itemId" */
  blocks_storySlider_stories_items_itemId: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.stories.items.name" */
  blocks_storySlider_stories_items_name: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.stories.items.parentId" */
  blocks_storySlider_stories_items_parentId: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.stories.items.path" */
  blocks_storySlider_stories_items_path: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.stories.items.shape" */
  blocks_storySlider_stories_items_shape: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.stories.items.type" */
  blocks_storySlider_stories_items_type: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.title" */
  blocks_storySlider_title: InputMaybe<SortOrder>;
  /** Sort on "createdAt" */
  createdAt: InputMaybe<SortOrder>;
  /** Sort on "depth" */
  depth: InputMaybe<SortOrder>;
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
  /** Sort on "parentPaths" */
  parentPaths: InputMaybe<SortOrder>;
  /** Sort on "path" */
  path: InputMaybe<SortOrder>;
  /** Sort on "position" */
  position: InputMaybe<SortOrder>;
  /** Sort on "publicationState" */
  publicationState: InputMaybe<SortOrder>;
  /** Sort on "publishedAt" */
  publishedAt: InputMaybe<SortOrder>;
  /** Sort on the Score based on the query */
  score: InputMaybe<SortOrder>;
  /** Sort on "shortcuts.parentId" */
  shortcuts_parentId: InputMaybe<SortOrder>;
  /** Sort on "shortcuts.path" */
  shortcuts_path: InputMaybe<SortOrder>;
  /** Sort on "shortcuts.position" */
  shortcuts_position: InputMaybe<SortOrder>;
  /** Sort on "title" */
  title: InputMaybe<SortOrder>;
  /** Sort on "topics" */
  topics: InputMaybe<SortOrder>;
  /** Sort on "type" */
  type: InputMaybe<SortOrder>;
  /** Sort on "updatedAt" */
  updatedAt: InputMaybe<SortOrder>;
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
  video: Maybe<Array<Maybe<VideoComponent>>>;
};

export type ComponentChoiceComponentForMenuItemLink = {
  __typename?: 'ComponentChoiceComponentForMenuItemLink';
  item: Maybe<ItemRelations>;
  url: Maybe<Scalars['String']['output']>;
};

export type ComponentChoiceComponentForStoryMedia = {
  __typename?: 'ComponentChoiceComponentForStoryMedia';
  image: Maybe<Array<Maybe<Image>>>;
  shoppableImage: Maybe<Array<Maybe<Image>>>;
  video: Maybe<Array<Maybe<VideoComponent>>>;
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

export type ContentChunksComponentForProductDetails = {
  __typename?: 'ContentChunksComponentForProductDetails';
  description: Maybe<Scalars['RichText']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type ContentChunksComponentForProductDetailsDescriptionArgs = {
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

export type DateFilter = {
  /** Filter on equality */
  equals: InputMaybe<Scalars['Datetime']['input']>;
  /** Filter on existence */
  exists: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter if is in list */
  in: InputMaybe<Array<InputMaybe<Scalars['Datetime']['input']>>>;
  /** Filter on not equal to */
  not_equals: InputMaybe<Scalars['Datetime']['input']>;
  /** Filter if is not in list */
  not_in: InputMaybe<Array<InputMaybe<Scalars['Datetime']['input']>>>;
  /** Filter if is within range */
  range: InputMaybe<DateRange>;
};

export type DateRange = {
  gt: InputMaybe<Scalars['Datetime']['input']>;
  gte: InputMaybe<Scalars['Datetime']['input']>;
  lt: InputMaybe<Scalars['Datetime']['input']>;
  lte: InputMaybe<Scalars['Datetime']['input']>;
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
  /** The date when the version was created */
  createdAt: Maybe<Scalars['Datetime']['output']>;
  /** The canonical depth in the tree */
  depth: Maybe<Scalars['String']['output']>;
  /** The external reference */
  externalReference: Maybe<Scalars['String']['output']>;
  /** The History of Paths */
  history: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The version id that includes the language and the publication state */
  id: Maybe<Scalars['ID']['output']>;
  /** The date when the document was indexed for the las time */
  indexedAt: Maybe<Scalars['Datetime']['output']>;
  /** The item id */
  itemId: Maybe<Scalars['ID']['output']>;
  /** The Language */
  language: Maybe<Scalars['String']['output']>;
  /** The name */
  name: Maybe<Scalars['String']['output']>;
  /** To be used with searchAfter and searchBefore */
  paginationToken: Maybe<Scalars['String']['output']>;
  /** The parent document */
  parent: Maybe<Document>;
  /** The parent id */
  parentId: Maybe<Scalars['ID']['output']>;
  /** The path */
  path: Maybe<Scalars['String']['output']>;
  /** The method to resolve the path */
  pathResolutionMethod: Maybe<PathResolutionMethod>;
  /** The canonical position in the tree */
  position: Maybe<Scalars['String']['output']>;
  /** The publication state */
  publicationState: Maybe<Scalars['String']['output']>;
  /** The date when the version was published */
  publishedAt: Maybe<Scalars['Datetime']['output']>;
  /** The score */
  score: Maybe<Scalars['Float']['output']>;
  /** The shape identifier */
  shape: Maybe<Scalars['String']['output']>;
  /** The Shortcuts */
  shortcuts: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The different topic paths */
  topicPaths: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The different topics */
  topics: Maybe<Scalars['Hash']['output']>;
  /** The type */
  type: Maybe<Scalars['String']['output']>;
  /** The date when the version was updated */
  updatedAt: Maybe<Scalars['Datetime']['output']>;
};


export type DocumentBreadcrumbsArgs = {
  withShortcuts?: InputMaybe<Scalars['Boolean']['input']>;
};


export type DocumentTopicPathsArgs = {
  leafOnly?: InputMaybe<Scalars['Boolean']['input']>;
};


export type DocumentTopicsArgs = {
  key: InputMaybe<Scalars['String']['input']>;
  leafOnly?: InputMaybe<Scalars['Boolean']['input']>;
  onlyLeafName?: InputMaybe<Scalars['Boolean']['input']>;
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
  /** The date when the version was created */
  createdAt: Maybe<Scalars['Datetime']['output']>;
  /** The canonical depth in the tree */
  depth: Maybe<Scalars['String']['output']>;
  /** The external reference */
  externalReference: Maybe<Scalars['String']['output']>;
  /** The History of Paths */
  history: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The version id that includes the language and the publication state */
  id: Maybe<Scalars['ID']['output']>;
  /** The date when the document was indexed for the las time */
  indexedAt: Maybe<Scalars['Datetime']['output']>;
  /** The item id */
  itemId: Maybe<Scalars['ID']['output']>;
  /** The Language */
  language: Maybe<Scalars['String']['output']>;
  /** The name */
  name: Maybe<Scalars['String']['output']>;
  /** To be used with searchAfter and searchBefore */
  paginationToken: Maybe<Scalars['String']['output']>;
  /** The parent document */
  parent: Maybe<Document>;
  /** The parent id */
  parentId: Maybe<Scalars['ID']['output']>;
  /** The path */
  path: Maybe<Scalars['String']['output']>;
  /** The method to resolve the path */
  pathResolutionMethod: Maybe<PathResolutionMethod>;
  /** The canonical position in the tree */
  position: Maybe<Scalars['String']['output']>;
  /** The publication state */
  publicationState: Maybe<Scalars['String']['output']>;
  /** The date when the version was published */
  publishedAt: Maybe<Scalars['Datetime']['output']>;
  /** The score */
  score: Maybe<Scalars['Float']['output']>;
  /** The shape identifier */
  shape: Maybe<Scalars['String']['output']>;
  /** The Shortcuts */
  shortcuts: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The different topic paths */
  topicPaths: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The different topics */
  topics: Maybe<Scalars['Hash']['output']>;
  /** The type */
  type: Maybe<Scalars['String']['output']>;
  /** The date when the version was updated */
  updatedAt: Maybe<Scalars['Datetime']['output']>;
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
  sorting?: InputMaybe<TenantSort>;
  term: InputMaybe<Scalars['String']['input']>;
};


export type FolderTopicPathsArgs = {
  leafOnly?: InputMaybe<Scalars['Boolean']['input']>;
};


export type FolderTopicsArgs = {
  key: InputMaybe<Scalars['String']['input']>;
  leafOnly?: InputMaybe<Scalars['Boolean']['input']>;
  onlyLeafName?: InputMaybe<Scalars['Boolean']['input']>;
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

export type GridComponent = {
  __typename?: 'GridComponent';
  dimensions: Maybe<GridComponentDimensions>;
  name: Maybe<Scalars['String']['output']>;
  rows: Maybe<Array<Maybe<GridComponentRow>>>;
};

export type GridComponentColumn = {
  __typename?: 'GridComponentColumn';
  item: Maybe<Document>;
  layout: Maybe<Scalars['Hash']['output']>;
};


export type GridComponentColumnItemArgs = {
  language?: InputMaybe<Array<InputMaybe<TenantLanguage>>>;
  publicationState?: InputMaybe<Array<InputMaybe<PublicationState>>>;
};

export type GridComponentDimensions = {
  __typename?: 'GridComponentDimensions';
  columns: Maybe<Scalars['Int']['output']>;
  rows: Maybe<Scalars['Int']['output']>;
};

export type GridComponentRow = {
  __typename?: 'GridComponentRow';
  columns: Maybe<Array<Maybe<GridComponentColumn>>>;
};

export type Image = {
  __typename?: 'Image';
  altText: Maybe<Scalars['String']['output']>;
  caption: Maybe<Scalars['RichText']['output']>;
  createdAt: Maybe<Scalars['Datetime']['output']>;
  focalPoint: Maybe<Scalars['Hash']['output']>;
  height: Maybe<Scalars['Int']['output']>;
  key: Maybe<Scalars['String']['output']>;
  meta: Maybe<Scalars['Hash']['output']>;
  /** Showcases that this image describes. */
  showcases: Maybe<Array<Maybe<Showcase>>>;
  topics: Maybe<Scalars['Hash']['output']>;
  updatedAt: Maybe<Scalars['Datetime']['output']>;
  url: Maybe<Scalars['String']['output']>;
  variants: Maybe<Array<Maybe<ImageVariant>>>;
  width: Maybe<Scalars['Int']['output']>;
};


export type ImageCaptionArgs = {
  format?: RichTextFormat;
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

export type ItemRelations = ItemRelationsInterface & SkuRelationsInterface & {
  __typename?: 'ItemRelations';
  items: Maybe<Array<Maybe<Document>>>;
  variants: Maybe<Array<Maybe<ProductVariant>>>;
};


export type ItemRelationsItemsArgs = {
  language?: InputMaybe<Array<InputMaybe<TenantLanguage>>>;
  publicationState?: InputMaybe<Array<InputMaybe<PublicationState>>>;
};


export type ItemRelationsVariantsArgs = {
  language?: InputMaybe<Array<InputMaybe<TenantLanguage>>>;
  publicationState?: InputMaybe<Array<InputMaybe<PublicationState>>>;
};

export type ItemRelationsInterface = {
  items: Maybe<Array<Maybe<Document>>>;
};


export type ItemRelationsInterfaceItemsArgs = {
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
  blocks_banner_layout_displayWidth_contain: InputMaybe<StringFacet>;
  blocks_banner_layout_displayWidth_stretch: InputMaybe<StringFacet>;
  blocks_banner_layout_theme_dark: InputMaybe<StringFacet>;
  blocks_banner_layout_theme_light: InputMaybe<StringFacet>;
  blocks_banner_layout_theme_muted: InputMaybe<StringFacet>;
  blocks_banner_layout_theme_pastel: InputMaybe<StringFacet>;
  blocks_banner_layout_theme_vivid: InputMaybe<StringFacet>;
  blocks_banner_title: InputMaybe<StringFacet>;
  blocks_featureHighlights_layout_displayWidth_contain: InputMaybe<StringFacet>;
  blocks_featureHighlights_layout_displayWidth_stretch: InputMaybe<StringFacet>;
  blocks_featureHighlights_layout_theme_dark: InputMaybe<StringFacet>;
  blocks_featureHighlights_layout_theme_light: InputMaybe<StringFacet>;
  blocks_featureHighlights_layout_theme_muted: InputMaybe<StringFacet>;
  blocks_featureHighlights_layout_theme_pastel: InputMaybe<StringFacet>;
  blocks_featureHighlights_layout_theme_vivid: InputMaybe<StringFacet>;
  blocks_featureHighlights_usp_headline: InputMaybe<StringFacet>;
  blocks_pictureGrid_layout_displayWidth_contain: InputMaybe<StringFacet>;
  blocks_pictureGrid_layout_displayWidth_stretch: InputMaybe<StringFacet>;
  blocks_pictureGrid_layout_theme_dark: InputMaybe<StringFacet>;
  blocks_pictureGrid_layout_theme_light: InputMaybe<StringFacet>;
  blocks_pictureGrid_layout_theme_muted: InputMaybe<StringFacet>;
  blocks_pictureGrid_layout_theme_pastel: InputMaybe<StringFacet>;
  blocks_pictureGrid_layout_theme_vivid: InputMaybe<StringFacet>;
  blocks_pictureGrid_title: InputMaybe<StringFacet>;
  blocks_productSlider_layout_displayWidth_contain: InputMaybe<StringFacet>;
  blocks_productSlider_layout_displayWidth_stretch: InputMaybe<StringFacet>;
  blocks_productSlider_layout_theme_dark: InputMaybe<StringFacet>;
  blocks_productSlider_layout_theme_light: InputMaybe<StringFacet>;
  blocks_productSlider_layout_theme_muted: InputMaybe<StringFacet>;
  blocks_productSlider_layout_theme_pastel: InputMaybe<StringFacet>;
  blocks_productSlider_layout_theme_vivid: InputMaybe<StringFacet>;
  blocks_productSlider_products_skus: InputMaybe<StringFacet>;
  blocks_productSlider_title: InputMaybe<StringFacet>;
  blocks_storySlider_layout_displayWidth_contain: InputMaybe<StringFacet>;
  blocks_storySlider_layout_displayWidth_stretch: InputMaybe<StringFacet>;
  blocks_storySlider_layout_theme_dark: InputMaybe<StringFacet>;
  blocks_storySlider_layout_theme_light: InputMaybe<StringFacet>;
  blocks_storySlider_layout_theme_muted: InputMaybe<StringFacet>;
  blocks_storySlider_layout_theme_pastel: InputMaybe<StringFacet>;
  blocks_storySlider_layout_theme_vivid: InputMaybe<StringFacet>;
  blocks_storySlider_stories_items_name: InputMaybe<StringFacet>;
  blocks_storySlider_stories_items_path: InputMaybe<StringFacet>;
  blocks_storySlider_title: InputMaybe<StringFacet>;
  language: InputMaybe<StringFacet>;
  meta_title: InputMaybe<StringFacet>;
  name: InputMaybe<StringFacet>;
  parentPaths: InputMaybe<StringFacet>;
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
  /** Filter on "blocks.banner.layout.display-width.contain" */
  blocks_banner_layout_displayWidth_contain: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.layout.display-width.stretch" */
  blocks_banner_layout_displayWidth_stretch: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.layout.theme.dark" */
  blocks_banner_layout_theme_dark: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.layout.theme.light" */
  blocks_banner_layout_theme_light: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.layout.theme.muted" */
  blocks_banner_layout_theme_muted: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.layout.theme.pastel" */
  blocks_banner_layout_theme_pastel: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.layout.theme.vivid" */
  blocks_banner_layout_theme_vivid: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.title" */
  blocks_banner_title: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.layout.background-media.image.caption.plainText" */
  blocks_featureHighlights_layout_backgroundMedia_image_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.layout.background-media.video.thumbnails.caption.plainText" */
  blocks_featureHighlights_layout_backgroundMedia_video_thumbnails_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.layout.display-width.contain" */
  blocks_featureHighlights_layout_displayWidth_contain: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.layout.display-width.stretch" */
  blocks_featureHighlights_layout_displayWidth_stretch: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.layout.theme.dark" */
  blocks_featureHighlights_layout_theme_dark: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.layout.theme.light" */
  blocks_featureHighlights_layout_theme_light: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.layout.theme.muted" */
  blocks_featureHighlights_layout_theme_muted: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.layout.theme.pastel" */
  blocks_featureHighlights_layout_theme_pastel: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.layout.theme.vivid" */
  blocks_featureHighlights_layout_theme_vivid: InputMaybe<StringFilter>;
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
  /** Filter on "blocks.picture-grid.layout.display-width.contain" */
  blocks_pictureGrid_layout_displayWidth_contain: InputMaybe<StringFilter>;
  /** Filter on "blocks.picture-grid.layout.display-width.stretch" */
  blocks_pictureGrid_layout_displayWidth_stretch: InputMaybe<StringFilter>;
  /** Filter on "blocks.picture-grid.layout.theme.dark" */
  blocks_pictureGrid_layout_theme_dark: InputMaybe<StringFilter>;
  /** Filter on "blocks.picture-grid.layout.theme.light" */
  blocks_pictureGrid_layout_theme_light: InputMaybe<StringFilter>;
  /** Filter on "blocks.picture-grid.layout.theme.muted" */
  blocks_pictureGrid_layout_theme_muted: InputMaybe<StringFilter>;
  /** Filter on "blocks.picture-grid.layout.theme.pastel" */
  blocks_pictureGrid_layout_theme_pastel: InputMaybe<StringFilter>;
  /** Filter on "blocks.picture-grid.layout.theme.vivid" */
  blocks_pictureGrid_layout_theme_vivid: InputMaybe<StringFilter>;
  /** Filter on "blocks.picture-grid.title" */
  blocks_pictureGrid_title: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.description.plainText" */
  blocks_productSlider_description_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.layout.background-media.image.caption.plainText" */
  blocks_productSlider_layout_backgroundMedia_image_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.layout.background-media.video.thumbnails.caption.plainText" */
  blocks_productSlider_layout_backgroundMedia_video_thumbnails_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.layout.display-width.contain" */
  blocks_productSlider_layout_displayWidth_contain: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.layout.display-width.stretch" */
  blocks_productSlider_layout_displayWidth_stretch: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.layout.theme.dark" */
  blocks_productSlider_layout_theme_dark: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.layout.theme.light" */
  blocks_productSlider_layout_theme_light: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.layout.theme.muted" */
  blocks_productSlider_layout_theme_muted: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.layout.theme.pastel" */
  blocks_productSlider_layout_theme_pastel: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.layout.theme.vivid" */
  blocks_productSlider_layout_theme_vivid: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.products.skus" */
  blocks_productSlider_products_skus: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.title" */
  blocks_productSlider_title: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.description.plainText" */
  blocks_storySlider_description_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.layout.background-media.image.caption.plainText" */
  blocks_storySlider_layout_backgroundMedia_image_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.layout.background-media.video.thumbnails.caption.plainText" */
  blocks_storySlider_layout_backgroundMedia_video_thumbnails_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.layout.display-width.contain" */
  blocks_storySlider_layout_displayWidth_contain: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.layout.display-width.stretch" */
  blocks_storySlider_layout_displayWidth_stretch: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.layout.theme.dark" */
  blocks_storySlider_layout_theme_dark: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.layout.theme.light" */
  blocks_storySlider_layout_theme_light: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.layout.theme.muted" */
  blocks_storySlider_layout_theme_muted: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.layout.theme.pastel" */
  blocks_storySlider_layout_theme_pastel: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.layout.theme.vivid" */
  blocks_storySlider_layout_theme_vivid: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.stories.items.itemId" */
  blocks_storySlider_stories_items_itemId: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.stories.items.name" */
  blocks_storySlider_stories_items_name: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.stories.items.parentId" */
  blocks_storySlider_stories_items_parentId: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.stories.items.path" */
  blocks_storySlider_stories_items_path: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.stories.items.shape" */
  blocks_storySlider_stories_items_shape: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.stories.items.type" */
  blocks_storySlider_stories_items_type: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.title" */
  blocks_storySlider_title: InputMaybe<StringFilter>;
  /** Filter on "createdAt" */
  createdAt: InputMaybe<DateFilter>;
  /** Filter on "depth" */
  depth: InputMaybe<NumberFilter>;
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
  /** Filter on "parentPaths" */
  parentPaths: InputMaybe<StringFilter>;
  /** Filter on "path" */
  path: InputMaybe<StringFilter>;
  /** Filter on "position" */
  position: InputMaybe<NumberFilter>;
  /** Filter on "publicationState" */
  publicationState: InputMaybe<StringFilter>;
  /** Filter on "publishedAt" */
  publishedAt: InputMaybe<DateFilter>;
  /** Filter on "shortcuts.parentId" */
  shortcuts_parentId: InputMaybe<StringFilter>;
  /** Filter on "shortcuts.path" */
  shortcuts_path: InputMaybe<StringFilter>;
  /** Filter on "shortcuts.position" */
  shortcuts_position: InputMaybe<NumberFilter>;
  /** Filter on "topics" */
  topics: InputMaybe<StringFilter>;
  /** Filter on "updatedAt" */
  updatedAt: InputMaybe<DateFilter>;
};

export type LandingPageQuery = {
  __typename?: 'LandingPageQuery';
  hits: Maybe<Array<Maybe<LandingPage>>>;
  summary: Maybe<SearchSummary>;
};

export type LandingPageSort = {
  /** Sort on "aliases" */
  aliases: InputMaybe<SortOrder>;
  /** Sort on "blocks.banner.call-to-action.action.label" */
  blocks_banner_callToAction_action_label: InputMaybe<SortOrder>;
  /** Sort on "blocks.banner.call-to-action.action.url" */
  blocks_banner_callToAction_action_url: InputMaybe<SortOrder>;
  /** Sort on "blocks.banner.layout.display-width.contain" */
  blocks_banner_layout_displayWidth_contain: InputMaybe<SortOrder>;
  /** Sort on "blocks.banner.layout.display-width.stretch" */
  blocks_banner_layout_displayWidth_stretch: InputMaybe<SortOrder>;
  /** Sort on "blocks.banner.layout.theme.dark" */
  blocks_banner_layout_theme_dark: InputMaybe<SortOrder>;
  /** Sort on "blocks.banner.layout.theme.light" */
  blocks_banner_layout_theme_light: InputMaybe<SortOrder>;
  /** Sort on "blocks.banner.layout.theme.muted" */
  blocks_banner_layout_theme_muted: InputMaybe<SortOrder>;
  /** Sort on "blocks.banner.layout.theme.pastel" */
  blocks_banner_layout_theme_pastel: InputMaybe<SortOrder>;
  /** Sort on "blocks.banner.layout.theme.vivid" */
  blocks_banner_layout_theme_vivid: InputMaybe<SortOrder>;
  /** Sort on "blocks.banner.title" */
  blocks_banner_title: InputMaybe<SortOrder>;
  /** Sort on "blocks.feature-highlights.layout.display-width.contain" */
  blocks_featureHighlights_layout_displayWidth_contain: InputMaybe<SortOrder>;
  /** Sort on "blocks.feature-highlights.layout.display-width.stretch" */
  blocks_featureHighlights_layout_displayWidth_stretch: InputMaybe<SortOrder>;
  /** Sort on "blocks.feature-highlights.layout.theme.dark" */
  blocks_featureHighlights_layout_theme_dark: InputMaybe<SortOrder>;
  /** Sort on "blocks.feature-highlights.layout.theme.light" */
  blocks_featureHighlights_layout_theme_light: InputMaybe<SortOrder>;
  /** Sort on "blocks.feature-highlights.layout.theme.muted" */
  blocks_featureHighlights_layout_theme_muted: InputMaybe<SortOrder>;
  /** Sort on "blocks.feature-highlights.layout.theme.pastel" */
  blocks_featureHighlights_layout_theme_pastel: InputMaybe<SortOrder>;
  /** Sort on "blocks.feature-highlights.layout.theme.vivid" */
  blocks_featureHighlights_layout_theme_vivid: InputMaybe<SortOrder>;
  /** Sort on "blocks.feature-highlights.usp.headline" */
  blocks_featureHighlights_usp_headline: InputMaybe<SortOrder>;
  /** Sort on "blocks.picture-grid.layout.display-width.contain" */
  blocks_pictureGrid_layout_displayWidth_contain: InputMaybe<SortOrder>;
  /** Sort on "blocks.picture-grid.layout.display-width.stretch" */
  blocks_pictureGrid_layout_displayWidth_stretch: InputMaybe<SortOrder>;
  /** Sort on "blocks.picture-grid.layout.theme.dark" */
  blocks_pictureGrid_layout_theme_dark: InputMaybe<SortOrder>;
  /** Sort on "blocks.picture-grid.layout.theme.light" */
  blocks_pictureGrid_layout_theme_light: InputMaybe<SortOrder>;
  /** Sort on "blocks.picture-grid.layout.theme.muted" */
  blocks_pictureGrid_layout_theme_muted: InputMaybe<SortOrder>;
  /** Sort on "blocks.picture-grid.layout.theme.pastel" */
  blocks_pictureGrid_layout_theme_pastel: InputMaybe<SortOrder>;
  /** Sort on "blocks.picture-grid.layout.theme.vivid" */
  blocks_pictureGrid_layout_theme_vivid: InputMaybe<SortOrder>;
  /** Sort on "blocks.picture-grid.title" */
  blocks_pictureGrid_title: InputMaybe<SortOrder>;
  /** Sort on "blocks.product-slider.layout.display-width.contain" */
  blocks_productSlider_layout_displayWidth_contain: InputMaybe<SortOrder>;
  /** Sort on "blocks.product-slider.layout.display-width.stretch" */
  blocks_productSlider_layout_displayWidth_stretch: InputMaybe<SortOrder>;
  /** Sort on "blocks.product-slider.layout.theme.dark" */
  blocks_productSlider_layout_theme_dark: InputMaybe<SortOrder>;
  /** Sort on "blocks.product-slider.layout.theme.light" */
  blocks_productSlider_layout_theme_light: InputMaybe<SortOrder>;
  /** Sort on "blocks.product-slider.layout.theme.muted" */
  blocks_productSlider_layout_theme_muted: InputMaybe<SortOrder>;
  /** Sort on "blocks.product-slider.layout.theme.pastel" */
  blocks_productSlider_layout_theme_pastel: InputMaybe<SortOrder>;
  /** Sort on "blocks.product-slider.layout.theme.vivid" */
  blocks_productSlider_layout_theme_vivid: InputMaybe<SortOrder>;
  /** Sort on "blocks.product-slider.products.skus" */
  blocks_productSlider_products_skus: InputMaybe<SortOrder>;
  /** Sort on "blocks.product-slider.title" */
  blocks_productSlider_title: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.layout.display-width.contain" */
  blocks_storySlider_layout_displayWidth_contain: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.layout.display-width.stretch" */
  blocks_storySlider_layout_displayWidth_stretch: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.layout.theme.dark" */
  blocks_storySlider_layout_theme_dark: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.layout.theme.light" */
  blocks_storySlider_layout_theme_light: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.layout.theme.muted" */
  blocks_storySlider_layout_theme_muted: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.layout.theme.pastel" */
  blocks_storySlider_layout_theme_pastel: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.layout.theme.vivid" */
  blocks_storySlider_layout_theme_vivid: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.stories.items.itemId" */
  blocks_storySlider_stories_items_itemId: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.stories.items.name" */
  blocks_storySlider_stories_items_name: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.stories.items.parentId" */
  blocks_storySlider_stories_items_parentId: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.stories.items.path" */
  blocks_storySlider_stories_items_path: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.stories.items.shape" */
  blocks_storySlider_stories_items_shape: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.stories.items.type" */
  blocks_storySlider_stories_items_type: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.title" */
  blocks_storySlider_title: InputMaybe<SortOrder>;
  /** Sort on "createdAt" */
  createdAt: InputMaybe<SortOrder>;
  /** Sort on "depth" */
  depth: InputMaybe<SortOrder>;
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
  /** Sort on "parentPaths" */
  parentPaths: InputMaybe<SortOrder>;
  /** Sort on "path" */
  path: InputMaybe<SortOrder>;
  /** Sort on "position" */
  position: InputMaybe<SortOrder>;
  /** Sort on "publicationState" */
  publicationState: InputMaybe<SortOrder>;
  /** Sort on "publishedAt" */
  publishedAt: InputMaybe<SortOrder>;
  /** Sort on the Score based on the query */
  score: InputMaybe<SortOrder>;
  /** Sort on "shortcuts.parentId" */
  shortcuts_parentId: InputMaybe<SortOrder>;
  /** Sort on "shortcuts.path" */
  shortcuts_path: InputMaybe<SortOrder>;
  /** Sort on "shortcuts.position" */
  shortcuts_position: InputMaybe<SortOrder>;
  /** Sort on "topics" */
  topics: InputMaybe<SortOrder>;
  /** Sort on "type" */
  type: InputMaybe<SortOrder>;
  /** Sort on "updatedAt" */
  updatedAt: InputMaybe<SortOrder>;
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
  link_item_items_name: InputMaybe<StringFacet>;
  link_item_items_path: InputMaybe<StringFacet>;
  link_url: InputMaybe<StringFacet>;
  name: InputMaybe<StringFacet>;
  parentPaths: InputMaybe<StringFacet>;
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
  /** Filter on "createdAt" */
  createdAt: InputMaybe<DateFilter>;
  /** Filter on "depth" */
  depth: InputMaybe<NumberFilter>;
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
  /** Filter on "link.item.items.itemId" */
  link_item_items_itemId: InputMaybe<StringFilter>;
  /** Filter on "link.item.items.name" */
  link_item_items_name: InputMaybe<StringFilter>;
  /** Filter on "link.item.items.parentId" */
  link_item_items_parentId: InputMaybe<StringFilter>;
  /** Filter on "link.item.items.path" */
  link_item_items_path: InputMaybe<StringFilter>;
  /** Filter on "link.item.items.shape" */
  link_item_items_shape: InputMaybe<StringFilter>;
  /** Filter on "link.item.items.type" */
  link_item_items_type: InputMaybe<StringFilter>;
  /** Filter on "link.url" */
  link_url: InputMaybe<StringFilter>;
  /** Filter on "name" */
  name: InputMaybe<StringFilter>;
  /** Filter on "parentId" */
  parentId: InputMaybe<StringFilter>;
  /** Filter on "parentPaths" */
  parentPaths: InputMaybe<StringFilter>;
  /** Filter on "path" */
  path: InputMaybe<StringFilter>;
  /** Filter on "position" */
  position: InputMaybe<NumberFilter>;
  /** Filter on "publicationState" */
  publicationState: InputMaybe<StringFilter>;
  /** Filter on "publishedAt" */
  publishedAt: InputMaybe<DateFilter>;
  /** Filter on "shortcuts.parentId" */
  shortcuts_parentId: InputMaybe<StringFilter>;
  /** Filter on "shortcuts.path" */
  shortcuts_path: InputMaybe<StringFilter>;
  /** Filter on "shortcuts.position" */
  shortcuts_position: InputMaybe<NumberFilter>;
  /** Filter on "topics" */
  topics: InputMaybe<StringFilter>;
  /** Filter on "updatedAt" */
  updatedAt: InputMaybe<DateFilter>;
};

export type MenuItemQuery = {
  __typename?: 'MenuItemQuery';
  hits: Maybe<Array<Maybe<MenuItem>>>;
  summary: Maybe<SearchSummary>;
};

export type MenuItemSort = {
  /** Sort on "aliases" */
  aliases: InputMaybe<SortOrder>;
  /** Sort on "createdAt" */
  createdAt: InputMaybe<SortOrder>;
  /** Sort on "depth" */
  depth: InputMaybe<SortOrder>;
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
  /** Sort on "link.item.items.itemId" */
  link_item_items_itemId: InputMaybe<SortOrder>;
  /** Sort on "link.item.items.name" */
  link_item_items_name: InputMaybe<SortOrder>;
  /** Sort on "link.item.items.parentId" */
  link_item_items_parentId: InputMaybe<SortOrder>;
  /** Sort on "link.item.items.path" */
  link_item_items_path: InputMaybe<SortOrder>;
  /** Sort on "link.item.items.shape" */
  link_item_items_shape: InputMaybe<SortOrder>;
  /** Sort on "link.item.items.type" */
  link_item_items_type: InputMaybe<SortOrder>;
  /** Sort on "link.url" */
  link_url: InputMaybe<SortOrder>;
  /** Sort on "name" */
  name: InputMaybe<SortOrder>;
  /** Sort on "parentId" */
  parentId: InputMaybe<SortOrder>;
  /** Sort on "parentPaths" */
  parentPaths: InputMaybe<SortOrder>;
  /** Sort on "path" */
  path: InputMaybe<SortOrder>;
  /** Sort on "position" */
  position: InputMaybe<SortOrder>;
  /** Sort on "publicationState" */
  publicationState: InputMaybe<SortOrder>;
  /** Sort on "publishedAt" */
  publishedAt: InputMaybe<SortOrder>;
  /** Sort on the Score based on the query */
  score: InputMaybe<SortOrder>;
  /** Sort on "shortcuts.parentId" */
  shortcuts_parentId: InputMaybe<SortOrder>;
  /** Sort on "shortcuts.path" */
  shortcuts_path: InputMaybe<SortOrder>;
  /** Sort on "shortcuts.position" */
  shortcuts_position: InputMaybe<SortOrder>;
  /** Sort on "topics" */
  topics: InputMaybe<SortOrder>;
  /** Sort on "type" */
  type: InputMaybe<SortOrder>;
  /** Sort on "updatedAt" */
  updatedAt: InputMaybe<SortOrder>;
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
  videos: Maybe<Array<Maybe<VideoComponent>>>;
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

export type PriceRange = {
  __typename?: 'PriceRange';
  max: Maybe<Scalars['Float']['output']>;
  min: Maybe<Scalars['Float']['output']>;
};

export type Product = {
  /** The Aliases */
  aliases: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The Breadcrumbs */
  breadcrumbs: Maybe<Array<Maybe<Array<Maybe<Breadcrumb>>>>>;
  /** The date when the version was created */
  createdAt: Maybe<Scalars['Datetime']['output']>;
  /** The default variant (generic) of the product */
  defaultVariant: Maybe<ProductVariant>;
  /** The canonical depth in the tree */
  depth: Maybe<Scalars['String']['output']>;
  /** The external reference */
  externalReference: Maybe<Scalars['String']['output']>;
  /** The History of Paths */
  history: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The version id that includes the language and the publication state */
  id: Maybe<Scalars['ID']['output']>;
  /** The date when the document was indexed for the las time */
  indexedAt: Maybe<Scalars['Datetime']['output']>;
  /** The item id */
  itemId: Maybe<Scalars['ID']['output']>;
  /** The Language */
  language: Maybe<Scalars['String']['output']>;
  /** The name */
  name: Maybe<Scalars['String']['output']>;
  /** To be used with searchAfter and searchBefore */
  paginationToken: Maybe<Scalars['String']['output']>;
  /** The parent document */
  parent: Maybe<Document>;
  /** The parent id */
  parentId: Maybe<Scalars['ID']['output']>;
  /** The path */
  path: Maybe<Scalars['String']['output']>;
  /** The method to resolve the path */
  pathResolutionMethod: Maybe<PathResolutionMethod>;
  /** The canonical position in the tree */
  position: Maybe<Scalars['String']['output']>;
  /** The publication state */
  publicationState: Maybe<Scalars['String']['output']>;
  /** The date when the version was published */
  publishedAt: Maybe<Scalars['Datetime']['output']>;
  /** The score */
  score: Maybe<Scalars['Float']['output']>;
  /** The shape identifier */
  shape: Maybe<Scalars['String']['output']>;
  /** The Shortcuts */
  shortcuts: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The different topic paths */
  topicPaths: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The different topics */
  topics: Maybe<Scalars['Hash']['output']>;
  /** The type */
  type: Maybe<Scalars['String']['output']>;
  /** The date when the version was updated */
  updatedAt: Maybe<Scalars['Datetime']['output']>;
  /** The list of the variants (generic) for the product */
  variants: Maybe<Array<Maybe<ProductVariant>>>;
  /** The VAT type */
  vatType: Maybe<VatType>;
};


export type ProductBreadcrumbsArgs = {
  withShortcuts?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ProductTopicPathsArgs = {
  leafOnly?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ProductTopicsArgs = {
  key: InputMaybe<Scalars['String']['input']>;
  leafOnly?: InputMaybe<Scalars['Boolean']['input']>;
  onlyLeafName?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductFacet = {
  attributes_key: InputMaybe<StringFacet>;
  attributes_value: InputMaybe<StringFacet>;
  brand_items_name: InputMaybe<StringFacet>;
  brand_items_path: InputMaybe<StringFacet>;
  details_title: InputMaybe<StringFacet>;
  dimensions_depth_number: InputMaybe<NumberFacet>;
  dimensions_height_number: InputMaybe<NumberFacet>;
  dimensions_weight_number: InputMaybe<NumberFacet>;
  dimensions_width_number: InputMaybe<NumberFacet>;
  downloads_files_title: InputMaybe<StringFacet>;
  downloads_title: InputMaybe<StringFacet>;
  language: InputMaybe<StringFacet>;
  meta_title: InputMaybe<StringFacet>;
  name: InputMaybe<StringFacet>;
  parentPaths: InputMaybe<StringFacet>;
  price_default: InputMaybe<NumberFacet>;
  price_membership: InputMaybe<NumberFacet>;
  price_membershipNo: InputMaybe<NumberFacet>;
  price_norwayB2b: InputMaybe<NumberFacet>;
  price_norwayB2cSales: InputMaybe<NumberFacet>;
  publicationState: InputMaybe<StringFacet>;
  relatedProducts_items_name: InputMaybe<StringFacet>;
  relatedProducts_items_path: InputMaybe<StringFacet>;
  relatedProducts_skus: InputMaybe<StringFacet>;
  sku: InputMaybe<StringFacet>;
  stock_default: InputMaybe<NumberFacet>;
  stock_oslo: InputMaybe<NumberFacet>;
  stock_toronto: InputMaybe<NumberFacet>;
  story_title: InputMaybe<StringFacet>;
  title: InputMaybe<StringFacet>;
  topics: InputMaybe<StringFacet>;
  type: InputMaybe<StringFacet>;
  variants_dimensions_depth_number: InputMaybe<NumberFacet>;
  variants_dimensions_height_number: InputMaybe<NumberFacet>;
  variants_dimensions_weight_number: InputMaybe<NumberFacet>;
  variants_dimensions_width_number: InputMaybe<NumberFacet>;
  variants_matchingProducts_skus: InputMaybe<StringFacet>;
  variants_name: InputMaybe<StringFacet>;
};

export type ProductFilter = {
  /** Logical AND filter to apply to the query */
  AND: InputMaybe<Array<InputMaybe<ProductFilter>>>;
  /** Logical OR filter to apply to the query */
  OR: InputMaybe<Array<InputMaybe<ProductFilter>>>;
  /** Filter on "aliases" */
  aliases: InputMaybe<StringFilter>;
  /** Filter on "variants.attributes.key" */
  attributes_key: InputMaybe<StringFilter>;
  /** Filter on "variants.attributes.value" */
  attributes_value: InputMaybe<StringFilter>;
  /** Filter on "brand.items.itemId" */
  brand_items_itemId: InputMaybe<StringFilter>;
  /** Filter on "brand.items.name" */
  brand_items_name: InputMaybe<StringFilter>;
  /** Filter on "brand.items.parentId" */
  brand_items_parentId: InputMaybe<StringFilter>;
  /** Filter on "brand.items.path" */
  brand_items_path: InputMaybe<StringFilter>;
  /** Filter on "brand.items.shape" */
  brand_items_shape: InputMaybe<StringFilter>;
  /** Filter on "brand.items.type" */
  brand_items_type: InputMaybe<StringFilter>;
  /** Filter on "createdAt" */
  createdAt: InputMaybe<DateFilter>;
  /** Filter on "depth" */
  depth: InputMaybe<NumberFilter>;
  /** Filter on "description.plainText" */
  description_plainText: InputMaybe<StringFilter>;
  /** Filter on "details.description.plainText" */
  details_description_plainText: InputMaybe<StringFilter>;
  /** Filter on "details.title" */
  details_title: InputMaybe<StringFilter>;
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
  /** Filter on "parentPaths" */
  parentPaths: InputMaybe<StringFilter>;
  /** Filter on "path" */
  path: InputMaybe<StringFilter>;
  /** Filter on "position" */
  position: InputMaybe<NumberFilter>;
  /** Filter on "variants.priceVariants.default.price" */
  price_default: InputMaybe<NumberFilter>;
  /** Filter on "variants.priceVariants.membership.price" */
  price_membership: InputMaybe<NumberFilter>;
  /** Filter on "variants.priceVariants.membership-no.price" */
  price_membershipNo: InputMaybe<NumberFilter>;
  /** Filter on "variants.priceVariants.norway-b2b.price" */
  price_norwayB2b: InputMaybe<NumberFilter>;
  /** Filter on "variants.priceVariants.norway-b2c-sales.price" */
  price_norwayB2cSales: InputMaybe<NumberFilter>;
  /** Filter on "publicationState" */
  publicationState: InputMaybe<StringFilter>;
  /** Filter on "publishedAt" */
  publishedAt: InputMaybe<DateFilter>;
  /** Filter on "related-products.items.itemId" */
  relatedProducts_items_itemId: InputMaybe<StringFilter>;
  /** Filter on "related-products.items.name" */
  relatedProducts_items_name: InputMaybe<StringFilter>;
  /** Filter on "related-products.items.parentId" */
  relatedProducts_items_parentId: InputMaybe<StringFilter>;
  /** Filter on "related-products.items.path" */
  relatedProducts_items_path: InputMaybe<StringFilter>;
  /** Filter on "related-products.items.shape" */
  relatedProducts_items_shape: InputMaybe<StringFilter>;
  /** Filter on "related-products.items.type" */
  relatedProducts_items_type: InputMaybe<StringFilter>;
  /** Filter on "related-products.skus" */
  relatedProducts_skus: InputMaybe<StringFilter>;
  /** Filter on "shortcuts.parentId" */
  shortcuts_parentId: InputMaybe<StringFilter>;
  /** Filter on "shortcuts.path" */
  shortcuts_path: InputMaybe<StringFilter>;
  /** Filter on "shortcuts.position" */
  shortcuts_position: InputMaybe<NumberFilter>;
  /** Filter on "variants.sku" */
  sku: InputMaybe<StringFilter>;
  /** Filter on "variants.stockLocations.default.stock" */
  stock_default: InputMaybe<NumberFilter>;
  /** Filter on "variants.stockLocations.oslo.stock" */
  stock_oslo: InputMaybe<NumberFilter>;
  /** Filter on "variants.stockLocations.toronto.stock" */
  stock_toronto: InputMaybe<NumberFilter>;
  /** Filter on "story.body.plainText" */
  story_body_plainText: InputMaybe<StringFilter>;
  /** Filter on "story.title" */
  story_title: InputMaybe<StringFilter>;
  /** Filter on "title" */
  title: InputMaybe<StringFilter>;
  /** Filter on "topics" */
  topics: InputMaybe<StringFilter>;
  /** Filter on "updatedAt" */
  updatedAt: InputMaybe<DateFilter>;
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
  /** Filter on "variants.matching-products.skus" */
  variants_matchingProducts_skus: InputMaybe<StringFilter>;
  /** Filter on "variants.name" */
  variants_name: InputMaybe<StringFilter>;
};

export type ProductQuery = {
  __typename?: 'ProductQuery';
  hits: Maybe<Array<Maybe<Product>>>;
  summary: Maybe<SearchSummary>;
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

export type ProductSort = {
  /** Sort on "aliases" */
  aliases: InputMaybe<SortOrder>;
  /** Sort on "variants.attributes.key" */
  attributes_key: InputMaybe<SortOrder>;
  /** Sort on "variants.attributes.value" */
  attributes_value: InputMaybe<SortOrder>;
  /** Sort on "brand.items.itemId" */
  brand_items_itemId: InputMaybe<SortOrder>;
  /** Sort on "brand.items.name" */
  brand_items_name: InputMaybe<SortOrder>;
  /** Sort on "brand.items.parentId" */
  brand_items_parentId: InputMaybe<SortOrder>;
  /** Sort on "brand.items.path" */
  brand_items_path: InputMaybe<SortOrder>;
  /** Sort on "brand.items.shape" */
  brand_items_shape: InputMaybe<SortOrder>;
  /** Sort on "brand.items.type" */
  brand_items_type: InputMaybe<SortOrder>;
  /** Sort on "createdAt" */
  createdAt: InputMaybe<SortOrder>;
  /** Sort on "depth" */
  depth: InputMaybe<SortOrder>;
  /** Sort on "details.title" */
  details_title: InputMaybe<SortOrder>;
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
  /** Sort on "parentPaths" */
  parentPaths: InputMaybe<SortOrder>;
  /** Sort on "path" */
  path: InputMaybe<SortOrder>;
  /** Sort on "position" */
  position: InputMaybe<SortOrder>;
  /** Sort on "variants.priceVariants.default.price" */
  price_default: InputMaybe<SortOrder>;
  /** Sort on "variants.priceVariants.membership.price" */
  price_membership: InputMaybe<SortOrder>;
  /** Sort on "variants.priceVariants.membership-no.price" */
  price_membershipNo: InputMaybe<SortOrder>;
  /** Sort on "variants.priceVariants.norway-b2b.price" */
  price_norwayB2b: InputMaybe<SortOrder>;
  /** Sort on "variants.priceVariants.norway-b2c-sales.price" */
  price_norwayB2cSales: InputMaybe<SortOrder>;
  /** Sort on "publicationState" */
  publicationState: InputMaybe<SortOrder>;
  /** Sort on "publishedAt" */
  publishedAt: InputMaybe<SortOrder>;
  /** Sort on "related-products.items.itemId" */
  relatedProducts_items_itemId: InputMaybe<SortOrder>;
  /** Sort on "related-products.items.name" */
  relatedProducts_items_name: InputMaybe<SortOrder>;
  /** Sort on "related-products.items.parentId" */
  relatedProducts_items_parentId: InputMaybe<SortOrder>;
  /** Sort on "related-products.items.path" */
  relatedProducts_items_path: InputMaybe<SortOrder>;
  /** Sort on "related-products.items.shape" */
  relatedProducts_items_shape: InputMaybe<SortOrder>;
  /** Sort on "related-products.items.type" */
  relatedProducts_items_type: InputMaybe<SortOrder>;
  /** Sort on "related-products.skus" */
  relatedProducts_skus: InputMaybe<SortOrder>;
  /** Sort on the Score based on the query */
  score: InputMaybe<SortOrder>;
  /** Sort on "shortcuts.parentId" */
  shortcuts_parentId: InputMaybe<SortOrder>;
  /** Sort on "shortcuts.path" */
  shortcuts_path: InputMaybe<SortOrder>;
  /** Sort on "shortcuts.position" */
  shortcuts_position: InputMaybe<SortOrder>;
  /** Sort on "variants.sku" */
  sku: InputMaybe<SortOrder>;
  /** Sort on "variants.stockLocations.default.stock" */
  stock_default: InputMaybe<SortOrder>;
  /** Sort on "variants.stockLocations.oslo.stock" */
  stock_oslo: InputMaybe<SortOrder>;
  /** Sort on "variants.stockLocations.toronto.stock" */
  stock_toronto: InputMaybe<SortOrder>;
  /** Sort on "story.title" */
  story_title: InputMaybe<SortOrder>;
  /** Sort on "title" */
  title: InputMaybe<SortOrder>;
  /** Sort on "topics" */
  topics: InputMaybe<SortOrder>;
  /** Sort on "type" */
  type: InputMaybe<SortOrder>;
  /** Sort on "updatedAt" */
  updatedAt: InputMaybe<SortOrder>;
  /** Sort on "variants.dimensions.depth.number" */
  variants_dimensions_depth_number: InputMaybe<SortOrder>;
  /** Sort on "variants.dimensions.height.number" */
  variants_dimensions_height_number: InputMaybe<SortOrder>;
  /** Sort on "variants.dimensions.weight.number" */
  variants_dimensions_weight_number: InputMaybe<SortOrder>;
  /** Sort on "variants.dimensions.width.number" */
  variants_dimensions_width_number: InputMaybe<SortOrder>;
  /** Sort on "variants.matching-products.skus" */
  variants_matchingProducts_skus: InputMaybe<SortOrder>;
  /** Sort on "variants.name" */
  variants_name: InputMaybe<SortOrder>;
};

export type ProductVariant = {
  attributes: Maybe<Scalars['Hash']['output']>;
  /** This is a syntactic sugar for getting the 'default' priceVariant value in the priceVariants list. */
  defaultPrice: Maybe<Scalars['Float']['output']>;
  /** PriceList aware best price for everyone for the 'default' priceVariant. */
  defaultPriceFor: Maybe<Scalars['Float']['output']>;
  /** PriceList aware best price for everyone for the 'default' priceVariant. */
  defaultPriceForEveryone: Maybe<Scalars['Float']['output']>;
  /** This is a syntactic sugar for getting the 'default' stockLocation value in the stockLocations list. */
  defaultStock: Maybe<Scalars['Float']['output']>;
  /** This is a syntactic sugar for getting the first image in the images list */
  firstImage: Maybe<Image>;
  images: Maybe<Array<Maybe<Image>>>;
  isDefault: Maybe<Scalars['Boolean']['output']>;
  /** This is a syntactic sugar for getting the 'membership-no' priceVariant value in the priceVariants list. */
  membershipNoPrice: Maybe<Scalars['Float']['output']>;
  /** PriceList aware best price for everyone for the 'membership-no' priceVariant. */
  membershipNoPriceFor: Maybe<Scalars['Float']['output']>;
  /** PriceList aware best price for everyone for the 'membership-no' priceVariant. */
  membershipNoPriceForEveryone: Maybe<Scalars['Float']['output']>;
  /** This is a syntactic sugar for getting the 'membership' priceVariant value in the priceVariants list. */
  membershipPrice: Maybe<Scalars['Float']['output']>;
  /** PriceList aware best price for everyone for the 'membership' priceVariant. */
  membershipPriceFor: Maybe<Scalars['Float']['output']>;
  /** PriceList aware best price for everyone for the 'membership' priceVariant. */
  membershipPriceForEveryone: Maybe<Scalars['Float']['output']>;
  /** The Subscription plan for monthly-fixed. */
  monthlyFixedSubscriptionPlan: Maybe<SubscriptionPlan>;
  name: Maybe<Scalars['String']['output']>;
  /** This is a syntactic sugar for getting the 'norway-b2b' priceVariant value in the priceVariants list. */
  norwayB2bPrice: Maybe<Scalars['Float']['output']>;
  /** PriceList aware best price for everyone for the 'norway-b2b' priceVariant. */
  norwayB2bPriceFor: Maybe<Scalars['Float']['output']>;
  /** PriceList aware best price for everyone for the 'norway-b2b' priceVariant. */
  norwayB2bPriceForEveryone: Maybe<Scalars['Float']['output']>;
  /** This is a syntactic sugar for getting the 'norway-b2c-sales' priceVariant value in the priceVariants list. */
  norwayB2cSalesPrice: Maybe<Scalars['Float']['output']>;
  /** PriceList aware best price for everyone for the 'norway-b2c-sales' priceVariant. */
  norwayB2cSalesPriceFor: Maybe<Scalars['Float']['output']>;
  /** PriceList aware best price for everyone for the 'norway-b2c-sales' priceVariant. */
  norwayB2cSalesPriceForEveryone: Maybe<Scalars['Float']['output']>;
  /** This is a syntactic sugar for getting the 'oslo' stockLocation value in the stockLocations list. */
  osloStock: Maybe<Scalars['Float']['output']>;
  priceVariants: Maybe<Scalars['Hash']['output']>;
  product: Maybe<Product>;
  sku: Maybe<Scalars['String']['output']>;
  stockLocations: Maybe<Scalars['Hash']['output']>;
  /** The Subscription plans for the variant. */
  subscriptionPlans: Maybe<Array<Maybe<SubscriptionPlan>>>;
  /** This is a syntactic sugar for getting the 'toronto' stockLocation value in the stockLocations list. */
  torontoStock: Maybe<Scalars['Float']['output']>;
  videos: Maybe<Array<Maybe<VideoComponent>>>;
};


export type ProductVariantAttributesArgs = {
  key: InputMaybe<Scalars['String']['input']>;
};


export type ProductVariantDefaultPriceForArgs = {
  marketIdentifiers: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductVariantMembershipNoPriceForArgs = {
  marketIdentifiers: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductVariantMembershipPriceForArgs = {
  marketIdentifiers: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductVariantNorwayB2bPriceForArgs = {
  marketIdentifiers: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductVariantNorwayB2cSalesPriceForArgs = {
  marketIdentifiers: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductVariantPriceVariantsArgs = {
  key: InputMaybe<Scalars['String']['input']>;
};


export type ProductVariantStockLocationsArgs = {
  key: InputMaybe<Scalars['String']['input']>;
};

export type ProductVariantForProduct = Images & ProductVariant & {
  __typename?: 'ProductVariantForProduct';
  attributes: Maybe<Scalars['Hash']['output']>;
  /** This is a syntactic sugar for getting the 'default' priceVariant value in the priceVariants list. */
  defaultPrice: Maybe<Scalars['Float']['output']>;
  /** PriceList aware best price for everyone for the 'default' priceVariant. */
  defaultPriceFor: Maybe<Scalars['Float']['output']>;
  /** PriceList aware best price for everyone for the 'default' priceVariant. */
  defaultPriceForEveryone: Maybe<Scalars['Float']['output']>;
  /** This is a syntactic sugar for getting the 'default' stockLocation value in the stockLocations list. */
  defaultStock: Maybe<Scalars['Float']['output']>;
  description: Maybe<ComponentChoiceComponentForVariantProductDescription>;
  dimensions: Maybe<DimensionsPiece>;
  /** This is a syntactic sugar for getting the first image in the images list */
  firstImage: Maybe<Image>;
  images: Maybe<Array<Maybe<Image>>>;
  isDefault: Maybe<Scalars['Boolean']['output']>;
  matchingProducts: Maybe<ItemRelations>;
  /** This is a syntactic sugar for getting the 'membership-no' priceVariant value in the priceVariants list. */
  membershipNoPrice: Maybe<Scalars['Float']['output']>;
  /** PriceList aware best price for everyone for the 'membership-no' priceVariant. */
  membershipNoPriceFor: Maybe<Scalars['Float']['output']>;
  /** PriceList aware best price for everyone for the 'membership-no' priceVariant. */
  membershipNoPriceForEveryone: Maybe<Scalars['Float']['output']>;
  /** This is a syntactic sugar for getting the 'membership' priceVariant value in the priceVariants list. */
  membershipPrice: Maybe<Scalars['Float']['output']>;
  /** PriceList aware best price for everyone for the 'membership' priceVariant. */
  membershipPriceFor: Maybe<Scalars['Float']['output']>;
  /** PriceList aware best price for everyone for the 'membership' priceVariant. */
  membershipPriceForEveryone: Maybe<Scalars['Float']['output']>;
  /** The Subscription plan for monthly-fixed. */
  monthlyFixedSubscriptionPlan: Maybe<SubscriptionPlan>;
  name: Maybe<Scalars['String']['output']>;
  /** This is a syntactic sugar for getting the 'norway-b2b' priceVariant value in the priceVariants list. */
  norwayB2bPrice: Maybe<Scalars['Float']['output']>;
  /** PriceList aware best price for everyone for the 'norway-b2b' priceVariant. */
  norwayB2bPriceFor: Maybe<Scalars['Float']['output']>;
  /** PriceList aware best price for everyone for the 'norway-b2b' priceVariant. */
  norwayB2bPriceForEveryone: Maybe<Scalars['Float']['output']>;
  /** This is a syntactic sugar for getting the 'norway-b2c-sales' priceVariant value in the priceVariants list. */
  norwayB2cSalesPrice: Maybe<Scalars['Float']['output']>;
  /** PriceList aware best price for everyone for the 'norway-b2c-sales' priceVariant. */
  norwayB2cSalesPriceFor: Maybe<Scalars['Float']['output']>;
  /** PriceList aware best price for everyone for the 'norway-b2c-sales' priceVariant. */
  norwayB2cSalesPriceForEveryone: Maybe<Scalars['Float']['output']>;
  /** This is a syntactic sugar for getting the 'oslo' stockLocation value in the stockLocations list. */
  osloStock: Maybe<Scalars['Float']['output']>;
  priceVariants: Maybe<Scalars['Hash']['output']>;
  product: Maybe<Product>;
  sku: Maybe<Scalars['String']['output']>;
  stockLocations: Maybe<Scalars['Hash']['output']>;
  /** The Subscription plans for the variant. */
  subscriptionPlans: Maybe<Array<Maybe<SubscriptionPlan>>>;
  /** This is a syntactic sugar for getting the 'toronto' stockLocation value in the stockLocations list. */
  torontoStock: Maybe<Scalars['Float']['output']>;
  videos: Maybe<Array<Maybe<VideoComponent>>>;
};


export type ProductVariantForProductAttributesArgs = {
  key: InputMaybe<Scalars['String']['input']>;
};


export type ProductVariantForProductDefaultPriceForArgs = {
  marketIdentifiers: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductVariantForProductMembershipNoPriceForArgs = {
  marketIdentifiers: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductVariantForProductMembershipPriceForArgs = {
  marketIdentifiers: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductVariantForProductNorwayB2bPriceForArgs = {
  marketIdentifiers: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductVariantForProductNorwayB2cSalesPriceForArgs = {
  marketIdentifiers: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductVariantForProductPriceVariantsArgs = {
  key: InputMaybe<Scalars['String']['input']>;
};


export type ProductVariantForProductStockLocationsArgs = {
  key: InputMaybe<Scalars['String']['input']>;
};

export type Profiling = {
  __typename?: 'Profiling';
  collection: Maybe<Scalars['String']['output']>;
  executionTime: Maybe<Scalars['Float']['output']>;
  lastIndexCompletedAt: Maybe<Scalars['Datetime']['output']>;
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
  summary: Maybe<SearchSummary>;
};

export type SearchSummary = {
  __typename?: 'SearchSummary';
  /** The last token to use for the next page. It only makes sense if used with `after`. */
  endToken: Maybe<Scalars['String']['output']>;
  facets: Maybe<Scalars['Hash']['output']>;
  /** It only makes sense if used with `skip`. Skip is not the best in terms of perofmance. Use after and/or before instead. */
  hasMoreHits: Maybe<Scalars['Boolean']['output']>;
  /** It only makes sense if used with `skip`. Skip is not the best in terms of perofmance. Use after and before instead. */
  hasPreviousHits: Maybe<Scalars['Boolean']['output']>;
  /** The price range of the search result. (this will re-executes the search query with group by price) */
  priceRange: Maybe<PriceRange>;
  profiling: Maybe<Profiling>;
  totalHits: Maybe<Scalars['Int']['output']>;
};


export type SearchSummaryFacetsArgs = {
  key: InputMaybe<Scalars['String']['input']>;
};


export type SearchSummaryPriceRangeArgs = {
  priceIdentifier?: InputMaybe<Scalars['String']['input']>;
};

export type Showcase = ItemRelationsInterface & SkuRelationsInterface & {
  __typename?: 'Showcase';
  hotspot: Maybe<Scalars['Hash']['output']>;
  items: Maybe<Array<Maybe<Document>>>;
  meta: Maybe<Scalars['Hash']['output']>;
  variants: Maybe<Array<Maybe<ProductVariant>>>;
};


export type ShowcaseHotspotArgs = {
  key: InputMaybe<Scalars['String']['input']>;
};


export type ShowcaseItemsArgs = {
  language?: InputMaybe<Array<InputMaybe<TenantLanguage>>>;
  publicationState?: InputMaybe<Array<InputMaybe<PublicationState>>>;
};


export type ShowcaseMetaArgs = {
  key: InputMaybe<Scalars['String']['input']>;
};


export type ShowcaseVariantsArgs = {
  language?: InputMaybe<Array<InputMaybe<TenantLanguage>>>;
  publicationState?: InputMaybe<Array<InputMaybe<PublicationState>>>;
};

export type SkuRelationsInterface = {
  variants: Maybe<Array<Maybe<ProductVariant>>>;
};


export type SkuRelationsInterfaceVariantsArgs = {
  language?: InputMaybe<Array<InputMaybe<TenantLanguage>>>;
  publicationState?: InputMaybe<Array<InputMaybe<PublicationState>>>;
};

/** The order to sort the results */
export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StoryFacet = {
  featured_items_name: InputMaybe<StringFacet>;
  featured_items_path: InputMaybe<StringFacet>;
  language: InputMaybe<StringFacet>;
  meta_title: InputMaybe<StringFacet>;
  name: InputMaybe<StringFacet>;
  parentPaths: InputMaybe<StringFacet>;
  publicationState: InputMaybe<StringFacet>;
  story_title: InputMaybe<StringFacet>;
  title: InputMaybe<StringFacet>;
  topics: InputMaybe<StringFacet>;
  type: InputMaybe<StringFacet>;
  upNext_items_name: InputMaybe<StringFacet>;
  upNext_items_path: InputMaybe<StringFacet>;
};

export type StoryFilter = {
  /** Logical AND filter to apply to the query */
  AND: InputMaybe<Array<InputMaybe<StoryFilter>>>;
  /** Logical OR filter to apply to the query */
  OR: InputMaybe<Array<InputMaybe<StoryFilter>>>;
  /** Filter on "aliases" */
  aliases: InputMaybe<StringFilter>;
  /** Filter on "createdAt" */
  createdAt: InputMaybe<DateFilter>;
  /** Filter on "depth" */
  depth: InputMaybe<NumberFilter>;
  /** Filter on "featured.items.itemId" */
  featured_items_itemId: InputMaybe<StringFilter>;
  /** Filter on "featured.items.name" */
  featured_items_name: InputMaybe<StringFilter>;
  /** Filter on "featured.items.parentId" */
  featured_items_parentId: InputMaybe<StringFilter>;
  /** Filter on "featured.items.path" */
  featured_items_path: InputMaybe<StringFilter>;
  /** Filter on "featured.items.shape" */
  featured_items_shape: InputMaybe<StringFilter>;
  /** Filter on "featured.items.type" */
  featured_items_type: InputMaybe<StringFilter>;
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
  /** Filter on "parentPaths" */
  parentPaths: InputMaybe<StringFilter>;
  /** Filter on "path" */
  path: InputMaybe<StringFilter>;
  /** Filter on "position" */
  position: InputMaybe<NumberFilter>;
  /** Filter on "publicationState" */
  publicationState: InputMaybe<StringFilter>;
  /** Filter on "publishedAt" */
  publishedAt: InputMaybe<DateFilter>;
  /** Filter on "shortcuts.parentId" */
  shortcuts_parentId: InputMaybe<StringFilter>;
  /** Filter on "shortcuts.path" */
  shortcuts_path: InputMaybe<StringFilter>;
  /** Filter on "shortcuts.position" */
  shortcuts_position: InputMaybe<NumberFilter>;
  /** Filter on "story.body.plainText" */
  story_body_plainText: InputMaybe<StringFilter>;
  /** Filter on "story.title" */
  story_title: InputMaybe<StringFilter>;
  /** Filter on "title" */
  title: InputMaybe<StringFilter>;
  /** Filter on "topics" */
  topics: InputMaybe<StringFilter>;
  /** Filter on "up-next.items.itemId" */
  upNext_items_itemId: InputMaybe<StringFilter>;
  /** Filter on "up-next.items.name" */
  upNext_items_name: InputMaybe<StringFilter>;
  /** Filter on "up-next.items.parentId" */
  upNext_items_parentId: InputMaybe<StringFilter>;
  /** Filter on "up-next.items.path" */
  upNext_items_path: InputMaybe<StringFilter>;
  /** Filter on "up-next.items.shape" */
  upNext_items_shape: InputMaybe<StringFilter>;
  /** Filter on "up-next.items.type" */
  upNext_items_type: InputMaybe<StringFilter>;
  /** Filter on "updatedAt" */
  updatedAt: InputMaybe<DateFilter>;
};

export type StoryQuery = {
  __typename?: 'StoryQuery';
  hits: Maybe<Array<Maybe<Story>>>;
  summary: Maybe<SearchSummary>;
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

export type StorySort = {
  /** Sort on "aliases" */
  aliases: InputMaybe<SortOrder>;
  /** Sort on "createdAt" */
  createdAt: InputMaybe<SortOrder>;
  /** Sort on "depth" */
  depth: InputMaybe<SortOrder>;
  /** Sort on "featured.items.itemId" */
  featured_items_itemId: InputMaybe<SortOrder>;
  /** Sort on "featured.items.name" */
  featured_items_name: InputMaybe<SortOrder>;
  /** Sort on "featured.items.parentId" */
  featured_items_parentId: InputMaybe<SortOrder>;
  /** Sort on "featured.items.path" */
  featured_items_path: InputMaybe<SortOrder>;
  /** Sort on "featured.items.shape" */
  featured_items_shape: InputMaybe<SortOrder>;
  /** Sort on "featured.items.type" */
  featured_items_type: InputMaybe<SortOrder>;
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
  /** Sort on "parentPaths" */
  parentPaths: InputMaybe<SortOrder>;
  /** Sort on "path" */
  path: InputMaybe<SortOrder>;
  /** Sort on "position" */
  position: InputMaybe<SortOrder>;
  /** Sort on "publicationState" */
  publicationState: InputMaybe<SortOrder>;
  /** Sort on "publishedAt" */
  publishedAt: InputMaybe<SortOrder>;
  /** Sort on the Score based on the query */
  score: InputMaybe<SortOrder>;
  /** Sort on "shortcuts.parentId" */
  shortcuts_parentId: InputMaybe<SortOrder>;
  /** Sort on "shortcuts.path" */
  shortcuts_path: InputMaybe<SortOrder>;
  /** Sort on "shortcuts.position" */
  shortcuts_position: InputMaybe<SortOrder>;
  /** Sort on "story.title" */
  story_title: InputMaybe<SortOrder>;
  /** Sort on "title" */
  title: InputMaybe<SortOrder>;
  /** Sort on "topics" */
  topics: InputMaybe<SortOrder>;
  /** Sort on "type" */
  type: InputMaybe<SortOrder>;
  /** Sort on "up-next.items.itemId" */
  upNext_items_itemId: InputMaybe<SortOrder>;
  /** Sort on "up-next.items.name" */
  upNext_items_name: InputMaybe<SortOrder>;
  /** Sort on "up-next.items.parentId" */
  upNext_items_parentId: InputMaybe<SortOrder>;
  /** Sort on "up-next.items.path" */
  upNext_items_path: InputMaybe<SortOrder>;
  /** Sort on "up-next.items.shape" */
  upNext_items_shape: InputMaybe<SortOrder>;
  /** Sort on "up-next.items.type" */
  upNext_items_type: InputMaybe<SortOrder>;
  /** Sort on "updatedAt" */
  updatedAt: InputMaybe<SortOrder>;
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

export type SubscriptionPlan = {
  __typename?: 'SubscriptionPlan';
  /** The Subscription Plan Identifier */
  identifier: Maybe<Scalars['String']['output']>;
  /** The Subscription Plan Name */
  name: Maybe<Scalars['String']['output']>;
  /** The Subscription Plan Periods */
  periods: Maybe<Array<Maybe<SubscriptionPlanPeriod>>>;
};

export type SubscriptionPlanMeteredVariable = {
  __typename?: 'SubscriptionPlanMeteredVariable';
  /** The Subscription Plan Metered Variable ID */
  id: Maybe<Scalars['ID']['output']>;
  /** The Subscription Plan Metered Variable UIdentifier */
  identifier: Maybe<Scalars['String']['output']>;
  /** The Subscription Plan Metered Variable Name */
  name: Maybe<Scalars['String']['output']>;
  /** The Subscription Plan Metered Variable Tier Type */
  tierType: Maybe<TierType>;
  /** The Subscription Plan Metered Variable Tiers */
  tiers: Maybe<Array<Maybe<SubscriptionPlanMeteredVariableTier>>>;
  /** The Subscription Plan Metered Variable Unit */
  unit: Maybe<Scalars['String']['output']>;
};

export type SubscriptionPlanMeteredVariableTier = {
  __typename?: 'SubscriptionPlanMeteredVariableTier';
  /** This is a syntactic sugar for getting the 'default' priceVariant value in the priceVariants list. */
  defaultPrice: Maybe<Scalars['Float']['output']>;
  /** This is a syntactic sugar for getting the 'membership-no' priceVariant value in the priceVariants list. */
  membershipNoPrice: Maybe<Scalars['Float']['output']>;
  /** This is a syntactic sugar for getting the 'membership' priceVariant value in the priceVariants list. */
  membershipPrice: Maybe<Scalars['Float']['output']>;
  /** This is a syntactic sugar for getting the 'norway-b2b' priceVariant value in the priceVariants list. */
  norwayB2bPrice: Maybe<Scalars['Float']['output']>;
  /** This is a syntactic sugar for getting the 'norway-b2c-sales' priceVariant value in the priceVariants list. */
  norwayB2cSalesPrice: Maybe<Scalars['Float']['output']>;
  priceVariants: Maybe<Scalars['Hash']['output']>;
  /** The Subscription Plan Metered Variable Tier Threshold */
  threshold: Maybe<Scalars['Int']['output']>;
};


export type SubscriptionPlanMeteredVariableTierPriceVariantsArgs = {
  key: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionPlanPeriod = {
  __typename?: 'SubscriptionPlanPeriod';
  /** The Subscription Plan Period ID */
  id: Maybe<Scalars['ID']['output']>;
  /** The Subscription Plan Recurring Period Phase */
  initial: Maybe<SubscriptionPlanPhase>;
  /** The Subscription Plan Period Name */
  name: Maybe<Scalars['String']['output']>;
  /** The Subscription Plan Recurring Period Phase */
  recurring: SubscriptionPlanPhase;
};

export type SubscriptionPlanPhase = {
  __typename?: 'SubscriptionPlanPhase';
  /** This is a syntactic sugar for getting the 'default' priceVariant value in the priceVariants list. */
  defaultPrice: Maybe<Scalars['Float']['output']>;
  /** This is a syntactic sugar for getting the 'membership-no' priceVariant value in the priceVariants list. */
  membershipNoPrice: Maybe<Scalars['Float']['output']>;
  /** This is a syntactic sugar for getting the 'membership' priceVariant value in the priceVariants list. */
  membershipPrice: Maybe<Scalars['Float']['output']>;
  /** The Subscription Plan Metered Variables. */
  meteredVariables: Maybe<Array<Maybe<SubscriptionPlanMeteredVariable>>>;
  /** This is a syntactic sugar for getting the 'norway-b2b' priceVariant value in the priceVariants list. */
  norwayB2bPrice: Maybe<Scalars['Float']['output']>;
  /** This is a syntactic sugar for getting the 'norway-b2c-sales' priceVariant value in the priceVariants list. */
  norwayB2cSalesPrice: Maybe<Scalars['Float']['output']>;
  /** The Subscription Plan Phase Period */
  period: Maybe<Scalars['String']['output']>;
  priceVariants: Maybe<Scalars['Hash']['output']>;
  /** The Subscription Plan Phase Unit */
  unit: Maybe<Scalars['String']['output']>;
};


export type SubscriptionPlanPhasePriceVariantsArgs = {
  key: InputMaybe<Scalars['String']['input']>;
};

export type TenantFacet = {
  attributes_key: InputMaybe<StringFacet>;
  attributes_value: InputMaybe<StringFacet>;
  blocks_banner_callToAction_action_label: InputMaybe<StringFacet>;
  blocks_banner_callToAction_action_url: InputMaybe<StringFacet>;
  blocks_banner_layout_displayWidth_contain: InputMaybe<StringFacet>;
  blocks_banner_layout_displayWidth_stretch: InputMaybe<StringFacet>;
  blocks_banner_layout_theme_dark: InputMaybe<StringFacet>;
  blocks_banner_layout_theme_light: InputMaybe<StringFacet>;
  blocks_banner_layout_theme_muted: InputMaybe<StringFacet>;
  blocks_banner_layout_theme_pastel: InputMaybe<StringFacet>;
  blocks_banner_layout_theme_vivid: InputMaybe<StringFacet>;
  blocks_banner_title: InputMaybe<StringFacet>;
  blocks_featureHighlights_layout_displayWidth_contain: InputMaybe<StringFacet>;
  blocks_featureHighlights_layout_displayWidth_stretch: InputMaybe<StringFacet>;
  blocks_featureHighlights_layout_theme_dark: InputMaybe<StringFacet>;
  blocks_featureHighlights_layout_theme_light: InputMaybe<StringFacet>;
  blocks_featureHighlights_layout_theme_muted: InputMaybe<StringFacet>;
  blocks_featureHighlights_layout_theme_pastel: InputMaybe<StringFacet>;
  blocks_featureHighlights_layout_theme_vivid: InputMaybe<StringFacet>;
  blocks_featureHighlights_usp_headline: InputMaybe<StringFacet>;
  blocks_pictureGrid_layout_displayWidth_contain: InputMaybe<StringFacet>;
  blocks_pictureGrid_layout_displayWidth_stretch: InputMaybe<StringFacet>;
  blocks_pictureGrid_layout_theme_dark: InputMaybe<StringFacet>;
  blocks_pictureGrid_layout_theme_light: InputMaybe<StringFacet>;
  blocks_pictureGrid_layout_theme_muted: InputMaybe<StringFacet>;
  blocks_pictureGrid_layout_theme_pastel: InputMaybe<StringFacet>;
  blocks_pictureGrid_layout_theme_vivid: InputMaybe<StringFacet>;
  blocks_pictureGrid_title: InputMaybe<StringFacet>;
  blocks_productSlider_layout_displayWidth_contain: InputMaybe<StringFacet>;
  blocks_productSlider_layout_displayWidth_stretch: InputMaybe<StringFacet>;
  blocks_productSlider_layout_theme_dark: InputMaybe<StringFacet>;
  blocks_productSlider_layout_theme_light: InputMaybe<StringFacet>;
  blocks_productSlider_layout_theme_muted: InputMaybe<StringFacet>;
  blocks_productSlider_layout_theme_pastel: InputMaybe<StringFacet>;
  blocks_productSlider_layout_theme_vivid: InputMaybe<StringFacet>;
  blocks_productSlider_products_skus: InputMaybe<StringFacet>;
  blocks_productSlider_title: InputMaybe<StringFacet>;
  blocks_storySlider_layout_displayWidth_contain: InputMaybe<StringFacet>;
  blocks_storySlider_layout_displayWidth_stretch: InputMaybe<StringFacet>;
  blocks_storySlider_layout_theme_dark: InputMaybe<StringFacet>;
  blocks_storySlider_layout_theme_light: InputMaybe<StringFacet>;
  blocks_storySlider_layout_theme_muted: InputMaybe<StringFacet>;
  blocks_storySlider_layout_theme_pastel: InputMaybe<StringFacet>;
  blocks_storySlider_layout_theme_vivid: InputMaybe<StringFacet>;
  blocks_storySlider_stories_items_name: InputMaybe<StringFacet>;
  blocks_storySlider_stories_items_path: InputMaybe<StringFacet>;
  blocks_storySlider_title: InputMaybe<StringFacet>;
  brand_items_name: InputMaybe<StringFacet>;
  brand_items_path: InputMaybe<StringFacet>;
  component_name: InputMaybe<StringFacet>;
  details_title: InputMaybe<StringFacet>;
  dimensions_depth_number: InputMaybe<NumberFacet>;
  dimensions_height_number: InputMaybe<NumberFacet>;
  dimensions_weight_number: InputMaybe<NumberFacet>;
  dimensions_width_number: InputMaybe<NumberFacet>;
  downloads_files_title: InputMaybe<StringFacet>;
  downloads_title: InputMaybe<StringFacet>;
  featured_items_name: InputMaybe<StringFacet>;
  featured_items_path: InputMaybe<StringFacet>;
  label: InputMaybe<StringFacet>;
  language: InputMaybe<StringFacet>;
  link_item_items_name: InputMaybe<StringFacet>;
  link_item_items_path: InputMaybe<StringFacet>;
  link_url: InputMaybe<StringFacet>;
  meta_title: InputMaybe<StringFacet>;
  name: InputMaybe<StringFacet>;
  parentPaths: InputMaybe<StringFacet>;
  price_default: InputMaybe<NumberFacet>;
  price_membership: InputMaybe<NumberFacet>;
  price_membershipNo: InputMaybe<NumberFacet>;
  price_norwayB2b: InputMaybe<NumberFacet>;
  price_norwayB2cSales: InputMaybe<NumberFacet>;
  publicationState: InputMaybe<StringFacet>;
  relatedProducts_items_name: InputMaybe<StringFacet>;
  relatedProducts_items_path: InputMaybe<StringFacet>;
  relatedProducts_skus: InputMaybe<StringFacet>;
  shape: InputMaybe<StringFacet>;
  sku: InputMaybe<StringFacet>;
  stock_default: InputMaybe<NumberFacet>;
  stock_oslo: InputMaybe<NumberFacet>;
  stock_toronto: InputMaybe<NumberFacet>;
  story_title: InputMaybe<StringFacet>;
  title: InputMaybe<StringFacet>;
  topics: InputMaybe<StringFacet>;
  type: InputMaybe<StringFacet>;
  upNext_items_name: InputMaybe<StringFacet>;
  upNext_items_path: InputMaybe<StringFacet>;
  variants_dimensions_depth_number: InputMaybe<NumberFacet>;
  variants_dimensions_height_number: InputMaybe<NumberFacet>;
  variants_dimensions_weight_number: InputMaybe<NumberFacet>;
  variants_dimensions_width_number: InputMaybe<NumberFacet>;
  variants_matchingProducts_skus: InputMaybe<StringFacet>;
  variants_name: InputMaybe<StringFacet>;
};

export type TenantFilter = {
  /** Logical AND filter to apply to the query */
  AND: InputMaybe<Array<InputMaybe<TenantFilter>>>;
  /** Logical OR filter to apply to the query */
  OR: InputMaybe<Array<InputMaybe<TenantFilter>>>;
  /** Filter on "aliases" */
  aliases: InputMaybe<StringFilter>;
  /** Filter on "variants.attributes.key" */
  attributes_key: InputMaybe<StringFilter>;
  /** Filter on "variants.attributes.value" */
  attributes_value: InputMaybe<StringFilter>;
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
  /** Filter on "blocks.banner.layout.display-width.contain" */
  blocks_banner_layout_displayWidth_contain: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.layout.display-width.stretch" */
  blocks_banner_layout_displayWidth_stretch: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.layout.theme.dark" */
  blocks_banner_layout_theme_dark: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.layout.theme.light" */
  blocks_banner_layout_theme_light: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.layout.theme.muted" */
  blocks_banner_layout_theme_muted: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.layout.theme.pastel" */
  blocks_banner_layout_theme_pastel: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.layout.theme.vivid" */
  blocks_banner_layout_theme_vivid: InputMaybe<StringFilter>;
  /** Filter on "blocks.banner.title" */
  blocks_banner_title: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.layout.background-media.image.caption.plainText" */
  blocks_featureHighlights_layout_backgroundMedia_image_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.layout.background-media.video.thumbnails.caption.plainText" */
  blocks_featureHighlights_layout_backgroundMedia_video_thumbnails_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.layout.display-width.contain" */
  blocks_featureHighlights_layout_displayWidth_contain: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.layout.display-width.stretch" */
  blocks_featureHighlights_layout_displayWidth_stretch: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.layout.theme.dark" */
  blocks_featureHighlights_layout_theme_dark: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.layout.theme.light" */
  blocks_featureHighlights_layout_theme_light: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.layout.theme.muted" */
  blocks_featureHighlights_layout_theme_muted: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.layout.theme.pastel" */
  blocks_featureHighlights_layout_theme_pastel: InputMaybe<StringFilter>;
  /** Filter on "blocks.feature-highlights.layout.theme.vivid" */
  blocks_featureHighlights_layout_theme_vivid: InputMaybe<StringFilter>;
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
  /** Filter on "blocks.picture-grid.layout.display-width.contain" */
  blocks_pictureGrid_layout_displayWidth_contain: InputMaybe<StringFilter>;
  /** Filter on "blocks.picture-grid.layout.display-width.stretch" */
  blocks_pictureGrid_layout_displayWidth_stretch: InputMaybe<StringFilter>;
  /** Filter on "blocks.picture-grid.layout.theme.dark" */
  blocks_pictureGrid_layout_theme_dark: InputMaybe<StringFilter>;
  /** Filter on "blocks.picture-grid.layout.theme.light" */
  blocks_pictureGrid_layout_theme_light: InputMaybe<StringFilter>;
  /** Filter on "blocks.picture-grid.layout.theme.muted" */
  blocks_pictureGrid_layout_theme_muted: InputMaybe<StringFilter>;
  /** Filter on "blocks.picture-grid.layout.theme.pastel" */
  blocks_pictureGrid_layout_theme_pastel: InputMaybe<StringFilter>;
  /** Filter on "blocks.picture-grid.layout.theme.vivid" */
  blocks_pictureGrid_layout_theme_vivid: InputMaybe<StringFilter>;
  /** Filter on "blocks.picture-grid.title" */
  blocks_pictureGrid_title: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.description.plainText" */
  blocks_productSlider_description_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.layout.background-media.image.caption.plainText" */
  blocks_productSlider_layout_backgroundMedia_image_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.layout.background-media.video.thumbnails.caption.plainText" */
  blocks_productSlider_layout_backgroundMedia_video_thumbnails_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.layout.display-width.contain" */
  blocks_productSlider_layout_displayWidth_contain: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.layout.display-width.stretch" */
  blocks_productSlider_layout_displayWidth_stretch: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.layout.theme.dark" */
  blocks_productSlider_layout_theme_dark: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.layout.theme.light" */
  blocks_productSlider_layout_theme_light: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.layout.theme.muted" */
  blocks_productSlider_layout_theme_muted: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.layout.theme.pastel" */
  blocks_productSlider_layout_theme_pastel: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.layout.theme.vivid" */
  blocks_productSlider_layout_theme_vivid: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.products.skus" */
  blocks_productSlider_products_skus: InputMaybe<StringFilter>;
  /** Filter on "blocks.product-slider.title" */
  blocks_productSlider_title: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.description.plainText" */
  blocks_storySlider_description_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.layout.background-media.image.caption.plainText" */
  blocks_storySlider_layout_backgroundMedia_image_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.layout.background-media.video.thumbnails.caption.plainText" */
  blocks_storySlider_layout_backgroundMedia_video_thumbnails_caption_plainText: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.layout.display-width.contain" */
  blocks_storySlider_layout_displayWidth_contain: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.layout.display-width.stretch" */
  blocks_storySlider_layout_displayWidth_stretch: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.layout.theme.dark" */
  blocks_storySlider_layout_theme_dark: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.layout.theme.light" */
  blocks_storySlider_layout_theme_light: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.layout.theme.muted" */
  blocks_storySlider_layout_theme_muted: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.layout.theme.pastel" */
  blocks_storySlider_layout_theme_pastel: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.layout.theme.vivid" */
  blocks_storySlider_layout_theme_vivid: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.stories.items.itemId" */
  blocks_storySlider_stories_items_itemId: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.stories.items.name" */
  blocks_storySlider_stories_items_name: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.stories.items.parentId" */
  blocks_storySlider_stories_items_parentId: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.stories.items.path" */
  blocks_storySlider_stories_items_path: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.stories.items.shape" */
  blocks_storySlider_stories_items_shape: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.stories.items.type" */
  blocks_storySlider_stories_items_type: InputMaybe<StringFilter>;
  /** Filter on "blocks.story-slider.title" */
  blocks_storySlider_title: InputMaybe<StringFilter>;
  /** Filter on "brand.items.itemId" */
  brand_items_itemId: InputMaybe<StringFilter>;
  /** Filter on "brand.items.name" */
  brand_items_name: InputMaybe<StringFilter>;
  /** Filter on "brand.items.parentId" */
  brand_items_parentId: InputMaybe<StringFilter>;
  /** Filter on "brand.items.path" */
  brand_items_path: InputMaybe<StringFilter>;
  /** Filter on "brand.items.shape" */
  brand_items_shape: InputMaybe<StringFilter>;
  /** Filter on "brand.items.type" */
  brand_items_type: InputMaybe<StringFilter>;
  /** Filter on "component_name" */
  component_name: InputMaybe<StringFilter>;
  /** Filter on "createdAt" */
  createdAt: InputMaybe<DateFilter>;
  /** Filter on "depth" */
  depth: InputMaybe<NumberFilter>;
  /** Filter on "description.plainText" */
  description_plainText: InputMaybe<StringFilter>;
  /** Filter on "details.description.plainText" */
  details_description_plainText: InputMaybe<StringFilter>;
  /** Filter on "details.title" */
  details_title: InputMaybe<StringFilter>;
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
  /** Filter on "featured.items.itemId" */
  featured_items_itemId: InputMaybe<StringFilter>;
  /** Filter on "featured.items.name" */
  featured_items_name: InputMaybe<StringFilter>;
  /** Filter on "featured.items.parentId" */
  featured_items_parentId: InputMaybe<StringFilter>;
  /** Filter on "featured.items.path" */
  featured_items_path: InputMaybe<StringFilter>;
  /** Filter on "featured.items.shape" */
  featured_items_shape: InputMaybe<StringFilter>;
  /** Filter on "featured.items.type" */
  featured_items_type: InputMaybe<StringFilter>;
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
  /** Filter on "link.item.items.itemId" */
  link_item_items_itemId: InputMaybe<StringFilter>;
  /** Filter on "link.item.items.name" */
  link_item_items_name: InputMaybe<StringFilter>;
  /** Filter on "link.item.items.parentId" */
  link_item_items_parentId: InputMaybe<StringFilter>;
  /** Filter on "link.item.items.path" */
  link_item_items_path: InputMaybe<StringFilter>;
  /** Filter on "link.item.items.shape" */
  link_item_items_shape: InputMaybe<StringFilter>;
  /** Filter on "link.item.items.type" */
  link_item_items_type: InputMaybe<StringFilter>;
  /** Filter on "link.url" */
  link_url: InputMaybe<StringFilter>;
  /** Filter on "logo.caption.plainText" */
  logo_caption_plainText: InputMaybe<StringFilter>;
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
  /** Filter on "parentPaths" */
  parentPaths: InputMaybe<StringFilter>;
  /** Filter on "path" */
  path: InputMaybe<StringFilter>;
  /** Filter on "position" */
  position: InputMaybe<NumberFilter>;
  /** Filter on "variants.priceVariants.default.price" */
  price_default: InputMaybe<NumberFilter>;
  /** Filter on "variants.priceVariants.membership.price" */
  price_membership: InputMaybe<NumberFilter>;
  /** Filter on "variants.priceVariants.membership-no.price" */
  price_membershipNo: InputMaybe<NumberFilter>;
  /** Filter on "variants.priceVariants.norway-b2b.price" */
  price_norwayB2b: InputMaybe<NumberFilter>;
  /** Filter on "variants.priceVariants.norway-b2c-sales.price" */
  price_norwayB2cSales: InputMaybe<NumberFilter>;
  /** Filter on "publicationState" */
  publicationState: InputMaybe<StringFilter>;
  /** Filter on "publishedAt" */
  publishedAt: InputMaybe<DateFilter>;
  /** Filter on "related-products.items.itemId" */
  relatedProducts_items_itemId: InputMaybe<StringFilter>;
  /** Filter on "related-products.items.name" */
  relatedProducts_items_name: InputMaybe<StringFilter>;
  /** Filter on "related-products.items.parentId" */
  relatedProducts_items_parentId: InputMaybe<StringFilter>;
  /** Filter on "related-products.items.path" */
  relatedProducts_items_path: InputMaybe<StringFilter>;
  /** Filter on "related-products.items.shape" */
  relatedProducts_items_shape: InputMaybe<StringFilter>;
  /** Filter on "related-products.items.type" */
  relatedProducts_items_type: InputMaybe<StringFilter>;
  /** Filter on "related-products.skus" */
  relatedProducts_skus: InputMaybe<StringFilter>;
  /** Filter on "shape" */
  shape: InputMaybe<StringFilter>;
  /** Filter on "shortcuts.parentId" */
  shortcuts_parentId: InputMaybe<StringFilter>;
  /** Filter on "shortcuts.path" */
  shortcuts_path: InputMaybe<StringFilter>;
  /** Filter on "shortcuts.position" */
  shortcuts_position: InputMaybe<NumberFilter>;
  /** Filter on "variants.sku" */
  sku: InputMaybe<StringFilter>;
  /** Filter on "variants.stockLocations.default.stock" */
  stock_default: InputMaybe<NumberFilter>;
  /** Filter on "variants.stockLocations.oslo.stock" */
  stock_oslo: InputMaybe<NumberFilter>;
  /** Filter on "variants.stockLocations.toronto.stock" */
  stock_toronto: InputMaybe<NumberFilter>;
  /** Filter on "story.body.plainText" */
  story_body_plainText: InputMaybe<StringFilter>;
  /** Filter on "story.title" */
  story_title: InputMaybe<StringFilter>;
  /** Filter on "title" */
  title: InputMaybe<StringFilter>;
  /** Filter on "topics" */
  topics: InputMaybe<StringFilter>;
  type_in: InputMaybe<Array<InputMaybe<ItemType>>>;
  /** Filter on "up-next.items.itemId" */
  upNext_items_itemId: InputMaybe<StringFilter>;
  /** Filter on "up-next.items.name" */
  upNext_items_name: InputMaybe<StringFilter>;
  /** Filter on "up-next.items.parentId" */
  upNext_items_parentId: InputMaybe<StringFilter>;
  /** Filter on "up-next.items.path" */
  upNext_items_path: InputMaybe<StringFilter>;
  /** Filter on "up-next.items.shape" */
  upNext_items_shape: InputMaybe<StringFilter>;
  /** Filter on "up-next.items.type" */
  upNext_items_type: InputMaybe<StringFilter>;
  /** Filter on "updatedAt" */
  updatedAt: InputMaybe<DateFilter>;
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
  /** Filter on "variants.matching-products.skus" */
  variants_matchingProducts_skus: InputMaybe<StringFilter>;
  /** Filter on "variants.name" */
  variants_name: InputMaybe<StringFilter>;
};

/** The languages available for the tenant */
export enum TenantLanguage {
  En = 'en',
  NoNb = 'noNb'
}

/** The price variant identifiers available for the tenant */
export enum TenantPriceVariantIdentifier {
  Default = 'default',
  Membership = 'membership',
  MembershipNo = 'membershipNo',
  NorwayB2b = 'norwayB2b',
  NorwayB2cSales = 'norwayB2cSales'
}

export type TenantSort = {
  /** Sort on "aliases" */
  aliases: InputMaybe<SortOrder>;
  /** Sort on "variants.attributes.key" */
  attributes_key: InputMaybe<SortOrder>;
  /** Sort on "variants.attributes.value" */
  attributes_value: InputMaybe<SortOrder>;
  /** Sort on "blocks.banner.call-to-action.action.label" */
  blocks_banner_callToAction_action_label: InputMaybe<SortOrder>;
  /** Sort on "blocks.banner.call-to-action.action.url" */
  blocks_banner_callToAction_action_url: InputMaybe<SortOrder>;
  /** Sort on "blocks.banner.layout.display-width.contain" */
  blocks_banner_layout_displayWidth_contain: InputMaybe<SortOrder>;
  /** Sort on "blocks.banner.layout.display-width.stretch" */
  blocks_banner_layout_displayWidth_stretch: InputMaybe<SortOrder>;
  /** Sort on "blocks.banner.layout.theme.dark" */
  blocks_banner_layout_theme_dark: InputMaybe<SortOrder>;
  /** Sort on "blocks.banner.layout.theme.light" */
  blocks_banner_layout_theme_light: InputMaybe<SortOrder>;
  /** Sort on "blocks.banner.layout.theme.muted" */
  blocks_banner_layout_theme_muted: InputMaybe<SortOrder>;
  /** Sort on "blocks.banner.layout.theme.pastel" */
  blocks_banner_layout_theme_pastel: InputMaybe<SortOrder>;
  /** Sort on "blocks.banner.layout.theme.vivid" */
  blocks_banner_layout_theme_vivid: InputMaybe<SortOrder>;
  /** Sort on "blocks.banner.title" */
  blocks_banner_title: InputMaybe<SortOrder>;
  /** Sort on "blocks.feature-highlights.layout.display-width.contain" */
  blocks_featureHighlights_layout_displayWidth_contain: InputMaybe<SortOrder>;
  /** Sort on "blocks.feature-highlights.layout.display-width.stretch" */
  blocks_featureHighlights_layout_displayWidth_stretch: InputMaybe<SortOrder>;
  /** Sort on "blocks.feature-highlights.layout.theme.dark" */
  blocks_featureHighlights_layout_theme_dark: InputMaybe<SortOrder>;
  /** Sort on "blocks.feature-highlights.layout.theme.light" */
  blocks_featureHighlights_layout_theme_light: InputMaybe<SortOrder>;
  /** Sort on "blocks.feature-highlights.layout.theme.muted" */
  blocks_featureHighlights_layout_theme_muted: InputMaybe<SortOrder>;
  /** Sort on "blocks.feature-highlights.layout.theme.pastel" */
  blocks_featureHighlights_layout_theme_pastel: InputMaybe<SortOrder>;
  /** Sort on "blocks.feature-highlights.layout.theme.vivid" */
  blocks_featureHighlights_layout_theme_vivid: InputMaybe<SortOrder>;
  /** Sort on "blocks.feature-highlights.usp.headline" */
  blocks_featureHighlights_usp_headline: InputMaybe<SortOrder>;
  /** Sort on "blocks.picture-grid.layout.display-width.contain" */
  blocks_pictureGrid_layout_displayWidth_contain: InputMaybe<SortOrder>;
  /** Sort on "blocks.picture-grid.layout.display-width.stretch" */
  blocks_pictureGrid_layout_displayWidth_stretch: InputMaybe<SortOrder>;
  /** Sort on "blocks.picture-grid.layout.theme.dark" */
  blocks_pictureGrid_layout_theme_dark: InputMaybe<SortOrder>;
  /** Sort on "blocks.picture-grid.layout.theme.light" */
  blocks_pictureGrid_layout_theme_light: InputMaybe<SortOrder>;
  /** Sort on "blocks.picture-grid.layout.theme.muted" */
  blocks_pictureGrid_layout_theme_muted: InputMaybe<SortOrder>;
  /** Sort on "blocks.picture-grid.layout.theme.pastel" */
  blocks_pictureGrid_layout_theme_pastel: InputMaybe<SortOrder>;
  /** Sort on "blocks.picture-grid.layout.theme.vivid" */
  blocks_pictureGrid_layout_theme_vivid: InputMaybe<SortOrder>;
  /** Sort on "blocks.picture-grid.title" */
  blocks_pictureGrid_title: InputMaybe<SortOrder>;
  /** Sort on "blocks.product-slider.layout.display-width.contain" */
  blocks_productSlider_layout_displayWidth_contain: InputMaybe<SortOrder>;
  /** Sort on "blocks.product-slider.layout.display-width.stretch" */
  blocks_productSlider_layout_displayWidth_stretch: InputMaybe<SortOrder>;
  /** Sort on "blocks.product-slider.layout.theme.dark" */
  blocks_productSlider_layout_theme_dark: InputMaybe<SortOrder>;
  /** Sort on "blocks.product-slider.layout.theme.light" */
  blocks_productSlider_layout_theme_light: InputMaybe<SortOrder>;
  /** Sort on "blocks.product-slider.layout.theme.muted" */
  blocks_productSlider_layout_theme_muted: InputMaybe<SortOrder>;
  /** Sort on "blocks.product-slider.layout.theme.pastel" */
  blocks_productSlider_layout_theme_pastel: InputMaybe<SortOrder>;
  /** Sort on "blocks.product-slider.layout.theme.vivid" */
  blocks_productSlider_layout_theme_vivid: InputMaybe<SortOrder>;
  /** Sort on "blocks.product-slider.products.skus" */
  blocks_productSlider_products_skus: InputMaybe<SortOrder>;
  /** Sort on "blocks.product-slider.title" */
  blocks_productSlider_title: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.layout.display-width.contain" */
  blocks_storySlider_layout_displayWidth_contain: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.layout.display-width.stretch" */
  blocks_storySlider_layout_displayWidth_stretch: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.layout.theme.dark" */
  blocks_storySlider_layout_theme_dark: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.layout.theme.light" */
  blocks_storySlider_layout_theme_light: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.layout.theme.muted" */
  blocks_storySlider_layout_theme_muted: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.layout.theme.pastel" */
  blocks_storySlider_layout_theme_pastel: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.layout.theme.vivid" */
  blocks_storySlider_layout_theme_vivid: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.stories.items.itemId" */
  blocks_storySlider_stories_items_itemId: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.stories.items.name" */
  blocks_storySlider_stories_items_name: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.stories.items.parentId" */
  blocks_storySlider_stories_items_parentId: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.stories.items.path" */
  blocks_storySlider_stories_items_path: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.stories.items.shape" */
  blocks_storySlider_stories_items_shape: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.stories.items.type" */
  blocks_storySlider_stories_items_type: InputMaybe<SortOrder>;
  /** Sort on "blocks.story-slider.title" */
  blocks_storySlider_title: InputMaybe<SortOrder>;
  /** Sort on "brand.items.itemId" */
  brand_items_itemId: InputMaybe<SortOrder>;
  /** Sort on "brand.items.name" */
  brand_items_name: InputMaybe<SortOrder>;
  /** Sort on "brand.items.parentId" */
  brand_items_parentId: InputMaybe<SortOrder>;
  /** Sort on "brand.items.path" */
  brand_items_path: InputMaybe<SortOrder>;
  /** Sort on "brand.items.shape" */
  brand_items_shape: InputMaybe<SortOrder>;
  /** Sort on "brand.items.type" */
  brand_items_type: InputMaybe<SortOrder>;
  /** Sort on "component_name" */
  component_name: InputMaybe<SortOrder>;
  /** Sort on "createdAt" */
  createdAt: InputMaybe<SortOrder>;
  /** Sort on "depth" */
  depth: InputMaybe<SortOrder>;
  /** Sort on "details.title" */
  details_title: InputMaybe<SortOrder>;
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
  /** Sort on "featured.items.itemId" */
  featured_items_itemId: InputMaybe<SortOrder>;
  /** Sort on "featured.items.name" */
  featured_items_name: InputMaybe<SortOrder>;
  /** Sort on "featured.items.parentId" */
  featured_items_parentId: InputMaybe<SortOrder>;
  /** Sort on "featured.items.path" */
  featured_items_path: InputMaybe<SortOrder>;
  /** Sort on "featured.items.shape" */
  featured_items_shape: InputMaybe<SortOrder>;
  /** Sort on "featured.items.type" */
  featured_items_type: InputMaybe<SortOrder>;
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
  /** Sort on "link.item.items.itemId" */
  link_item_items_itemId: InputMaybe<SortOrder>;
  /** Sort on "link.item.items.name" */
  link_item_items_name: InputMaybe<SortOrder>;
  /** Sort on "link.item.items.parentId" */
  link_item_items_parentId: InputMaybe<SortOrder>;
  /** Sort on "link.item.items.path" */
  link_item_items_path: InputMaybe<SortOrder>;
  /** Sort on "link.item.items.shape" */
  link_item_items_shape: InputMaybe<SortOrder>;
  /** Sort on "link.item.items.type" */
  link_item_items_type: InputMaybe<SortOrder>;
  /** Sort on "link.url" */
  link_url: InputMaybe<SortOrder>;
  /** Sort on "meta.title" */
  meta_title: InputMaybe<SortOrder>;
  /** Sort on "name" */
  name: InputMaybe<SortOrder>;
  /** Sort on "parentId" */
  parentId: InputMaybe<SortOrder>;
  /** Sort on "parentPaths" */
  parentPaths: InputMaybe<SortOrder>;
  /** Sort on "path" */
  path: InputMaybe<SortOrder>;
  /** Sort on "position" */
  position: InputMaybe<SortOrder>;
  /** Sort on "variants.priceVariants.default.price" */
  price_default: InputMaybe<SortOrder>;
  /** Sort on "variants.priceVariants.membership.price" */
  price_membership: InputMaybe<SortOrder>;
  /** Sort on "variants.priceVariants.membership-no.price" */
  price_membershipNo: InputMaybe<SortOrder>;
  /** Sort on "variants.priceVariants.norway-b2b.price" */
  price_norwayB2b: InputMaybe<SortOrder>;
  /** Sort on "variants.priceVariants.norway-b2c-sales.price" */
  price_norwayB2cSales: InputMaybe<SortOrder>;
  /** Sort on "publicationState" */
  publicationState: InputMaybe<SortOrder>;
  /** Sort on "publishedAt" */
  publishedAt: InputMaybe<SortOrder>;
  /** Sort on "related-products.items.itemId" */
  relatedProducts_items_itemId: InputMaybe<SortOrder>;
  /** Sort on "related-products.items.name" */
  relatedProducts_items_name: InputMaybe<SortOrder>;
  /** Sort on "related-products.items.parentId" */
  relatedProducts_items_parentId: InputMaybe<SortOrder>;
  /** Sort on "related-products.items.path" */
  relatedProducts_items_path: InputMaybe<SortOrder>;
  /** Sort on "related-products.items.shape" */
  relatedProducts_items_shape: InputMaybe<SortOrder>;
  /** Sort on "related-products.items.type" */
  relatedProducts_items_type: InputMaybe<SortOrder>;
  /** Sort on "related-products.skus" */
  relatedProducts_skus: InputMaybe<SortOrder>;
  /** Sort on the Score based on the query */
  score: InputMaybe<SortOrder>;
  /** Sort on "shape" */
  shape: InputMaybe<SortOrder>;
  /** Sort on "shortcuts.parentId" */
  shortcuts_parentId: InputMaybe<SortOrder>;
  /** Sort on "shortcuts.path" */
  shortcuts_path: InputMaybe<SortOrder>;
  /** Sort on "shortcuts.position" */
  shortcuts_position: InputMaybe<SortOrder>;
  /** Sort on "variants.sku" */
  sku: InputMaybe<SortOrder>;
  /** Sort on "variants.stockLocations.default.stock" */
  stock_default: InputMaybe<SortOrder>;
  /** Sort on "variants.stockLocations.oslo.stock" */
  stock_oslo: InputMaybe<SortOrder>;
  /** Sort on "variants.stockLocations.toronto.stock" */
  stock_toronto: InputMaybe<SortOrder>;
  /** Sort on "story.title" */
  story_title: InputMaybe<SortOrder>;
  /** Sort on "title" */
  title: InputMaybe<SortOrder>;
  /** Sort on "topics" */
  topics: InputMaybe<SortOrder>;
  /** Sort on "type" */
  type: InputMaybe<SortOrder>;
  /** Sort on "up-next.items.itemId" */
  upNext_items_itemId: InputMaybe<SortOrder>;
  /** Sort on "up-next.items.name" */
  upNext_items_name: InputMaybe<SortOrder>;
  /** Sort on "up-next.items.parentId" */
  upNext_items_parentId: InputMaybe<SortOrder>;
  /** Sort on "up-next.items.path" */
  upNext_items_path: InputMaybe<SortOrder>;
  /** Sort on "up-next.items.shape" */
  upNext_items_shape: InputMaybe<SortOrder>;
  /** Sort on "up-next.items.type" */
  upNext_items_type: InputMaybe<SortOrder>;
  /** Sort on "updatedAt" */
  updatedAt: InputMaybe<SortOrder>;
  /** Sort on "variants.dimensions.depth.number" */
  variants_dimensions_depth_number: InputMaybe<SortOrder>;
  /** Sort on "variants.dimensions.height.number" */
  variants_dimensions_height_number: InputMaybe<SortOrder>;
  /** Sort on "variants.dimensions.weight.number" */
  variants_dimensions_weight_number: InputMaybe<SortOrder>;
  /** Sort on "variants.dimensions.width.number" */
  variants_dimensions_width_number: InputMaybe<SortOrder>;
  /** Sort on "variants.matching-products.skus" */
  variants_matchingProducts_skus: InputMaybe<SortOrder>;
  /** Sort on "variants.name" */
  variants_name: InputMaybe<SortOrder>;
};

/** The stock locations identifiers available for the tenant */
export enum TenantStockLocationIdentifier {
  Default = 'default',
  Oslo = 'oslo',
  Toronto = 'toronto'
}

/** Crystallize Subscription Plan Metered Variable Tier Type */
export enum TierType {
  Graduated = 'graduated',
  Volume = 'volume'
}

export type VatType = {
  __typename?: 'VatType';
  name: Maybe<Scalars['String']['output']>;
  percent: Maybe<Scalars['Float']['output']>;
};

export type VideoComponent = {
  __typename?: 'VideoComponent';
  key: Maybe<Scalars['String']['output']>;
  playlists: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  thumbnails: Maybe<Array<Maybe<Image>>>;
  title: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
};

/** Brand (document) */
export type Brand = Document & {
  __typename?: 'brand';
  /** The Aliases */
  aliases: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The Breadcrumbs */
  breadcrumbs: Maybe<Array<Maybe<Array<Maybe<Breadcrumb>>>>>;
  component_name: Maybe<Scalars['String']['output']>;
  /** The date when the version was created */
  createdAt: Maybe<Scalars['Datetime']['output']>;
  /** The canonical depth in the tree */
  depth: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['RichText']['output']>;
  /** The external reference */
  externalReference: Maybe<Scalars['String']['output']>;
  /** The History of Paths */
  history: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The version id that includes the language and the publication state */
  id: Maybe<Scalars['ID']['output']>;
  /** The date when the document was indexed for the las time */
  indexedAt: Maybe<Scalars['Datetime']['output']>;
  /** The item id */
  itemId: Maybe<Scalars['ID']['output']>;
  /** The Language */
  language: Maybe<Scalars['String']['output']>;
  logo: Maybe<Array<Maybe<Image>>>;
  /** The name */
  name: Maybe<Scalars['String']['output']>;
  /** To be used with searchAfter and searchBefore */
  paginationToken: Maybe<Scalars['String']['output']>;
  /** The parent document */
  parent: Maybe<Document>;
  /** The parent id */
  parentId: Maybe<Scalars['ID']['output']>;
  /** The path */
  path: Maybe<Scalars['String']['output']>;
  /** The method to resolve the path */
  pathResolutionMethod: Maybe<PathResolutionMethod>;
  /** The canonical position in the tree */
  position: Maybe<Scalars['String']['output']>;
  /** The publication state */
  publicationState: Maybe<Scalars['String']['output']>;
  /** The date when the version was published */
  publishedAt: Maybe<Scalars['Datetime']['output']>;
  /** The score */
  score: Maybe<Scalars['Float']['output']>;
  /** The shape identifier */
  shape: Maybe<Scalars['String']['output']>;
  /** The Shortcuts */
  shortcuts: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The different topic paths */
  topicPaths: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The different topics */
  topics: Maybe<Scalars['Hash']['output']>;
  /** The type */
  type: Maybe<Scalars['String']['output']>;
  /** The date when the version was updated */
  updatedAt: Maybe<Scalars['Datetime']['output']>;
};


/** Brand (document) */
export type BrandBreadcrumbsArgs = {
  withShortcuts?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Brand (document) */
export type BrandDescriptionArgs = {
  format?: RichTextFormat;
};


/** Brand (document) */
export type BrandTopicPathsArgs = {
  leafOnly?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Brand (document) */
export type BrandTopicsArgs = {
  key: InputMaybe<Scalars['String']['input']>;
  leafOnly?: InputMaybe<Scalars['Boolean']['input']>;
  onlyLeafName?: InputMaybe<Scalars['Boolean']['input']>;
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
  /** The date when the version was created */
  createdAt: Maybe<Scalars['Datetime']['output']>;
  /** The canonical depth in the tree */
  depth: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['RichText']['output']>;
  /** The external reference */
  externalReference: Maybe<Scalars['String']['output']>;
  /** The History of Paths */
  history: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The version id that includes the language and the publication state */
  id: Maybe<Scalars['ID']['output']>;
  image: Maybe<Array<Maybe<Image>>>;
  /** The date when the document was indexed for the las time */
  indexedAt: Maybe<Scalars['Datetime']['output']>;
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
  parent: Maybe<Document>;
  /** The parent id */
  parentId: Maybe<Scalars['ID']['output']>;
  /** The path */
  path: Maybe<Scalars['String']['output']>;
  /** The method to resolve the path */
  pathResolutionMethod: Maybe<PathResolutionMethod>;
  /** The canonical position in the tree */
  position: Maybe<Scalars['String']['output']>;
  /** The publication state */
  publicationState: Maybe<Scalars['String']['output']>;
  /** The date when the version was published */
  publishedAt: Maybe<Scalars['Datetime']['output']>;
  /** The score */
  score: Maybe<Scalars['Float']['output']>;
  /** The shape identifier */
  shape: Maybe<Scalars['String']['output']>;
  /** The Shortcuts */
  shortcuts: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title: Maybe<Scalars['String']['output']>;
  /** The different topic paths */
  topicPaths: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The different topics */
  topics: Maybe<Scalars['Hash']['output']>;
  /** The type */
  type: Maybe<Scalars['String']['output']>;
  /** The date when the version was updated */
  updatedAt: Maybe<Scalars['Datetime']['output']>;
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
  sorting?: InputMaybe<TenantSort>;
  term: InputMaybe<Scalars['String']['input']>;
};


/** Category (folder) */
export type CategoryDescriptionArgs = {
  format?: RichTextFormat;
};


/** Category (folder) */
export type CategoryTopicPathsArgs = {
  leafOnly?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Category (folder) */
export type CategoryTopicsArgs = {
  key: InputMaybe<Scalars['String']['input']>;
  leafOnly?: InputMaybe<Scalars['Boolean']['input']>;
  onlyLeafName?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Landing page (document) */
export type LandingPage = Document & {
  __typename?: 'landingPage';
  /** The Aliases */
  aliases: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  blocks: Maybe<Array<Maybe<ComponentChoiceComponentForLandingPageBlocks>>>;
  /** The Breadcrumbs */
  breadcrumbs: Maybe<Array<Maybe<Array<Maybe<Breadcrumb>>>>>;
  /** The date when the version was created */
  createdAt: Maybe<Scalars['Datetime']['output']>;
  /** The canonical depth in the tree */
  depth: Maybe<Scalars['String']['output']>;
  /** The external reference */
  externalReference: Maybe<Scalars['String']['output']>;
  /** The History of Paths */
  history: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The version id that includes the language and the publication state */
  id: Maybe<Scalars['ID']['output']>;
  /** The date when the document was indexed for the las time */
  indexedAt: Maybe<Scalars['Datetime']['output']>;
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
  parent: Maybe<Document>;
  /** The parent id */
  parentId: Maybe<Scalars['ID']['output']>;
  /** The path */
  path: Maybe<Scalars['String']['output']>;
  /** The method to resolve the path */
  pathResolutionMethod: Maybe<PathResolutionMethod>;
  /** The canonical position in the tree */
  position: Maybe<Scalars['String']['output']>;
  /** The publication state */
  publicationState: Maybe<Scalars['String']['output']>;
  /** The date when the version was published */
  publishedAt: Maybe<Scalars['Datetime']['output']>;
  /** The score */
  score: Maybe<Scalars['Float']['output']>;
  /** The shape identifier */
  shape: Maybe<Scalars['String']['output']>;
  /** The Shortcuts */
  shortcuts: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The different topic paths */
  topicPaths: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The different topics */
  topics: Maybe<Scalars['Hash']['output']>;
  /** The type */
  type: Maybe<Scalars['String']['output']>;
  /** The date when the version was updated */
  updatedAt: Maybe<Scalars['Datetime']['output']>;
};


/** Landing page (document) */
export type LandingPageBreadcrumbsArgs = {
  withShortcuts?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Landing page (document) */
export type LandingPageTopicPathsArgs = {
  leafOnly?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Landing page (document) */
export type LandingPageTopicsArgs = {
  key: InputMaybe<Scalars['String']['input']>;
  leafOnly?: InputMaybe<Scalars['Boolean']['input']>;
  onlyLeafName?: InputMaybe<Scalars['Boolean']['input']>;
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
  /** The date when the version was created */
  createdAt: Maybe<Scalars['Datetime']['output']>;
  /** The canonical depth in the tree */
  depth: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['RichText']['output']>;
  /** The external reference */
  externalReference: Maybe<Scalars['String']['output']>;
  /** The History of Paths */
  history: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  icon: Maybe<Array<Maybe<Image>>>;
  /** The version id that includes the language and the publication state */
  id: Maybe<Scalars['ID']['output']>;
  /** The date when the document was indexed for the las time */
  indexedAt: Maybe<Scalars['Datetime']['output']>;
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
  parent: Maybe<Document>;
  /** The parent id */
  parentId: Maybe<Scalars['ID']['output']>;
  /** The path */
  path: Maybe<Scalars['String']['output']>;
  /** The method to resolve the path */
  pathResolutionMethod: Maybe<PathResolutionMethod>;
  /** The canonical position in the tree */
  position: Maybe<Scalars['String']['output']>;
  /** The publication state */
  publicationState: Maybe<Scalars['String']['output']>;
  /** The date when the version was published */
  publishedAt: Maybe<Scalars['Datetime']['output']>;
  /** The score */
  score: Maybe<Scalars['Float']['output']>;
  /** The shape identifier */
  shape: Maybe<Scalars['String']['output']>;
  /** The Shortcuts */
  shortcuts: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The different topic paths */
  topicPaths: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The different topics */
  topics: Maybe<Scalars['Hash']['output']>;
  /** The type */
  type: Maybe<Scalars['String']['output']>;
  /** The date when the version was updated */
  updatedAt: Maybe<Scalars['Datetime']['output']>;
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
  sorting?: InputMaybe<TenantSort>;
  term: InputMaybe<Scalars['String']['input']>;
};


/** Menu item (folder) */
export type MenuItemDescriptionArgs = {
  format?: RichTextFormat;
};


/** Menu item (folder) */
export type MenuItemTopicPathsArgs = {
  leafOnly?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Menu item (folder) */
export type MenuItemTopicsArgs = {
  key: InputMaybe<Scalars['String']['input']>;
  leafOnly?: InputMaybe<Scalars['Boolean']['input']>;
  onlyLeafName?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Product (product) */
export type Product = Document & Product & {
  __typename?: 'product';
  /** The Aliases */
  aliases: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** A relation to the brand document. Select the brand from the quickselect. */
  brand: Maybe<ItemRelations>;
  /** The Breadcrumbs */
  breadcrumbs: Maybe<Array<Maybe<Array<Maybe<Breadcrumb>>>>>;
  /** The date when the version was created */
  createdAt: Maybe<Scalars['Datetime']['output']>;
  /** The default variant for Product */
  defaultVariant: Maybe<ProductVariantForProduct>;
  /** The canonical depth in the tree */
  depth: Maybe<Scalars['String']['output']>;
  /** This is the short description of your product. Keep it to max 3 sentences and keep in mind SEO. If you do not fill in SEO meta, this field will be used for Web channels. */
  description: Maybe<Scalars['RichText']['output']>;
  details: Maybe<Array<Maybe<ContentChunksComponentForProductDetails>>>;
  dimensions: Maybe<DimensionsPiece>;
  downloads: Maybe<Array<Maybe<ContentChunksComponentForProductDownloads>>>;
  /** The external reference */
  externalReference: Maybe<Scalars['String']['output']>;
  /** The History of Paths */
  history: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The version id that includes the language and the publication state */
  id: Maybe<Scalars['ID']['output']>;
  /** The date when the document was indexed for the las time */
  indexedAt: Maybe<Scalars['Datetime']['output']>;
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
  parent: Maybe<Document>;
  /** The parent id */
  parentId: Maybe<Scalars['ID']['output']>;
  /** The path */
  path: Maybe<Scalars['String']['output']>;
  /** The method to resolve the path */
  pathResolutionMethod: Maybe<PathResolutionMethod>;
  /** The canonical position in the tree */
  position: Maybe<Scalars['String']['output']>;
  /** The publication state */
  publicationState: Maybe<Scalars['String']['output']>;
  /** The date when the version was published */
  publishedAt: Maybe<Scalars['Datetime']['output']>;
  relatedProducts: Maybe<ItemRelations>;
  /** The score */
  score: Maybe<Scalars['Float']['output']>;
  /** The shape identifier */
  shape: Maybe<Scalars['String']['output']>;
  /** The Shortcuts */
  shortcuts: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  story: Maybe<Array<Maybe<Paragraph>>>;
  title: Maybe<Scalars['String']['output']>;
  /** The different topic paths */
  topicPaths: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The different topics */
  topics: Maybe<Scalars['Hash']['output']>;
  /** The type */
  type: Maybe<Scalars['String']['output']>;
  /** The date when the version was updated */
  updatedAt: Maybe<Scalars['Datetime']['output']>;
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
export type ProductTopicPathsArgs = {
  leafOnly?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Product (product) */
export type ProductTopicsArgs = {
  key: InputMaybe<Scalars['String']['input']>;
  leafOnly?: InputMaybe<Scalars['Boolean']['input']>;
  onlyLeafName?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Story (document) */
export type Story = Document & {
  __typename?: 'story';
  /** The Aliases */
  aliases: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The Breadcrumbs */
  breadcrumbs: Maybe<Array<Maybe<Array<Maybe<Breadcrumb>>>>>;
  /** The date when the version was created */
  createdAt: Maybe<Scalars['Datetime']['output']>;
  /** The canonical depth in the tree */
  depth: Maybe<Scalars['String']['output']>;
  /** The external reference */
  externalReference: Maybe<Scalars['String']['output']>;
  featured: Maybe<ItemRelations>;
  /** The History of Paths */
  history: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The version id that includes the language and the publication state */
  id: Maybe<Scalars['ID']['output']>;
  /** The date when the document was indexed for the las time */
  indexedAt: Maybe<Scalars['Datetime']['output']>;
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
  parent: Maybe<Document>;
  /** The parent id */
  parentId: Maybe<Scalars['ID']['output']>;
  /** The path */
  path: Maybe<Scalars['String']['output']>;
  /** The method to resolve the path */
  pathResolutionMethod: Maybe<PathResolutionMethod>;
  /** The canonical position in the tree */
  position: Maybe<Scalars['String']['output']>;
  /** The publication state */
  publicationState: Maybe<Scalars['String']['output']>;
  /** The date when the version was published */
  publishedAt: Maybe<Scalars['Datetime']['output']>;
  /** The score */
  score: Maybe<Scalars['Float']['output']>;
  /** The shape identifier */
  shape: Maybe<Scalars['String']['output']>;
  /** The Shortcuts */
  shortcuts: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  story: Maybe<Array<Maybe<Paragraph>>>;
  title: Maybe<Scalars['String']['output']>;
  /** The different topic paths */
  topicPaths: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The different topics */
  topics: Maybe<Scalars['Hash']['output']>;
  /** The type */
  type: Maybe<Scalars['String']['output']>;
  upNext: Maybe<ItemRelations>;
  /** The date when the version was updated */
  updatedAt: Maybe<Scalars['Datetime']['output']>;
};


/** Story (document) */
export type StoryBreadcrumbsArgs = {
  withShortcuts?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Story (document) */
export type StoryIntroArgs = {
  format?: RichTextFormat;
};


/** Story (document) */
export type StoryTopicPathsArgs = {
  leafOnly?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Story (document) */
export type StoryTopicsArgs = {
  key: InputMaybe<Scalars['String']['input']>;
  leafOnly?: InputMaybe<Scalars['Boolean']['input']>;
  onlyLeafName?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FetchProductQueryVariables = Exact<{
  path: Scalars['String']['input'];
}>;


export type FetchProductQuery = { __typename?: 'Query', browse: { __typename?: 'BrowseQuery', product: { __typename?: 'ProductQuery', hits: Array<{ __typename?: 'product', name: string | null, path: string | null, description: any | null, details: Array<{ __typename?: 'ContentChunksComponentForProductDetails', title: string | null, description: any | null } | null> | null, breadcrumbs: Array<Array<{ __typename?: 'Breadcrumb', name: string | null, path: string | null } | null> | null> | null, brand: { __typename?: 'ItemRelations', items: Array<{ __typename?: 'brand', component_name: string | null, id: string | null, name: string | null, logo: Array<{ __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, height: number | null, width: number | null } | null> | null } | null> | null } | { __typename?: 'category', id: string | null, name: string | null } | { __typename?: 'landingPage', id: string | null, name: string | null } | { __typename?: 'menuItem', id: string | null, name: string | null } | { __typename?: 'product', id: string | null, name: string | null } | { __typename?: 'story', id: string | null, name: string | null } | null> | null } | null, story: Array<{ __typename?: 'Paragraph', title: string | null, body: any | null, images: Array<{ __typename?: 'Image', url: string | null, showcases: Array<{ __typename?: 'Showcase', hotspot: any | null, items: Array<{ __typename?: 'brand', name: string | null } | { __typename?: 'category', name: string | null } | { __typename?: 'landingPage', name: string | null } | { __typename?: 'menuItem', name: string | null } | { __typename?: 'product', name: string | null, defaultVariant: { __typename?: 'ProductVariantForProduct', defaultPrice: any | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, url: string | null, height: number | null } | null> | null } | null } | null } | { __typename?: 'story', name: string | null } | null> | null, variants: Array<{ __typename?: 'ProductVariantForProduct', name: string | null, defaultPrice: any | null, product: { __typename?: 'product', path: string | null } | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, url: string | null, height: number | null } | null> | null } | null } | null> | null } | null> | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null } | null> | null, relatedProducts: { __typename?: 'ItemRelations', items: Array<{ __typename?: 'brand' } | { __typename?: 'category' } | { __typename?: 'landingPage' } | { __typename?: 'menuItem' } | { __typename?: 'product', path: string | null, name: string | null, variants: Array<{ __typename?: 'ProductVariantForProduct', firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null } | null> | null, defaultVariant: { __typename?: 'ProductVariantForProduct', defaultPrice: any | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null } | null } | { __typename?: 'story' } | null> | null } | null, variants: Array<{ __typename?: 'ProductVariantForProduct', name: string | null, sku: string | null, priceVariants: any | null, attributes: any | null, defaultPrice: any | null, matchingProducts: { __typename?: 'ItemRelations', variants: Array<{ __typename?: 'ProductVariantForProduct', sku: string | null, name: string | null, defaultPrice: any | null, product: { __typename?: 'product', path: string | null } | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, height: number | null, width: number | null } | null> | null } | null } | null> | null } | null, dimensions: { __typename?: 'DimensionsPiece', depth: number | null, depthUnit: string | null, height: number | null, heightUnit: string | null, width: number | null, widthUnit: string | null, weight: number | null, weightUnit: string | null } | null, images: Array<{ __typename?: 'Image', url: string | null, altText: string | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null } | null> | null } | null> | null } | null } | null };

export type ProductVariantFragment = { __typename?: 'ProductVariantForProduct', name: string | null, sku: string | null, priceVariants: any | null, attributes: any | null, defaultPrice: any | null, matchingProducts: { __typename?: 'ItemRelations', variants: Array<{ __typename?: 'ProductVariantForProduct', sku: string | null, name: string | null, defaultPrice: any | null, product: { __typename?: 'product', path: string | null } | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, height: number | null, width: number | null } | null> | null } | null } | null> | null } | null, dimensions: { __typename?: 'DimensionsPiece', depth: number | null, depthUnit: string | null, height: number | null, heightUnit: string | null, width: number | null, widthUnit: string | null, weight: number | null, weightUnit: string | null } | null, images: Array<{ __typename?: 'Image', url: string | null, altText: string | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null };

export type FetchCategoryQueryVariables = Exact<{
  path: Scalars['String']['input'];
}>;


export type FetchCategoryQuery = { __typename?: 'Query', browse: { __typename?: 'BrowseQuery', category: { __typename?: 'CategoryQuery', hits: Array<{ __typename?: 'category', name: string | null, breadcrumbs: Array<Array<{ __typename?: 'Breadcrumb', name: string | null, path: string | null, id: string | null } | null> | null> | null, blocks: Array<{ __typename?: 'ComponentChoiceComponentForCategoryBlocks', storySlider: { __typename?: 'StorySliderPiece', title: string | null, description: any | null, stories: { __typename?: 'ItemRelations', items: Array<{ __typename?: 'brand' } | { __typename?: 'category' } | { __typename?: 'landingPage' } | { __typename?: 'menuItem' } | { __typename?: 'product' } | { __typename?: 'story', path: string | null, title: string | null, intro: any | null, media: { __typename?: 'ComponentChoiceComponentForStoryMedia', image: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, shoppableImage: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', title: string | null, playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, height: number | null, url: string | null } | null> | null } | null> | null } | null> | null } | null } | null> | null } | null, layout: { __typename?: 'LayoutPiece', displayWidth: any | null, theme: any | null, backgroundMedia: { __typename?: 'ComponentChoiceComponentForLayoutPieceBackgroundMedia', image: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, caption: any | null, meta: any | null, focalPoint: any | null, createdAt: any | null } | null> | null } | null> | null } | null } | null } | null, banner: { __typename?: 'BannerPiece', title: string | null, description: any | null, layout: { __typename?: 'LayoutPiece', displayWidth: any | null, theme: any | null, backgroundMedia: { __typename?: 'ComponentChoiceComponentForLayoutPieceBackgroundMedia', image: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, caption: any | null, meta: any | null, focalPoint: any | null, createdAt: any | null } | null> | null } | null> | null } | null } | null, banner: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null, showcases: Array<{ __typename?: 'Showcase', hotspot: any | null, items: Array<{ __typename?: 'brand', name: string | null, path: string | null } | { __typename?: 'category', name: string | null, path: string | null } | { __typename?: 'landingPage', name: string | null, path: string | null } | { __typename?: 'menuItem', name: string | null, path: string | null } | { __typename?: 'product', name: string | null, path: string | null, defaultVariant: { __typename?: 'ProductVariantForProduct', defaultPrice: any | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, url: string | null, height: number | null } | null> | null } | null } | null } | { __typename?: 'story', name: string | null, path: string | null } | null> | null, variants: Array<{ __typename?: 'ProductVariantForProduct', name: string | null, defaultPrice: any | null, product: { __typename?: 'product', path: string | null } | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, url: string | null, height: number | null } | null> | null } | null } | null> | null } | null> | null } | null> | null, callToAction: { __typename?: 'CallToActionPiece', action: Array<{ __typename?: 'ContentChunksComponentForCallToActionPieceAction', label: string | null, url: string | null } | null> | null } | null } | null, featureHighlights: { __typename?: 'FeatureHighlightsPiece', layout: { __typename?: 'LayoutPiece', displayWidth: any | null, theme: any | null, backgroundMedia: { __typename?: 'ComponentChoiceComponentForLayoutPieceBackgroundMedia', image: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, caption: any | null, meta: any | null, focalPoint: any | null, createdAt: any | null } | null> | null } | null> | null } | null } | null, usp: Array<{ __typename?: 'ContentChunksComponentForFeatureHighlightsPieceUsp', headline: string | null, description: any | null, icon: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null } | null> | null } | null, productSlider: { __typename?: 'ProductSliderPiece', title: string | null, description: any | null, products: { __typename?: 'ItemRelations', variants: Array<{ __typename?: 'ProductVariantForProduct', sku: string | null, name: string | null, defaultPrice: any | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null, product: { __typename?: 'product', path: string | null } | null } | null> | null, items: Array<{ __typename?: 'brand', itemId: string | null } | { __typename?: 'category', itemId: string | null } | { __typename?: 'landingPage', itemId: string | null } | { __typename?: 'menuItem', itemId: string | null } | { __typename?: 'product', itemId: string | null } | { __typename?: 'story', itemId: string | null } | null> | null } | null, layout: { __typename?: 'LayoutPiece', displayWidth: any | null, theme: any | null, backgroundMedia: { __typename?: 'ComponentChoiceComponentForLayoutPieceBackgroundMedia', image: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, caption: any | null, meta: any | null, focalPoint: any | null, createdAt: any | null } | null> | null } | null> | null } | null } | null } | null, pictureGrid: { __typename?: 'PictureGridPiece', title: string | null, description: any | null, images: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, showcases: Array<{ __typename?: 'Showcase', hotspot: any | null, items: Array<{ __typename?: 'brand', name: string | null } | { __typename?: 'category', name: string | null } | { __typename?: 'landingPage', name: string | null } | { __typename?: 'menuItem', name: string | null } | { __typename?: 'product', name: string | null, defaultVariant: { __typename?: 'ProductVariantForProduct', defaultPrice: any | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, url: string | null, height: number | null } | null> | null } | null } | null } | { __typename?: 'story', name: string | null } | null> | null, variants: Array<{ __typename?: 'ProductVariantForProduct', name: string | null, defaultPrice: any | null, product: { __typename?: 'product', path: string | null } | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, url: string | null, height: number | null } | null> | null } | null } | null> | null } | null> | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, layout: { __typename?: 'LayoutPiece', displayWidth: any | null, theme: any | null, backgroundMedia: { __typename?: 'ComponentChoiceComponentForLayoutPieceBackgroundMedia', image: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, caption: any | null, meta: any | null, focalPoint: any | null, createdAt: any | null } | null> | null } | null> | null } | null } | null } | null } | null> | null, children: { __typename?: 'SearchResults', hits: Array<{ __typename: 'brand' } | { __typename: 'category' } | { __typename: 'landingPage' } | { __typename: 'menuItem' } | { __typename: 'product', name: string | null, path: string | null, description: any | null, defaultVariant: { __typename?: 'ProductVariantForProduct', sku: string | null, defaultPrice: any | null, firstImage: { __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null } | null, variants: Array<{ __typename?: 'ProductVariantForProduct', sku: string | null, isDefault: boolean | null, name: string | null, firstImage: { __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null } | null> | null } | { __typename: 'story' } | null> | null } | null } | null> | null } | null } | null };

export type FetchAllCategoriesQueryVariables = Exact<{
  path: Scalars['String']['input'];
}>;


export type FetchAllCategoriesQuery = { __typename?: 'Query', browse: { __typename?: 'BrowseQuery', category: { __typename?: 'CategoryQuery', hits: Array<{ __typename?: 'category', id: string | null, name: string | null, breadcrumbs: Array<Array<{ __typename?: 'Breadcrumb', id: string | null, name: string | null, path: string | null } | null> | null> | null, blocks: Array<{ __typename?: 'ComponentChoiceComponentForCategoryBlocks', storySlider: { __typename?: 'StorySliderPiece', title: string | null, description: any | null, stories: { __typename?: 'ItemRelations', items: Array<{ __typename?: 'brand' } | { __typename?: 'category' } | { __typename?: 'landingPage' } | { __typename?: 'menuItem' } | { __typename?: 'product' } | { __typename?: 'story', path: string | null, title: string | null, intro: any | null, media: { __typename?: 'ComponentChoiceComponentForStoryMedia', image: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, shoppableImage: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', title: string | null, playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, height: number | null, url: string | null } | null> | null } | null> | null } | null> | null } | null } | null> | null } | null, layout: { __typename?: 'LayoutPiece', displayWidth: any | null, theme: any | null, backgroundMedia: { __typename?: 'ComponentChoiceComponentForLayoutPieceBackgroundMedia', image: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, caption: any | null, meta: any | null, focalPoint: any | null, createdAt: any | null } | null> | null } | null> | null } | null } | null } | null, banner: { __typename?: 'BannerPiece', title: string | null, description: any | null, layout: { __typename?: 'LayoutPiece', displayWidth: any | null, theme: any | null, backgroundMedia: { __typename?: 'ComponentChoiceComponentForLayoutPieceBackgroundMedia', image: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, caption: any | null, meta: any | null, focalPoint: any | null, createdAt: any | null } | null> | null } | null> | null } | null } | null, banner: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null, showcases: Array<{ __typename?: 'Showcase', hotspot: any | null, items: Array<{ __typename?: 'brand', name: string | null, path: string | null } | { __typename?: 'category', name: string | null, path: string | null } | { __typename?: 'landingPage', name: string | null, path: string | null } | { __typename?: 'menuItem', name: string | null, path: string | null } | { __typename?: 'product', name: string | null, path: string | null, defaultVariant: { __typename?: 'ProductVariantForProduct', defaultPrice: any | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, url: string | null, height: number | null } | null> | null } | null } | null } | { __typename?: 'story', name: string | null, path: string | null } | null> | null, variants: Array<{ __typename?: 'ProductVariantForProduct', name: string | null, defaultPrice: any | null, product: { __typename?: 'product', path: string | null } | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, url: string | null, height: number | null } | null> | null } | null } | null> | null } | null> | null } | null> | null, callToAction: { __typename?: 'CallToActionPiece', action: Array<{ __typename?: 'ContentChunksComponentForCallToActionPieceAction', label: string | null, url: string | null } | null> | null } | null } | null, featureHighlights: { __typename?: 'FeatureHighlightsPiece', layout: { __typename?: 'LayoutPiece', displayWidth: any | null, theme: any | null, backgroundMedia: { __typename?: 'ComponentChoiceComponentForLayoutPieceBackgroundMedia', image: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, caption: any | null, meta: any | null, focalPoint: any | null, createdAt: any | null } | null> | null } | null> | null } | null } | null, usp: Array<{ __typename?: 'ContentChunksComponentForFeatureHighlightsPieceUsp', headline: string | null, description: any | null, icon: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null } | null> | null } | null, productSlider: { __typename?: 'ProductSliderPiece', title: string | null, description: any | null, products: { __typename?: 'ItemRelations', variants: Array<{ __typename?: 'ProductVariantForProduct', sku: string | null, name: string | null, defaultPrice: any | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null, product: { __typename?: 'product', path: string | null } | null } | null> | null, items: Array<{ __typename?: 'brand', itemId: string | null } | { __typename?: 'category', itemId: string | null } | { __typename?: 'landingPage', itemId: string | null } | { __typename?: 'menuItem', itemId: string | null } | { __typename?: 'product', itemId: string | null } | { __typename?: 'story', itemId: string | null } | null> | null } | null, layout: { __typename?: 'LayoutPiece', displayWidth: any | null, theme: any | null, backgroundMedia: { __typename?: 'ComponentChoiceComponentForLayoutPieceBackgroundMedia', image: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, caption: any | null, meta: any | null, focalPoint: any | null, createdAt: any | null } | null> | null } | null> | null } | null } | null } | null, pictureGrid: { __typename?: 'PictureGridPiece', title: string | null, description: any | null, images: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, showcases: Array<{ __typename?: 'Showcase', hotspot: any | null, items: Array<{ __typename?: 'brand', name: string | null } | { __typename?: 'category', name: string | null } | { __typename?: 'landingPage', name: string | null } | { __typename?: 'menuItem', name: string | null } | { __typename?: 'product', name: string | null, defaultVariant: { __typename?: 'ProductVariantForProduct', defaultPrice: any | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, url: string | null, height: number | null } | null> | null } | null } | null } | { __typename?: 'story', name: string | null } | null> | null, variants: Array<{ __typename?: 'ProductVariantForProduct', name: string | null, defaultPrice: any | null, product: { __typename?: 'product', path: string | null } | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, url: string | null, height: number | null } | null> | null } | null } | null> | null } | null> | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, layout: { __typename?: 'LayoutPiece', displayWidth: any | null, theme: any | null, backgroundMedia: { __typename?: 'ComponentChoiceComponentForLayoutPieceBackgroundMedia', image: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, caption: any | null, meta: any | null, focalPoint: any | null, createdAt: any | null } | null> | null } | null> | null } | null } | null } | null } | null> | null, children: { __typename?: 'SearchResults', hits: Array<{ __typename?: 'brand', id: string | null, name: string | null } | { __typename?: 'category', id: string | null, name: string | null, path: string | null } | { __typename?: 'landingPage', id: string | null, name: string | null } | { __typename?: 'menuItem', id: string | null, name: string | null } | { __typename?: 'product', id: string | null, name: string | null } | { __typename?: 'story', id: string | null, name: string | null } | null> | null } | null } | null> | null } | null } | null };

export type FetchLandingPageQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchLandingPageQuery = { __typename?: 'Query', browse: { __typename?: 'BrowseQuery', landingPage: { __typename?: 'LandingPageQuery', hits: Array<{ __typename?: 'landingPage', name: string | null, blocks: Array<{ __typename?: 'ComponentChoiceComponentForLandingPageBlocks', storySlider: { __typename?: 'StorySliderPiece', title: string | null, description: any | null, stories: { __typename?: 'ItemRelations', items: Array<{ __typename?: 'brand' } | { __typename?: 'category' } | { __typename?: 'landingPage' } | { __typename?: 'menuItem' } | { __typename?: 'product' } | { __typename?: 'story', path: string | null, title: string | null, intro: any | null, media: { __typename?: 'ComponentChoiceComponentForStoryMedia', image: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, shoppableImage: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', title: string | null, playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, height: number | null, url: string | null } | null> | null } | null> | null } | null> | null } | null } | null> | null } | null, layout: { __typename?: 'LayoutPiece', displayWidth: any | null, theme: any | null, backgroundMedia: { __typename?: 'ComponentChoiceComponentForLayoutPieceBackgroundMedia', image: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, caption: any | null, meta: any | null, focalPoint: any | null, createdAt: any | null } | null> | null } | null> | null } | null } | null } | null, banner: { __typename?: 'BannerPiece', title: string | null, description: any | null, layout: { __typename?: 'LayoutPiece', displayWidth: any | null, theme: any | null, backgroundMedia: { __typename?: 'ComponentChoiceComponentForLayoutPieceBackgroundMedia', image: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, caption: any | null, meta: any | null, focalPoint: any | null, createdAt: any | null } | null> | null } | null> | null } | null } | null, banner: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null, showcases: Array<{ __typename?: 'Showcase', hotspot: any | null, items: Array<{ __typename?: 'brand', name: string | null, path: string | null } | { __typename?: 'category', name: string | null, path: string | null } | { __typename?: 'landingPage', name: string | null, path: string | null } | { __typename?: 'menuItem', name: string | null, path: string | null } | { __typename?: 'product', name: string | null, path: string | null, defaultVariant: { __typename?: 'ProductVariantForProduct', defaultPrice: any | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, url: string | null, height: number | null } | null> | null } | null } | null } | { __typename?: 'story', name: string | null, path: string | null } | null> | null, variants: Array<{ __typename?: 'ProductVariantForProduct', name: string | null, defaultPrice: any | null, product: { __typename?: 'product', path: string | null } | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, url: string | null, height: number | null } | null> | null } | null } | null> | null } | null> | null } | null> | null, callToAction: { __typename?: 'CallToActionPiece', action: Array<{ __typename?: 'ContentChunksComponentForCallToActionPieceAction', label: string | null, url: string | null } | null> | null } | null } | null, featureHighlights: { __typename?: 'FeatureHighlightsPiece', layout: { __typename?: 'LayoutPiece', displayWidth: any | null, theme: any | null, backgroundMedia: { __typename?: 'ComponentChoiceComponentForLayoutPieceBackgroundMedia', image: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, caption: any | null, meta: any | null, focalPoint: any | null, createdAt: any | null } | null> | null } | null> | null } | null } | null, usp: Array<{ __typename?: 'ContentChunksComponentForFeatureHighlightsPieceUsp', headline: string | null, description: any | null, icon: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null } | null> | null } | null, productSlider: { __typename?: 'ProductSliderPiece', title: string | null, description: any | null, products: { __typename?: 'ItemRelations', variants: Array<{ __typename?: 'ProductVariantForProduct', sku: string | null, name: string | null, defaultPrice: any | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null, product: { __typename?: 'product', path: string | null } | null } | null> | null, items: Array<{ __typename?: 'brand', itemId: string | null } | { __typename?: 'category', itemId: string | null } | { __typename?: 'landingPage', itemId: string | null } | { __typename?: 'menuItem', itemId: string | null } | { __typename?: 'product', itemId: string | null } | { __typename?: 'story', itemId: string | null } | null> | null } | null, layout: { __typename?: 'LayoutPiece', displayWidth: any | null, theme: any | null, backgroundMedia: { __typename?: 'ComponentChoiceComponentForLayoutPieceBackgroundMedia', image: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, caption: any | null, meta: any | null, focalPoint: any | null, createdAt: any | null } | null> | null } | null> | null } | null } | null } | null, pictureGrid: { __typename?: 'PictureGridPiece', title: string | null, description: any | null, images: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, showcases: Array<{ __typename?: 'Showcase', hotspot: any | null, items: Array<{ __typename?: 'brand', name: string | null } | { __typename?: 'category', name: string | null } | { __typename?: 'landingPage', name: string | null } | { __typename?: 'menuItem', name: string | null } | { __typename?: 'product', name: string | null, defaultVariant: { __typename?: 'ProductVariantForProduct', defaultPrice: any | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, url: string | null, height: number | null } | null> | null } | null } | null } | { __typename?: 'story', name: string | null } | null> | null, variants: Array<{ __typename?: 'ProductVariantForProduct', name: string | null, defaultPrice: any | null, product: { __typename?: 'product', path: string | null } | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, url: string | null, height: number | null } | null> | null } | null } | null> | null } | null> | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, layout: { __typename?: 'LayoutPiece', displayWidth: any | null, theme: any | null, backgroundMedia: { __typename?: 'ComponentChoiceComponentForLayoutPieceBackgroundMedia', image: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, caption: any | null, meta: any | null, focalPoint: any | null, createdAt: any | null } | null> | null } | null> | null } | null } | null } | null } | null> | null } | null> | null } | null } | null };

export type FetchStoryQueryVariables = Exact<{
  path: Scalars['String']['input'];
}>;


export type FetchStoryQuery = { __typename?: 'Query', browse: { __typename?: 'BrowseQuery', story: { __typename?: 'StoryQuery', hits: Array<{ __typename?: 'story', intro: any | null, title: string | null, breadcrumbs: Array<Array<{ __typename?: 'Breadcrumb', path: string | null, name: string | null, id: string | null } | null> | null> | null, featured: { __typename?: 'ItemRelations', items: Array<{ __typename?: 'brand', path: string | null } | { __typename?: 'category', path: string | null } | { __typename?: 'landingPage', path: string | null } | { __typename?: 'menuItem', path: string | null } | { __typename?: 'product', name: string | null, description: any | null, path: string | null, defaultVariant: { __typename?: 'ProductVariantForProduct', sku: string | null, defaultPrice: any | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, url: string | null, height: number | null } | null> | null } | null } | null } | { __typename?: 'story', path: string | null } | null> | null } | null, upNext: { __typename?: 'ItemRelations', items: Array<{ __typename?: 'brand', path: string | null } | { __typename?: 'category', path: string | null } | { __typename?: 'landingPage', path: string | null } | { __typename?: 'menuItem', path: string | null } | { __typename?: 'product', path: string | null } | { __typename?: 'story', path: string | null, title: string | null, media: { __typename?: 'ComponentChoiceComponentForStoryMedia', image: Array<{ __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, shoppableImage: Array<{ __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null, showcases: Array<{ __typename?: 'Showcase', hotspot: any | null, items: Array<{ __typename?: 'brand', name: string | null } | { __typename?: 'category', name: string | null } | { __typename?: 'landingPage', name: string | null } | { __typename?: 'menuItem', name: string | null } | { __typename?: 'product', name: string | null, defaultVariant: { __typename?: 'ProductVariantForProduct', defaultPrice: any | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, url: string | null, height: number | null } | null> | null } | null } | null } | { __typename?: 'story', name: string | null } | null> | null, variants: Array<{ __typename?: 'ProductVariantForProduct', name: string | null, defaultPrice: any | null, product: { __typename?: 'product', path: string | null } | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, url: string | null, height: number | null } | null> | null } | null } | null> | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', playlists: Array<string | null> | null, title: string | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, caption: any | null, focalPoint: any | null } | null> | null } | null> | null } | null } | null> | null } | null, story: Array<{ __typename?: 'Paragraph', title: string | null, body: any | null, images: Array<{ __typename?: 'Image', url: string | null, altText: string | null, caption: any | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null } | null> | null, media: { __typename?: 'ComponentChoiceComponentForStoryMedia', image: Array<{ __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, shoppableImage: Array<{ __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null, showcases: Array<{ __typename?: 'Showcase', hotspot: any | null, items: Array<{ __typename?: 'brand', name: string | null } | { __typename?: 'category', name: string | null } | { __typename?: 'landingPage', name: string | null } | { __typename?: 'menuItem', name: string | null } | { __typename?: 'product', name: string | null, defaultVariant: { __typename?: 'ProductVariantForProduct', defaultPrice: any | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, url: string | null, height: number | null } | null> | null } | null } | null } | { __typename?: 'story', name: string | null } | null> | null, variants: Array<{ __typename?: 'ProductVariantForProduct', name: string | null, defaultPrice: any | null, product: { __typename?: 'product', path: string | null } | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, url: string | null, height: number | null } | null> | null } | null } | null> | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', playlists: Array<string | null> | null, title: string | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, caption: any | null, focalPoint: any | null } | null> | null } | null> | null } | null } | null> | null } | null } | null };

export type StoryContentFragment = { __typename?: 'story', title: string | null, media: { __typename?: 'ComponentChoiceComponentForStoryMedia', image: Array<{ __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, shoppableImage: Array<{ __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null, showcases: Array<{ __typename?: 'Showcase', hotspot: any | null, items: Array<{ __typename?: 'brand', name: string | null } | { __typename?: 'category', name: string | null } | { __typename?: 'landingPage', name: string | null } | { __typename?: 'menuItem', name: string | null } | { __typename?: 'product', name: string | null, defaultVariant: { __typename?: 'ProductVariantForProduct', defaultPrice: any | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, url: string | null, height: number | null } | null> | null } | null } | null } | { __typename?: 'story', name: string | null } | null> | null, variants: Array<{ __typename?: 'ProductVariantForProduct', name: string | null, defaultPrice: any | null, product: { __typename?: 'product', path: string | null } | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, url: string | null, height: number | null } | null> | null } | null } | null> | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', playlists: Array<string | null> | null, title: string | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, caption: any | null, focalPoint: any | null } | null> | null } | null> | null } | null };

export type CommonProductVariantFragment = { __typename?: 'ProductVariantForProduct', defaultPrice: any | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, url: string | null, height: number | null } | null> | null } | null };

export type ShowcasesFragment = { __typename?: 'Showcase', hotspot: any | null, items: Array<{ __typename?: 'brand', name: string | null } | { __typename?: 'category', name: string | null } | { __typename?: 'landingPage', name: string | null } | { __typename?: 'menuItem', name: string | null } | { __typename?: 'product', name: string | null, defaultVariant: { __typename?: 'ProductVariantForProduct', defaultPrice: any | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, url: string | null, height: number | null } | null> | null } | null } | null } | { __typename?: 'story', name: string | null } | null> | null, variants: Array<{ __typename?: 'ProductVariantForProduct', name: string | null, defaultPrice: any | null, product: { __typename?: 'product', path: string | null } | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, url: string | null, height: number | null } | null> | null } | null } | null> | null };

export type FetchAllStoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchAllStoriesQuery = { __typename?: 'Query', browse: { __typename?: 'BrowseQuery', category: { __typename?: 'CategoryQuery', hits: Array<{ __typename?: 'category', title: string | null, breadcrumbs: Array<Array<{ __typename?: 'Breadcrumb', path: string | null, name: string | null, id: string | null } | null> | null> | null, children: { __typename?: 'SearchResults', hits: Array<{ __typename?: 'brand', id: string | null, path: string | null } | { __typename?: 'category', id: string | null, path: string | null } | { __typename?: 'landingPage', id: string | null, path: string | null } | { __typename?: 'menuItem', id: string | null, path: string | null } | { __typename?: 'product', id: string | null, path: string | null } | { __typename?: 'story', title: string | null, intro: any | null, id: string | null, path: string | null, media: { __typename?: 'ComponentChoiceComponentForStoryMedia', image: Array<{ __typename?: 'Image', url: string | null, altText: string | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, shoppableImage: Array<{ __typename?: 'Image', url: string | null, altText: string | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null } | null> | null } | null } | null> | null } | null } | null> | null } | null } | null };

export type ImageFragment = { __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null };

export type LayoutFragment = { __typename?: 'LayoutPiece', displayWidth: any | null, theme: any | null, backgroundMedia: { __typename?: 'ComponentChoiceComponentForLayoutPieceBackgroundMedia', image: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, caption: any | null, meta: any | null, focalPoint: any | null, createdAt: any | null } | null> | null } | null> | null } | null };

export type BannerFragment = { __typename?: 'BannerPiece', title: string | null, description: any | null, layout: { __typename?: 'LayoutPiece', displayWidth: any | null, theme: any | null, backgroundMedia: { __typename?: 'ComponentChoiceComponentForLayoutPieceBackgroundMedia', image: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, caption: any | null, meta: any | null, focalPoint: any | null, createdAt: any | null } | null> | null } | null> | null } | null } | null, banner: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null, showcases: Array<{ __typename?: 'Showcase', hotspot: any | null, items: Array<{ __typename?: 'brand', name: string | null, path: string | null } | { __typename?: 'category', name: string | null, path: string | null } | { __typename?: 'landingPage', name: string | null, path: string | null } | { __typename?: 'menuItem', name: string | null, path: string | null } | { __typename?: 'product', name: string | null, path: string | null, defaultVariant: { __typename?: 'ProductVariantForProduct', defaultPrice: any | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, url: string | null, height: number | null } | null> | null } | null } | null } | { __typename?: 'story', name: string | null, path: string | null } | null> | null, variants: Array<{ __typename?: 'ProductVariantForProduct', name: string | null, defaultPrice: any | null, product: { __typename?: 'product', path: string | null } | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, url: string | null, height: number | null } | null> | null } | null } | null> | null } | null> | null } | null> | null, callToAction: { __typename?: 'CallToActionPiece', action: Array<{ __typename?: 'ContentChunksComponentForCallToActionPieceAction', label: string | null, url: string | null } | null> | null } | null };

export type FeatureHighlightsFragment = { __typename?: 'FeatureHighlightsPiece', layout: { __typename?: 'LayoutPiece', displayWidth: any | null, theme: any | null, backgroundMedia: { __typename?: 'ComponentChoiceComponentForLayoutPieceBackgroundMedia', image: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, caption: any | null, meta: any | null, focalPoint: any | null, createdAt: any | null } | null> | null } | null> | null } | null } | null, usp: Array<{ __typename?: 'ContentChunksComponentForFeatureHighlightsPieceUsp', headline: string | null, description: any | null, icon: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null } | null> | null };

export type PictureGridFragment = { __typename?: 'PictureGridPiece', title: string | null, description: any | null, images: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, showcases: Array<{ __typename?: 'Showcase', hotspot: any | null, items: Array<{ __typename?: 'brand', name: string | null } | { __typename?: 'category', name: string | null } | { __typename?: 'landingPage', name: string | null } | { __typename?: 'menuItem', name: string | null } | { __typename?: 'product', name: string | null, defaultVariant: { __typename?: 'ProductVariantForProduct', defaultPrice: any | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, url: string | null, height: number | null } | null> | null } | null } | null } | { __typename?: 'story', name: string | null } | null> | null, variants: Array<{ __typename?: 'ProductVariantForProduct', name: string | null, defaultPrice: any | null, product: { __typename?: 'product', path: string | null } | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, url: string | null, height: number | null } | null> | null } | null } | null> | null } | null> | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, layout: { __typename?: 'LayoutPiece', displayWidth: any | null, theme: any | null, backgroundMedia: { __typename?: 'ComponentChoiceComponentForLayoutPieceBackgroundMedia', image: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, caption: any | null, meta: any | null, focalPoint: any | null, createdAt: any | null } | null> | null } | null> | null } | null } | null };

export type ProductSliderFragment = { __typename?: 'ProductSliderPiece', title: string | null, description: any | null, products: { __typename?: 'ItemRelations', variants: Array<{ __typename?: 'ProductVariantForProduct', sku: string | null, name: string | null, defaultPrice: any | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null, product: { __typename?: 'product', path: string | null } | null } | null> | null, items: Array<{ __typename?: 'brand', itemId: string | null } | { __typename?: 'category', itemId: string | null } | { __typename?: 'landingPage', itemId: string | null } | { __typename?: 'menuItem', itemId: string | null } | { __typename?: 'product', itemId: string | null } | { __typename?: 'story', itemId: string | null } | null> | null } | null, layout: { __typename?: 'LayoutPiece', displayWidth: any | null, theme: any | null, backgroundMedia: { __typename?: 'ComponentChoiceComponentForLayoutPieceBackgroundMedia', image: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, caption: any | null, meta: any | null, focalPoint: any | null, createdAt: any | null } | null> | null } | null> | null } | null } | null };

export type StorySliderFragment = { __typename?: 'StorySliderPiece', title: string | null, description: any | null, stories: { __typename?: 'ItemRelations', items: Array<{ __typename?: 'brand' } | { __typename?: 'category' } | { __typename?: 'landingPage' } | { __typename?: 'menuItem' } | { __typename?: 'product' } | { __typename?: 'story', path: string | null, title: string | null, intro: any | null, media: { __typename?: 'ComponentChoiceComponentForStoryMedia', image: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, shoppableImage: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', title: string | null, playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, height: number | null, url: string | null } | null> | null } | null> | null } | null> | null } | null } | null> | null } | null, layout: { __typename?: 'LayoutPiece', displayWidth: any | null, theme: any | null, backgroundMedia: { __typename?: 'ComponentChoiceComponentForLayoutPieceBackgroundMedia', image: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, caption: any | null, meta: any | null, focalPoint: any | null, createdAt: any | null } | null> | null } | null> | null } | null } | null };

export type CategoryBlocksFragment = { __typename?: 'ComponentChoiceComponentForCategoryBlocks', storySlider: { __typename?: 'StorySliderPiece', title: string | null, description: any | null, stories: { __typename?: 'ItemRelations', items: Array<{ __typename?: 'brand' } | { __typename?: 'category' } | { __typename?: 'landingPage' } | { __typename?: 'menuItem' } | { __typename?: 'product' } | { __typename?: 'story', path: string | null, title: string | null, intro: any | null, media: { __typename?: 'ComponentChoiceComponentForStoryMedia', image: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, shoppableImage: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', title: string | null, playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, height: number | null, url: string | null } | null> | null } | null> | null } | null> | null } | null } | null> | null } | null, layout: { __typename?: 'LayoutPiece', displayWidth: any | null, theme: any | null, backgroundMedia: { __typename?: 'ComponentChoiceComponentForLayoutPieceBackgroundMedia', image: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, caption: any | null, meta: any | null, focalPoint: any | null, createdAt: any | null } | null> | null } | null> | null } | null } | null } | null, banner: { __typename?: 'BannerPiece', title: string | null, description: any | null, layout: { __typename?: 'LayoutPiece', displayWidth: any | null, theme: any | null, backgroundMedia: { __typename?: 'ComponentChoiceComponentForLayoutPieceBackgroundMedia', image: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, caption: any | null, meta: any | null, focalPoint: any | null, createdAt: any | null } | null> | null } | null> | null } | null } | null, banner: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null, showcases: Array<{ __typename?: 'Showcase', hotspot: any | null, items: Array<{ __typename?: 'brand', name: string | null, path: string | null } | { __typename?: 'category', name: string | null, path: string | null } | { __typename?: 'landingPage', name: string | null, path: string | null } | { __typename?: 'menuItem', name: string | null, path: string | null } | { __typename?: 'product', name: string | null, path: string | null, defaultVariant: { __typename?: 'ProductVariantForProduct', defaultPrice: any | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, url: string | null, height: number | null } | null> | null } | null } | null } | { __typename?: 'story', name: string | null, path: string | null } | null> | null, variants: Array<{ __typename?: 'ProductVariantForProduct', name: string | null, defaultPrice: any | null, product: { __typename?: 'product', path: string | null } | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, url: string | null, height: number | null } | null> | null } | null } | null> | null } | null> | null } | null> | null, callToAction: { __typename?: 'CallToActionPiece', action: Array<{ __typename?: 'ContentChunksComponentForCallToActionPieceAction', label: string | null, url: string | null } | null> | null } | null } | null, featureHighlights: { __typename?: 'FeatureHighlightsPiece', layout: { __typename?: 'LayoutPiece', displayWidth: any | null, theme: any | null, backgroundMedia: { __typename?: 'ComponentChoiceComponentForLayoutPieceBackgroundMedia', image: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, caption: any | null, meta: any | null, focalPoint: any | null, createdAt: any | null } | null> | null } | null> | null } | null } | null, usp: Array<{ __typename?: 'ContentChunksComponentForFeatureHighlightsPieceUsp', headline: string | null, description: any | null, icon: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null } | null> | null } | null, productSlider: { __typename?: 'ProductSliderPiece', title: string | null, description: any | null, products: { __typename?: 'ItemRelations', variants: Array<{ __typename?: 'ProductVariantForProduct', sku: string | null, name: string | null, defaultPrice: any | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null, product: { __typename?: 'product', path: string | null } | null } | null> | null, items: Array<{ __typename?: 'brand', itemId: string | null } | { __typename?: 'category', itemId: string | null } | { __typename?: 'landingPage', itemId: string | null } | { __typename?: 'menuItem', itemId: string | null } | { __typename?: 'product', itemId: string | null } | { __typename?: 'story', itemId: string | null } | null> | null } | null, layout: { __typename?: 'LayoutPiece', displayWidth: any | null, theme: any | null, backgroundMedia: { __typename?: 'ComponentChoiceComponentForLayoutPieceBackgroundMedia', image: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, caption: any | null, meta: any | null, focalPoint: any | null, createdAt: any | null } | null> | null } | null> | null } | null } | null } | null, pictureGrid: { __typename?: 'PictureGridPiece', title: string | null, description: any | null, images: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, showcases: Array<{ __typename?: 'Showcase', hotspot: any | null, items: Array<{ __typename?: 'brand', name: string | null } | { __typename?: 'category', name: string | null } | { __typename?: 'landingPage', name: string | null } | { __typename?: 'menuItem', name: string | null } | { __typename?: 'product', name: string | null, defaultVariant: { __typename?: 'ProductVariantForProduct', defaultPrice: any | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, url: string | null, height: number | null } | null> | null } | null } | null } | { __typename?: 'story', name: string | null } | null> | null, variants: Array<{ __typename?: 'ProductVariantForProduct', name: string | null, defaultPrice: any | null, product: { __typename?: 'product', path: string | null } | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, url: string | null, height: number | null } | null> | null } | null } | null> | null } | null> | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, layout: { __typename?: 'LayoutPiece', displayWidth: any | null, theme: any | null, backgroundMedia: { __typename?: 'ComponentChoiceComponentForLayoutPieceBackgroundMedia', image: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, caption: any | null, meta: any | null, focalPoint: any | null, createdAt: any | null } | null> | null } | null> | null } | null } | null } | null };

export type LandingPageBlocksFragment = { __typename?: 'ComponentChoiceComponentForLandingPageBlocks', storySlider: { __typename?: 'StorySliderPiece', title: string | null, description: any | null, stories: { __typename?: 'ItemRelations', items: Array<{ __typename?: 'brand' } | { __typename?: 'category' } | { __typename?: 'landingPage' } | { __typename?: 'menuItem' } | { __typename?: 'product' } | { __typename?: 'story', path: string | null, title: string | null, intro: any | null, media: { __typename?: 'ComponentChoiceComponentForStoryMedia', image: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, shoppableImage: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', title: string | null, playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, height: number | null, url: string | null } | null> | null } | null> | null } | null> | null } | null } | null> | null } | null, layout: { __typename?: 'LayoutPiece', displayWidth: any | null, theme: any | null, backgroundMedia: { __typename?: 'ComponentChoiceComponentForLayoutPieceBackgroundMedia', image: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, caption: any | null, meta: any | null, focalPoint: any | null, createdAt: any | null } | null> | null } | null> | null } | null } | null } | null, banner: { __typename?: 'BannerPiece', title: string | null, description: any | null, layout: { __typename?: 'LayoutPiece', displayWidth: any | null, theme: any | null, backgroundMedia: { __typename?: 'ComponentChoiceComponentForLayoutPieceBackgroundMedia', image: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, caption: any | null, meta: any | null, focalPoint: any | null, createdAt: any | null } | null> | null } | null> | null } | null } | null, banner: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null, showcases: Array<{ __typename?: 'Showcase', hotspot: any | null, items: Array<{ __typename?: 'brand', name: string | null, path: string | null } | { __typename?: 'category', name: string | null, path: string | null } | { __typename?: 'landingPage', name: string | null, path: string | null } | { __typename?: 'menuItem', name: string | null, path: string | null } | { __typename?: 'product', name: string | null, path: string | null, defaultVariant: { __typename?: 'ProductVariantForProduct', defaultPrice: any | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, url: string | null, height: number | null } | null> | null } | null } | null } | { __typename?: 'story', name: string | null, path: string | null } | null> | null, variants: Array<{ __typename?: 'ProductVariantForProduct', name: string | null, defaultPrice: any | null, product: { __typename?: 'product', path: string | null } | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, url: string | null, height: number | null } | null> | null } | null } | null> | null } | null> | null } | null> | null, callToAction: { __typename?: 'CallToActionPiece', action: Array<{ __typename?: 'ContentChunksComponentForCallToActionPieceAction', label: string | null, url: string | null } | null> | null } | null } | null, featureHighlights: { __typename?: 'FeatureHighlightsPiece', layout: { __typename?: 'LayoutPiece', displayWidth: any | null, theme: any | null, backgroundMedia: { __typename?: 'ComponentChoiceComponentForLayoutPieceBackgroundMedia', image: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, caption: any | null, meta: any | null, focalPoint: any | null, createdAt: any | null } | null> | null } | null> | null } | null } | null, usp: Array<{ __typename?: 'ContentChunksComponentForFeatureHighlightsPieceUsp', headline: string | null, description: any | null, icon: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null } | null> | null } | null, productSlider: { __typename?: 'ProductSliderPiece', title: string | null, description: any | null, products: { __typename?: 'ItemRelations', variants: Array<{ __typename?: 'ProductVariantForProduct', sku: string | null, name: string | null, defaultPrice: any | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null, product: { __typename?: 'product', path: string | null } | null } | null> | null, items: Array<{ __typename?: 'brand', itemId: string | null } | { __typename?: 'category', itemId: string | null } | { __typename?: 'landingPage', itemId: string | null } | { __typename?: 'menuItem', itemId: string | null } | { __typename?: 'product', itemId: string | null } | { __typename?: 'story', itemId: string | null } | null> | null } | null, layout: { __typename?: 'LayoutPiece', displayWidth: any | null, theme: any | null, backgroundMedia: { __typename?: 'ComponentChoiceComponentForLayoutPieceBackgroundMedia', image: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, caption: any | null, meta: any | null, focalPoint: any | null, createdAt: any | null } | null> | null } | null> | null } | null } | null } | null, pictureGrid: { __typename?: 'PictureGridPiece', title: string | null, description: any | null, images: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, showcases: Array<{ __typename?: 'Showcase', hotspot: any | null, items: Array<{ __typename?: 'brand', name: string | null } | { __typename?: 'category', name: string | null } | { __typename?: 'landingPage', name: string | null } | { __typename?: 'menuItem', name: string | null } | { __typename?: 'product', name: string | null, defaultVariant: { __typename?: 'ProductVariantForProduct', defaultPrice: any | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, url: string | null, height: number | null } | null> | null } | null } | null } | { __typename?: 'story', name: string | null } | null> | null, variants: Array<{ __typename?: 'ProductVariantForProduct', name: string | null, defaultPrice: any | null, product: { __typename?: 'product', path: string | null } | null, firstImage: { __typename?: 'Image', url: string | null, variants: Array<{ __typename?: 'ImageVariant', width: number | null, url: string | null, height: number | null } | null> | null } | null } | null> | null } | null> | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, layout: { __typename?: 'LayoutPiece', displayWidth: any | null, theme: any | null, backgroundMedia: { __typename?: 'ComponentChoiceComponentForLayoutPieceBackgroundMedia', image: Array<{ __typename?: 'Image', url: string | null, altText: string | null, focalPoint: any | null, variants: Array<{ __typename?: 'ImageVariant', url: string | null, width: number | null, height: number | null } | null> | null } | null> | null, video: Array<{ __typename?: 'VideoComponent', playlists: Array<string | null> | null, thumbnails: Array<{ __typename?: 'Image', url: string | null, altText: string | null, caption: any | null, meta: any | null, focalPoint: any | null, createdAt: any | null } | null> | null } | null> | null } | null } | null } | null };

export type FetchLayoutQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchLayoutQuery = { __typename?: 'Query', browse: { __typename?: 'BrowseQuery', header: { __typename?: 'MenuItemQuery', hits: Array<{ __typename?: 'menuItem', children: { __typename?: 'SearchResults', hits: Array<{ __typename?: 'brand', name: string | null } | { __typename?: 'category', name: string | null } | { __typename?: 'landingPage', name: string | null } | { __typename?: 'menuItem', label: string | null, name: string | null, link: { __typename?: 'ComponentChoiceComponentForMenuItemLink', url: string | null, item: { __typename?: 'ItemRelations', items: Array<{ __typename?: 'brand', path: string | null } | { __typename?: 'category', path: string | null } | { __typename?: 'landingPage', path: string | null } | { __typename?: 'menuItem', path: string | null } | { __typename?: 'product', path: string | null } | { __typename?: 'story', path: string | null } | null> | null } | null } | null } | { __typename?: 'product', name: string | null } | { __typename?: 'story', name: string | null } | null> | null } | null } | null> | null } | null } | null };

type MenuItem_Brand_Fragment = { __typename?: 'brand', name: string | null };

type MenuItem_Category_Fragment = { __typename?: 'category', name: string | null };

type MenuItem_LandingPage_Fragment = { __typename?: 'landingPage', name: string | null };

type MenuItem_MenuItem_Fragment = { __typename?: 'menuItem', label: string | null, name: string | null, link: { __typename?: 'ComponentChoiceComponentForMenuItemLink', url: string | null, item: { __typename?: 'ItemRelations', items: Array<{ __typename?: 'brand', path: string | null } | { __typename?: 'category', path: string | null } | { __typename?: 'landingPage', path: string | null } | { __typename?: 'menuItem', path: string | null } | { __typename?: 'product', path: string | null } | { __typename?: 'story', path: string | null } | null> | null } | null } | null };

type MenuItem_Product_Fragment = { __typename?: 'product', name: string | null };

type MenuItem_Story_Fragment = { __typename?: 'story', name: string | null };

export type MenuItemFragment = MenuItem_Brand_Fragment | MenuItem_Category_Fragment | MenuItem_LandingPage_Fragment | MenuItem_MenuItem_Fragment | MenuItem_Product_Fragment | MenuItem_Story_Fragment;

export const ProductVariantFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"productVariant"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariantForProduct"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"priceVariants"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"}},{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"matchingProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"200"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dimensions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"depthUnit"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"heightUnit"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"widthUnit"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"weightUnit"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"800"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]} as unknown as DocumentNode<ProductVariantFragment, unknown>;
export const CommonProductVariantFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"commonProductVariant"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariantForProduct"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"200"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]} as unknown as DocumentNode<CommonProductVariantFragment, unknown>;
export const ShowcasesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"showcases"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Showcase"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hotspot"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"defaultVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"commonProductVariant"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"commonProductVariant"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"commonProductVariant"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariantForProduct"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"200"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]} as unknown as DocumentNode<ShowcasesFragment, unknown>;
export const StoryContentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"storyContent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"story"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"shoppableImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"showcases"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"showcases"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"playlists"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"commonProductVariant"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariantForProduct"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"200"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"showcases"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Showcase"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hotspot"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"defaultVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"commonProductVariant"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"commonProductVariant"}}]}}]}}]} as unknown as DocumentNode<StoryContentFragment, unknown>;
export const ImageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]} as unknown as DocumentNode<ImageFragment, unknown>;
export const LayoutFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"layout"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayoutPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayWidth"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"playlists"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"meta"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]} as unknown as DocumentNode<LayoutFragment, unknown>;
export const StorySliderFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"storySlider"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StorySliderPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"stories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"story"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"intro"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shoppableImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thumbnails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"playlists"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"layout"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"layout"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayoutPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayWidth"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"playlists"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"meta"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<StorySliderFragment, unknown>;
export const BannerFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"banner"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BannerPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"layout"}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"showcases"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hotspot"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"defaultVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"200"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"200"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"callToAction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"action"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"layout"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayoutPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayWidth"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"playlists"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"meta"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<BannerFragment, unknown>;
export const FeatureHighlightsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"featureHighlights"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FeatureHighlightsPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"layout"}}]}},{"kind":"Field","name":{"kind":"Name","value":"usp"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"headline"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"layout"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayoutPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayWidth"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"playlists"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"meta"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FeatureHighlightsFragment, unknown>;
export const ProductSliderFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"productSlider"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductSliderPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"500"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"layout"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"layout"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayoutPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayWidth"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"playlists"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"meta"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProductSliderFragment, unknown>;
export const PictureGridFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"pictureGrid"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PictureGridPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"showcases"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hotspot"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"defaultVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"200"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"200"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"layout"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"layout"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayoutPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayWidth"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"playlists"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"meta"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<PictureGridFragment, unknown>;
export const CategoryBlocksFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"categoryBlocks"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentChoiceComponentForCategoryBlocks"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"storySlider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"storySlider"}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"banner"}}]}},{"kind":"Field","name":{"kind":"Name","value":"featureHighlights"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"featureHighlights"}}]}},{"kind":"Field","name":{"kind":"Name","value":"productSlider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"productSlider"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pictureGrid"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"pictureGrid"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"layout"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayoutPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayWidth"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"playlists"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"meta"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"storySlider"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StorySliderPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"stories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"story"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"intro"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shoppableImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thumbnails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"playlists"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"layout"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"banner"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BannerPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"layout"}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"showcases"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hotspot"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"defaultVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"200"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"200"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"callToAction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"action"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"featureHighlights"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FeatureHighlightsPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"layout"}}]}},{"kind":"Field","name":{"kind":"Name","value":"usp"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"headline"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"productSlider"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductSliderPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"500"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"layout"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"pictureGrid"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PictureGridPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"showcases"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hotspot"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"defaultVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"200"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"200"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"layout"}}]}}]}}]} as unknown as DocumentNode<CategoryBlocksFragment, unknown>;
export const LandingPageBlocksFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"landingPageBlocks"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentChoiceComponentForLandingPageBlocks"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"storySlider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"storySlider"}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"banner"}}]}},{"kind":"Field","name":{"kind":"Name","value":"featureHighlights"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"featureHighlights"}}]}},{"kind":"Field","name":{"kind":"Name","value":"productSlider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"productSlider"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pictureGrid"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"pictureGrid"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"layout"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayoutPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayWidth"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"playlists"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"meta"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"storySlider"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StorySliderPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"stories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"story"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"intro"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shoppableImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thumbnails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"playlists"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"layout"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"banner"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BannerPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"layout"}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"showcases"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hotspot"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"defaultVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"200"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"200"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"callToAction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"action"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"featureHighlights"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FeatureHighlightsPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"layout"}}]}},{"kind":"Field","name":{"kind":"Name","value":"usp"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"headline"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"productSlider"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductSliderPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"500"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"layout"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"pictureGrid"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PictureGridPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"showcases"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hotspot"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"defaultVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"200"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"200"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"layout"}}]}}]}}]} as unknown as DocumentNode<LandingPageBlocksFragment, unknown>;
export const MenuItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"menuItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Document"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"menuItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<MenuItemFragment, unknown>;
export const FetchProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"browse"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"format"},"value":{"kind":"EnumValue","value":"json"}}]},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"breadcrumbs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"withShortcuts"},"value":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"component_name"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"200"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"story"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"format"},"value":{"kind":"EnumValue","value":"json"}}]},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"showcases"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"showcases"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"relatedProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}},{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"defaultVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}},{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"500"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"productVariant"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"commonProductVariant"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariantForProduct"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"200"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"showcases"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Showcase"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hotspot"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"defaultVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"commonProductVariant"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"commonProductVariant"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"productVariant"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariantForProduct"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"priceVariants"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"}},{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"matchingProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"200"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dimensions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"depthUnit"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"heightUnit"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"widthUnit"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"weightUnit"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"800"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]} as unknown as DocumentNode<FetchProductQuery, FetchProductQueryVariables>;
export const FetchCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"browse"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"breadcrumbs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"categoryBlocks"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"format"},"value":{"kind":"EnumValue","value":"json"}}]},{"kind":"Field","name":{"kind":"Name","value":"defaultVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"500"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"100"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"layout"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayoutPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayWidth"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"playlists"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"meta"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"storySlider"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StorySliderPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"stories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"story"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"intro"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shoppableImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thumbnails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"playlists"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"layout"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"banner"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BannerPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"layout"}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"showcases"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hotspot"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"defaultVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"200"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"200"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"callToAction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"action"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"featureHighlights"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FeatureHighlightsPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"layout"}}]}},{"kind":"Field","name":{"kind":"Name","value":"usp"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"headline"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"productSlider"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductSliderPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"500"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"layout"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"pictureGrid"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PictureGridPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"showcases"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hotspot"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"defaultVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"200"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"200"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"layout"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"categoryBlocks"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentChoiceComponentForCategoryBlocks"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"storySlider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"storySlider"}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"banner"}}]}},{"kind":"Field","name":{"kind":"Name","value":"featureHighlights"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"featureHighlights"}}]}},{"kind":"Field","name":{"kind":"Name","value":"productSlider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"productSlider"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pictureGrid"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"pictureGrid"}}]}}]}}]} as unknown as DocumentNode<FetchCategoryQuery, FetchCategoryQueryVariables>;
export const FetchAllCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchAllCategories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"browse"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"breadcrumbs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"categoryBlocks"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"layout"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayoutPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayWidth"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"playlists"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"meta"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"storySlider"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StorySliderPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"stories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"story"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"intro"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shoppableImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thumbnails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"playlists"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"layout"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"banner"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BannerPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"layout"}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"showcases"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hotspot"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"defaultVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"200"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"200"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"callToAction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"action"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"featureHighlights"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FeatureHighlightsPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"layout"}}]}},{"kind":"Field","name":{"kind":"Name","value":"usp"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"headline"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"productSlider"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductSliderPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"500"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"layout"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"pictureGrid"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PictureGridPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"showcases"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hotspot"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"defaultVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"200"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"200"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"layout"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"categoryBlocks"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentChoiceComponentForCategoryBlocks"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"storySlider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"storySlider"}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"banner"}}]}},{"kind":"Field","name":{"kind":"Name","value":"featureHighlights"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"featureHighlights"}}]}},{"kind":"Field","name":{"kind":"Name","value":"productSlider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"productSlider"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pictureGrid"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"pictureGrid"}}]}}]}}]} as unknown as DocumentNode<FetchAllCategoriesQuery, FetchAllCategoriesQueryVariables>;
export const FetchLandingPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchLandingPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"browse"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"landingPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"StringValue","value":"/index","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"landingPageBlocks"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"layout"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayoutPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayWidth"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"playlists"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"meta"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"storySlider"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StorySliderPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"stories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"story"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"intro"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shoppableImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thumbnails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"playlists"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"layout"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"banner"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BannerPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"layout"}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"showcases"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hotspot"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"defaultVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"200"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"200"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"callToAction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"action"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"featureHighlights"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FeatureHighlightsPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"layout"}}]}},{"kind":"Field","name":{"kind":"Name","value":"usp"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"headline"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"productSlider"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductSliderPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"500"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"layout"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"pictureGrid"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PictureGridPiece"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"showcases"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hotspot"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"defaultVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"200"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"200"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"layout"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"landingPageBlocks"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentChoiceComponentForLandingPageBlocks"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"storySlider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"storySlider"}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"banner"}}]}},{"kind":"Field","name":{"kind":"Name","value":"featureHighlights"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"featureHighlights"}}]}},{"kind":"Field","name":{"kind":"Name","value":"productSlider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"productSlider"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pictureGrid"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"pictureGrid"}}]}}]}}]} as unknown as DocumentNode<FetchLandingPageQuery, FetchLandingPageQueryVariables>;
export const FetchStoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchStory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"browse"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"story"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"storyContent"}},{"kind":"Field","name":{"kind":"Name","value":"breadcrumbs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"intro"}},{"kind":"Field","name":{"kind":"Name","value":"featured"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"defaultVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"commonProductVariant"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"upNext"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"storyContent"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"story"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"commonProductVariant"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariantForProduct"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"defaultPrice"},"name":{"kind":"Name","value":"priceVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"default","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"200"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"showcases"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Showcase"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hotspot"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"defaultVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"commonProductVariant"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"commonProductVariant"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"storyContent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"story"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"shoppableImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"showcases"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"showcases"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"playlists"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FetchStoryQuery, FetchStoryQueryVariables>;
export const FetchAllStoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchAllStories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"browse"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"StringValue","value":"/stories","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"breadcrumbs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"story"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"intro"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"500"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"shoppableImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"500"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thumbnails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"500"}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"avif","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"playlists"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<FetchAllStoriesQuery, FetchAllStoriesQueryVariables>;
export const FetchLayoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchLayout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"browse"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"header"},"name":{"kind":"Name","value":"menuItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"StringValue","value":"/menu/top","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"menuItem"}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"menuItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Document"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"menuItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<FetchLayoutQuery, FetchLayoutQueryVariables>;