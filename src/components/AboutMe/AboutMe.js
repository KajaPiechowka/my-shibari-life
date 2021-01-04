import React from "react"
import styled from "styled-components"
import { colors, fonts } from "../../style/variables"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image/index"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import SectionHeader from "../SectionHeader/SectionHeader"
import Mobile2Image from "../Mobile2Image/Mobile2Image"
import Desktop2Image from "../DesktopImage/Desktop2Image"

const AboutMeWrapper = styled.div`
  background-color: ${colors.background};
  display: flex;
  flex-wrap: wrap;
  padding-top: 50px;
  position: relative;
  height: auto;
`
const Text = styled.p`
  color: ${colors.text};
  font-family: ${fonts.text};
  font-size: 1.2rem;
  line-height: 1.5rem;
  text-align: center;
  font-weight: 300;
  letter-spacing: 1.2px;
  width: 90%;
`

const AboutImage = styled(BackgroundImage).attrs(props => ({
  Tag: "section",
  fluid: props.imageData,
  backgroundColor: props.bgColor,
}))`
  width: 100vw;
  height: 600px;
  display: flex;
  position: relative;
  z-index: 1;
  background-position: center;
  background-size: cover;
  padding-top: 9rem;
`

const AboutMeTextWrapper = styled.div`
  width: 100vw;
  z-index: 5;
  position: absolute;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const About = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "about-me" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <AboutImage bgColor={"black"} imageData={data.file.childImageSharp.fluid} />
  )
}

const AboutMe = () => {
  const breakpoints = useBreakpoint()

  return (
    <>
      <AboutMeWrapper>
        <AboutMeTextWrapper>
          <SectionHeader>
            <h1>Pagan Poetry</h1>
          </SectionHeader>

          <Text style={{ marginTop: "60px" }}>
            &nbsp;&nbsp;&nbsp;&nbsp;Po raz pierwszy spotkałam się z linami około
            2012 roku, gdy mój znajomy fotograf zaproponował mi pozowanie do
            zdjęć Shibari. Przez kilka lat pozowałam do zdjęć, nie wchodząc
            jednak głębiej w temat. Jakiś czas później poznałam człowieka, który
            wiążąc wyzwolił we mnie silne, nieznane mi dotąd emocje. Ten ktoś
            znikł a ja już wiedziałam, że chcę poznać od podstaw tę japońską
            sztukę, tym razem jednak jako osoba wiążąca, by móc pokazać innym to
            czego sama doświadczyłam podczas niewoli.
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;Na początku tej drogi, błądziłąm po różnych
            warsztatch, ucząc się od wielu nauczycieli, by w końcu znaleźć osobę
            i styl, które najbardziej mi odpowiadały. I tak zostałam uczniem
            Pawła Grzesznika, certyfikowanego ucznia Riccardo a styl którego
            zaczęłam się uczyć to tradycyjna japońska Semenawa w dosłownym
            tłumaczeniu - lina cierpienia. Ten styl wywodzący się bezpośrednio
            od Akira Naki to opowieść o dominacji i ulegości a semenawa zaczyna
            się tam, gdzie modelka mówi dość.
          </Text>
          {breakpoints.xs ? <About /> : null}

          <Text style={{ marginBottom: "100px" }}>
            &nbsp;&nbsp;&nbsp;&nbsp;Od 2018 roku pomagałam mojemu nauczycielowi
            w prowadzeniu warsztatów a dwa lata później sama zaczęłam prowadzić
            własne warsztaty w Krakowie. Cały czas się szkolę, doskonalę swoje
            umiejętności u Grzesznika i Riccardo, by podnieść swój poziom
            wiązania. Shibari jest dla mnie drogą na całe życie, więc mam
            nadzieję, że jeszcze długo będę mogła czerpać radość nie tylko z
            nauczania, ale także z doskonalenia swojego warsztatu. Pagan
          </Text>
        </AboutMeTextWrapper>
      </AboutMeWrapper>
      {breakpoints.md ? null : <Desktop2Image />}
    </>
  )
}

export default AboutMe
