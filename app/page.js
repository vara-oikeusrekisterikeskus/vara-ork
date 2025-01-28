import getContent  from './lib/getContent';
import getPageConfig  from './lib/getPageConfig';
import NavComponent from "./components/NavComponent";
import FooterComponent from "./components/FooterComponent";

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
 * @constructor
 */
export default async function Home() {
  const pageConfig = getPageConfig();
  const content = await getContent(['fi'], pageConfig.contentId);
  const markup = { __html: content };

  const {colors} = pageConfig;
  const colorStyles = {
    "--primary-color": colors.primary,
    "--secondary-color": colors.secondary,
  };

  return (
    <div style={colorStyles}>
      <NavComponent
        logo={pageConfig.fi.logo}
        logoHeight={pageConfig.fi.logoHeight}
      />
      <main role="main" className="container">
        <div dangerouslySetInnerHTML={markup} />
      </main>
      <FooterComponent
        logoFooter={pageConfig.fi.logoFooter}
        logoFooterHeight={pageConfig.fi.logoFooterHeight}
        name={pageConfig.fi.name}
      />
    </div>
  );
}
