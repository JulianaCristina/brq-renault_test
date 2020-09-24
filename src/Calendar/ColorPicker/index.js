import React, { useCallback, useState } from 'react'
import { GithubPicker } from 'react-color'
import { Popover, ButtonPicker } from './styles'

const ColorPicker = () => {
  const [showColorPicker, setColorPicker] = useState(false)
  const [color, setColor] = useState('#fff')

  const handleClick = useCallback(() => {
    setColorPicker(!showColorPicker)
  }, [])

  const handleChange = useCallback((color) => {
    setColor(color.hex)
    console.log(color.hex)
    setColorPicker(false)
  }, [])

  return (
    <>
      <ButtonPicker onClick={ handleClick } color={color}>Pick Color</ButtonPicker>
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
