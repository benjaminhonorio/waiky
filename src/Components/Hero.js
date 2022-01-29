import { Col, Image } from "react-bootstrap";

import WaykiLogo from "../logoH.png";

export default function Hero() {
  return (
    <Col
      style={{ marginTop: "-56px" }}
      className="d-flex flex-column justify-content-center align-items-center vh-100"
    >
      <Col xs={10} sm={8}>
        <Image src={WaykiLogo} alt="logo" fluid />
      </Col>
      <p className="h4 fw-light">
        Ayudemos a las mascotas a volver a sus hogares
      </p>
    </Col>
  );
}
