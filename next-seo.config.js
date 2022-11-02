const url = process.env.NEXT_PUBLIC_VERCEL_URL
  ? "https://www.serenmodz.rocks"
  : "http://localhost:3000";

/**
 * @param {import("next/router").Router} router
 * @returns {import("next-seo").DefaultSeoProps}
 */
module.exports = (router) => ({
  defaultTitle: "Seren_Modz 21",
  titleTemplate: "%s - Seren_Modz 21",
  canonical: `${url}${router.asPath}`,
  description: "Welcome to my website! My name is Seren_Modz 21.", // TODO: make a better description
  openGraph: {
    type: "website",
    url: `${url}${router.asPath}`,
    images: [
      {
        url: `${url}/logo.png`,
        type: "image/png",
        height: 300,
        width: 300,
      },
    ],
  },
  twitter: {
    cardType: "summary",
    handle: "@SerenModz21",
    site: "@SerenModz21",
  },
});
