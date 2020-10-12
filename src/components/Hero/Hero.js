import React from "react"
import styled from "styled-components"
import BackgroundSlider from "gatsby-image-background-slider"
import { useStaticQuery, graphql } from "gatsby"

const SliderWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`
const SliderHero = () => (
  <SliderWrapper>
    <BackgroundSlider
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
      initDelay={15}
      transition={3}
      duration={15}
    ></BackgroundSlider>
  </SliderWrapper>
)

export default SliderHero
