import { connect } from 'react-redux'
import { pickColor } from '../actions'

/**
 * Create map state properties
 * @param {object} state
 * @return {object}
 */
const mapStateToProps = state => {
  return {
    colors: state.tools.colors
  }
}

/**
 * Create map dispatchers
 * @param {function} dispatch
 * @return {object}
 */
const mapDispatchToProps = dispatch => {
  return {
    colorClick: (hex) => dispatch(pickColor(hex))
  }
}

export default (component) => {
  return connect(mapStateToProps, mapDispatchToProps)(component)
}
