import React from 'react'
import StrokeBox from './StrokeBox'
import '../css/colorPicker.css'

export default ({ strokes, strokeClick }) => {
  const mapper = (stroke, i) => (<li key={i} ><StrokeBox {...stroke} callback={strokeClick} /></li>)
  const strokeComponents = strokes.map(mapper)
  return (
    <div className='strokePicker'>
      <header>
        <h3>Stroke</h3>
      </header>
      <main>
        <ul>{strokeComponents}</ul>
      </main>
    </div>
  )
}
