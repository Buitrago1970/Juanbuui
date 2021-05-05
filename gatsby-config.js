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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `juanbuui`,
        short_name: `juanbuui`,
        lang: `es`,
        icon: `src/images/JB (3).png`, // This path is relative to the root of the site.
        icons: [
          {
            src: `src/images/JB.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
        ],
        start_url: `/`,
        display: `standalone`,
        localize: [
          {
            start_url: `/de/`,
            lang: `de`,
            name: `Die coole Anwendung`,
            short_name: `Coole Anwendung`,
            description: `Die Anwendung macht coole Dinge und macht Ihr Leben besser.`,
          },
        ],
      },
    },
  ],
};
