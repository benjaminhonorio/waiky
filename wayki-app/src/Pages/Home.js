import { Row, Col, Container } from "react-bootstrap";

export default function Home() {
  return (
    <Container className="text-center">
      <Row>
        <Col xs={12} sm={6}>
          Hero
        </Col>
        <Col xs={12} sm={6}>
          Map
        </Col>
      </Row>
      <Row>
        <Col>Gallery</Col>
      </Row>
      <Row>
        <Col>About</Col>
      </Row>
    </Container>
  );
}
