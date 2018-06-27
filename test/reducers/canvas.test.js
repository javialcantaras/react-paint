/* global describe it before:true */
import {assert, expect} from 'chai'
import canvasReducer from '../../src/reducers/canvas'
import {
  ACTION_MOUSE_UP,
  ACTION_MOUSE_DOWN,
  ACTION_UPDATE_OLD_POSITIONS
} from '../../src/constants/actionTypes'

describe('Canvas reducers', () => {
  let result

  describe('ACTION_MOUSE_UP', () => {
    before(() => {
      result = canvasReducer({}, {type: ACTION_MOUSE_UP, payload: { isMouseDown: false }})
    })

    it('should return object', () => {
      assert.typeOf(result, 'object')
    })

    it('should return correct object', () => {
      expect(result).to.deep.equal({isMouseDown: false})
    })
  })

  describe('ACTION_MOUSE_DOWN', () => {
    before(() => {
      result = canvasReducer({}, {type: ACTION_MOUSE_DOWN, payload: { isMouseDown: true }})
    })

    it('should return object', () => {
      assert.typeOf(result, 'object')
    })

    it('should return correct object', () => {
      expect(result).to.deep.equal({isMouseDown: true})
    })
  })

  describe('ACTION_UPDATE_OLD_POSITIONS', () => {
    let result2

    before(() => {
      result = canvasReducer({}, {
        type: ACTION_UPDATE_OLD_POSITIONS,
        payload: { x: 1, y: 2, midX: 3, midY: 4 }
      })
      result2 = canvasReducer({}, {
        type: ACTION_UPDATE_OLD_POSITIONS,
        payload: { x: 1, y: 2 }
      })
    })

    it('should return object', () => {
      assert.typeOf(result, 'object')
    })

    it('should return correct object', () => {
      expect(result).to.deep.equal({ oldX: 1, oldY: 2, oldMidX: 3, oldMidY: 4 })
    })

    it('should return correct object', () => {
      expect(result2).to.deep.equal({ oldX: 1, oldY: 2, oldMidX: 1, oldMidY: 2 })
    })
  })
})
