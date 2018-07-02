import React from 'react'
import ColorBox from './ColorBox'
import PropTypes from 'prop-types'

const ColorPicker = ({ colors, colorClick }) => {
  const mapper = (color, i) => (<li className='tool__element' key={i} ><ColorBox {...color} callback={colorClick} /></li>)
  const colorComponents = colors.map(mapper)
  return (
    <div className='tool'>
      <header className='tool__header'>
        <span>Colors</span>
      </header>
      <ul className='tool__content tool__content--colors'>{colorComponents}</ul>
    </div>
  )
}

ColorBox.propTypes = {
  colorClick: PropTypes.func.isRequired,
  colors: PropTypes.array.isRequired
}

export default ColorPicker
