import {
  ACTION_UNDO,
  ACTION_REDO,
  ACTION_SAVE_LINE,
  ACTION_RESTART_UNDO,
  ACTION_RESTART_REDO
} from '../constants/actionTypes'

const defaultState = {
  removedLines: [],
  undo: false,
  redo: false
}

const addLine = (state, line) => {
  const newState = Object.assign({}, state)
  newState.removedLines.push(line)
  return newState
}

const updateUndo = (state, undo) => {
  return Object.assign({}, state, {
    undo
  })
}

const cleanRedo = (state) => {
  return Object.assign({}, state, {
    redo: undefined
  })
}

const redo = (state) => {
  const newState = Object.assign({}, state)
  newState.redo = newState.removedLines.pop()
  return newState
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case ACTION_SAVE_LINE:
      return addLine(state, action.payload.line)
    case ACTION_UNDO:
    case ACTION_RESTART_UNDO:
      return updateUndo(state, action.payload.undo)
    case ACTION_REDO:
      return redo(state)
    case ACTION_RESTART_REDO:
      return cleanRedo(state)
    default:
      return state
  }
}
