import { Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import WaykiLogo from "../logoH.png";
import BackgroundImage from "../pets.jpg";

const style = {
  marginTop: "-56px",
  backgroundImage: `url(${BackgroundImage}), linear-gradient(rgba(255,255,255,0.8),rgba(255,255,255,0.8))`,
  backgroundSize: "cover",
  backgroundBlendMode: "overlay",
};

const css = `
@media (min-width: 1000px) {
  #backimage {
      background-image: url(${BackgroundImage})!important;
  }
}`;

export default function Hero() {
  return (
    <Col
      style={style}
      className="d-flex flex-column justify-content-center align-items-center vh-100"
      id="backimage"
    >
      <style scoped>{css}</style>
      <Col className="d-flex justify-content-center" xs={10} sm={8}>
        <Image style={{ minWidth: "300px" }} src={WaykiLogo} alt="logo" fluid />
      </Col>
      <p className="h4">Ayudemos a las mascotas a volver a sus hogares</p>
      <div>
        <Button className="mx-2 my-4" variant="primary" as={Link} to="/map">
          Ir al mapa
        </Button>
        <Button className="mx-2 my-4" variant="secondary" href="#publications">
          Ver Publicaciones
        </Button>
      </div>
    </Col>
  );
}
