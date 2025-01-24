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
        logo={pageConfig.en.logo}
        name={pageConfig.en.name}
        colors={pageConfig.colors}
      />
    </>
  );
}
