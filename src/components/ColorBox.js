import React from 'react'

export default ({ hex, picked, callback }) => {
  const pickedClass = picked ? 'picked' : ''
  return (
    <span
      className={`colorBox ${pickedClass}`}
      onClick={() => { callback(hex) }}
      style={{backgroundColor: hex}}
    />
  )
}
