import axios from 'axios'
import ReduxThunk from 'redux-thunk'
import {
  GET_CLOTHING,
  ADD_CLOTHING,
  DELETE_CLOTHING,
} from './types'

export const getClothing = (section) => {
  const payload = axios.get('http://localhost:3008/api/items')
  return {
    type: GET_CLOTHING,
  }
}