import React from 'react'
import styled from 'styled-components'
import routes from '../../router'
import Header from '../Header'

function Main() {
  return (
    <MainDiv>
      <Header />
      {routes}
    </MainDiv>
  )
}

export default React.memo(Main)

const MainDiv = styled.div``
