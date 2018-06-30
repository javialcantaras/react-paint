import { ACTION_PICK_COLOR, ACTION_PICK_STROKE } from '../constants/actionTypes'
import colors, { BLACK } from '../constants/colors'
import strokes, { STROKE_1 } from '../constants/strokes'

const colorMapper = (hex) => ({ hex, picked: false })
const strokeMapper = (num) => ({ num, picked: false })

const resetColors = () => {
  return colors.map(colorMapper)
}

const resetStrokes = () => {
  return strokes.map(strokeMapper)
}

const selectColor = (state, colorHex) => {
  const colorIndex = state.colors.findIndex(({hex}) => hex === colorHex)
  const newState = Object.assign({}, state)

  newState.colors = resetColors(newState.colors)
  newState.colors[colorIndex].picked = true

  return newState
}

const selectStrokes = (state, strokeNum) => {
  const strokeIndex = state.strokes.findIndex(({num}) => num === strokeNum)
  const newState = Object.assign({}, state)

  newState.strokes = resetStrokes(newState.strokes)
  newState.strokes[strokeIndex].picked = true

  return newState
}

const defaultState = selectStrokes(selectColor({
  colors: colors.map(colorMapper),
  strokes: strokes.map(strokeMapper)
}, BLACK), STROKE_1)

export default (state = defaultState, action) => {
  switch (action.type) {
    case ACTION_PICK_STROKE:
      return selectStrokes(state, action.payload.num)
    case ACTION_PICK_COLOR:
      return selectColor(state, action.payload.hex)
    default:
      return state
  }
}
