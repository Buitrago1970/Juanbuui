module.exports = {
  siteMetadata: {
    title: "Juan Buui",
    titleTemplate: `%s · a starting point`,
    description:
      "Juan Buitrago es un ingeniero de software que se especializa en crear (y ocasionalmente diseñar) experiencias digitales excepcionales",
    url: `https://www.juanbuui.com`,
    image: "/Neon Balloon Dog.png",
    twitterUsername: "@SSYBuitrago",
    author: "JuanBuitrago",
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about-us/`, `/projects/*`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `juanbuitrago`,
        short_name: `juanbuui`,
        start_url: `/`,
        display: `standalone`,
        lang: `es`,
        icon: `src/images/Neon Balloon Dog.png`, //This path is relative to the root of the site.
        display: `standalone`,
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: 'Inter',
            weights: ['300', '400', '500', '600', '700', '800']
          },
        ],
      },
    },
  ],
};
