module.exports = {
  siteMetadata: {
    title: "JuanBui",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/images/`,
      },
    },
  ],
};
