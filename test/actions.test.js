/* global describe it before:true */
import {assert, expect} from 'chai'
import { pickColor, pickStroke } from '../src/actions'
import {
  ACTION_PICK_COLOR,
  ACTION_PICK_STROKE
} from '../src/constants/actionTypes'

describe('actions', () => {
  let result

  describe('.pickColor', () => {
    before(() => {
      result = pickColor(2)
    })

    it('should return object', () => {
      assert.typeOf(result, 'object')
    })

    it('should return correct type', () => {
      assert.equal(result.type, ACTION_PICK_COLOR)
    })

    it('should return correct payload', () => {
      expect(result.payload).to.deep.equal({ hex: 2 })
    })
  })

  describe('.pickStroke', () => {
    before(() => {
      result = pickStroke(1)
    })

    it('should return object', () => {
      assert.typeOf(result, 'object')
    })

    it('should return correct type', () => {
      assert.equal(result.type, ACTION_PICK_STROKE)
    })

    it('should return correct payload', () => {
      expect(result.payload).to.deep.equal({ num: 1 })
    })
  })
})
