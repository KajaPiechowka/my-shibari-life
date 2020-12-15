import styled from "styled-components"
import { colors, fonts } from "../../style/variables"

const DesktopMenu = styled.button`
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

  :after {
    content: "";
    display: block;
    width: 0%;
    text-align: center;
    border-bottom: 0.75px solid white;
    transition: 0.5s;
    margin-left: 35%;
    margin-right: 35%;
  }
  :hover:after {
    width: 30%;
  }
  &:focus {
    outline: 0;
  }
`

export default DesktopMenu
