import { connect } from 'react-redux'

/**
 * Create map state properties
 * @param {object} state
 * @return {object}
 */
const mapStateToProps = state => {
  return {
    color: state.tools.colors.find(({ picked }) => picked).hex,
    stroke: state.tools.strokes.find(({ picked }) => picked).num
  }
}

export default (component) => {
  return connect(mapStateToProps)(component)
}
