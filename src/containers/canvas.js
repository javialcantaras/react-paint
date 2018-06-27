import { connect } from 'react-redux'
import { mouseUp, mouseDown, updateOldPositions } from '../actions'

/**
 * Create map state properties
 * @param {object} state
 * @return {object}
 */
const mapStateToProps = state => {
  return {
    isMouseDown: state.canvas.isMouseDown,
    oldX: state.canvas.oldX,
    oldY: state.canvas.oldY,
    oldMidX: state.canvas.oldMidX,
    oldMidY: state.canvas.oldMidY,
    color: '#000000',
    stroke: 2
  }
}

/**
 * Create map dispatchers
 * @param {function} dispatch
 * @return {object}
 */
const mapDispatchToProps = dispatch => {
  return {
    handleMouseUp: () => dispatch(mouseUp()),
    handleMouseDown: () => dispatch(mouseDown()),
    onUpdateOldPositions: (x, y, midX, midY) => dispatch(updateOldPositions(x, y, midX, midY))
  }
}

export default (component) => {
  return connect(mapStateToProps, mapDispatchToProps)(component)
}
