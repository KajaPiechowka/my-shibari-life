import React from "react"
import styled from "styled-components"
import { colors } from "../style/variables"
import Image from "gatsby-image"

const SingleEventWrapper = styled.div`
  width: 45vw;
  height: 100vh;
  position: relative;
  h1 {
    color: ${colors.text};
  }
`
const SingleEventImage = styled(Image)`
  width: 300px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 3;
`

const Event = ({ id, text, title, image }) => {
  return (
    <SingleEventWrapper>
      <h1>{title}</h1>
      <SingleEventImage fluid={image} />
    </SingleEventWrapper>
  )
}

export default Event
