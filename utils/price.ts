import { Price } from '@/components/price';

type GetLowestPrice = {
    base: Price;
    selected: Price;
    // market: number | null;
};

export function getPrice({ base, selected,
                             // market
}: GetLowestPrice) {
    const basePrice = base?.price ?? 0;
    const selectedPrice = selected?.price ?? null;
    const prices = [basePrice, selectedPrice];

    // if (market) {
    //     prices.push(market);
    // }

    const low = Math.min(...prices);
    const high = Math.max(...prices);
    const currency = base.currency ?? 'EUR';

    return {
        hasBestPrice: low !== high,
        lowest: low,
        highest: high,
        currency,
    };
}