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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 50px;
  @media${media.md} {
    flex-wrap: no-wrap;
    flex-direction: row;
    justify-content: space-around;
  }
`
const Text = styled.p`
  color: ${colors.text};
  text-align: center;
  font-family: ${fonts.text};
  font-size: 1.3rem;
  padding: 20px 30px 20px 30px;
  @media${media.md} {
    width: 80vh;
    font-size: 1.2rem;
    text-align: left;
    padding: 30px 0px 20px 0;
  }
`

const TitleImageDesktopWrappper = styled.div`
  @media${media.md} {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
  }
`

const MyImage = styled(Image)`
  z-index: 1;
  width: 100vw;
  height: auto;
  @media${media.md} {
    width: 55vh;
  }
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
        <TitleImageDesktopWrappper>
          <SectionHeader>
            <h1>My Shibari Life</h1>
          </SectionHeader>

          {breakpoints.md ? null : (
            <MyImage
              backgroundColor="black"
              fluid={data.file.childImageSharp.fluid}
            />
          )}
        </TitleImageDesktopWrappper>
        <Text>
          Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a
          pellentesque dui, non felis. Maecenas malesuada elit lectus felis,
          malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies
          porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim.
          Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet
          sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac
          turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam
          erat ac ipsum. Integer aliquam purus. <br /> <br />
          Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel
          bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer
          lobortis quis, varius in, purus. Integer ultrices posuere cubilia
          Curae, Nulla ipsum dolor lacus, suscipit adipiscing. Cum sociis
          natoque penatibus et ultrices volutpat. Nullam wisi ultricies a,
          gravida vitae, dapibus risus ante sodales lectus blandit eu, tempor
          diam pede cursus vitae, ultricies eu, faucibus quis, porttitor eros
          cursus lectus, pellentesque eget, bibendum a, gravida ullamcorper
          quam.
        </Text>
        {breakpoints.md ? (
          <MyImage fluid={data.file.childImageSharp.fluid} />
        ) : null}
      </AboutPageWrapper>
      {breakpoints.md ? null : <Desktop1Image />}
    </>
  )
}

export default AboutPage
