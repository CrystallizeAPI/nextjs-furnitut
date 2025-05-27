import React from 'react';

import { Page, Text, View, Document, Link, Image } from '@react-pdf/renderer';
import { ContentTransformer, NodeContent } from '@crystallize/reactjs-components';
import { styles } from './styles';
import { Price } from '@/components/price';
import { Brand, Paragraph, ProductVariantFragment } from '@/generated/discovery/graphql';
import { getPrice } from '@/utils/price';

const overrides = {
    link: (props: any) => (
        <Link src={props.metadata.href}>
            <NodeContent {...props} />
        </Link>
    ),

    div: (props: any) => (
        <View>
            <NodeContent {...props} />
        </View>
    ),
    span: (props: any) => (
        <View>
            <NodeContent {...props} />
        </View>
    ),
    paragraph: (props: any) => (
        <Text style={{ fontSize: 10, lineHeight: 1.7, color: '#211a1d' }}>
            <NodeContent {...props} />
        </Text>
    ),
    quote: (props: any) => (
        <Text style={{ fontSize: 16, padding: 15 }}>
            <NodeContent {...props} />
        </Text>
    ),
    'line-break': (props: any) => (
        <Text style={{ fontSize: 10, width: '100%', height: 10 }}>
            <NodeContent {...props} />
        </Text>
    ),
};

type ExtendedProductVariant = ProductVariantFragment & {
    dimensions?: {
        depth: number;
        depthUnit: string;
        height: number;
        heightUnit: string;
        width: number;
        widthUnit: string;
        weight: number;
        weightUnit: string;
    };
};

export type ProductPDFProps = {
    story: Paragraph[];
    variants: ExtendedProductVariant[];
    brand: Brand;
    descriptionPlain: string;
    name: string;
    details: any[];
};
export const ProductPDF = ({ product }: { product: ProductPDFProps }) => {
    const { story, variants, brand, descriptionPlain, details } = product;
    const logoUrl = brand?.logo?.[0]?.url;
    const logoIsSvg = logoUrl?.endsWith('.svg');
    const defaultVariant = variants?.[0];
    const defaultVariantPrice = getPrice({
        base: defaultVariant?.basePrice,
        selected: defaultVariant?.selectedPrice,
        market: defaultVariant?.marketPrice ?? null,
    });
    return (
        <Document title={`${product.name} | ${brand.name}`} author="Furnitut" subject="Product PDF">
            <Page style={styles.indexPage}>
                {defaultVariant?.images?.[0]?.url && <Image style={styles.image} src={defaultVariant?.images[0].url} />}
                <View style={styles.productDescriptionContainer}>
                    <Text style={styles.title}>{product.name}</Text>
                    <Text style={styles.productDescription}>
                        {!!descriptionPlain?.length &&
                            (descriptionPlain?.length < 152
                                ? descriptionPlain
                                : `${descriptionPlain?.slice(0, 152)} ...`)}
                    </Text>

                    <Text style={styles.price}>
                        <Price
                            price={{
                                price: defaultVariantPrice.lowest,
                                currency: defaultVariantPrice.currency,
                            }}
                        />
                    </Text>
                    {/*<Text style={styles.priceLineThrough}>*/}
                    {/*    <Price*/}
                    {/*        price={{*/}
                    {/*            price: defaultVariantPrice.highest,*/}
                    {/*            currency: defaultVariantPrice.currency,*/}
                    {/*        }}*/}
                    {/*    />*/}
                    {/*</Text>*/}
                </View>
                <View
                    style={{
                        position: 'absolute',
                        fontSize: 10,
                        bottom: 48,
                        right: 48,
                        color: '#211a1d',
                        marginTop: 20,
                        marginBottom: 10,
                    }}
                >
                    {!logoIsSvg && logoUrl && (
                        <Image src={logoUrl} style={{ width: 50, height: 50, objectFit: 'contain' }} />
                    )}
                </View>
            </Page>

            {story &&
                story.map((paragraph, storyIndex) => {
                    const images = paragraph.images;
                    return (
                        <Page style={styles.indexPage} key={`story-paragraph-#${storyIndex}`}>
                            <View style={{ flexDirection: 'column', height: '100%' }}>
                                {images && (
                                    <View
                                        style={{
                                            width: '100%',
                                            height: '35%',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            gap: 10,
                                            paddingRight: 48,
                                        }}
                                    >
                                        {images?.map((img, imgIndex) => {
                                            if (!img?.url) {
                                                return null;
                                            }

                                            return (
                                                <Image
                                                    key={`story-paragraph-#${storyIndex}-image-#${imgIndex}-${img.url}`}
                                                    src={img.url}
                                                    style={{
                                                        width: '100%',
                                                        maxWidth: images.length > 1 ? `${100 / images.length}%` : '50%',
                                                        height: '100%',
                                                        borderRadius: 12,
                                                        overflow: 'hidden',
                                                        objectFit: 'cover',
                                                    }}
                                                />
                                            );
                                        })}
                                    </View>
                                )}

                                <View style={{ paddingLeft: '50%', paddingRight: 48, width: '100%', paddingTop: 40 }}>
                                    <Text style={{ fontSize: 14, fontWeight: 700, marginBottom: 10, color: '#211a1d' }}>
                                        {paragraph.title}
                                    </Text>
                                    <ContentTransformer json={paragraph.body} overrides={overrides} />
                                </View>
                            </View>
                        </Page>
                    );
                })}
            {details?.length > 0 && (
                <Page style={{ ...styles.indexPage, padding: 48 }}>
                    {details.map((detail, detailIndex) => {
                        return (
                            <View
                                key={`details-paragraph-${detailIndex}`}
                                style={{ flexDirection: 'row', gap: 10, paddingBottom: 24 }}
                            >
                                <Text style={{ width: '30%', fontSize: 10, fontWeight: 700 }}>{detail.title}</Text>
                                <View style={{ width: '70%' }}>
                                    <ContentTransformer json={detail.description} overrides={overrides} />
                                </View>
                            </View>
                        );
                    })}
                </Page>
            )}
            <Page style={styles.tablePage} wrap>
                <View style={styles.table}>
                    {variants.map((variant, i) => {
                        const { dimensions } = variant;
                        const currentVariantPrice = getPrice({
                            base: variant?.basePrice!,
                            selected: variant?.selectedPrice!,
                            market: variant?.marketPrice ?? null,
                        });

                        return (
                            <View
                                key={`main-row-${i}`}
                                style={{
                                    borderRadius: 12,
                                    backgroundColor: `${i % 2 ? 'transparent' : '#fff'}`,
                                }}
                            >
                                <View
                                    break={true}
                                    style={{
                                        ...styles.tableRow,
                                    }}
                                >
                                    {variant?.images?.[0]?.url && (
                                        <Image style={styles.tableCellImage} src={variant.images[0].url} />
                                    )}
                                    <View
                                        style={{
                                            ...styles.tableCellName,
                                            display: 'flex',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 12,
                                                fontWeight: 700,
                                            }}
                                        >
                                            {variant?.name}
                                        </Text>
                                        <Text style={{ fontSize: 10 }}>{variant?.sku}</Text>
                                    </View>

                                    <View
                                        style={{
                                            width: '50%',
                                            textAlign: 'right',
                                        }}
                                    >
                                        <Text style={{ fontSize: 10, fontWeight: 600 }}>
                                            <Price
                                                price={{
                                                    price: currentVariantPrice.lowest,
                                                    currency: currentVariantPrice.currency,
                                                }}
                                            />
                                        </Text>
                                        {/*<Text style={{ fontSize: 9, fontWeight: 400, textDecoration: 'line-through' }}>*/}
                                        {/*    <Price*/}
                                        {/*        price={{*/}
                                        {/*            price: currentVariantPrice.highest,*/}
                                        {/*            currency: currentVariantPrice.currency,*/}
                                        {/*        }}*/}
                                        {/*    />*/}
                                        {/*</Text>*/}
                                    </View>
                                </View>
                                <View
                                    style={{
                                        fontSize: 8,
                                        gap: 2,
                                        paddingBottom: 10,
                                        paddingLeft: 60,
                                    }}
                                >
                                    {Object.keys(variant.attributes).map((key) => {
                                        return (
                                            <View
                                                style={{ flexDirection: 'row', gap: 10 }}
                                                key={`attribute-value-${variant.sku}-${key}`}
                                            >
                                                <Text style={{ width: '50%' }}>{key}</Text>
                                                <Text>{variant.attributes[key]}</Text>
                                            </View>
                                        );
                                    })}

                                    {dimensions && (
                                        <>
                                            <View style={{ flexDirection: 'row', gap: 10 }}>
                                                <Text style={{ width: '50%' }}>Depth</Text>
                                                <Text>
                                                    {dimensions.depth} {dimensions.depthUnit}
                                                </Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', gap: 10 }}>
                                                <Text style={{ width: '50%' }}>Height</Text>
                                                <Text>
                                                    {dimensions.height} {dimensions.heightUnit}
                                                </Text>
                                            </View>

                                            <View style={{ flexDirection: 'row', gap: 10 }}>
                                                <Text style={{ width: '50%' }}>Width</Text>
                                                <Text>
                                                    {dimensions.width} {dimensions.widthUnit}
                                                </Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', gap: 10 }}>
                                                <Text style={{ width: '50%' }}>Weight</Text>
                                                <Text>
                                                    {dimensions.weight} {dimensions.weightUnit}
                                                </Text>
                                            </View>
                                        </>
                                    )}
                                </View>
                            </View>
                        );
                    })}
                </View>
            </Page>
        </Document>
    );
};
