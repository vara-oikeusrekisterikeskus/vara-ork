/**
 * The hard-coded page config for each site.
 *
 * The main key for each object entry specifies the "machine name" for a site.
 * This key is used in Cloudflare (and in a .env) file to pick upp the correct
 * metadata for each site while running a build.
 *
 * Other fields:
 * fi->title: The FI tile of the site.
 * fi->description: The FI description of the site.
 * fi->name: The FI name of the site (displayed in the footer).
 * fi->logo: The FI header logo.
 * fi->logoHeight: The FI header logo height.
 * fi->logoFooter: The FI footer logo.
 * fi->logoFooterHeight: The FI footer logo height.
 * en->title: The EN tile of the site.
 * en->description: The EN description of the site.
 * en->name: The EN name of the site (displayed in the footer).
 * en->logo: The EN header logo.
 * en->logoHeight: The EN header logo height.
 * en->logoFooter: The EN footer logo.
 * en->logoFooterHeight: The EN footer logo height.
 * favicon: The path to the favicon folder.
 * contentId: The content ID from Hygraph. Each site has their own content entry.
 * colors: The primary and secondary colors of the site.
 */
const pageConfig = {
  oikeuspalveluvirasto: {
    fi: {
      title: "Oikeuspalveluviraston varasivusto",
      description: "Oikeuspalveluviraston varasivusto.",
      name: "Oikeuspalveluvirasto",
      logo: "/logos/oikeuspalveluvirasto/header_fi.svg",
      logoHeight: "48px",
      logoFooter: "/logos/oikeuspalveluvirasto/footer_fi.svg",
      logoFooterHeight: "48px",
    },
    en: {
      title: "Backup site for National Legal Service Authority",
      description: "Backup site for National Legal Service Authority.",
      name: "National Legal Service Authority",
      logo: "/logos/oikeuspalveluvirasto/header_en.svg",
      logoHeight: "48px",
      logoFooter: "/logos/oikeuspalveluvirasto/footer_en.svg",
      logoFooterHeight: "48px",
    },
    favicons: "/favicons/oikeuspalveluvirasto/",
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
      logo: "/logos/oikeus/header_fi.svg",
      logoHeight: "48px",
      logoFooter: "/logos/oikeus/footer_fi.svg",
      logoFooterHeight: "48px",
    },
    en: {
      title: "Backup site for Oikeus.fi",
      description: "Backup site for Oikeus.fi.",
      name: "Oikeus.fi",
      logo: "/logos/oikeus/header_en.svg",
      logoHeight: "48px",
      logoFooter: "/logos/oikeus/footer_en.svg",
      logoFooterHeight: "48px",
    },
    favicons: null,
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
      logo: "/logos/konkurssiasiamies/header_fi.svg",
      logoHeight: "48px",
      logoFooter: "/logos/konkurssiasiamies/footer_fi.svg",
      logoFooterHeight: "48px",
    },
    en: {
      title: "Backup site for The Office of Bankruptcy Ombudsman",
      description: "Backup site for The Office of Bankruptcy Ombudsman.",
      name: "The Office of Bankruptcy Ombudsman",
      logo: "/logos/konkurssiasiamies/header_en.svg",
      logoHeight: "48px",
      logoFooter: "/logos/konkurssiasiamies/footer_en.svg",
      logoFooterHeight: "48px",
    },
    favicons: "/favicons/konkurssiasiamies/",
    contentId: "cm6geg7ay22pu07mlftug6tlq",
    colors: {
      primary: "#D64309",
      secondary: "#D64309",
    },
  },
  ulosottolaitos: {
    fi: {
      title: "Ulosottolaitoksen varasivusto",
      description: "Ulosottolaitoksen varasivusto.",
      name: "Ulosottolaitos",
      logo: "/logos/ulosottolaitos/header_fi.svg",
      logoHeight: "48px",
      logoFooter: "/logos/ulosottolaitos/footer_fi.svg",
      logoFooterHeight: "48px",
    },
    en: {
      title: "Backup website for the National Enforcement Authority Finland",
      description: "Backup website for the National Enforcement Authority Finland.",
      name: "National Enforcement Authority Finland",
      logo: "/logos/ulosottolaitos/header_en.svg",
      logoHeight: "48px",
      logoFooter: "/logos/ulosottolaitos/footer_en.svg",
      logoFooterHeight: "48px",
    },
    favicons: "/favicons/ulosottolaitos/",
    contentId: "cme87hknyhzy507laj6zyuyf6",
    colors: {
      primary: "#E60064",
      secondary: "#E60064",
    },
  },
  oikeusrekisterikeskus: {
    fi: {
      title: "Oikeusrekisterikeskuksen varasivusto",
      description: "Oikeusrekisterikeskuksen varasivusto.",
      name: "Oikeusrekisterikeskus",
      logo: "/logos/oikeusrekisterikeskus/header_fi.svg",
      logoHeight: "100px",
      logoFooter: "/logos/oikeusrekisterikeskus/footer_fi.svg",
      logoFooterHeight: "100px",
    },
    en: {
      title: "Backup website for the Legal Register Centre",
      description: "Backup website for the Legal Register Centre.",
      name: "Legal Register Centre",
      logo: "/logos/oikeusrekisterikeskus/header_en.svg",
      logoHeight: "100px",
      logoFooter: "/logos/oikeusrekisterikeskus/footer_en.svg",
      logoFooterHeight: "100px",
    },
    favicons: false,
    contentId: "cmeuz984req2207mhqilxmi52",
    colors: {
      primary: "#132E5E",
      secondary: "#132E5E",
    },
  }
}

/**
 * Function for getting the PAGE_TYPE env variable.
 *
 * @return
 *   Returns PAGE_TYPE.
 */
export function getPageType() {
  const pageType = process.env.PAGE_TYPE;
  if (!pageType) {
    throw new Error('PAGE_TYPE is not set.');
  }
  return pageType;
}

/**
 * Function for getting specific page config.
 * Requires that PAGE_TYPE is set in .env.
 *
 * @return
 *   Returns page configuration.
 */
export function getPageConfig() {
  const pageType = getPageType();
  return pageConfig[pageType];
}