import { Container, Row, Col } from "react-bootstrap";

export default function AppFooter() {
  const links = ["About", "Map", "Login"];
  return (
    <Row className="mt-auto bg-light text-center text-black-50 py-4 mx-0">
      <Container>
        <Row>
          <Col xs={12} sm={3}>
            <a className="text-black-50 text-decoration-none" href="/">
              Home
            </a>
          </Col>
          {links.map((link) => {
            return (
              <Col xs={12} sm={3}>
                <a
                  className="text-black-50 text-decoration-none"
                  href={`/${link.toLowerCase()}`}
                >
                  {link}
                </a>
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
