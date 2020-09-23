import React, { useCallback, useState } from 'react'
import { Button } from 'antd'
import { GithubPicker } from 'react-color'
import { Popover } from './styles'

const ColorPicker = () => {
  const [showColorPicker, setColorPicker] = useState(false)
  const [color, setColor] = useState('#fff')

  const handleClick = useCallback(() => {
    setColorPicker(!showColorPicker)
  }, [])

  const handleChange = useCallback((color) => {
    setColor(color.hex)
  }, [])

  return (
    <>
      <Button onClick={ handleClick }>Pick Color</Button>
      {
        showColorPicker
          ? <Popover>
            <GithubPicker color={color} onChange={handleChange} />
          </Popover> : null

      }
    </>
  )
}

export default ColorPicker
