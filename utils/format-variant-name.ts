export function formatVariantName(
    productName: string | null | undefined,
    variantName: string | null | undefined,
): string {
    // handle null/undefined values
    if (!productName && !variantName) return '';
    if (!productName) return variantName || '';
    if (!variantName) return productName;

    // lowercase and trim spaces for comparison
    const normalizedProduct = productName.toLowerCase().trim();
    const normalizedVariant = variantName.toLowerCase().trim();

    // if names are the same, return product name
    if (normalizedProduct === normalizedVariant) {
        return productName;
    }

    // if variant contains product name, remove product name and clean up extra spaces
    if (normalizedVariant.includes(normalizedProduct)) {
        const cleanedVariant = variantName
            .replace(new RegExp(productName, 'i'), '') // Case insensitive removal
            .trim()
            .replace(/\s+/g, ' '); // Remove multiple spaces

        return `${productName} - ${cleanedVariant}`;
    }

    // if no redundancy found, return original format
    return `${productName} ${variantName}`;
}
