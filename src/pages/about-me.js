import React from "react"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer/Footer"
import styled from "styled-components"
import { colors } from "../style/variables"

const AboutMePageWrapper = styled.div`
  background-color: ${colors.background};
  width: 100vw;
  height: 100vh;
`

const AboutMePage = () => {
  return (
    <>
      <Navigation />
      <AboutMePageWrapper />
      <Footer />
    </>
  )
}

export default AboutMePage
