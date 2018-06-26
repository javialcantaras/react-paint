import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'

const logger = store => next => action => {
  console.group()
  console.log('dispatching', action)

  const result = next(action)

  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

export default createStore(reducers, applyMiddleware(logger))
