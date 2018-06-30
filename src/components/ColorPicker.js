import React from 'react'
import ColorBox from './ColorBox'

export default ({ colors, colorClick }) => {
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
