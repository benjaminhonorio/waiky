import { Row, Col, Image } from "react-bootstrap";
import FindYourPet from "../findurpet.jpg";

export default function About() {
  return (
    <Row className="container mx-auto py-5">
      <Col>
        <h2 id="about">Acerca de Wayki</h2>
        <Row xs={10} sm={8}>
          <Row className="fs-5">
            <Col>
              Ayudamos a las mascotas a reunirse nuevamente con sus familias.{" "}
              <br /> Si perdiste tu mascota, publica tu anuncio, sino, ayuda a
              otras personas a ubicar sus mascotas.
            </Col>
          </Row>
          <Image src={FindYourPet} alt="Find your pet" />
        </Row>
      </Col>
    </Row>
  );
}
