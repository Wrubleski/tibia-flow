import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="mb-3">
      <Navbar.Brand href="/">Tibia Flow</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/register">Register</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
