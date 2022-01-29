import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Button, Dropdown } from "react-bootstrap";
import { BsHouse, BsMap, BsPersonCircle } from "react-icons/bs";
import WaykiLogo from "../logo.png";
import useAuth from "../auth/useAuth";

export default function AppNavBar() {
  // Por defecto false si el usuario no esta logueado
  // Temporalmente asigno true al dar click en boton Login (para efectos de visualizar la barra de navegacion con el usuario logueado)
  // Asi mismo al dar click en salir (al final del dropdown del Usuario) se asigna false
  const auth = useAuth();

  const [isLoggedIn, setIsLoggedIn] = useState(!!auth.userLogin);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
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
              <Nav.Link as={Link} to="/">
                <BsHouse className="mx-2 d-inline-block  align-baseline" />
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to="/map">
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
                      <Dropdown.Item as={Link} to="/profile">
                        Mi Perfil
                      </Dropdown.Item>
                      {/* TODO: publications page */}
                      <Dropdown.Item as={Link} to="">
                        Mis Publicaciones
                      </Dropdown.Item>
                      {/* TODO: favorites page */}
                      <Dropdown.Item as={Link} to="">
                        Mis Favoritos
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item
                        onClick={() => setIsLoggedIn(auth.logout())}
                      >
                        Cerrar Sesión
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Button
                    className="mx-2"
                    variant="primary"
                    as={Link}
                    to="/edit"
                  >
                    Publicar
                  </Button>
                </>
              ) : (
                <Button
                  className="mx-2"
                  variant="primary"
                  as={Link}
                  to="/login"
                >
                  Login
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
