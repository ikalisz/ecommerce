import React from 'react'
import styled from 'styled-components'
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'

function Header() {
  return (
    <SContainer>
      <LeftMenu />
      <SImgPlaceholder />
      <RightMenu />
    </SContainer>
  )
}

export default Header

const SContainer = styled.div`
  width: 100% - 10px;
  height: 30px;
  float: top;
  display: flex;
  justify-content: space-between;
`

const SImgPlaceholder = styled.div``
