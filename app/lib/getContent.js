import { GraphQLClient } from 'graphql-request';

/**
 * Function for getting content from Hygraph.
 * Requires that QUERY_URL is set in .env.
 *
 * @param locales
 *   The language version of the content.
 * @param contentId
 *   THe content ID.
 */
export default async function getContent(locales, contentId) {

  const queryUrl = process.env.QUERY_URL;
  if (!queryUrl) {
    throw new Error('QUERY_URL is not set.');
  }

  const hygraph = new GraphQLClient(
    queryUrl,
    {
      method: 'POST',
    }
  );

  const query = `
    query PageContents($id: ID!, $locales: [Locale!]!) {
      pageContents(where: {id: $id} locales: $locales) {
          content {
            html
          }
        }
      }
    `;

  const variables = {
    id: contentId,
    locales,
  };

  const { pageContents } = await hygraph.request(query, variables);
  return pageContents[0].content.html ?? ''
}
