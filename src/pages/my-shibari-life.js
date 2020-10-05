import React from "react"
import Slider from "../components/Hero/Hero"
import HamburgerMenu from "../components/Menu/HamburgerMenu"
import AboutPage from "../components/AboutPage/AboutPage"
import { useStaticQuery, graphql } from "gatsby"

/** Component with first page of the website. Here I need to do if with language version of website */

const MyShibariLifePage = ({ data }) => {
  // EN ? <English Site :
  return (
    <>
      {console.log(data)}
      <HamburgerMenu />
      <Slider
        query={useStaticQuery(graphql`
          query {
            backgrounds: allFile(
              filter: { sourceInstanceName: { eq: "backgrounds" } }
            ) {
              nodes {
                childImageSharp {
                  fluid(maxWidth: 3000, quality: 100) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
          }
        `)}
      />
      <AboutPage />
    </>
  )
}

export default MyShibariLifePage
