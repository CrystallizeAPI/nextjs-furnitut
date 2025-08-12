import { createClient } from "./payments/qliro/client";

export const qliroClient = createClient({
    credentials: {
        base_url: `${process.env.QLIRO_BASE_URL}`,
        key: `${process.env.QLIRO_API_KEY}`,
        secret: `${process.env.QLIRO_API_SECRET}`,
    }
})
