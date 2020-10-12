import React from "react"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer/Footer"
import EventsImage from "../components/Events/EventsImage"
import styled from "styled-components"
import { colors } from "../style/variables"

const EventsWrapper = styled.div`
  width: 100vw;
  height: 90vh;
  background-color: ${colors.background};
  position: relative;
`

const EventsPage = () => {
  return (
    <>
      <Navigation />
      <EventsWrapper />
      <EventsImage />
      <Footer />
    </>
  )
}

export default EventsPage
