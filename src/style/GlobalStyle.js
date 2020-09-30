import { createGlobalStyle } from "styled-components"
import { fonts, colors } from "./variables"

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${fonts.main};
    font-size: 16px;
  }

  Button {
    padding: 0;
    cursor: pointer;
    font-family: ${fonts.main};
  }

  p {
    font-size: 15px;
    font-family: ${fonts.text};
  }

  ul {
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyle
