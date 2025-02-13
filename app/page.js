import getPageConfig  from './lib/getPageConfig';
import PageComponent from "./components/PageComponent";

/**
 * Setup metadata for FI page.
 */
export async function generateMetadata() {
  const pageConfig = getPageConfig();

  const metadata = {
    title: pageConfig.fi.title,
    description: pageConfig.fi.description,
  };

  // Only add icons and manifest if favicons path is set.
  if (pageConfig.favicons) {
    metadata.icons = {
      icon: [
        pageConfig.favicons + "favicon.svg",
        pageConfig.favicons + "favicon-96x96.png",
      ],
      shortcut: pageConfig.favicons + "favicon.ico",
      apple: pageConfig.favicons + "apple-touch-icon.png",
    };
    metadata.manifest = pageConfig.favicons + "site.webmanifest";
  }

  return metadata;
}

/**
 * Render FI page.
 *
 * @return {Promise<JSX.Element>}
 */
export default async function Home() {
  return <PageComponent locale="fi" />;
}
