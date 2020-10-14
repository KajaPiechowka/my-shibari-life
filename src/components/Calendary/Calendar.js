import React, { useState } from "react"
import Calendar from "react-calendar"

const MyApp = () => {
  const [date, setDate] = useState(new Date())

  const handleChangeDate = currentDate => {
    setDate(currentDate)
  }

  return (
    <div>
      <Calendar onChange={handleChangeDate} value={date} />
    </div>
  )
}

export default MyApp
