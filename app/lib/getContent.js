import { GraphQLClient } from 'graphql-request';
import getPageConfig from './getPageConfig';

export default async function getContent(locales) {

  const queryUrl = process.env.QUERY_URL;

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

  const pageConfig = getPageConfig();

  const variables = {
    id: pageConfig.contentId,
    locales,
  };

  const { pageContents } = await hygraph.request(query, variables);
  return pageContents[0].content.html ?? ''
}
