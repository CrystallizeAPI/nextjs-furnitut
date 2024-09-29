import { createClient } from '@crystallize/js-api-client';

const credentials = {
    tenantIdentifier: process.env.CRYSTALLIZE_TENANT_IDENTIFIER || 'furnitut',
    tenantId: process.env.CRYSTALLIZE_TENANT_ID,
    accessTokenId: process.env.CRYSTALLIZE_ACCESS_TOKEN_ID,
    accessTokenSecret: process.env.CRYSTALLIZE_ACCESS_TOKEN_SECRET,
};

export const crystallizeClient = createClient(credentials);
