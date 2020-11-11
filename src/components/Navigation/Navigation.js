import React, { useState } from "react"
import styled from "styled-components"
import { colors, fonts } from "../../style/variables"
import Menu from "../../components/Menu/Menu"
import HamburgerMenu from "../Menu/HamburgerMenu"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const NavigationWrapper = styled.div`
  width: 100vw;
  height: 10vh;
  position: absolute;
  z-index: 10;
  top: 0;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0px 1px 3px 1px ${colors.whiteShadow};
`
const Logo = styled.h1`
  color: ${colors.text};
  position: absolute;
  left: 20px;
  top: 20px;
  font-family: ${fonts.main};
  text-shadow: 2px 3px 4px rgba(255, 255, 255, 0.4);
`

const OpenMenu = styled.button`
  background-color: rgba(0, 0, 0, 0.8);
  color: ${colors.text};
  font-family: ${fonts.main};
  width: 25vw;
  text-align: center;
  height: 10vh;
  position: fixed;
  right: 0;
  top: 0;
  font-size: 2rem;
  border: none;
  z-index: 10;
  cursor: pointer;
  text-shadow: 0px 0px 6px rgba(255, 255, 255, 0.4);
  &:hover {
    color: ${colors.icon};
  }
  &:focus {
    outline: 0;
  }
`

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false)
  const breakpoints = useBreakpoint()

  const handleShowMenu = () => {
    setShowMenu(prev => !prev)
  }

  return (
    <>
      <NavigationWrapper>
        <Logo>My Shibari Life</Logo>
        {breakpoints.md ? (
          <HamburgerMenu onClick={handleShowMenu} />
        ) : (
          <OpenMenu onClick={handleShowMenu}>MENU</OpenMenu>
        )}
      </NavigationWrapper>
      {showMenu ? <Menu /> : null}
    </>
  )
}

export default Navigation
