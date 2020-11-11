import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image/index"

const MyImage = styled(BackgroundImage).attrs(props => ({
  Tag: "section",
  fluid: props.imageData,
  backgroundColor: props.bgColor,
}))`
  width: 100%;
  min-height: 800px;
  position: relative;
  z-index: 1;
  background-position: center;
  background-size: cover;
`
const GradientTopBottom = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.9) 100%
  );
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
    <>
      <MyImage bgColor={"black"} imageData={data.file.childImageSharp.fluid}>
        <GradientTopBottom />
      </MyImage>
    </>
  )
}

export default Desktop2Image
