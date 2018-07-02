import React from 'react'
import PropTypes from 'prop-types'
import StrokeBox from './StrokeBox'

const StrokePicker = ({ strokes, strokeClick }) => {
  const mapper = (stroke, i) => (<li className='tool__element' key={i} ><StrokeBox {...stroke} callback={strokeClick} /></li>)
  const strokeComponents = strokes.map(mapper)
  return (
    <div className='tool'>
      <header className='tool__header'>
        <span>Stroke</span>
      </header>
      <ul className='tool__content tool__content--stroke'>{strokeComponents}</ul>
    </div>
  )
}

StrokeBox.propTypes = {
  strokes: PropTypes.array.isRequired,
  strokeClick: PropTypes.func.isRequired
}

export default StrokePicker
