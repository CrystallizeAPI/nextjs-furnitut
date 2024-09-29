import nodemailer from 'nodemailer';
import sendgrid from '@sendgrid/mail';
import { Mailer } from '@/use-cases/contracts/mailer';

export function createMailer(dsn: string): Mailer {
    if (dsn.startsWith('sendgrid://')) {
        const key = dsn.split('://')[1];
        sendgrid.setApiKey(key);

        return (
            subject: string,
            to: string[] | string,
            from: string,
            { html, text }: { html: string; text: string },
        ) => {
            return sendgrid.send({
                from: {
                    email: from,
                    name: 'Furnitut',
                },
                to,
                subject,
                html,
                text,
                trackingSettings: {
                    clickTracking: {
                        enable: false,
                        enableText: false,
                    },
                },
            });
        };
    }

    let realDSN = dsn;
    const transporter = nodemailer.createTransport(realDSN);
    transporter.verify((error, success) => {
        if (!success) {
            console.log(`DSN ${realDSN}: ${error}`);
        }
    });

    return (subject: string, to: string[] | string, from: string, { html, text }: { html: string; text: string }) => {
        return transporter.sendMail({
            from,
            to,
            subject,
            html,
            text,
        });
    };
}
