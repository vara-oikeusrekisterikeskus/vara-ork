import getPageConfig  from '../lib/getPageConfig';
import PageComponent from "../components/PageComponent";

/**
 * Setup metadata for EN page.
 */
export async function generateMetadata() {
  const pageConfig = getPageConfig();

  return {
    title: pageConfig.en.title,
    description: pageConfig.en.description,
    icons: {
      icon: pageConfig.favicon,
    },
  };
}

/**
 * Render EN page.
 *
 * @return {Promise<JSX.Element>}
 */
export default async function Home() {
  return <PageComponent locale="en" />;
}
