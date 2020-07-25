import React from 'react'
import styled from 'styled-components'
import {
  GiHamburgerMenu,
} from 'react-icons/gi'

function LeftMenu() {
  return (
    <SContainer>
      <GiHamburgerMenu />
    </SContainer>
  )
}

export default LeftMenu

const SContainer = styled.div`
  padding-left: 30px;
  @media (min-width: 1000px;) {
    display: flex;
  }
`
