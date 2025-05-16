export const CART_ACTION = {
    increase: 'increase',
    decrease: 'decrease',
    add: 'add',
    remove: 'remove',
    reset: 'reset',
} as const;

export type CartAction = keyof typeof CART_ACTION;