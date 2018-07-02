import {
  ACTION_UNDO,
  ACTION_REDO,
  ACTION_SAVE_LINE,
  ACTION_PICK_COLOR,
  ACTION_PICK_STROKE,
  ACTION_RESTART_UNDO,
  ACTION_RESTART_REDO
} from './constants/actionTypes'

export const pickColor = (hex) => ({
  type: ACTION_PICK_COLOR,
  payload: { hex }
})

export const pickStroke = (num) => ({
  type: ACTION_PICK_STROKE,
  payload: { num }
})

export const saveRemovedLine = (line) => ({
  type: ACTION_SAVE_LINE,
  payload: { line }
})

export const undo = () => ({
  type: ACTION_UNDO,
  payload: { undo: true }
})

export const restartUndo = () => ({
  type: ACTION_RESTART_UNDO,
  payload: { undo: false }
})

export const redo = () => ({
  type: ACTION_REDO
})

export const restartRedo = () => ({
  type: ACTION_RESTART_REDO
})
