import React, { useState } from 'react'
import moment from 'moment'
import { WeekContainer, Day, Number } from './style'

const Weeks = () => {
  const [firstDay, setFirstDay] = useState(moment())
  const daysMonth = []
  const blank = []
  const monthLength = firstDay.daysInMonth()

  for (let d = 1; d <= monthLength; d++) {
    daysMonth.push(d)
  }

  const firstDayOfMonth = () => {
    return moment(firstDay).startOf('month').format('d')
  }

  for (let i = 0; i < firstDayOfMonth(); i++) {
    blank.push(i)
  }

  const total = [30, 31, ...daysMonth, 1, 2, 3]

  return (
    <WeekContainer>
      {total.map((item, index) => (
        <Day key={index}>
          <Number>{item}</Number>
        </Day>
      ))}
    </WeekContainer>
  )
}
export default Weeks
