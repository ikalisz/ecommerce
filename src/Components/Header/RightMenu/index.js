import React from 'react'
import styled from 'styled-components'
import {
  FiShoppingCart,
} from 'react-icons/fi'

function RightMenu() {
  return (
    <SContainer>
      <FiShoppingCart />
    </SContainer>
  )
}

export default RightMenu

const SContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`