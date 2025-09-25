type Topics = Record<string, string>;

export function getPromotionValues(topics?: Topics): string[] {
    if (!topics) return [];
    return Object.entries(topics)
        .filter(([key]) => key.startsWith('/promotions/'))
        .map(([, value]) => value);
}
