import { Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import WaykiLogo from "../logoH.png";
import BackgroundImage from "../pets.jpg";

const backgroundStyle = {
  marginTop: "-56px",
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: "cover",
};

export default function Hero() {
  return (
    <Col
      style={{ backgroundStyle }}
      className="d-flex flex-column justify-content-center align-items-center vh-100"
      id="background"
    >
      <Col xs={10} sm={8}>
        <Image src={WaykiLogo} alt="logo" fluid />
      </Col>
      <p className="h4 fw-light">
        Ayudemos a las mascotas a volver a sus hogares
      </p>
      <Button
        className="mx-2 my-4"
        variant="primary"
        as={Link}
        to="/map"
        size="lg"
      >
        Ir al mapa
      </Button>
    </Col>
  );
}
