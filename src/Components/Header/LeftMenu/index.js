import React from 'react'
import styled from 'styled-components'
import Navbar from '../../Navbar'

function LeftMenu() {
  return (
    <SContainer>

      <SNavbar />
    </SContainer>
  )
}

export default LeftMenu

const SContainer = styled.div`
  @media (min-width: 1000px;) {
    display: flex;
  }
`

const SNavbar = styled(Navbar)`
  display: flex;
  @media (min-width: 1000px) {
    display: none;
  }
`
