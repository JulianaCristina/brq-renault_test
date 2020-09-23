import React, { useCallback, useState } from 'react'
import moment from 'moment'
import { WeekContainer, Day, Number } from './style'
import Reminder from '../Reminder'

const Weeks = () => {
  const [firstDay, setFirstDay] = useState(moment())
  const [reminder, setReminder] = useState(-1)
  const [openModal, setOpenModal] = useState(false)
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

  const renderReminder = useCallback((index) => {
    setReminder(index)
    setOpenModal(true)
  })

  return (
    <WeekContainer>
      {total.map((item, index) => (
        <Day key={index} onClick={() => renderReminder(index)}>
          <Number>{item}</Number>
          {reminder === index && (
            <Reminder openModal={openModal}/>
          )}

        </Day>
      ))}
    </WeekContainer>
  )
}
export default Weeks
