import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { colors, media } from "../../style/variables"

const HamburgerIcon = styled(FontAwesomeIcon)`
  font-size: 5rem;
  color: ${colors.text};
  position: absolute;
  z-index: 2;
  right: 4%;
  top: 3%;
  display: inline-block;

  @media (${media.phone}) {
    font-size: 3.6rem;
  }
  @media (${media.desktop}) {
    display: none;
  }
`
const HamburgerMenu = () => <HamburgerIcon icon={faBars} />

export default HamburgerMenu
