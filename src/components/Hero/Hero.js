import React from "react"
import styled from "styled-components"
import BackgroundSlider from "gatsby-image-background-slider"
import { useStaticQuery, graphql } from "gatsby"

const SliderWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`

const GradientTopBottom = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.3) 100%
  );
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
    <GradientTopBottom />
  </SliderWrapper>
)

export default SliderHero
