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
// This seems like a lot... Maybe react router?
import styled from 'styled-components'

function Navbar() {
  const [
    collapsed,
    setCollapsed,
  ] = useState(true)

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
            onClick={setCollapsed(!collapsed)}
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