import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { canvas as container } from '../containers'
import CanvasDraw from 'react-canvas-draw'

class Canvas extends Component {
  render () {
    return (
      <CanvasDraw
        brushSize={this.props.stroke}
        brushColor={this.props.color}
        canvasWidth={window.innerWidth * 0.7}
        canvasHeight={window.innerHeight * 0.98}
      />
    )
  }
}

Canvas.propTypes = {
  stroke: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
}

export default container(Canvas)
