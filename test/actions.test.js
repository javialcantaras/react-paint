/* global describe it before:true */
import {assert, expect} from 'chai'
import { mouseUp, mouseDown, updateOldPositions } from '../src/actions'
import {
  ACTION_MOUSE_UP,
  ACTION_MOUSE_DOWN,
  ACTION_UPDATE_OLD_POSITIONS
} from '../src/constants/actionTypes'

describe('actions', () => {
  let result

  describe('.mouseUp', () => {
    before(() => {
      result = mouseUp()
    })

    it('should return object', () => {
      assert.typeOf(result, 'object')
    })

    it('should return correct type', () => {
      assert.equal(result.type, ACTION_MOUSE_UP)
    })

    it('should return correct payload', () => {
      expect(result.payload).to.deep.equal({isMouseDown: false})
    })
  })

  describe('.mouseDown', () => {
    before(() => {
      result = mouseDown()
    })

    it('should return object', () => {
      assert.typeOf(result, 'object')
    })

    it('should return correct type', () => {
      assert.equal(result.type, ACTION_MOUSE_DOWN)
    })

    it('should return correct payload', () => {
      expect(result.payload).to.deep.equal({isMouseDown: true})
    })
  })

  describe('.updateOldPositions', () => {
    before(() => {
      result = updateOldPositions(1, 2, 3, 4)
    })

    it('should return object', () => {
      assert.typeOf(result, 'object')
    })

    it('should return correct type', () => {
      assert.equal(result.type, ACTION_UPDATE_OLD_POSITIONS)
    })

    it('should return correct payload', () => {
      expect(result.payload).to.deep.equal({ x: 1, y: 2, midX: 3, midY: 4 })
    })
  })
})
