import styled from "styled-components"
import React from "react"
import { useStaticQuery } from "gatsby"
import { graphql } from "gatsby"
import { colors } from "../../style/variables"
import Image from "gatsby-image"

const imageStyle = {
  width: "90vw",
  height: "auto",
  zindex: 2,
}

const StyledImage = styled(Image)`
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 80%,
      rgba(0, 0, 0, 1) 100%
    );
  }
`

const MiddleImage = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "about-me-middle" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <StyledImage
      style={imageStyle}
      backgroundColor={colors.background}
      fluid={data.file.childImageSharp.fluid}
      backgroundSize="cover"
    />
  )
}

export default MiddleImage
