import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Menu from "./Menu";
import { LinkContainer } from "react-router-bootstrap";

const NavigationBar = () => {
  return (
    // Warning: findDOMNode is deprecated in StrictMode.
    // known issue, only on development build:
    // https://github.com/react-bootstrap/react-bootstrap/issues/3518

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <LinkContainer to="/">
        <Navbar.Brand>Tibia Flow</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/register">
            <Nav.Link>Register</Nav.Link>
          </LinkContainer>

          {/*
      the div bellow renders the side menu options into the hamburger menu when the screen is smaller than large.
       */}

          <div className="d-lg-none">
            <Menu />
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
