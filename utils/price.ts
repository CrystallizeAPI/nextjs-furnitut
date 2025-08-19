import { Price } from '@/components/price';

type GetLowestPrice = {
    fallback: Price;
    selected: Price;
    // market: number | null;
};

export function getPrice({
    fallback,
    selected,
    // market
}: GetLowestPrice) {
    const fallbackPrice = fallback?.price;
    const selectedPrice = selected?.price;
    const prices = [fallbackPrice, selectedPrice].filter(Boolean) as number[];

    // if (market) {
    //     prices.push(market);
    // }

    const low = Math.min(...prices);
    const high = Math.max(...prices);
    const currency = fallback.currency ?? 'EUR';

    return {
        hasBestPrice: low !== high,
        lowest: low,
        highest: high,
        currency,
    };
}
