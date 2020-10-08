import React from "react"
import styled from "styled-components"
import { colors, fonts } from "../../style/variables"

const SectionHeader = styled.div`
  width: 300px;
  height: 60px;
  background-color: ${colors.window};
  border-radius: 2px;
  position: relative;
  margin-top: 20px;
  margin-bottom: 40px;
  h1 {
    color: ${colors.text};
    position: absolute;
    top: -13px;
    left: -48px;
    font-family: ${fonts.main};
    font-size: 3rem;
    width: 350px;
  }
`
export default SectionHeader
