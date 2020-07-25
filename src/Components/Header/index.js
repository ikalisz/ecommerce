import React from 'react'
import styled from 'styled-components'
import LeftMenu from './LeftMenu'

function Header() {
  return (
    <SContainer>
      <LeftMenu />
    </SContainer>
  )
}

export default Header

const SContainer = styled.div`
  width: 100%;
  height: 30px;
  padding: 10px 0;
  background-color: grey;
  display: flex;
  justify-content: space-inbetween;
`
