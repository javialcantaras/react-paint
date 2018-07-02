/* global describe it before:true */
import { assert, expect } from 'chai'
import reducer from '../../src/reducers/canvas'
import {
  ACTION_UNDO,
  ACTION_REDO,
  ACTION_SAVE_LINE,
  ACTION_RESTART_UNDO,
  ACTION_RESTART_REDO
} from '../../src/constants/actionTypes'

const defaultState = {
  removedLines: [],
  undo: false,
  redo: false
}

describe('Canvas reducers', () => {
  let result

  describe('ACTION_SAVE_LINE', () => {
    before(() => {
      result = reducer(defaultState, {
        type: ACTION_SAVE_LINE,
        payload: { line: 1 }
      })
    })

    it('should return object', () => {
      assert.typeOf(result, 'object')
    })

    it('should return correct object', () => {
      expect(result.removedLines[0]).to.equal(1)
    })
  })

  describe('ACTION_UNDO', () => {
    before(() => {
      result = reducer(defaultState, {
        type: ACTION_UNDO,
        payload: { undo: true }
      })
    })

    it('should return object', () => {
      assert.typeOf(result, 'object')
    })

    it('should return correct object', () => {
      expect(result.undo).to.equal(true)
    })
  })

  describe('ACTION_RESTART_UNDO', () => {
    before(() => {
      result = reducer(defaultState, {
        type: ACTION_RESTART_UNDO,
        payload: { undo: false }
      })
    })

    it('should return object', () => {
      assert.typeOf(result, 'object')
    })

    it('should return correct object', () => {
      expect(result.undo).to.equal(false)
    })
  })

  describe('ACTION_REDO', () => {
    before(() => {
      defaultState.removedLines.push(1)
      result = reducer(defaultState, { type: ACTION_REDO })
    })

    it('should return object', () => {
      assert.typeOf(result, 'object')
    })

    it('should return correct object', () => {
      expect(result.redo).to.equal(1)
    })
  })

  describe('ACTION_RESTART_REDO', () => {
    before(() => {
      defaultState.removedLines.push(1)
      result = reducer(defaultState, { type: ACTION_RESTART_REDO })
    })

    it('should return object', () => {
      assert.typeOf(result, 'object')
    })

    it('should return correct object', () => {
      expect(result.redo).to.equal(undefined)
    })
  })
})
