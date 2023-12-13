import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux'
import { thunk } from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers'

const initialState = {}

export default createStore(rootReducer, initialState, compose(
  applyMiddleware(thunk, logger)
))