import React from "react"
import styled from "styled-components"
import { colors, fonts, media } from "../../style/variables"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import SectionHeader from "../SectionHeader/SectionHeader"
import Desktop1Image from "../DesktopImage/Desktop1Image"

const AboutPageWrapper = styled.div`
  background-color: ${colors.background};
  position: relative;
  justify-content: center;
  height: 80vh;
  width: 100vw;
`
const Text = styled.p`
  color: ${colors.text};
  font-family: ${fonts.text};
  font-size: 1.4rem;
  text-align: left;
  padding: 20px 30px 20px 30px;
  z-index: 10;
  position: absolute;
  left: 1rem;
  bottom: 2rem;
  width: 70%;
`

const TitleImageDesktopWrappper = styled.div`
  width: 50%;
  height: auto;
  position: absolute;
  right: 0;
`

const MyImage = styled(Image)`
  z-index: 1;
  position: relative;
  top: 0;
  right: 0;
  height: auto;

  margin: 0;
  &::after {
    width: 100%;
    height: 100%;
    content: "";
    background: radial-gradient(
      circle,
      rgba(0, 212, 255, 0) 0%,
      rgba(0, 0, 0, 1) 99%
    );
    z-index: 3;
  }
`

const HeaderWrapper = styled.div`
  position: absolute;
  left: 3rem;
  top: 5rem;
  z-index: 6;
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
      <AboutPageWrapper>
        <HeaderWrapper>
          <SectionHeader>
            <h1>My Shibari Life</h1>
          </SectionHeader>
        </HeaderWrapper>

        <Text>
          Powielu latach obcowania ze sznurkami postanowiłam zrobić stronę
          internetową, by móc podzielić się z szerszym gronem swoją pasją do
          fotografi i Shibari, oraz pomóc odkryć i poznać ten fascynujący świat.
          Znajdziecie na niej mnóstwo zdjęć i mam nadzieję inspiracji,
          informacje o ważnych dla mnie imprezach sznurkowych, oraz tych które
          sama organizuję i poszerzyć swoją wiedzę na temat sznurków. Jeżeli
          zdecydujecie się by zacząć podróż drogami Shibari i nauczyć się
          wiązać, będziecie mogli zapisać się na organizowane przeze mnie
          warsztaty, lub zakupić najwyższej jakości liny z Włoch i Japoni.
          <br />
          Zapraszam
        </Text>
        <TitleImageDesktopWrappper>
          <MyImage
            backgroundColor="black"
            fluid={data.file.childImageSharp.fluid}
          ></MyImage>
        </TitleImageDesktopWrappper>
      </AboutPageWrapper>
      {breakpoints.md ? null : <Desktop1Image />}
    </>
  )
}

export default AboutPage
