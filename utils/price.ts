import { Price } from '@/components/price';

type GetLowestPrice = {
    fallbackPriceVariant: Price;
    selectedPriceVariant: Price;
    // market: number | null;
};

export function getPrice({
    fallbackPriceVariant,
    selectedPriceVariant,
    // market
}: GetLowestPrice) {
    const fallbackPrice = fallbackPriceVariant?.price;
    const selectedPrice = selectedPriceVariant?.price;
    const prices = [fallbackPrice, selectedPrice].filter(Boolean) as number[];

    // if (market) {
    //     prices.push(market);
    // }

    const low = Math.min(...prices);
    const high = Math.max(...prices);
    const currency = fallbackPriceVariant?.currency ?? 'EUR';

    return {
        hasBestPrice: low !== high,
        lowest: low,
        highest: high,
        currency,
    };
}
