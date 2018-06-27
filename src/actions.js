import {
  ACTION_MOUSE_UP,
  ACTION_MOUSE_DOWN,
  ACTION_UPDATE_OLD_POSITIONS
} from './constants/actionTypes'

export const mouseUp = () => ({
  type: ACTION_MOUSE_UP,
  payload: { isMouseDown: false }
})

export const mouseDown = () => ({
  type: ACTION_MOUSE_DOWN,
  payload: { isMouseDown: true }
})

export const updateOldPositions = (x, y, midX, midY) => ({
  type: ACTION_UPDATE_OLD_POSITIONS,
  payload: { x, y, midX, midY }
})
