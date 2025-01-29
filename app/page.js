import getPageConfig  from './lib/getPageConfig';
import PageComponent from "./components/PageComponent";

/**
 * Setup metadata for FI page.
 */
export async function generateMetadata() {
  const pageConfig = getPageConfig();

  return {
    title: pageConfig.fi.title,
    description: pageConfig.fi.description,
    icons: {
      icon: pageConfig.favicon,
    },
  };
}

/**
 * Render FI page.
 *
 * @return {Promise<JSX.Element>}
 */
export default async function Home() {
  return <PageComponent locale="fi" />;
}
