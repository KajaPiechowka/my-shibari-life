import React from "react"
import styled from "styled-components"
import { colors, fonts, media } from "../../style/variables"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import SectionHeader from "../SectionHeader/SectionHeader"
import Mobile2Image from "../Mobile2Image/Mobile2Image"
import Desktop2Image from "../DesktopImage/Desktop2Image"

const AboutPageWrapper = styled.div`
  background-color: ${colors.background};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 50px;
  @media${media.md} {
    flex-wrap: no-wrap;
    flex-direction: row;
    justify-content: space-between;
  }
`
const Text = styled.p`
  color: ${colors.text};
  text-align: center;
  font-family: ${fonts.text};
  font-size: 1.2rem;
  padding: 20px 30px 20px 30px;
  @media${media.md} {
    padding: 0;
    text-align: right;
  }
`

const AboutImage = styled(Image)`
  height: auto;
  width: 90vw;

  @media${media.md} {
    width: 40vw;
    height: auto;
    margin-left: 5vw;
  }
`
const AboutMeTextWrapper = styled.div`
  @media${media.md} {
    width: 45vw;
    padding-right: 5vw;
  }
`
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media${media.md} {
    width: 100%;
    justify-content: flex-end;
  }
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
    <AboutImage
      backgroundColor="black"
      fluid={data.file.childImageSharp.fluid}
    />
  )
}

const AboutMe = () => {
  const breakpoints = useBreakpoint()

  return (
    <>
      <AboutPageWrapper>
        {breakpoints.md ? null : <About />}
        <AboutMeTextWrapper>
          <HeaderWrapper>
            <SectionHeader>
              <h1>Pagan Poetry</h1>
            </SectionHeader>
          </HeaderWrapper>
          <Text>
            Sztukę Shibari odkryłam w 2010 dzięki mojemu zamiłowaniu do
            fotografii i stało się ono od tej pory częścią mojego życia i
            świata. Na początku pozowałam jako modelka linowa, organizowałam
            eventy takie jak Shibari By Night, by później samej wziąć sznur w
            dłonie. Zorganizowałam wiele warsztatów riggerów z Polski i ze
            świata w moim rodzinnym mieście - Krakowie. Uczyłam się minn. u Gan
            Raptora, Soptika, Yoroi Nicolasa, natomiast w 2018 roku moim sensei
            został Grzesznik /Shibari Akademia/ certyfikowany uczeń Riccardo
            Willdties.
          </Text>

          {breakpoints.md ? <About /> : null}
          <Text>
            Od wielu lat jestem zapraszana na różne eventy Shibari jako
            oficjalny fotograf imprez minn. Moscow Knot /Rosja/, Eurix /Niemcy/,
            Rope Show IL /Izrael/, czy Shi Fest Ukraine. Do tej pory
            przekazywałam innym swoją wiedzą dotyczącą Shibari na różnych
            imprezach i rope-jamach, natomiast od 2020 roku zajęłam się
            prowadzeniem profesjonalnych warsztatów Shibari.
          </Text>
        </AboutMeTextWrapper>
        {breakpoints.md ? <Mobile2Image /> : null}
      </AboutPageWrapper>
      {breakpoints.md ? null : <Desktop2Image />}
    </>
  )
}

export default AboutMe
