export type Customer = {
    firstName: string;
    lastName: string;
    identifier: string;
    companyName: string;
    taxNumber: string;
    addresses: {
        email: string;
        city: string;
        street: string;
        country: string;
        postalCode: string;
        type: 'delivery';
    };
};
