const path = require(`path`)

module.exports = {
  plugins: [
    `gatsby-plugin-typography`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Assistant\:400,600,700`,
          `Nunito sans\:400,600,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    // `gatsby-plugin-offline`
  ],
  siteMetadata: {
    title: "My Shibari Life",
    author: "Kaja",
  },
}
