import styled from "styled-components"
import { colors, fonts } from "../../style/variables"

const Button = styled.button`
  background-color: ${colors.background};
  padding: 1rem;
  color: ${colors.text};
  font-family: ${fonts.text};
  border: none;
  border-radius: 2px;
  font-size: 1rem;
  text-transform: uppercase;
  outline: none;
  :hover {
    color: ${colors.icon};
  }
  :active {
    background-color: #444444;
  }
`

export default Button
