import {
  ACTION_PICK_COLOR,
  ACTION_PICK_STROKE
} from './constants/actionTypes'

export const pickColor = (hex) => ({
  type: ACTION_PICK_COLOR,
  payload: { hex }
})

export const pickStroke = (num) => ({
  type: ACTION_PICK_STROKE,
  payload: { num }
})
