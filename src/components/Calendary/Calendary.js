import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { colors } from "../../style/variables"

const CalendaryHolder = styled.div`
  width: 90vw;
  height: 80vh;
  background-color: ${colors.window};
  position: absolute;
  top: 200px;
  left: 5vw;
  z-index: 1;
`
let today = new Date()
let currentMonth = today.getMonth()
let currentYear = today.getFullYear()

const months = [
  "Styczeń",
  "Luty",
  "Marzec",
  "Kwiecień",
  "Maj",
  "Czerwiec",
  "Lipiec",
  "Sierpień",
  "Wrzesień",
  "Listopad",
  "Grudzień",
]

const TableWithTime = () => {
  const [currentDate, setCurrentDate] = useState(new Date().getDate())

  useEffect(() => {
    setCurrentDate(new Date().getDate())
  }, [])

  return <h1>{currentDate}</h1>
}

const Calendary = () => {
  return (
    <CalendaryHolder>
      <TableWithTime />
    </CalendaryHolder>
  )
}

export default Calendary
