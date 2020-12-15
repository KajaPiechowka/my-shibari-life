require("dotenv").config()

const myCustomQueries = {
  xs: "(max-width: 540px)",
  sm: "(min-width: 541px , max-width: 1024px)",
  md: "(min-width: 1025px)",
}

module.exports = {
  plugins: [
    `gatsby-plugin-typography`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    `gatsby-source-fontawesome`,
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: myCustomQueries,
      },
    },
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
        fonts: [`Advent Pro\:200,300,400`, `Roboto Condensed\:300,400`],
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
