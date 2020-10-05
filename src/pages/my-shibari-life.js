import React from "react"
import Slider from "../components/Hero/Hero"
import HamburgerMenu from "../components/Menu/HamburgerMenu"
import AboutPage from "../components/AboutPage/AboutPage"
import Navigation from "../components/Navigation/Navigation"
import { useStaticQuery, graphql } from "gatsby"

/** Component with first page of the website. Here I need to do if with language version of website */

const MyShibariLifePage = () => {
  // EN ? <English Site :
  return (
    <>
      <Navigation />
      <Slider
        query={useStaticQuery(graphql`
          query {
            backgrounds: allFile(
              filter: { sourceInstanceName: { eq: "backgrounds" } }
            ) {
              nodes {
                childImageSharp {
                  fluid(maxWidth: 3000, quality: 100) {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
              }
            }
          }
        `)}
        initDelay={10}
        transition={3}
        duration={10}
      ></Slider>
    </>
  )
}

export default MyShibariLifePage
