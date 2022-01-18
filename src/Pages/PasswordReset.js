import React from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function PasswordReset() {
  return (
    <Container className="my-5">
      <h1>Ingresa tu nueva contraseña</h1>
      <Form className="col-md-4 ">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="password" placeholder="" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirma escribiendola nuevamente</Form.Label>
          <Form.Control type="password" placeholder="" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </Container>
  );
}
