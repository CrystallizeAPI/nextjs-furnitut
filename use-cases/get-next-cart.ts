import type { Cart, CartItem, CartItemInput, Price } from '@/use-cases/contracts/cart';

type GetNextCartProps = {
    cart: Cart | null;
    cartItem: CartItemInput;
    type?: string;
};

const getPrice = (quantity: number, { price, variant }: CartItem) => ({
    ...price,
    gross: quantity * variant.price.gross,
    net: quantity * variant.price.net,
    taxAmount: quantity * variant.price.taxAmount,
});

export const getNextCart = ({ cart, cartItem, type }: GetNextCartProps) => {
    const prevCart = structuredClone(cart);
    const existingItemIndex = prevCart?.items.findIndex((item) => item.variant.sku === cartItem.sku) ?? -1;

    let updatedItems = [...(prevCart?.items ?? [])];
    let lastItemAdded: CartItem | undefined = undefined;

    if (existingItemIndex !== -1) {
        switch (type) {
            case 'remove':
                updatedItems = updatedItems.filter((item) => item.variant.sku !== cartItem.sku);
                lastItemAdded = undefined;

                break;

            case 'reduce':
                const item = updatedItems[existingItemIndex];
                const quantity = Math.max(0, item.quantity - 1);
                if (quantity === 0) {
                    updatedItems = updatedItems.filter((item) => item.variant.sku !== cartItem.sku);
                } else {
                    updatedItems[existingItemIndex] = {
                        ...item,
                        quantity,
                        price: getPrice(quantity, item),
                    };
                    lastItemAdded = undefined;
                }
                break;

            case 'add':
            default: {
                const item = updatedItems[existingItemIndex];
                const quantity = item.quantity + 1;

                updatedItems[existingItemIndex] = {
                    ...item,
                    quantity,
                    price: getPrice(quantity, item),
                };
                lastItemAdded = updatedItems[existingItemIndex];
            }
        }
    } else {
        const optimisticItem: CartItem = {
            name: cartItem.variantName,
            images: cartItem.image ? [cartItem.image] : [],
            price: cartItem.price,
            quantity: 1,
            variant: {
                sku: cartItem.sku,
                name: cartItem.variantName,
                price: cartItem.price,
                product: {
                    name: cartItem.productName,
                },
            },
        };
        updatedItems = [...(prevCart?.items ?? []), optimisticItem];
        lastItemAdded = optimisticItem;
    }

    const { gross, net, taxAmount } = updatedItems.reduce<{ gross: number; net: number; taxAmount: number }>(
        (acc, item) => ({
            gross: acc.gross + item.price.gross,
            net: acc.net + item.price.net,
            taxAmount: acc.taxAmount + item.price.taxAmount,
        }),
        { gross: 0, net: 0, taxAmount: 0 },
    );

    return {
        ...prevCart,
        lastItemAdded,
        items: updatedItems,
        total: { ...(prevCart?.total ?? []), gross, net, taxAmount },
    } as Cart;
};
