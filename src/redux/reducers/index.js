import {
  combineReducers,
} from 'redux'
import clothingReducer from './clothing'
import authReducer from './auth'

export default combineReducers({
  clothing: clothingReducer,
})