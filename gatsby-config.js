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
    {
      resolve: "gatsby-plugin-favicons",
      options: {
        logo: "./src/logo.svg",
        appName: "tu te fuiste",
        background: "#fff",
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          yandex: false,
          windows: false,
        },
      },
    },
  ],
};
