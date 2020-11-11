import styled from "styled-components"
import { colors, fonts } from "../../style/variables"

const SectionHeader = styled.div`
  width: 300px;
  height: 70px;
  background-color: ${colors.window};
  border-radius: 2px;
  position: relative;
  margin-bottom: 40px;
  h1 {
    color: ${colors.text};
    position: absolute;
    top: -13px;
    left: -35px;
    font-family: ${fonts.main};
    font-size: 3rem;
  }
`
export default SectionHeader
