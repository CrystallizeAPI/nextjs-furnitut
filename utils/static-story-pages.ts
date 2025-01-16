import { crystallizeClient } from '../core/crystallize-client.server';

export const generateStoryStaticPages = async () => {
    // Fetches first 25 stories for static generation, the rest we leave dynamic.
    // Note: This is a lazy implementation, you should NOT do this since the complexity of the query can quickly explode and
    // become a problem if you fetch multiple categories and stories.

    let result = [];
    try {
        const data = await crystallizeClient.catalogueApi(
            `#graphql
          query FETCH_PATHS {
                catalogue(path: "/stories") {
                    subtree(first: 25) {
                        edges {
                            node {
                                path
                            }
                        }
                    }
                }
            }
            `,
        );
        for (const edge of data.catalogue.subtree.edges) {
            const pathArray = edge.node.path.split('/');
            const story = pathArray[pathArray.length - 1];
            result.push({
                params: {
                    story,
                },
            });
        }
    } catch (exception) {
        console.error('Could not fetch paths for catalogue ', exception);
        throw exception;
    }
    return result;
};

export default generateStoryStaticPages;
