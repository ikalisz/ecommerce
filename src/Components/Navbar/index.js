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

  const toggleCollapse = () => {
    setCollapsed(!collapsed)
    console.log(collapsed);
  };

  console.log('COLLAPSE', collapsed);

  return (
    <SContainer>
      <AppNavbar
        color="dark"
        dark
        expand
        className="me-auto"
        conatiner='lg'
      >
          <NavbarBrand
            href="/"
          >
            Clothing
          </NavbarBrand>
          <NavbarToggler
            onClick={toggleCollapse}
            className="me-2"
          />
          <Collapse
            color="dark"
            isOpen={!collapsed}
            navbar
            horizontal={false}
          >
            <Nav
              className="me-auto"
              navbar
            >
              {/* <NavItem> */}
                <NavLink
                  href="/clothing"
                >
                  All
                </NavLink>
              {/* </NavItem> */}
              {/* <NavItem> */}
                <NavLink
                  href="/clothing/Men"
                >
                  Men
                </NavLink>
              {/* </NavItem> */}
              {/* <NavItem> */}
                <NavLink
                  href="/clothing/Women"
                >
                  Women
                </NavLink>
              {/* </NavItem> */}
              {/* <NavItem> */}
                <NavLink
                  href="/clothing/Kids"
                >
                  Kids
                </NavLink>
              {/* </NavItem> */}
            </Nav>
          </Collapse>
      </AppNavbar>
    </SContainer>
  )
}

export default Navbar

const SContainer = styled.div`
`