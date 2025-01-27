import getContent  from './lib/getContent';
import getPageConfig  from './lib/getPageConfig';
import NavComponent from "./components/NavComponent";
import FooterComponent from "./components/FooterComponent";

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

export default async function Home() {
  const pageConfig = getPageConfig();
  const data = await getContent(['fi']);
  const markup = { __html: data };

  return (
    <>
      <NavComponent
        logo={pageConfig.fi.logo}
        logo_height={pageConfig.fi.logo_height}
        colors={pageConfig.colors}
      />
      <main
        style={{
          "--primary-color": pageConfig.colors.primary,
          "--secondary-color": pageConfig.colors.secondary,
        }}
        role="main">
        <div dangerouslySetInnerHTML={markup} />
      </main>
      <FooterComponent
        logo={pageConfig.fi.logo_footer}
        logo_height={pageConfig.fi.logo_height_footer}
        name={pageConfig.fi.name}
        colors={pageConfig.colors}
      />
    </>
  );
}
