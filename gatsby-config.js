module.exports = {
  siteMetadata: {
    title: "Juan Buui",
    titleTemplate: `%s · a starting point`,
    description:
      "Hogwarts Potions master, Head of Slytherin house and former Death Eater.",
    url: `https://www.juanbuui.com`,
    image: "/Neon Balloon Dog.png",
    twitterUsername: "@SSYBuitrago",
    author: "JuanBuitrago",
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
        name: "images",
        path: `${__dirname}/src/images/`,
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
        icon: `src/images/Neon Balloon Dog.png`, // This path is relative to the root of the site.
        display: `standalone`,
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
