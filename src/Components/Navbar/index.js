import React, {
  useState,
} from 'react'
import styled from 'styled-components'
import {
  Navbar as ReactStrapNavbar,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Nav,
} from 'reactstrap'

function Navbar() {
  const [
    collapsed,
    setCollapsed,
  ] = useState(true)

  const handleToggleNavbar = () => setCollapsed(!collapsed)

  return (
      <SMobile
        color="faded"
        light
      >
        <NavbarToggler
          className="mr-2"
          onClick={handleToggleNavbar}
        />
        <Collapse
          isOpen={!collapsed}
          navbar
        >
          <Nav
            navbar
          >
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </SMobile>
  )
}

export default Navbar


const SMobile = styled(ReactStrapNavbar)`
`
