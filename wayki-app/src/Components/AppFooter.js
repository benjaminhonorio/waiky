import { Container, Row, Col, Button } from "react-bootstrap";

export default function AppFooter() {
  const links = [
    { showName: "Inicio", link: "/" },
    { showName: "Acerca de Waiky", link: "/#about" },
    { showName: "Mapa", link: "/map" },
    { showName: "Iniciar Sesion", link: "/login" },
  ];
  return (
    <Row className="mt-auto bg-light text-center text-black-50 py-4 mx-0">
      <Container>
        <Row>
          {links.map((navLink) => {
            return (
              <Col key={navLink.showName} xs={12} sm={3}>
                <Button
                  variant="link"
                  className="text-black-50 text-decoration-none"
                  href={`${navLink.link}`}
                >
                  {navLink.showName}
                </Button>
              </Col>
            );
          })}
        </Row>
        <Row className="pt-5">
          <Col xs={12}>© 2021 Wayki</Col>
        </Row>
      </Container>
    </Row>
  );
}
