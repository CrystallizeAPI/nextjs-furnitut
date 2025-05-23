import { apiRequest } from '@/utils/api-request';
import { FetchProductForPdfDocument, Paragraph } from '@/generated/discovery/graphql';

export const fetchProductDataForPDF = async (path: string) => {
    const response = await apiRequest(FetchProductForPdfDocument, { path });
    const { story, variants, brand, ...product } = response.data.browse?.product?.hits?.[0] ?? {};

    return {
        ...product,
        variants,
        brand: brand?.items?.[0],
        story: story?.filter((paragraph): paragraph is Paragraph => paragraph !== null && paragraph !== undefined),
    };
};
