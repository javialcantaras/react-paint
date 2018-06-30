import React from 'react'
import ColorPicker from './ColorPicker'
import StrokePicker from './StrokePicker'
import { tools as container } from '../containers'

const Tools = ({colors, strokes, strokeClick, colorClick}) => (
  <div>
    <ColorPicker colors={colors} colorClick={colorClick} />
    <StrokePicker strokes={strokes} strokeClick={strokeClick} />
  </div>
)

export default container(Tools)
