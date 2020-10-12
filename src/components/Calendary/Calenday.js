import React from "react"
import styled from "styled-components"
import { colors } from "../../style/variables"

const CalendayHolder = styled.div`
  width: 90vw;
  height: 80vh;
  background-color: ${colors.window};
  position: absolute;
  top: 200px;
  left: 5vw;
  z-index: 2;
`

const Calendary = () => {
  return <CalendayHolder></CalendayHolder>
}

export default Calendary
