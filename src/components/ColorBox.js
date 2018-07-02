import React from 'react'
import PropTypes from 'prop-types'

const ColorBox = ({ hex, picked, callback }) => {
  const pickedClass = picked ? 'tool__element--picked' : ''
  return (
    <span
      className={`tool__element__color ${pickedClass}`}
      onClick={() => { callback(hex) }}
      style={{backgroundColor: hex}}
    />
  )
}

ColorBox.propTypes = {
  hex: PropTypes.string.isRequired,
  picked: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired
}

export default ColorBox
