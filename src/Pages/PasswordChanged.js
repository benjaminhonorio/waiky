import React from "react";
import { Container, Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function PasswordChanged() {
  const navigate = useNavigate();
  return (
    <Container className="my-5 text-center">
      <h1>¡Has cambiado tu contraseña!</h1>
      <p>
        Tu contraseña ha sido modificada con éxito. Has clic en el botón para
        loguearte o si gustas puedes ir directamente a nuestro Home Page.
      </p>
      <Col>
        <Button
          className="mx-3"
          variant="primary"
          onClick={() => navigate("/")}
          id="home-button"
        >
          Ir al home
        </Button>

        <Button
          className="mx-3"
          variant="primary"
          onClick={() => navigate("/login")}
          id="login-button"
        >
          Ir al Login
        </Button>
      </Col>
    </Container>
  );
}
