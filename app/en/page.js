import getContent  from '../lib/getContent';
import getPageConfig  from '../lib/getPageConfig';
import NavComponent from "../components/NavComponent";
import FooterComponent from "../components/FooterComponent";

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
 * @constructor
 */
export default async function Home() {
  const pageConfig = getPageConfig();
  const content = await getContent(['en'], pageConfig.contentId);
  const markup = { __html: content };

  const {colors} = pageConfig;
  const colorStyles = {
    "--primary-color": colors.primary,
    "--secondary-color": colors.secondary,
  };

  return (
    <div className="wrapper" style={colorStyles}>
      <NavComponent
        logo={pageConfig.en.logo}
        logoHeight={pageConfig.en.logoHeight}
      />
      <main role="main" className="container">
        <div dangerouslySetInnerHTML={markup} />
      </main>
      <FooterComponent
        logoFooter={pageConfig.en.logoFooter}
        logoFooterHeight={pageConfig.en.logoFooterHeight}
        name={pageConfig.en.name}
      />
    </div>
  );
}
