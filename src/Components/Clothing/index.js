import React, {
  useEffect,
} from 'react'
import styled from 'styled-components'
import {
  useSelector,
  useDispatch,
} from 'react-redux'
import {
  useParams,
} from 'react-router-dom'
import {
  getClothing,
} from '../../redux/actions/clothing'
import ClothingItem from './Item'

function Clothing() {
  const {
    section,
  } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getClothing(section))
  }, [dispatch, section])

  const {
    clothing,
    loading,
  } = useSelector(state => state.clothing)


  const mapClothing = (clothing, index) => {
    return (
      <ClothingItem
        clothing={clothing}
        key={index}
      />
    )
  }

  return (
    <SContainer>
      {Array.isArray(clothing) ? clothing.map(mapClothing) : null}
    </SContainer>
  )
}

export default Clothing

const SContainer = styled.div`
  width: 100% - 20px;
  padding-left: 10px;
  padding-right: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-gap: .5rem;
  align-items: flex-start;
`