import React from "react"
import styled from "styled-components"
import { colors, fonts, media } from "../../style/variables"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image/index"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import SectionHeader from "../SectionHeader/SectionHeader"
import Mobile2Image from "../Mobile2Image/Mobile2Image"
import Desktop2Image from "../DesktopImage/Desktop2Image"

const AboutPageWrapper = styled.div`
  background-color: ${colors.background};
  display: flex;
  flex-wrap: wrap;
  padding-top: 50px;
  position: relative;
`
const Text = styled.p`
  color: ${colors.text};
  text-align: justify;
  font-family: ${fonts.text};
  font-size: 1.2rem;
  line-height: 2rem;
  margin-top: 2rem;
`

const AboutImage = styled(BackgroundImage).attrs(props => ({
  Tag: "section",
  fluid: props.imageData,
  backgroundColor: props.bgColor,
}))`
  width: 100%;
  min-height: 800px;
  display: flex;
  position: relative;
  z-index: 1;
  background-position: left center;
  background-size: contain;

  padding-top: 9rem;
`

const AboutMeTextWrapper = styled.div`
  width: 45vw;
  padding-right: 5vw;
  position: absolute;
  right: 8rem;
  z-index: 5;
`
const HeaderWrapper = styled.div``

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
      <AboutPageWrapper>
        {breakpoints.md ? null : <About />}
        <AboutMeTextWrapper>
          <SectionHeader>
            <h1>Pagan Poetry</h1>
          </SectionHeader>

          <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;Sztukę Shibari odkryłam w 2010 dzięki mojemu
            zamiłowaniu do fotografii i stało się ono od tej pory częścią mojego
            życia i świata. Na początku pozowałam jako modelka linowa,
            organizowałam eventy takie jak Shibari By Night, by później samej
            wziąć sznur w dłonie. Zorganizowałam wiele warsztatów riggerów z
            Polski i ze świata w moim rodzinnym mieście - Krakowie. Uczyłam się
            minn. u Gan Raptora, Soptika, Yoroi Nicolasa, natomiast w 2018 roku
            moim sensei został Grzesznik /Shibari Akademia/ certyfikowany uczeń
            Riccardo Willdties.
          </Text>

          <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;Od wielu lat jestem zapraszana na różne
            eventy Shibari jako oficjalny fotograf imprez minn. Moscow Knot
            /Rosja/, Eurix /Niemcy/, Rope Show IL /Izrael/, czy Shi Fest
            Ukraine. Do tej pory przekazywałam innym swoją wiedzą dotyczącą
            Shibari na różnych imprezach i rope-jamach, natomiast od 2020 roku
            zajęłam się prowadzeniem profesjonalnych warsztatów Shibari.
          </Text>
        </AboutMeTextWrapper>

        {breakpoints.md ? <Mobile2Image /> : null}
      </AboutPageWrapper>
      {breakpoints.md ? null : <Desktop2Image />}
    </>
  )
}

export default AboutMe
