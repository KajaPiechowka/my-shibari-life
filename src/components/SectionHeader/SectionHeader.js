import styled from "styled-components"
import { colors, fonts } from "../../style/variables"

const SectionHeader = styled.div`
  width: 200px;
  height: 50px;
  background-color: ${colors.window};
  border-radius: 2px;
  position: relative;

  h1 {
    color: ${colors.text};
    position: absolute;
    top: -13px;
    left: -25px;
    font-family: ${fonts.main};
    font-size: 2rem;
  }
`
export default SectionHeader
