import { render } from '@react-email/render';
import { Email } from '@/components/confirmation-mail';
import type { Mailer } from './contracts/mailer';
import { createOrderFetcher } from '@crystallize/js-api-client';
import { crystallizeClient } from '@/core/crystallize-client.server';

type Deps = {
    mailer: Mailer;
};

export const sendOrderConfirmation = async (orderId: string, { mailer }: Deps) => {
    const order = await createOrderFetcher(crystallizeClient).byId(orderId);
    const emailHtml = await render(Email({ order }));
    const textEmail = await render(Email({ order }), {
        plainText: true,
    });
    const email = order.customer?.identifier;
    try {
        await mailer('Furnitut - Your order has been placed', `${email}`, 'hello@crystallize.com', {
            html: emailHtml,
            text: textEmail,
        });
    } catch (error) {
        throw new Error('Error sending order confirmation email');
    }
};
