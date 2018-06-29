import { combineReducers } from 'redux'
import common from './common'
import canvas from './canvas'
import tools from './tools'

export default combineReducers({ common, canvas, tools })
