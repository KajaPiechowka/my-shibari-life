import React from "react"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer/Footer"
import EventsImage from "../components/Events/EventsImage"
import styled from "styled-components"
import { colors, fonts } from "../style/variables"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import SectionHeader from "../components/SectionHeader/SectionHeader"

const EventsWrapper = styled.div`
  padding-top: 40vh;
  width: 100vw;
  background-color: ${colors.background};
  display: flex;
  flex-direction: column;
`
const OneEventWrapper = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
`

const OneEvent = styled.div`
  width: 50vw;
  position: relative;
  z-index: 5;

  p {
    color: ${colors.text};
  }
`
const EventImage = styled.div`
  width: 90%;
  height: auto;
  position: absolute;
`

const EventTextWrapperHolder = styled.div`
  width: 60%;
  height: 40%;
  background-color: ${colors.window};
  position: absolute;
  bottom: -20%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const EventTextWrapper = styled.div`
  width: 90%;
  height: 75%;
  background-color: ${colors.background};
  position: relative;
`
const EventTitle = styled.span`
  font-family: ${fonts.main};
  color: ${colors.text};
  font-size: 3rem;
  position: absolute;
  top: -20px;
  left: -10px;
`
const EventDate = styled.span`
  font-family: ${fonts.main};
  color: ${colors.text};
  font-size: 2rem;
  position: absolute;
  right: -10px;
  bottom: -20px;
`

const HeaderWrapper = styled.div`
  position: absolute;
  right: 10rem;
  top: 10rem;
`

const query = graphql`
  {
    allDatoCmsEvent {
      nodes {
        id
        dateTime
        titlePl
        imageMain {
          fluid(maxWidth: 600) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`

const EventsPage = () => {
  const eventsQuery = useStaticQuery(query)
  return (
    <>
      <Navigation />
      <HeaderWrapper>
        <SectionHeader>
          <h1>Wydarzenia</h1>
        </SectionHeader>
      </HeaderWrapper>

      <EventsWrapper>
        {eventsQuery.allDatoCmsEvent.nodes.map((event, index) => {
          if (index % 2 === 0) {
            return (
              <OneEventWrapper key={event.id}>
                <OneEvent>
                  <EventImage>
                    <Image fluid={event.imageMain.fluid} />
                  </EventImage>

                  <EventTextWrapperHolder style={{ right: 0 }}>
                    <EventTextWrapper>
                      <EventTitle>{event.titlePl}</EventTitle>
                      <EventDate>{event.dateTime.slice(0, 10)}</EventDate>
                    </EventTextWrapper>
                  </EventTextWrapperHolder>
                </OneEvent>
              </OneEventWrapper>
            )
          } else if (index % 2 !== 0) {
            return (
              <OneEventWrapper
                key={event.id}
                style={{ justifyContent: "flex-end" }}
              >
                <OneEvent>
                  <EventImage style={{ right: 0 }}>
                    <Image fluid={event.imageMain.fluid} />
                  </EventImage>

                  <EventTextWrapperHolder style={{ left: 0 }}>
                    <EventTextWrapper>
                      <EventTitle>{event.titlePl}</EventTitle>
                      <EventDate>{event.dateTime.slice(0, 10)}</EventDate>
                    </EventTextWrapper>
                  </EventTextWrapperHolder>
                </OneEvent>
              </OneEventWrapper>
            )
          } else {
            return null
          }
        })}
      </EventsWrapper>
      <EventsImage />
      <Footer />
    </>
  )
}

export default EventsPage
