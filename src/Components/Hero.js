import { Col, Form, Image, Button } from "react-bootstrap";

import WaykiLogo from "../logoH.png";

export default function Hero({ searchValue, handleSearch, handleSubmit }) {
  return (
    <Col
      style={{ marginTop: "-56px" }}
      className="d-flex flex-column justify-content-center align-items-center vh-100"
    >
      <Col xs={10} sm={8}>
        <Image src={WaykiLogo} alt="logo" fluid />
      </Col>
      <p className="h4 fw-light">
        Busca y encuentra mascotas perdidas en tu zona
      </p>
      <Form className="col-12 col-sm-10" onSubmit={handleSubmit}>
        <Form.Group className="input-group mb-3">
          <Form.Control
            type="text"
            className="form-control"
            placeholder="Busca por nombre, ubicacion, color, etc"
            aria-label="Search bar"
            value={searchValue}
            onChange={handleSearch}
          />
        </Form.Group>
        <Button variant="primary">
          Buscar Ahora
        </Button>
      </Form>
    </Col>
  );
}
