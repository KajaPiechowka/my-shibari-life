import React from "react"
import styled from "styled-components"
import { colors, fonts, media } from "../../style/variables"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import SectionHeader from "../SectionHeader/SectionHeader"
import Mobile2Image from "../Mobile2Image/Mobile2Image"
import { faAutoprefixer } from "@fortawesome/free-brands-svg-icons"
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
  font-size: 1.3rem;
  padding: 20px 30px 20px 30px;
  @media${media.md} {
    padding: 0;
    text-align: left;
  }
`

const AboutImage = styled(Image)`
  height: auto;
  width: 90vh;

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
  @media${media.md} {
    width: 100%;
    display: flex;
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
            Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a
            pellentesque dui, non felis. Maecenas malesuada elit lectus felis,
            malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies
            porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet
            enim. Phasellus fermentum in, dolor.{" "}
          </Text>

          {breakpoints.md ? <About /> : null}
          <Text>
            Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum
            dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu,
            luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer
            aliquam purus.
          </Text>
        </AboutMeTextWrapper>
        {breakpoints.md ? <Mobile2Image /> : null}
      </AboutPageWrapper>
      {breakpoints.md ? null : <Desktop2Image />}
    </>
  )
}

export default AboutMe
