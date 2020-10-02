import styled from "styled-components"
import {
  colors,
  fonts,
} from "/Users/yyywalet/stronaMama/Gatsby/my_shibari_life/src/style/variables.js"

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
