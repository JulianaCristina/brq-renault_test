import React from 'react'
import Days from './DaysOfWeek'
import Weeks from './Weeks'

import { CalendarContainer } from './style'

const Index = () => {
  return (
    <CalendarContainer>
      <Days/>
      <Weeks/>
    </CalendarContainer>
  )
}

export default Index
