import type { Cart, CartItem, CartItemInput } from '@/use-cases/contracts/cart';
import { CART_ACTION, CartAction } from '@/use-cases/types';

interface GetNextCartProps {
    cart: Cart | null;
    cartItem: CartItemInput;
    itemIndex: string;
    action: CartAction;
}

const getPrice = (quantity: number, { price, variant }: CartItem) => ({
    ...price,
    gross: quantity * variant.price.gross,
    net: quantity * variant.price.net,
    taxAmount: quantity * variant.price.taxAmount,
});

export const getNextCart = ({ cart, cartItem, action, itemIndex }: GetNextCartProps) => {
    const updatedCart = structuredClone(cart);
    const itemIndexNumber = Number(itemIndex);
    let lastItemAdded: CartItem | undefined = undefined;

    if (!updatedCart) {
        throw new Error('Cart not found');
    }

    const item = updatedCart.items[itemIndexNumber];

    switch (action) {
        case CART_ACTION.increase:
            const updatedQuantity = item.quantity + 1;
            updatedCart.items[itemIndexNumber] = {
                ...item,
                quantity: updatedQuantity,
                price: getPrice(updatedQuantity, item),
            };
            lastItemAdded = item;
            break;

        case CART_ACTION.decrease:
            if (item.quantity === 1) {
                updatedCart.items.splice(itemIndexNumber, 1);
            } else {
                const updatedQuantity = item.quantity - 1;

                updatedCart.items[itemIndexNumber] = {
                    ...item,
                    quantity: updatedQuantity,
                    price: getPrice(updatedQuantity, item),
                };
            }
            break;

        case CART_ACTION.add:
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
            updatedCart.items.push(optimisticItem);
            lastItemAdded = optimisticItem;
            break;

        case CART_ACTION.remove:
            updatedCart.items.splice(itemIndexNumber, 1);
            break;

        default:
            console.error(`Unknown action: ${action}`);
            break;
    }

    const { gross, net, taxAmount } = updatedCart.items.reduce<{ gross: number; net: number; taxAmount: number }>(
        (acc, item) => ({
            gross: acc.gross + item.price.gross,
            net: acc.net + item.price.net,
            taxAmount: acc.taxAmount + item.price.taxAmount,
        }),
        { gross: 0, net: 0, taxAmount: 0 },
    );

    return {
        ...updatedCart,
        lastItemAdded,
        total: { ...(updatedCart?.total ?? []), gross, net, taxAmount },
    } as Cart;
};
