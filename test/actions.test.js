/* global describe it before:true */
import { assert, expect } from 'chai'
import {
  undo,
  redo,
  pickColor,
  pickStroke,
  restartUndo,
  saveRemovedLine,
  restartRedo } from '../src/actions'
import {
  ACTION_UNDO,
  ACTION_REDO,
  ACTION_SAVE_LINE,
  ACTION_PICK_COLOR,
  ACTION_PICK_STROKE,
  ACTION_RESTART_UNDO,
  ACTION_RESTART_REDO
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

  describe('.saveRemovedLine', () => {
    before(() => {
      result = saveRemovedLine(1)
    })

    it('should return object', () => {
      assert.typeOf(result, 'object')
    })

    it('should return correct type', () => {
      assert.equal(result.type, ACTION_SAVE_LINE)
    })

    it('should return correct payload', () => {
      expect(result.payload).to.deep.equal({ line: 1 })
    })
  })

  describe('.undo', () => {
    before(() => {
      result = undo()
    })

    it('should return object', () => {
      assert.typeOf(result, 'object')
    })

    it('should return correct type', () => {
      assert.equal(result.type, ACTION_UNDO)
    })

    it('should return correct payload', () => {
      expect(result.payload.undo).to.deep.equal(true)
    })
  })

  describe('.restartUndo', () => {
    before(() => {
      result = restartUndo()
    })

    it('should return object', () => {
      assert.typeOf(result, 'object')
    })

    it('should return correct type', () => {
      assert.equal(result.type, ACTION_RESTART_UNDO)
    })

    it('should return correct payload', () => {
      expect(result.payload.undo).to.deep.equal(false)
    })
  })

  describe('.redo', () => {
    before(() => {
      result = redo()
    })

    it('should return object', () => {
      assert.typeOf(result, 'object')
    })

    it('should return correct type', () => {
      assert.equal(result.type, ACTION_REDO)
    })
  })

  describe('.restartRedo', () => {
    before(() => {
      result = restartRedo()
    })

    it('should return object', () => {
      assert.typeOf(result, 'object')
    })

    it('should return correct type', () => {
      assert.equal(result.type, ACTION_RESTART_REDO)
    })
  })
})
