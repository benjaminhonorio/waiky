import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Button, Dropdown } from "react-bootstrap";
import { BsHouse, BsMap, BsPersonCircle } from "react-icons/bs";
import WaykiLogo from "../logo.png";
import useAuth from "../auth/useAuth";

export default function AppNavBar() {
  const auth = useAuth();
  const { userLogin } = auth;

  const handleLogOut = (e) => {
    e.preventDefault();
    auth.logout();
  };

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
              {userLogin?.username ? (
                <>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="dark"
                      id="dropdown-basic"
                      className="nav-link border-0"
                    >
                      <BsPersonCircle
                        className="mx-2 d-inline-block  align-baseline"
                        id="username-menu"
                      />
                      {userLogin?.username}
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                      <Dropdown.Item
                        as={Link}
                        to="/profile"
                        id="my-profile-button"
                      >
                        Mi Perfil
                      </Dropdown.Item>
                      <Dropdown.Item
                        as={Link}
                        to="/myposts"
                        id="my-posts-button"
                      >
                        Mis Publicaciones
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item onClick={handleLogOut} id="logout-button">
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
                <div>
                  <Button
                    className="mx-2"
                    variant="primary"
                    as={Link}
                    to="/login"
                  >
                    Login
                  </Button>
                  <Button
                    className="mx-2"
                    variant="light"
                    as={Link}
                    to="/signup"
                  >
                    Sign Up
                  </Button>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
