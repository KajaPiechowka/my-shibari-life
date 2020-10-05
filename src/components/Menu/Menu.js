import React from "react"
import styled from "styled-components"
import { colors, fonts, media } from "../../style/variables"
import { Link } from "gatsby"

const MenuWrapper = styled.ul`
  background-color: ${colors.window};
  padding: 20px;
  text-align: center;
  width: 20%;
  height: 50%;
  position: absolute;
  z-index: 1;
  right: 100px;
  top: 100px;
  font-size: 1.7rem;
  li {
    list-style-type: none;
    font-family: ${fonts.main};
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.text};
  text-shadow: 0px 3px 8px rgba(0, 0, 0, 0.5);
  :hover {
    color: ${colors.icon};
  }
`

const Menu = () => {
  return (
    <>
      <MenuWrapper>
        <li>
          <StyledLink to="/my-shibari-life">My Shibari Life</StyledLink>
        </li>
        <li>
          <StyledLink to="#about-me">Pagan</StyledLink>
        </li>
        <li>
          <StyledLink to="#contact">Kontakt</StyledLink>
        </li>
        <li>
          <StyledLink to="/calendary">Kalendarz</StyledLink>
        </li>
        <li>
          <StyledLink to="/events">Wydarzenia</StyledLink>
        </li>
        <li>
          <StyledLink to="/gallery">Galeia</StyledLink>
        </li>
        <li>
          <StyledLink to="/shop">Sklep</StyledLink>
        </li>
      </MenuWrapper>
    </>
  )
}

export default Menu
