const pageConfig = {
  oikeuspalveluvirasto: {
    fi: {
      title: "Title FI",
      description: "Description FI",
      name: "Oikeuspalveluvirasto FI",
      logo: "/logos/oikeuspalveluvirasto_header_fi.svg",
      logo_height: "48px",
      logo_footer: "/logos/oikeuspalveluvirasto_footer_fi.svg",
      logo_height_footer: "48px",
    },
    en: {
      title: "Title EN",
      description: "Description EN",
      name: "Oikeuspalveluvirasto EN",
      logo: "/logos/oikeuspalveluvirasto_header_en.svg",
      logo_height: "48px",
      logo_footer: "/logos/oikeuspalveluvirasto_footer_en.svg",
      logo_height_footer: "48px",
    },
    favicon: "/favicons/oikeuspalveluvirasto.png",
    contentId: "cm6ar5wcd37yg07lg8s6enpip",
    colors: {
      primary: "#0A5a55",
      secondary: "#0A5a55",
    },
  }
}

export default function getPageConfig() {
  const pageType = process.env.PAGE_TYPE;
  if (!pageType) {
    throw new Error('PAGE_TYPE is not set.');
  }
  return pageConfig[pageType];
}