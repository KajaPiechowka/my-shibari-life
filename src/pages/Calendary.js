import React from "react"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer/Footer"
import styled from "styled-components"
import { colors } from "../style/variables"
import CalendaryImage from "../components/Calendary/CalendayImage"
import Calendary from "../components/Calendary/Calenday"

const CalendaryWrapper = styled.div`
  width: 100vw;
  height: 90vh;
  background-color: ${colors.background};
  position: relative;
`

const CalendaryPage = () => {
  return (
    <>
      <Navigation />
      <CalendaryWrapper />
      <Calendary />
      <CalendaryImage />
      <Footer />
    </>
  )
}

export default CalendaryPage
