import { createClient, ClientConfiguration } from '@crystallize/js-api-client';

const credentials: ClientConfiguration = {
    tenantIdentifier: process.env.CRYSTALLIZE_TENANT_IDENTIFIER || 'furnitut',
    tenantId: process.env.CRYSTALLIZE_TENANT_ID,
    accessTokenId: process.env.CRYSTALLIZE_ACCESS_TOKEN_ID,
    accessTokenSecret: process.env.CRYSTALLIZE_ACCESS_TOKEN_SECRET,
    shopApiStaging: false
};

export const crystallizeClient = createClient(credentials);
