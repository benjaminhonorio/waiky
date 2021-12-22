import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Button, Dropdown } from "react-bootstrap";
import { BsHouse, BsMap, BsPersonCircle } from "react-icons/bs";
import WaykiLogo from "../logo.png";

export default function AppNavBar() {
  // Por defecto false si el usuario no esta logueado
  // Temporalmente asigno true al dar click en boton Login (para efectos de visualizar la barra de navegacion con el usuario logueado)
  // Asi mismo al dar click en salir (al final del dropdown del Usuario) se asigna false
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container fluid>
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
              Inicio
            </Nav.Link>
            <Nav.Link href="/map">
              <BsMap className="mx-2 d-inline-block  align-baseline" />
              Mapa
            </Nav.Link>
            {isLoggedIn ? (
              <>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="dark"
                    id="dropdown-basic"
                    className="nav-link border-0"
                  >
                    <BsPersonCircle className="mx-2 d-inline-block  align-baseline" />
                    Usuario
                  </Dropdown.Toggle>

                  <Dropdown.Menu variant="dark">
                    <Dropdown.Item href="#/action-1">Mi Perfil</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Mis Publicaciones
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Mis Favoritos
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => setIsLoggedIn(false)}>
                      Salir
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Button className="mx-2" variant="primary" as={Link} to="/edit">
                  Publicar
                </Button>
              </>
            ) : (
              <Button
                className="mx-2"
                variant="primary"
                as={Link}
                to="/login"
                onClick={() => setIsLoggedIn(true)}
              >
                Login
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
