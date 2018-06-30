import React from 'react'
import '../css/strokePicker.css'

export default ({ num, picked, callback }) => {
  const pickedClass = picked ? 'picked' : ''
  const style = {height: `${num}px`}
  return (
    <div onClick={() => { callback(num) }}>
      <span
        className={`strokeBox ${pickedClass}`}
        style={style}
      />
    </div>
  )
}
