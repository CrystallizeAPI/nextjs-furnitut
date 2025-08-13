import { apiRequest } from '@/utils/api-request';
import { FetchProductForPdfDocument, Paragraph } from '@/generated/discovery/graphql';

// TODO: get these from the environment variables
// const { CRYSTALLIZE_BASE_PRICE, CRYSTALLIZE_SELECTED_PRICE, CRYSTALLIZE_COMPARE_AT_PRICE } = process.env;
const CRYSTALLIZE_COMPARE_AT_PRICE= "default"
const CRYSTALLIZE_SELECTED_PRICE= "membership"
const CRYSTALLIZE_BASE_PRICE= "default"

export const fetchProductDataForPDF = async (path: string) => {
    const response = await apiRequest(FetchProductForPdfDocument, {
        path,
        selectedPrice: CRYSTALLIZE_SELECTED_PRICE!,
        basePrice: CRYSTALLIZE_BASE_PRICE!,
        marketIdentifiers: CRYSTALLIZE_COMPARE_AT_PRICE!,
    });
    const { story, variants, brand, ...product } = response.data.browse?.product?.hits?.[0] ?? {};

    return {
        ...product,
        variants,
        brand: brand?.items?.[0],
        story: story?.filter((paragraph): paragraph is Paragraph => paragraph !== null && paragraph !== undefined),
    };
};
