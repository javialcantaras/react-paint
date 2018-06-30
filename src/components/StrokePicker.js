import React from 'react'
import StrokeBox from './StrokeBox'

export default ({ strokes, strokeClick }) => {
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
