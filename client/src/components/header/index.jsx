//@ts-check
import React from "react";
import {
  Nav,
  NavItem,
  NavLink,
  Navbar,
  Collapse,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  Input,
} from "reactstrap";

import profilephoto from "../../assets/images/45.jpg";

const Header = () => {
  const toggleMenu = () => {
    document.getElementById("search").classList.toggle("show-search");
  };

  return (
    <header className="topbar navbarbg" data-navbarbg="skin4">
      <Navbar className="top-navbar" dark expand="md">
        <div className="navbar-header" id="logobg" data-logobg="skin4">
          <strong
            style={{
              marginLeft: "10px",
              fontWeight: "bold",
              fontSize: "large",
              color: "black",
            }}
          >
            Tv Show Manager
          </strong>
        </div>
        <Collapse className="navbarbg" navbar data-navbarbg="skin4">
          <Nav className="float-left" navbar>
            <NavItem className="hidden-sm-down search-box">
              <NavLink
                href="#"
                className="hidden-sm-down"
                onClick={toggleMenu.bind(null)}
              >
                <i className="ti-search" />
              </NavLink>
              <Form className="app-search" id="search">
                <Input type="text" placeholder="Search & enter" />
                <button
                  className="btn-link srh-btn"
                  onClick={toggleMenu.bind(null)}
                >
                  <i className="ti-close" />
                </button>
              </Form>
            </NavItem>
          </Nav>
          <Nav className="ml-auto float-right" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="pro-pic">
                <img
                  src={profilephoto}
                  alt="user"
                  className="rounded-circle"
                  width="31"
                />
              </DropdownToggle>
              <DropdownMenu right className="user-dd">
                <DropdownItem>
                  <i className="ti-user mr-1 ml-1" /> My Account
                </DropdownItem>
                <DropdownItem className="border-bottom">
                  <i className="ti-settings mr-1 ml-1" /> Account Settings
                </DropdownItem>
                <DropdownItem href="/pages/login">
                  <i className="fa fa-power-off mr-1 ml-1" /> Logout
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
