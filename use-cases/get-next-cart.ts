import type { Cart, CartItem, CartItemInput } from '@/use-cases/contracts/cart';

type GetNextCartProps = {
    cart: Cart;
    cartItem: CartItemInput;
    type?: string;
};

export const getNextCart = ({ cart, cartItem, type }: GetNextCartProps) => {
    const prevCart = structuredClone(cart);
    const existingItemIndex = prevCart.items.findIndex((item) => item.variant.sku === cartItem.sku);

    let updatedItems = [...prevCart.items];
    let lastItemAdded = [] as CartItem[];

    if (existingItemIndex !== -1) {
        switch (type) {
            case 'remove':
                updatedItems = updatedItems.filter((item) => item.variant.sku !== cartItem.sku);
                lastItemAdded = [];

                break;

            case 'reduce':
                const item = updatedItems[existingItemIndex];
                const newQuantity = Math.max(0, item.quantity - 1);
                if (newQuantity === 0) {
                    updatedItems = updatedItems.filter((item) => item.variant.sku !== cartItem.sku);
                } else {
                    updatedItems[existingItemIndex] = { ...item, quantity: newQuantity };
                    lastItemAdded = [];
                }
                break;

            case 'add':
            default:
                updatedItems[existingItemIndex] = {
                    ...updatedItems[existingItemIndex],
                    quantity: updatedItems[existingItemIndex].quantity + 1,
                };
                lastItemAdded = [updatedItems[existingItemIndex]];

                break;
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
        updatedItems = [...prevCart.items, optimisticItem];
        lastItemAdded = [optimisticItem];
    }

    return {
        ...prevCart,
        lastItemAdded,
        items: updatedItems,
    };
};
