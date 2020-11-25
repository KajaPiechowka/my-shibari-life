import React from "react"
import styled from "styled-components"
import { colors, fonts, media } from "../../style/variables"
import SectionHeader from "../SectionHeader/SectionHeader"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagramSquare,
  faVk,
} from "@fortawesome/free-brands-svg-icons"

const FooterWrapper = styled.div`
  background-color: ${colors.background};
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media${media.md} {
    flex-direction: row;
    justify-content: space-around;
  }
`
const HeaderWrapper = styled.div`
  @media${media.md} {
    margin-top: 20px;
    margin-bottom: 30px;
    margin-left: 30px;
  }
`
const EmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  p {
    font-family: ${fonts.text};
    font-size: 1.2rem;
    color: ${colors.text};
    text-align: center;
    @media${media.md} {
      font-size: 1.5rem;
    }
  }
  h3 {
    color: ${colors.icon};
    font-size: 2.2rem;
  }
`
const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`

const Icon = styled(FontAwesomeIcon)`
  color: ${colors.text};
  font-size: 4rem;
  &:hover {
    color: ${colors.icon};
    transform: scale(1.2);
  }
  @media${media.md} {
    font-size: 5rem;
    margin-left: 30px;
  }
`

const Footer = () => {
  return (
    <FooterWrapper>
      <HeaderWrapper>
        <SectionHeader>
          <h1>Kontakt</h1>
        </SectionHeader>
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
      </HeaderWrapper>
      <EmailWrapper>
        <p>
          Chciałbyś dowiedzieć się więcej? <br /> Napisz!
        </p>
        <h3>myshibarilife@gmail.com</h3>
      </EmailWrapper>
    </FooterWrapper>
  )
}

export default Footer
