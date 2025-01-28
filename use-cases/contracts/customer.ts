export type Customer = {
    firstName: string;
    lastName: string;
    identifier: string;
    addresses: {
        email: string;
        city: string;
        street: string;
        country: string;
        postalCode: string;
        type: 'delivery';
    };
};
