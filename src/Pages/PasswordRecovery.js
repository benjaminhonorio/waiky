import { Container } from "react-bootstrap";
export default function PasswordRecovery() {
  return (
    <Container className="my-5">
      <h1>Recuperación de contraseña</h1>
      <p>
        Hemos enviado a tu correo el paso a seguir para hacer el cambio de
        contraseña.
        <strong> Porfavor revisa tu bandeja de entrada o Spam </strong>
      </p>
    </Container>
  );
}
