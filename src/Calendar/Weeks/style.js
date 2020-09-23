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
  font-weight: bold;
  
  &:nth-child(-n+2){
    color: #A3A3A3!important;
  }
  &:nth-child(7n){
    background-color: #F1F1F1;
    color: #376E9F;
  }
  &:nth-child(7n+1){
    background-color: #F1F1F1;
    color: #376E9F;
  }
  &:nth-last-child(-n+3){
    color: #A3A3A3!important;
  }
`

export const Number = styled.div`
  padding-top: 5px;
  padding-left: 5px;
  
  
`
