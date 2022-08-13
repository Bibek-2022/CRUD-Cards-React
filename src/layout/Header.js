import React from "react";

export const Header = () => {
  return (
    <Navbar bg="info" expand="md">
      <Container>
        <Navbar.Brand href="#">
          {" "}
          {/* <i
            className="fa-solid fa-bars"
            onClick={() => dispatch(toggleShowSideMenu())}
          ></i>{" "} */}
          Admin CMS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link">
              Login
            </Link>
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
