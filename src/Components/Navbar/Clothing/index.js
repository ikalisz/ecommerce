import React from 'react'
import styled from 'styled-components'
import {
  Link,
} from 'react-router-dom'
import {
  ListGroup,
  ListGroupItem,
} from 'reactstrap'

function ClothingSide() {
  return (
    <SContainer
      flush
    >
      <SItemLink to="/clothing/men">
        <SItem>
          Men
        </SItem>
      </SItemLink>
      <SItemLink to="/clothing/men">
        <SItem>
          Women
        </SItem>
      </SItemLink>
      <SItemLink to="/clothing/kids">
        <SItem>
          Kids
        </SItem>
      </SItemLink>
      <SItemLink to="/clothing/sale">
        <SItem>
          Sale
        </SItem>
      </SItemLink>
    </SContainer>
  )
}

export default ClothingSide

const SContainer = styled(ListGroup)`
`

const SItemLink = styled(Link)`
  text-decoration: none;
  display: flex;
`

// const SItem = styled.p`
//   font-size: 18px;
//   display: flex;
//   color: black;
//   :hover {
//     text-decoration: underline;
//     cursor: pointer;
//     color: red;
//   }
// `

const SItem = styled(ListGroupItem)`
`