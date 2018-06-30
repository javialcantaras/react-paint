import React from 'react'

export default ({ num, picked, callback }) => {
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
