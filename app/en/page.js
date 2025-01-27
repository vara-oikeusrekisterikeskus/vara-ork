import getContent  from '../lib/getContent';
import getPageConfig  from '../lib/getPageConfig';
import NavComponent from "../components/NavComponent";
import FooterComponent from "../components/FooterComponent";

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

export default async function Home() {
  const pageConfig = getPageConfig();
  const data = await getContent(['en']);
  const markup = { __html: data };

  return (
    <>
      <NavComponent
        logo={pageConfig.en.logo}
        logo_height={pageConfig.en.logo_height}
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
        logo={pageConfig.en.logo_footer}
        logo_height={pageConfig.en.logo_height_footer}
        name={pageConfig.en.name}
        colors={pageConfig.colors}
      />
    </>
  );
}
