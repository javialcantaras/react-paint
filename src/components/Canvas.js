import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { canvas as container } from '../containers'
import { Stage, Touch as EaselTouch, Ticker, Shape, Point as EaselPoint } from 'createjs-module'

class Canvas extends Component {
  _initStage () {
    const stage = new Stage('canvas-atrapalo')
    stage.autoClear = true
    stage.addEventListener('stagemousedown', this._handleMouseDown.bind(this))
    stage.addEventListener('stagemouseup', this._handleMouseUp.bind(this))
    stage.update()
    EaselTouch.enable(stage)
    return stage
  }

  _initShape () {
    const shape = new Shape()
    this._stage.addChild(shape)
    return shape
  }

  /**
   * It runs when the canvas is clicked, create a stroke and update the mouse position
   */
  _handleMouseDown () {
    this._currentShape = this._initShape()
    this.props.handleMouseDown()
    this.props.onUpdateOldPositions(this._stage.mouseX, this._stage.mouseY)
    this._currentShape.graphics
      .setStrokeStyle(this.props.stroke, 'round', 'round')
      .beginStroke(this.props.color)
  }

  /**
   * It runs when  mouse up, update the stage and execute handleMouseUp
   */
  _handleMouseUp () {
    this._stage.update()
    this.props.handleMouseUp()
  }

  /**
   * It calculates the midpoint and draw the line
   */
  _drawLine () {
    const point = new EaselPoint(this._stage.mouseX, this._stage.mouseY)
    const midPoint = new EaselPoint(this.props.oldX + point.x >> 1, this.props.oldY + point.y >> 1)
    const context = this._stage.canvas.getContext('2d')

    this._currentShape.graphics.moveTo(midPoint.x, midPoint.y)
    this._currentShape.graphics.curveTo(this.props.oldX, this.props.oldY, this.props.oldMidX, this.props.oldMidY)
    this.props.onUpdateOldPositions(point.x, point.y, midPoint.x, midPoint.y)
    this._currentShape.draw(context)
  }

  /**
   * This is a loop event, check if is mouse down and there is movement for draw
   */
  _tick () {
    const isMovement = this.props.oldX !== this._stage.mouseX
    this.props.isMouseDown && isMovement && this._drawLine()
  }

  componentDidMount () {
    this._stage = this._initStage()
    Ticker.addEventListener('tick', this._tick.bind(this))
  }

  render () {
    return (
      <canvas id='canvas-atrapalo' width='800' height='600' />
    )
  }
}

Canvas.propTypes = {
  isMouseDown: PropTypes.bool.isRequired,
  handleMouseUp: PropTypes.func.isRequired
}

export default container(Canvas)
