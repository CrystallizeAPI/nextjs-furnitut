import { crystallizeClient } from '@/core/crystallize-client.server';

export const fetchOrderIntent = async (cartId: string) => {
    try {
        const data = await crystallizeClient.shopCartApi(
            `#graphql
        query OrderIntent {
          orderIntent(id: "${cartId}") {
            order
          }
        }
      `,
            {
                cartId,
            },
        );
        return data.orderIntent.order;
    } catch (exception) {
        console.error('Fetching order intent: ', exception);
        throw exception;
    }
};
