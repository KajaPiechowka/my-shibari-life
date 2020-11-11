import styled from "styled-components"
import React from "react"
import { useStaticQuery } from "gatsby"
import { graphql } from "gatsby"
import { colors } from "../../style/variables"
import Image from "gatsby-image"

const imageStyle = {
  width: 500,
  height: 500,
  zIndex: 2,
  position: "absolute",
  top: "320px",
  right: "100px",
}

const AcapitImage = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "about-me-acapit" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Image
      style={imageStyle}
      backgroundColor={colors.background}
      fluid={data.file.childImageSharp.fluid}
    />
  )
}

export default AcapitImage
