export type Mailer = (
    subject: string,
    to: string[] | string,
    from: string,
    { html, text }: { html: string; text: string },
) => Promise<any>;
