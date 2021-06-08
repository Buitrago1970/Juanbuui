module.exports = {
  siteMetadata: {
    title: ` juanbuui `,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about-us/`, `/projects/*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `src/images/`,
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
        icon: `src/images/JB (6).png`, // This path is relative to the root of the site.
        display: `standalone`,
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
