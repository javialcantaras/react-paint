import {
  ACTION_MOUSE_UP,
  ACTION_MOUSE_DOWN,
  ACTION_UPDATE_OLD_POSITIONS,
  ACTION_PICK_COLOR,
  ACTION_PICK_STROKE
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

export const pickColor = (hex) => ({
  type: ACTION_PICK_COLOR,
  payload: { hex }
})

export const pickStroke = (num) => ({
  type: ACTION_PICK_STROKE,
  payload: { num }
})
