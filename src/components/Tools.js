import React from 'react'
import ColorPicker from './ColorPicker'
import { tools as container } from '../containers'

const Tools = ({colors, colorClick}) => (
  <div>
    <ColorPicker colors={colors} colorClick={colorClick} />
  </div>
)

export default container(Tools)
