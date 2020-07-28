import {
  GET_CLOTHING,
  ADD_CLOTHING,
  DELETE_CLOTHING,
} from '../actions/types'

const initialState = [
  {
    name: "T-shirt",
    cost: 30,
    section: 'Men',
  },
  {
    name: 'Shorts',
    cost: 40,
    section: 'Women'
  }
]

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