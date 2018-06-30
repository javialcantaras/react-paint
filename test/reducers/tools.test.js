/* global describe it before:true */
import {assert, expect} from 'chai'
import reducer from '../../src/reducers/tools'
import { ACTION_PICK_COLOR, ACTION_PICK_STROKE } from '../../src/constants/actionTypes'

describe('Canvas reducers', () => {
  let result

  describe('ACTION_PICK_STROKE', () => {
    before(() => {
      result = reducer(
        { strokes: [ {num: 1, picked: false} ] },
        {type: ACTION_PICK_STROKE, payload: { num: 1 }}
      )
    })

    it('should return object', () => {
      assert.typeOf(result, 'object')
    })

    it('should return correct object', () => {
      expect(result.strokes[0].picked).to.deep.equal(true)
    })
  })

  describe('ACTION_PICK_COLOR', () => {
    before(() => {
      result = reducer(
        { colors: [ {hex: '#000000', picked: true} ] },
        {type: ACTION_PICK_COLOR, payload: { hex: '#000000' }}
      )
    })

    it('should return object', () => {
      assert.typeOf(result, 'object')
    })

    it('should return correct object', () => {
      expect(result.colors[0].picked).to.deep.equal(true)
    })
  })
})
