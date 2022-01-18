import { Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <Row className="container mx-auto py-5">
      <Col>
        <h2 id="about">Acerca de Wayki</h2>
        <Row>
          <Col>
            Ayudamos a las mascotas a reunirse nuevamente con sus familias. Si
            perdiste tu mascota, publica tu anuncio, sino, ayuda a otras
            personas a ubicar sus mascotas.
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
