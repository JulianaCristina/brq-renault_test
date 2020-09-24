import styled from 'styled-components'
import { Button } from 'antd'

export const Popover = styled.div`
  position: absolute;
  z-index: 2;
`

export const Cover = styled.div`
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
`
export const ButtonPicker = styled(Button)`
    
     background: ${props => props.color};
    
 
`
