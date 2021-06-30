import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  // NavbarText
} from 'reactstrap';

class NavbarOnTop extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  render() {
    return (
      <Navbar color="light" light expand="md" style={{ padding: "1rem 2rem", position: 'sticky', top: 0 }}>
        <NavbarBrand href="/">Samuel Yuen Personal App</NavbarBrand>
        <NavbarToggler onClick={() => this.setState({ isOpen: !this.state.isOpen }, () => console.log("Navbar toggled!"))} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Accounting
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  New Data Input
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Current Month Report
                </DropdownItem>
                <DropdownItem>
                  Monthly Report
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    );
  }
}

export default NavbarOnTop;