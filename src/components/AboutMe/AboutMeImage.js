import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { colors } from "../../style/variables"
import BackgroundImage from "gatsby-background-image"

const ImageContener = styled(BackgroundImage).attrs(props => ({
  Tag: "section",
  fluid: props.imageData,
  backgroundColor: props.bgColor,
}))`
  width: 100%;
  height: 700px;
  z-index: 1;
  background-position: top center !important;
  background-size: cover;
`

const AboutMeImage = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "about-me-cover" }) {
        childImageSharp {
          fluid(maxWidth: 2600) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  const imageData = data.file.childImageSharp.fluid
  return (
    <>
      <ImageContener bgColor={"black"} imageData={imageData} />
    </>
  )
}

export default AboutMeImage
