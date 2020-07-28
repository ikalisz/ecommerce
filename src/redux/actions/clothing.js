import axios from 'axios'
import {
  GET_CLOTHING,
  ADD_CLOTHING,
  DELETE_CLOTHING,
  CHANGE_LOADING,
} from './types'

export const getClothing = (section) => (dispatch) => {
  const sectionURL = section && section !== 'all' ? `/api/items/${section}` : `/api/items`
  dispatch(changeLoading())
  axios
    .get(sectionURL)
    .then(res => 
      dispatch({
        type: GET_CLOTHING,
        payload: res.data,
      })
    )
}

export const changeLoading = () => {
  return {
    type: CHANGE_LOADING,
  }
}