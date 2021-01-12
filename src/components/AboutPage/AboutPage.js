import React from "react"
import styled from "styled-components"
import { colors, fonts } from "../../style/variables"
import { graphql, useStaticQuery } from "gatsby"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import SectionHeader from "../SectionHeader/SectionHeader"
import Desktop1Image from "../DesktopImage/Desktop1Image"
import BackgroundImage from "gatsby-background-image/index"

const AboutPageWrapper = styled(BackgroundImage).attrs(props => ({
  Tag: "section",
  fluid: props.imageData,
  backgroundColor: props.bgColor,
}))`
  width: 100%;
  height: auto;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 50px;
  background-size: contain;
`

const Gradient = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgb(0, 212, 255);
  background: linear-gradient(
    279deg,
    rgba(0, 212, 255, 0) 0%,
    rgba(0, 0, 0, 0.9) 68%
  );
`

const Gradient2 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0) 80%,
    rgba(0, 0, 0, 0.9) 100%
  );
`

const Text = styled.p`
  color: ${colors.text};
  font-family: ${fonts.text};
  font-size: 1.2rem;
  line-height: 1.5rem;
  text-align: center;
  font-weight: 300;
  letter-spacing: 1.3px;
  z-index: 10;
  margin-top: 60px;
  width: 90%;
`

const AboutPage = () => {
  const breakpoints = useBreakpoint()
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "mobile1" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <>
      <AboutPageWrapper
        bgColor={"black"}
        imageData={data.file.childImageSharp.fluid}
      >
        <Gradient />
        <Gradient2 />

        <SectionHeader>
          <h1>My Shibari Life</h1>
        </SectionHeader>

        <Text>
          &nbsp;&nbsp;&nbsp;&nbsp; Po wielu latach obcowania ze sznurkami
          postanowiłam zrobić stronę internetową, by móc podzielić się z
          szerszym gronem swoją pasją do fotografi i Shibari, oraz pomóc innym
          odkryć i poznać ten fascynujący świat. Znajdziecie na niej mnóstwo
          zdjęć i mam nadzieję inspiracji, informacje o ważnych dla mnie
          imprezach sznurkowych, oraz tych które sama organizuję i poszerzyć
          swoją wiedzę na temat Shibari. <br /> Zapraszam.
          <br />
        </Text>
      </AboutPageWrapper>
      {breakpoints.md ? null : <Desktop1Image />}
    </>
  )
}

export default AboutPage
