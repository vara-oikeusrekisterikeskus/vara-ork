import getContent from "../lib/getContent";
import {getPageConfig, getPageType} from '../lib/getPageConfig';
import NavComponent from "./NavComponent";
import FooterComponent from "./FooterComponent";

/**
 * Reusable Page Component.
 *
 * @param locale
 *   The language code of the rendered page.
 *   
 * @return {Promise<JSX.Element>}
 */
export default async function PageComponent({ locale }) {
  const pageConfig = getPageConfig();
  const content = await getContent([locale], pageConfig.contentId);
  const markup = { __html: content };

  const localizedConfig = pageConfig[locale];
  const { colors } = pageConfig;
  const pageType = getPageType();

  const colorStyles = {
    "--primary-color": colors.primary,
    "--secondary-color": colors.secondary,
  };

  return (
    <div className={`wrapper ${pageType}`} style={colorStyles}>
      <NavComponent logo={localizedConfig.logo} logoHeight={localizedConfig.logoHeight} />
      <main role="main" className="container">
        <div dangerouslySetInnerHTML={markup} />
      </main>
      <FooterComponent
        logoFooter={localizedConfig.logoFooter}
        logoFooterHeight={localizedConfig.logoFooterHeight}
        name={localizedConfig.name}
      />
    </div>
  );
}
