import React from 'react'

export default ({ hex, picked, callback }) => {
  const pickedClass = picked ? 'tool__element--picked' : ''
  return (
    <span
      className={`tool__element__color ${pickedClass}`}
      onClick={() => { callback(hex) }}
      style={{backgroundColor: hex}}
    />
  )
}
