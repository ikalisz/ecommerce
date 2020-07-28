import {
  GET_CLOTHING,
  ADD_CLOTHING,
  DELETE_CLOTHING,
} from '../actions/types'

const initialState = {
  clothing: []
}

const clothing = (state = initialState, action) => {
  switch(action.type) {
    case GET_CLOTHING:
      return {
        ...state
      }
    default: 
      return state
  }
}

export default clothing