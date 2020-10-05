import React, { useState } from "react"
import styled from "styled-components"
import { colors, fonts } from "../../style/variables"
import Menu from "../../components/Menu/Menu"
import { faBorderNone } from "@fortawesome/free-solid-svg-icons"

const NavigationWrapper = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  background-color: rgba(0, 0, 0, 0.2);
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 1px 3px 1px ${colors.whiteShadow};
`
const Logo = styled.h1`
  color: ${colors.text};
  margin: 10px 0 10px 30px;
  font-family: ${fonts.main};
  text-shadow: 2px 3px 4px rgba(255, 255, 255, 0.4);
`

const OpenMenu = styled.button`
  background-color: ${colors.background};
  color: ${colors.text};
  font-family: ${fonts.main};
  width: 25.1%;
  text-align: center;
  height: 10vh;
  font-size: 2rem;
  border-left: 1px solid ${colors.window};
  border-right: none;
  border-top: none;
  border-bottom: none;
  cursor: pointer;
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.4);
  :hover {
    color: ${colors.icon};
  }
  :focus {
    outline: 0;
  }
`

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = () => {
    setShowMenu(prev => !prev)
  }

  return (
    <>
      <NavigationWrapper>
        <Logo>My Shibari Life</Logo>
        <OpenMenu onClick={handleShowMenu}>MENU</OpenMenu>
      </NavigationWrapper>
      {showMenu ? <Menu /> : null}
    </>
  )
}

export default Navigation
