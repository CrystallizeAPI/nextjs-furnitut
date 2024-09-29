import {
    Body,
    Container,
    Column,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Row,
    Section,
    Text,
    Link,
    Img,
} from '@react-email/components';
import { Price } from '@/components/price';
import { Order } from '@crystallize/js-api-client';

export const Email = ({ order }: { order: Order }) => {
    return (
        <Html>
            <Head />
            <Preview>Furnitut Order</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Section style={message}>
                        <Heading style={styles.heading}>Confirmation</Heading>
                        <Text style={styles.text}>Your order has been confirmed.</Text>
                    </Section>
                    <Section style={message}>
                        <Row>
                            <Column>
                                <Text style={styles.paragraphWithBold}>Order summary</Text>
                            </Column>
                        </Row>
                    </Section>
                    <Hr style={styles.hr} />
                    <Section
                        style={{
                            ...paddingX,
                            paddingTop: '40px',
                            paddingBottom: '40px',
                        }}
                    >
                        <Row>
                            {order?.cart.map((item, index: number) => (
                                <Column style={cartItem} key={index}>
                                    <Container>
                                        <Text style={styles.text}>
                                            {item.name} x {item.quantity}
                                        </Text>
                                    </Container>

                                    <Text style={styles.text}>
                                        <Price
                                            price={{
                                                price: item.price?.gross ?? 0,
                                            }}
                                        />
                                    </Text>
                                </Column>
                            ))}
                        </Row>
                    </Section>
                    {order.total && (
                        <Section style={paddingX}>
                            <Row>
                                <Column style={cartItem}>
                                    <Text style={styles.paragraphWithBold}>Net</Text>
                                    <Text style={styles.text}>
                                        <Price
                                            price={{
                                                price: order.total?.net ?? 0,
                                            }}
                                        />
                                    </Text>
                                </Column>
                                <Column style={cartItem}>
                                    <Text style={styles.paragraphWithBold}>Tax</Text>
                                    <Text style={styles.text}>
                                        <Price price={{ price: (order.total.gross ?? 0) - (order.total.net ?? 0) }} />
                                    </Text>
                                </Column>
                                <Column style={cartItem}>
                                    <Text style={styles.paragraphWithBold}>Gross</Text>
                                    <Text style={styles.text}>
                                        <Price price={{ price: order.total.gross ?? 0 }} />
                                    </Text>
                                </Column>
                            </Row>
                        </Section>
                    )}

                    <Hr style={{ ...styles.hr, marginTop: '12px' }} />
                    <Section style={paddingY}>
                        <Row>
                            <Text
                                style={{
                                    ...footer.text,
                                    paddingTop: 30,
                                    paddingBottom: 30,
                                }}
                            >
                                Please contact us at hello@crystallize.com if you have any questions.
                            </Text>
                        </Row>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

const paddingX = {
    paddingLeft: '40px',
    paddingRight: '40px',
};

const paddingY = {
    paddingTop: '22px',
    paddingBottom: '22px',
};

const paragraph = {
    margin: '0',
    lineHeight: '2',
};

const styles = {
    paddingX,
    paddingY,
    defaultPadding: {
        ...paddingX,
        ...paddingY,
    },
    image: {
        margin: '0 auto',
    },
    paragraphWithBold: { ...paragraph, fontWeight: 'bold' },
    heading: {
        fontSize: '32px',
        lineHeight: '1.3',
        fontWeight: '700',
        textAlign: 'center',
        letterSpacing: '-1px',
    } as React.CSSProperties,
    text: {
        ...paragraph,
        color: '#747474',
        fontWeight: '500',
    },
    voucher: {
        color: '#747474',
        width: '600px',
        wordBreak: 'break-word',
        fontSize: '14px',
        textDecoration: 'underline',
    } as React.CSSProperties,
    button: {
        border: '1px solid #929292',
        fontSize: '16px',
        textDecoration: 'none',
        padding: '10px 0px',
        width: '220px',
        display: 'block',
        textAlign: 'center',
        fontWeight: 500,
        color: '#000',
    } as React.CSSProperties,
    hr: {
        borderColor: '#E5E5E5',
        margin: '0',
    },
};

const main = {
    backgroundColor: '#ffffff',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: '10px auto',
    width: '600px',
    maxWidth: '100%',
    border: '1px solid #E5E5E5',
    padding: '40px',
};

const message = {
    padding: '40px 74px',
    textAlign: 'center',
} as React.CSSProperties;

const footer = {
    policy: {
        width: '166px',
        margin: 'auto',
    },
    text: {
        margin: '0',
        color: '#AFAFAF',
        fontSize: '13px',
        textAlign: 'center',
    } as React.CSSProperties,
};

const cartItem = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
};
