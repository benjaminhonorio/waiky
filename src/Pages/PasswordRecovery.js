import { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
export default function PasswordRecovery() {
  const [correo, setCorreo] = useState("**************@gmail.com");
  return (
    <Container className="my-5">
      <h1>Recuperación de contraseña</h1>
      <p>
        Enviaremos los detalles de recuperación de contraseña a tu correo{" "}
        <span>{correo}</span>
      </p>
      <Form className="col-md-4">
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
}
