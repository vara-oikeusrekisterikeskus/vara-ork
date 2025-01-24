const pageConfig = {
  oikeuspalveluvirasto: {
    fi: {
      title: "Title FI",
      description: "Description FI",
      name: "Oikeuspalveluvirasto FI",
      logo: "/logos/oikeuspalveluvirasto_fi.svg"
    },
    en: {
      title: "Title EN",
      description: "Description EN",
      name: "Oikeuspalveluvirasto EN",
      logo: "/logos/oikeuspalveluvirasto_en.svg"
    },
    favicon: "/favicons/oikeuspalveluvirasto.png",
    contentId: "cm6ar5wcd37yg07lg8s6enpip",
    colors: {
      primary: "#28A745",
      secondary: "#DC3545",
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