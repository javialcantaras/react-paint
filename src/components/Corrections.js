import React from 'react'
import PropTypes from 'prop-types'
import { corrections as container } from '../containers'

const Corrections = ({ undoCallback, redoCallback }) => (
  <div className='tool tool__element__corrections'>
    <button className='tool__element__corrections__button' onClick={undoCallback} type='button'>Undo</button>
    <button className='tool__element__corrections__button' onClick={redoCallback} type='button'>Redo</button>
  </div>
)

Corrections.propTypes = {
  undoCallback: PropTypes.func.isRequired,
  redoCallback: PropTypes.func.isRequired
}

export default container(Corrections)
