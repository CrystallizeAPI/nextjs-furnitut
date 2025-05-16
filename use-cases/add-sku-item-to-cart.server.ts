import { storage } from '@/core/storage.server';
import { crystallizeClient } from '@/core/crystallize-client.server';
import { FETCH_CART, PRICE_FRAGMENT } from './fetch-cart';

interface Item {
    sku: string;
    quantity: number;
}

interface CartInput {
    items: Item[];
    id?: string;
    context?: {
        price?: {
            voucherCode?: string;
            decimals?: number;
        };
    };
}

interface HydrateCartProps {
    id?: string;
    items: Item[];
    voucherCode?: string;
}

export const hydrateCart = async ({ id, items, voucherCode }: HydrateCartProps) => {
    const input: CartInput = {
        items,
        context: {
            price: {
                voucherCode: voucherCode ?? '',
                decimals: 4,
            },
        },
    };

    if (id) {
        input.id = id;
    }

    const mutation = `#graphql
        mutation HYDRATE_CART($input: CartInput!) { 
            hydrate(input: $input) { 
                ${FETCH_CART} 
            } 
        }
        
        ${PRICE_FRAGMENT}
    `;

    try {
        const data = await crystallizeClient.shopCartApi(mutation, { input });

        await storage.setCartId(data.hydrate.id);
        return data.hydrate;
    } catch (exception) {
        console.error('addSkuItemToCart without cartId', JSON.stringify(exception, null, 3));
        throw exception;
    }
};
