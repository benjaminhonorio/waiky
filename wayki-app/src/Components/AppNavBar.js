import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { BsHouse, BsMap } from "react-icons/bs";
import WaykiLogo from "../logo.png";
import { Link } from "react-router-dom";

export default function AppNavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="logo"
            src={WaykiLogo}
            width="25"
            height="25"
            className="d-inline-block align-top"
          />
          Wayki
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">
              <BsHouse className="mx-2 d-inline-block  align-baseline" />
              Home
            </Nav.Link>
            <Nav.Link href="/map">
              <BsMap className="mx-2 d-inline-block  align-baseline" />
              Map
            </Nav.Link>
          </Nav>
          <Button className="mx-2" variant="primary" as={Link} to="/login">
            Login
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
