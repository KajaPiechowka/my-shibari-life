import React from "react"
import styled from "styled-components"
import { colors, media } from "../../style/variables"
import { useState } from "react"

const HamburgerMenuWrapper = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 10;
`

const HamburgerMenuBtn = styled.button`
  cursor: pointer;
  display: inline-block;
  background-color: transparent;
  border: 0;
  margin: 0;
  z-index: 10;
  position: absolute;
  top: 10px;
  right: 10px;
  outline: none;
`
const HamburgerBox = styled.span`
  width: 50px;
  height: 50px;
  position: relative;
  display: inline-block;
  z-index: 10;
  @media ${media.sm} {
    width: 60px;
    height: 60px;
  } ;
`

const HamburgerInner = styled.span`
  width: 100%;
  z-index: 10;
  height: 5px;
  background-color: ${({ open }) => (open ? "transparent" : colors.text)};
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 0.3s 0.1s ease-in-out;
  &::before {
    content: "";
    width: 100%;
    height: 5px;
    background-color: ${colors.text};
    position: absolute;
    top: -17px;
    left: 0;
    z-index: 10;
    transform: ${({ open }) =>
      open ? "translateY(17px) rotate(45deg) " : "none"};
    transition: transform 0.3s 0.1s ease-in-out;
  }
  &::after {
    content: "";
    width: 100%;
    height: 5px;
    background-color: ${colors.text};
    position: absolute;
    top: 17px;
    left: 0;
    z-index: 10;
    transform: ${({ open }) =>
      open ? "translateY(-17px) rotate(-45deg) " : "none"};
    transition: transform 0.3s 0.1s ease-in-out;
  }
`

const HamburgerMenu = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = e => {
    setIsOpen(prev => !prev)
    onClick(e)
  }

  return (
    <HamburgerMenuWrapper>
      <HamburgerMenuBtn onClick={handleOpen}>
        <HamburgerBox>
          <HamburgerInner open={isOpen} />
        </HamburgerBox>
      </HamburgerMenuBtn>
    </HamburgerMenuWrapper>
  )
}

export default HamburgerMenu
