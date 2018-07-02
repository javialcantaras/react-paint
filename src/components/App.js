import '../css/app.css'
import React from 'react'
import Tools from './Tools'
import Canvas from './Canvas'

export default () => (
  <div className='app'>
    <Canvas />
    <Tools />
  </div>
)
