import React from "react"
import styled from "styled-components"
import { colors, fonts } from "../../style/variables"
// import { graphql } from "gatsby"
// import Image from "gatsby-image"

const AboutPageWrapper = styled.div`
  background-color: ${colors.background};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`
const Text = styled.p`
  color: ${colors.text};
  text-align: center;
  font-family: ${fonts.text};
`

const GreyDiv = styled.div`
  width: 220px;
  height: 50px;
  background-color: ${colors.window};
  border-radius: 2px;
  position: relative;
  margin-top: 20px;
  margin-bottom: 40px;
  h1 {
    color: ${colors.text};
    position: absolute;
    top: -10px;
    left: -10px;
    font-family: ${fonts.main};
  }
`

const AboutPage = () => {
  return (
    <AboutPageWrapper>
      <GreyDiv>
        <h1>My Shibari Life</h1>
      </GreyDiv>

      <Text>
        Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a
        pellentesque dui, non felis. Maecenas malesuada elit lectus felis,
        malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta
        urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim.
        Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet
        sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis
        velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac
        ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed,
        vestibulum id, eleifend justo vel bibendum sapien massa ac turpis
        faucibus orci luctus non, consectetuer lobortis quis, varius in, purus.
        Integer ultrices posuere cubilia Curae, Nulla ipsum dolor lacus,
        suscipit adipiscing. Cum sociis natoque penatibus et ultrices volutpat.
        Nullam wisi ultricies a, gravida vitae, dapibus risus ante sodales
        lectus blandit eu, tempor diam pede cursus vitae, ultricies eu, faucibus
        quis, porttitor eros cursus lectus, pellentesque eget, bibendum a,
        gravida ullamcorper quam.
      </Text>
      {/* <Image fluid={data.file.childImageSharp.fluid} /> */}
    </AboutPageWrapper>
  )
}

// export const query = graphql`
//   query MyQuery {
//     file(name: { eq: "mobile2" }) {
//       childImageSharp {
//         fluid(maxWidth: 600) {
//           ...GatsbyImageSharpFluid_tracedSVG
//         }
//       }
//     }
//   }
// `

export default AboutPage
