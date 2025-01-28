/**
 * The hard-coded page config for each site.
 */
const pageConfig = {
  oikeuspalveluvirasto: {
    fi: {
      title: "Oikeuspalveluviraston varasivusto",
      description: "Oikeuspalveluviraston varasivusto.",
      name: "Oikeuspalveluvirasto",
      logo: "/logos/oikeuspalveluvirasto_header_fi.svg",
      logoHeight: "48px",
      logoFooter: "/logos/oikeuspalveluvirasto_footer_fi.svg",
      logoFooterHeight: "48px",
    },
    en: {
      title: "Backup site for National Legal Service Authority",
      description: "Backup site for National Legal Service Authority.",
      name: "National Legal Service Authority",
      logo: "/logos/oikeuspalveluvirasto_header_en.svg",
      logoHeight: "48px",
      logoFooter: "/logos/oikeuspalveluvirasto_footer_en.svg",
      logoFooterHeight: "48px",
    },
    favicon: "/favicons/oikeuspalveluvirasto.png",
    contentId: "cm6ar5wcd37yg07lg8s6enpip",
    colors: {
      primary: "#0A5a55",
      secondary: "#0A5a55",
    },
  },
  oikeus: {
    fi: {
      title: "Oikeus.fi varasivusto",
      description: "Oikeus.fi varasivusto.",
      name: "Oikeus.fi",
      logo: "/logos/oikeuspalveluvirasto_header_fi.svg",
      logoHeight: "48px",
      logoFooter: "/logos/oikeuspalveluvirasto_footer_fi.svg",
      logoFooterHeight: "48px",
    },
    en: {
      title: "Backup site for Oikeus.fi",
      description: "Backup site for Oikeus.fi.",
      name: "Oikeus.fi",
      logo: "/logos/oikeuspalveluvirasto_header_en.svg",
      logoHeight: "48px",
      logoFooter: "/logos/oikeuspalveluvirasto_footer_en.svg",
      logoFooterHeight: "48px",
    },
    favicon: "/favicons/oikeuspalveluvirasto.png",
    contentId: "cm6geenkv21uy07lf434hvgec",
    colors: {
      primary: "#7F261E",
      secondary: "#7F261E",
    },
  },
  konkurssiasiamies: {
    fi: {
      title: "Konkurssiasiamiehen toimiston varasivusto",
      description: "Konkurssiasiamiehen toimiston varasivusto.",
      name: "Konkurssiasiamies",
      logo: "/logos/oikeuspalveluvirasto_header_fi.svg",
      logoHeight: "48px",
      logoFooter: "/logos/oikeuspalveluvirasto_footer_fi.svg",
      logoFooterHeight: "48px",
    },
    en: {
      title: "Backup site for The Office of Bankruptcy Ombudsman",
      description: "Backup site for The Office of Bankruptcy Ombudsman.",
      name: "The Office of Bankruptcy Ombudsman",
      logo: "/logos/oikeuspalveluvirasto_header_en.svg",
      logoHeight: "48px",
      logoFooter: "/logos/oikeuspalveluvirasto_footer_en.svg",
      logoFooterHeight: "48px",
    },
    favicon: "/favicons/oikeuspalveluvirasto.png",
    contentId: "cm6geg7ay22pu07mlftug6tlq",
    colors: {
      primary: "#D64309",
      secondary: "#082B42",
    },
  }
}

/**
 * Function for getting specific page config.
 * Requires that PAGE_TYPE is set in .env.
 */
export default function getPageConfig() {
  const pageType = process.env.PAGE_TYPE;
  if (!pageType) {
    throw new Error('PAGE_TYPE is not set.');
  }
  return pageConfig[pageType];
}