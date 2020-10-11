import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const MyImage = styled(Image)`
  width: 100vw;
  height: auto;
`

const Desktop2Image = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "desktop2" }) {
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

export default Desktop2Image
