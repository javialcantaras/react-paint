import React from 'react'
import ColorPicker from './ColorPicker'
import StrokePicker from './StrokePicker'
import Corrections from './Corrections'
import { tools as container } from '../containers'

const Tools = ({colors, strokes, strokeClick, colorClick}) => (
  <div className='tools'>
    <Corrections />
    <ColorPicker colors={colors} colorClick={colorClick} />
    <StrokePicker strokes={strokes} strokeClick={strokeClick} />
  </div>
)

export default container(Tools)
