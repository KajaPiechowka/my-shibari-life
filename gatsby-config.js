require("dotenv").config()

module.exports = {
  plugins: [
    `gatsby-plugin-typography`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-source-fontawesome`,
    `gatsby-plugin-breakpoints`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `backgrounds`,
        path: `${__dirname}/src/assets/images/hero`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/pages-img`,
      },
    },

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Hind Guntur\:400,500,600`, `Sarabun\:400,500,600`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.API_DATO_CMS,
      },
    },
    // `gatsby-plugin-offline`
  ],
  siteMetadata: {
    title: "My Shibari Life",
    author: "Kaja Piechówka",
  },
}
