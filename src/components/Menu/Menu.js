import React from "react"
import styled from "styled-components"
import { colors, fonts } from "../../style/variables"
import { Link } from "gatsby"

const MenuWrapper = styled.ul`
  background-color: rgba(0, 0, 0, 0.8);
  padding: 20px;
  width: 25vw;
  height: 70%;
  z-index: 6;
  position: fixed;
  right: 0;
  top: 10vh;
  font-size: 1.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: -1px 1px 3px 1px rgba(255, 255, 255, 0.04);
  li {
    list-style-type: none;
    font-family: ${fonts.main};
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.text};
  text-shadow: 0px 0px 6px rgba(230, 230, 230, 0.4);

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
          <StyledLink to="/about-me">Pagan</StyledLink>
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
          <StyledLink to="/gallery">Galeria</StyledLink>
        </li>
        <li>
          <StyledLink to="/shop">Sklep</StyledLink>
        </li>
      </MenuWrapper>
    </>
  )
}

export default Menu
