import { apiRequest } from '@/utils/api-request';
import { FetchProductForPdfDocument, Paragraph } from '@/generated/discovery/graphql';

// TODO: get these from the environment variables
const { CRYSTALLIZE_BASE_PRICE, CRYSTALLIZE_SELECTED_PRICE, CRYSTALLIZE_MARKETS_PRICE } = process.env;

export const fetchProductDataForPDF = async (path: string) => {
    const response = await apiRequest(FetchProductForPdfDocument, {
        path,
        selectedPrice: CRYSTALLIZE_SELECTED_PRICE!,
        basePrice: CRYSTALLIZE_BASE_PRICE!,
        marketIdentifiers: CRYSTALLIZE_MARKETS_PRICE!,
    });
    const { story, variants, brand, ...product } = response.data.browse?.product?.hits?.[0] ?? {};

    return {
        ...product,
        variants,
        brand: brand?.items?.[0],
        story: story?.filter((paragraph): paragraph is Paragraph => paragraph !== null && paragraph !== undefined),
    };
};
