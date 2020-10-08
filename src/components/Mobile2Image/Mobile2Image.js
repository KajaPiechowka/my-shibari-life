import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const MyImage = styled(Image)`
  width: 100vw;
  height: auto;
`

const Mobile2Image = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "mobile2" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
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

export default Mobile2Image
