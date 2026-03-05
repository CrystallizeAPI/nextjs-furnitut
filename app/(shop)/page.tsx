import { type FetchLandingPageQuery, type FetchLandingPageQueryVariables, FetchLandingPageDocument, PublicationState } from '@/generated/discovery/graphql';
import { apiRequest } from '@/utils/api-request';
import { Blocks } from '@/components/blocks';

export const revalidate = 120;

const fetchLandingPage = async ({ isPreview = false }: { isPreview?: boolean } = {}) => {
    const { data } = await apiRequest<FetchLandingPageQuery, FetchLandingPageQueryVariables>(FetchLandingPageDocument, {
        publicationState: isPreview ? PublicationState.Draft : PublicationState.Published,
    });
    return { blocks: data.browse?.landingPage?.hits?.[0]?.blocks ?? null };
};

type LandingPageProps = {
    searchParams: Promise<{ preview?: string }>;
};

export default async function LandingPage(props: LandingPageProps) {
    const { preview } = await props.searchParams;
    const { blocks } = await fetchLandingPage({ isPreview: !!preview });
    console.log({preview})

    return (
        <main className="flex min-h-screen flex-col items-center">
            <Blocks blocks={blocks} hasFirstBlockPadding />
        </main>
    );
}
