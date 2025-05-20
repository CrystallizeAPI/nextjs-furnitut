import { type FetchLandingPageQuery, FetchLandingPageDocument } from '@/generated/discovery/graphql';
import { apiRequest } from '@/utils/api-request';
import { Blocks } from '@/components/blocks';

export const revalidate = 120;

const fetchLandingPage = async () => {
    const { data } = await apiRequest<FetchLandingPageQuery>(FetchLandingPageDocument);
    return { blocks: data.browse?.landingPage?.hits?.[0]?.blocks ?? null };
};

export default async function LandingPage() {
    const { blocks } = await fetchLandingPage();

    return (
        <main className="flex min-h-screen flex-col items-center">
            <Blocks blocks={blocks} hasFirstBlockPadding />
        </main>
    );
}
