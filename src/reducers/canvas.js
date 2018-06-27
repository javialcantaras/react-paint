import {
  ACTION_MOUSE_UP,
  ACTION_MOUSE_DOWN,
  ACTION_UPDATE_OLD_POSITIONS
} from '../constants/actionTypes'

const defaultState = {
  isMouseDown: false,
  oldX: 0,
  oldY: 0,
  oldMidX: 0,
  oldMidY: 0
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case ACTION_MOUSE_UP:
    case ACTION_MOUSE_DOWN:
      return Object.assign({}, state, {
        isMouseDown: action.payload.isMouseDown
      })
    case ACTION_UPDATE_OLD_POSITIONS:
      return Object.assign({}, state, {
        oldX: action.payload.x,
        oldY: action.payload.y,
        oldMidX: action.payload.midX || action.payload.x,
        oldMidY: action.payload.midY || action.payload.y
      })
    default:
      return state
  }
}
