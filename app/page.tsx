import { type FetchLandingPageQuery, FetchLandingPageDocument } from '@/generated/graphql';
import { apiRequest } from '@/utils/api-request';
import { Blocks } from '@/components/blocks';

export const revalidate = 4;

const fetchLandingPage = async () => {
    const { data } = await apiRequest<FetchLandingPageQuery>(FetchLandingPageDocument);
    return { blocks: data.browse?.landingPage?.hits?.[0]?.blocks ?? null };
};

export default async function LandingPage() {
    const { blocks } = await fetchLandingPage();

    console.log(JSON.stringify(blocks));

    return (
        <main className="flex min-h-screen flex-col items-center">
            <Blocks blocks={blocks} hasFirstBlockPadding />
        </main>
    );
}
