import {
  GET_CLOTHING,
  ADD_CLOTHING,
  DELETE_CLOTHING,
  CHANGE_LOADING,
} from '../actions/types'

const initialState = {
  clothing: [],
  loading: false,
}

const clothing = (state = initialState, action) => {
  switch(action.type) {
    case GET_CLOTHING:
      return {
        ...state,
        clothing: action.payload,
        loading: false,
      }
    case CHANGE_LOADING:
      return {
        ...state,
        loading: true,
      }
    default: 
      return state
  }
}

export default clothing