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

  console.log('here')

  console.log('section:', section)

  return (
    <SContainer>
      {Array.isArray(clothing) ? clothing.map(mapClothing) : null}
    </SContainer>
  )
}

export default Clothing

const SContainer = styled.div`
  height: 100px;
  width: 100px;
  background: grey;
`