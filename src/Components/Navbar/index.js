import React, {
  useState,
} from 'react'
import {
  Collapse,
  Navbar as AppNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap'
import styled from 'styled-components'

function Navbar() {
  const [
    collapsed,
    setCollapsed,
  ] = useState(true)

  const handleCollapse = () => {
    setCollapsed(!collapsed)
  }

  return (
    <SContainer>
      <AppNavbar
        color="dark"
        dark
        expand="sm"
        className="mb-5"
      >
        <Container>
          <NavbarBrand
            href="/"
          >
            Clothing
          </NavbarBrand>
          <NavbarToggler
            onClick={handleCollapse}
          />
          <Collapse
            isOpen={!collapsed}
            navbar
          >
            <Nav
              className="ml-auto"
              navbar
            >
              <NavItem>
                <NavLink
                  href="/clothing"
                >
                  All
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/clothing/Men"
                >
                  Men
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/clothing/Women"
                >
                  Women
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/clothing/Kids"
                >
                  Kids
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </AppNavbar>
    </SContainer>
  )
}

export default Navbar

const SContainer = styled.div`
`