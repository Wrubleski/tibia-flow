import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="mb-3">
      <LinkContainer to="/">
        <Navbar.Brand>Tibia Flow</Navbar.Brand>
      </LinkContainer>
      <Nav className="ml-auto">
        <LinkContainer to="/login">
          <Nav.Link>Login</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/register">
          <Nav.Link>Register</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
