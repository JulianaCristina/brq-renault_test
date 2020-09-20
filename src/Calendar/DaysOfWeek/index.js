import React from 'react'
import moment from 'moment'
import { HeaderContainer } from './style'

const days = moment.weekdays()

const Days = () => {
  return (
    <HeaderContainer>
      {days.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </HeaderContainer>
  )
}

export default Days
