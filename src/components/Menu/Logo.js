import styled from "styled-components"
import { colors, fonts } from "../../style/variables"

const Logo = styled.h1`
  color: ${colors.text};
  position: absolute;
  left: 20px;
  top: 20px;
  font-family: ${fonts.main};
  text-shadow: 2px 3px 4px rgba(255, 255, 255, 0.4);
`

export default Logo
