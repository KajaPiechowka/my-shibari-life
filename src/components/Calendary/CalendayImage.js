import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const MyImage = styled(Image)`
  width: 100vw;
  height: auto;
`

const CalendaryImage = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "calendary" }) {
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

export default CalendaryImage
