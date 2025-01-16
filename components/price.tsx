type PriceProps = {
    price?: { price: number; currency?: string } | null;
};

export const Price = ({ price }: PriceProps) => {
    if (!price) {
        return null;
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: price?.currency || 'EUR',
    });

    return <>{formatter.format(price.price)}</>;
};
