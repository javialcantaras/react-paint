import PropTypes from 'prop-types'
import React, { Component } from 'react'
import CanvasDraw from 'react-canvas-draw'
import { canvas as container } from '../containers'

class Canvas extends Component {
  undo () {
    if (this._canvasDraw.startDrawIdx.length === 0) return
    this.saveLine()
    this._canvasDraw.linesArray = this._canvasDraw.linesArray.splice(0, this._canvasDraw.startDrawIdx.pop())
    this._canvasDraw.redraw(true)
  }

  redo () {
    this._canvasDraw.startDrawIdx.push(this._canvasDraw.linesArray.length)
    this._canvasDraw.linesArray = this._canvasDraw.linesArray.concat(this.props.redo)
    this._canvasDraw.redraw(true)
  }

  saveLine () {
    const lastLineId = this._canvasDraw.startDrawIdx[this._canvasDraw.startDrawIdx.length - 1]
    const lastLines = this._canvasDraw.linesArray.splice(lastLineId)
    this.props.saveLine(lastLines)
  }

  componentDidUpdate () {
    if (this.props.undo) {
      this.undo()
      this.props.resetUndo()
    } else if (this.props.redo) {
      this.redo()
      this.props.resetRedo()
    }
  }

  render () {
    return (
      <CanvasDraw
        brushSize={this.props.stroke}
        brushColor={this.props.color}
        canvasWidth={window.innerWidth * 0.7}
        canvasHeight={window.innerHeight * 0.98}
        ref={canvasDraw => (this._canvasDraw = canvasDraw)}
      />
    )
  }
}

Canvas.propTypes = {
  redo: PropTypes.any,
  undo: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  saveLine: PropTypes.func.isRequired,
  stroke: PropTypes.number.isRequired,
  resetUndo: PropTypes.func.isRequired,
  resetRedo: PropTypes.func.isRequired
}

export default container(Canvas)
