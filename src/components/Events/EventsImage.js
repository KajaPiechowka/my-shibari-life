import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import { colors } from "../../style/variables"
import BackgroundImage from "gatsby-background-image"

const EventsImage = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "events" }) {
        childImageSharp {
          fluid(maxWidth: 2600, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  const imageData = data.file.childImageSharp.fluid

  return (
    <>
      <BackgroundImage
        Tag="section"
        imageData={imageData}
        bgColor={colors.background}
      />
    </>
  )
}

const EventsWrapper = styled(EventsImage)`
  padding-top: 30vh;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export default EventsWrapper
