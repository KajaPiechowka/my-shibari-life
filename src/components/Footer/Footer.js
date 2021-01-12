import React from "react"
import styled from "styled-components"
import { colors } from "../../style/variables"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagramSquare,
  faVk,
} from "@fortawesome/free-brands-svg-icons"

const FooterWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  z-index: 100;
`

const EmailWrapper = styled.h3`
  color: ${colors.icon};
  font-size: 1.2rem;
  margin-bottom: 5px;
`
const IconWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 60vw;
  margin-top: 5px;
  margin-bottom: 5px;
`

const Icon = styled(FontAwesomeIcon)`
  color: ${colors.text};
  font-size: 2rem;
  &:hover {
    color: ${colors.icon};
    transform: scale(1.2);
  }
`

const Footer = () => {
  return (
    <FooterWrapper>
      <IconWrapper>
        <a href="https://www.facebook.com/MyShibari.life/">
          <Icon icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/myshibari.life/">
          <Icon icon={faInstagramSquare} />
        </a>
        <a href="https://vk.com/paganpoetrym?fbclid=IwAR3taYkjXAALiFQNYKq1WyMgCCM-7K3uTGqduawfJEas_cRYbAuI0XXLhmA">
          <Icon icon={faVk} />
        </a>
      </IconWrapper>

      <EmailWrapper>myshibarilife@gmail.com</EmailWrapper>
    </FooterWrapper>
  )
}

export default Footer
