import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const MyImage = styled(Image)`
  width: 100vw;
  height: auto;
`

const GalleryImage = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "gallery" }) {
        childImageSharp {
          fluid(maxWidth: 2600, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <MyImage backgroundColor="black" fluid={data.file.childImageSharp.fluid} />
  )
}

export default GalleryImage
