import styled from 'styled-components'

export const WeekContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, auto);
  //justify-content: space-around;
  //align-content: space-around;
  height: 100%;
`

export const Day = styled.div`
  border-left: 1px solid #808080;
  border-bottom: 1px solid #808080;
`

export const Number = styled.div`
  padding-top: 5px;
  padding-left: 5px;
`
