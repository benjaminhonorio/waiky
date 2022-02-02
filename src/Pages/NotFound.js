import React from "react";
import { Container, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <Container>
      <Col className="text-center my-5">
        <h1> Error 404 </h1>
        <h2> Página no encontrada </h2>
        <p className="my-4">
          La pagina que estás buscando no existe o no se encuentra disponible.
          <br />
          <strong>
            Porfavor, vuelve a la página de inicio e inténtalo nuevamente.
          </strong>
        </p>
        <Button onClick={handleNavigate}> Volver a Home </Button>
      </Col>
    </Container>
  );
}
