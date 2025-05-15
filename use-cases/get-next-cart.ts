import { Cart, CartItem } from '@/generated/shop/graphql';
import { CART_ACTION, CartAction } from '@/use-cases/types';

const getPrice = (quantity: number, { price, variant }: CartItem) => ({
    ...price,
    gross: quantity * variant.price.gross,
    net: quantity * variant.price.net,
    taxAmount: quantity * variant.price.taxAmount,
});

interface GetNextCartProps {
    cart: Cart | null;
    cartItem: CartItem;
    action: CartAction;
    itemIndex: string;
}

export const getNextCart = ({ cart, cartItem, action, itemIndex }: GetNextCartProps) => {
    const updatedCart = structuredClone(cart);
    const itemIndexNumber = Number(itemIndex);

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
            updatedCart.items.push(cartItem);
            break;

        case CART_ACTION.remove:
            updatedCart.items.splice(itemIndexNumber, 1);
            break;

        default:
            console.error(`Unknown action: ${action}`);
            break;
    }

    return {
        ...updatedCart,
        lastItemAdded: cartItem ?? item,
    };
};
