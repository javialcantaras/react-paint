import React from 'react'
import PropTypes from 'prop-types'
import ColorPicker from './ColorPicker'
import Corrections from './Corrections'
import StrokePicker from './StrokePicker'
import { tools as container } from '../containers'

const Tools = ({colors, strokes, strokeClick, colorClick}) => (
  <div className='tools'>
    <Corrections />
    <ColorPicker colors={colors} colorClick={colorClick} />
    <StrokePicker strokes={strokes} strokeClick={strokeClick} />
  </div>
)

Tools.propTypes = {
  colors: PropTypes.array.isRequired,
  strokes: PropTypes.array.isRequired,
  colorClick: PropTypes.func.isRequired,
  strokeClick: PropTypes.func.isRequired
}

export default container(Tools)
