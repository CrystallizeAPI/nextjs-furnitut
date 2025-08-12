import { Cart } from '@/use-cases/contracts/cart';
import { createHash } from 'crypto';
import { QliroCheckoutOrder, QliroCheckoutOrderInput } from './type';

type Deps = {
    credentials: {
        base_url: string
        key: string;
        secret: string;

    };
}

export const createClient = ({ credentials }: Deps) => {

    const generateToken = (payload?: unknown) => {
        let input = ''
        if (payload && Object.keys(payload).length > 0) {
            input += JSON.stringify(payload);
        }
        input += credentials.secret;
        return createHash('sha256').update(input).digest('base64');
    }

    const send = async <T>(path: string, payload?: unknown) => {
        const token = generateToken(payload);
        const response = await fetch(`${credentials.base_url}${path}`, {
            method: !payload ? 'GET' : 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Qliro ${token}`,
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            // console.dir({
            //     message: 'Error fetching Qliro checkout',
            //     responseText: await response.text(),
            //     status: response.status,
            //     statusText: response.statusText,
            //     payload,
            //     token,
            //     credentials
            // }, { depth: null });
            throw new Error(`Failed to fetch Qliro checkout: ${response.statusText}`);
        }
        return await response.json() as T;
    }

    const createOrder = async (order: Omit<QliroCheckoutOrderInput, 'MerchantApiKey'>) => {
        return await send<{ OrderId: string, PaymentLink: string }>('/checkout/merchantapi/orders', {
            ...order,
            MerchantApiKey: credentials.key,
        });
    }
    const getOrder = (id: Cart['id']) => send<QliroCheckoutOrder>(`/checkout/merchantapi/orders/${id}`);
    return {
        getOrder,
        createOrder,
    }

}
