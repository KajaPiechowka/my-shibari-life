import React, { useState } from "react"
import styled from "styled-components"
import { colors, fonts } from "../../style/variables"
import Menu from "../../components/Menu/Menu"
import HamburgerMenu from "../Menu/HamburgerMenu"
import DesktopMenu from "../Menu/DesktopMenu"
import Logo from "../Menu/Logo"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import Footer from "../Footer/Footer"

const NavigationWrapper = styled.div`
  width: 100vw;
  height: 10vh;
  position: absolute;
  z-index: 10;
  top: 0;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0px 1px 3px 1px ${colors.whiteShadow};
`

const Navigation = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false)
  const breakpoints = useBreakpoint()

  const handleShowMenu = () => {
    setShowMenu(prev => !prev)
  }

  return (
    <>
      <NavigationWrapper>
        <Logo>My Shibari Life</Logo>
        {breakpoints.xs ? (
          <HamburgerMenu onClick={handleShowMenu} />
        ) : (
          <DesktopMenu onClick={handleShowMenu}>MENU</DesktopMenu>
        )}
      </NavigationWrapper>
      {showMenu ? <Menu /> : null}
      {children}
      <Footer id="contact" />
    </>
  )
}

export default Navigation
