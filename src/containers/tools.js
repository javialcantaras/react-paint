import { connect } from 'react-redux'
import { pickColor, pickStroke } from '../actions'

/**
 * Create map state properties
 * @param {object} state
 * @return {object}
 */
const mapStateToProps = state => {
  return {
    colors: state.tools.colors,
    strokes: state.tools.strokes
  }
}

/**
 * Create map dispatchers
 * @param {function} dispatch
 * @return {object}
 */
const mapDispatchToProps = dispatch => {
  return {
    colorClick: (hex) => dispatch(pickColor(hex)),
    strokeClick: (hex) => dispatch(pickStroke(hex))
  }
}

export default (component) => {
  return connect(mapStateToProps, mapDispatchToProps)(component)
}
