import React from 'react'
import styled from 'styled-components'
import {
  useSelector
} from 'react-redux'
import {
  useParams,
} from 'react-router-dom'
import ClothingItem from './Item'

function Clothing() {
  const {
    section,
  } = useParams()

  const clothing = useSelector(state => state.clothing)

  const mapClothing = (clothing) => {
    return (
      <ClothingItem
        clothing={clothing}
      />
    )
  }

  return (
    <SContainer>
      {Array.isArray(clothing) ? clothing.map(mapClothing) : null}
    </SContainer>
  )
}

export default React.memo(Clothing)

const SContainer = styled.div`
  width: 100% - 20px;
  padding-left: 10px;
  padding-right: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-gap: .5rem;
  align-items: flex-start;
`