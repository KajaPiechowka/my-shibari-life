import React from "react"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer/Footer"
import EventsImage from "../components/Events/EventsImage"
import styled from "styled-components"
import { colors } from "../style/variables"
import Event from "../layouts/event"
import { graphql, useStaticQuery } from "gatsby"

const EventsWrapper = styled.div`
  padding-top: 200px;
  width: 100vw;
  height: auto;
  background-color: ${colors.background};
  display: flex;
  flex-direction: column;
`

const EventsPage = () => {
  const eventsQuery = useStaticQuery(graphql`
    {
      allDatoCmsEvent {
        nodes {
          id
          textPl
          titlePl
          imageMain {
            fluid(maxWidth: 600) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <Navigation />
      {console.log(eventsQuery)}
      <EventsWrapper>
        {eventsQuery.allDatoCmsEvent.nodes.map(
          ({ id, textPl, titlePl, imageMain }) => (
            <Event
              key={id}
              id={id}
              text={textPl}
              title={titlePl}
              fluid={imageMain.fluid}
            />
          )
        )}
      </EventsWrapper>
      <EventsImage />
      <Footer />
    </>
  )
}

export default EventsPage
