import React from 'react'
import ColorBox from './ColorBox'
import '../css/colorPicker.css'

export default ({ colors, colorClick }) => {
  const mapper = (color, i) => (<li key={i} ><ColorBox {...color} callback={colorClick} /></li>)
  const colorComponents = colors.map(mapper)
  return (
    <div className='colorPicker'>
      <header>
        <h3>Colors</h3>
      </header>
      <main>
        <ul>{colorComponents}</ul>
      </main>
    </div>
  )
}
