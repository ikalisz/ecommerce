import React from 'react'
import styled from 'styled-components'
import routes from '../../router'
import Navbar from '../Navbar'

function Main() {
  return (
    <MainDiv>
      <Navbar />
      {routes}
    </MainDiv>
  )
}

export default React.memo(Main)

const MainDiv = styled.div``
