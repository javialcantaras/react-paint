import { ACTION_PICK_COLOR } from '../constants/actionTypes'
import colors, { BLACK } from '../constants/colors'

const mapper = (hex) => ({ hex, picked: false })

const resetColors = () => {
  return colors.map(mapper)
}

const selectColor = (state, colorHex) => {
  const colorIndex = state.colors.findIndex(({hex}) => hex === colorHex)
  const newState = Object.assign({}, state)

  newState.colors = resetColors(newState.colors)
  newState.colors[colorIndex].picked = true

  return newState
}

const defaultState = selectColor({
  colors: colors.map(mapper)
}, BLACK)

export default (state = defaultState, action) => {
  switch (action.type) {
    case ACTION_PICK_COLOR:
      return selectColor(state, action.payload.hex)
    default:
      return state
  }
}
