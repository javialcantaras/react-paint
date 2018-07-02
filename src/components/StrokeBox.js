import React from 'react'
import PropTypes from 'prop-types'

const StrokeBox = ({ num, picked, callback }) => {
  const pickedClass = picked ? 'tool__element--picked' : ''
  const style = {height: `${num}px`}
  return (
    <div onClick={() => { callback(num) }}>
      <span
        className={`tool__element__stroke ${pickedClass}`}
        style={style}
      />
    </div>
  )
}

StrokeBox.propTypes = {
  num: PropTypes.number.isRequired,
  picked: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired
}

export default StrokeBox
