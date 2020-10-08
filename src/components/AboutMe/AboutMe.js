import React from "react"
import styled from "styled-components"
import { colors, fonts, media } from "../../style/variables"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import SectionHeader from "../SectionHeader/SectionHeader"
import Mobile2Image from "../Mobile2Image/Mobile2Image"

const AboutPageWrapper = styled.div`
  background-color: ${colors.background};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 50px;
`
const Text = styled.p`
  color: ${colors.text};
  text-align: center;
  font-family: ${fonts.text};
  font-size: 1.3rem;
  padding: 20px 30px 20px 30px;
`

const AboutImage = styled(Image)`
  height: auto;
  width: 90vh;
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
    <AboutPageWrapper>
      <SectionHeader>
        <h1>Pagan Poetry</h1>
      </SectionHeader>
      {breakpoints.md ? null : <About />}
      <Text>
        Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a
        pellentesque dui, non felis. Maecenas malesuada elit lectus felis,
        malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta
        urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim.
        Phasellus fermentum in, dolor.{" "}
      </Text>

      {breakpoints.md ? <About /> : null}
      <Text>
        Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum
        dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus
        et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam
        purus.
      </Text>
      {breakpoints.md ? <Mobile2Image /> : null}
    </AboutPageWrapper>
  )
}

export default AboutMe
