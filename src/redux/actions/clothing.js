import {
  GET_CLOTHING,
  ADD_CLOTHING,
  DELETE_CLOTHING,
} from './types'

export const getClothing = (section) => {
  return {
    type: GET_CLOTHING,
  }
}