import { connect } from 'react-redux'
import { saveRemovedLine, restartUndo, restartRedo } from '../actions'

/**
 * Create map state properties
 * @param {object} state
 * @return {object}
 */
const mapStateToProps = state => {
  return {
    color: state.tools.colors.find(({ picked }) => picked).hex,
    stroke: state.tools.strokes.find(({ picked }) => picked).num,
    undo: state.canvas.undo,
    redo: state.canvas.redo
  }
}

/**
 * Create map dispatchers
 * @param {function} dispatch
 * @return {object}
 */
const mapDispatchToProps = dispatch => {
  return {
    saveLine: (line) => dispatch(saveRemovedLine(line)),
    resetUndo: () => dispatch(restartUndo()),
    resetRedo: () => dispatch(restartRedo())
  }
}

export default (component) => {
  return connect(mapStateToProps, mapDispatchToProps)(component)
}
