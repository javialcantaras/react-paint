import { connect } from 'react-redux'
import { undo, redo } from '../actions'

/**
 * Create map state properties
 * @param {object} state
 * @return {object}
 */
const mapStateToProps = state => {
  return {}
}

/**
 * Create map dispatchers
 * @param {function} dispatch
 * @return {object}
 */
const mapDispatchToProps = dispatch => {
  return {
    undoCallback: () => dispatch(undo()),
    redoCallback: () => dispatch(redo())
  }
}

export default (component) => {
  return connect(mapStateToProps, mapDispatchToProps)(component)
}
