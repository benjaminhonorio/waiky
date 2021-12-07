import {
  Button,
  FloatingLabel,
  Container,
  Col,
  Form,
  Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import WaykiLogo from '../logoH.png';

export default function Login() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center text-center">
        <Col lg={6}>
          <Form.Group>
            <img alt="logo" src={WaykiLogo} className="w-50" />
            <FloatingLabel
              controlId="floatingInput"
              label="Escribe tu usuario"
              className="my-3"
            >
              <Form.Control type="name" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Escribe tu contraseña"
            >
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <div className="my-3">
              <Col
                className="text-decoration-none text-primary"
                as={Link}
                to="/signup"
              >
                Regístrate
              </Col>
              <Col className="my-1 text-primary">¿Olvidaste tu contraseña?</Col>
            </div>
            <Button variant="primary" type="submit" className="my-4" size="lg">
              Iniciar sesión
            </Button>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group
        className="mb-3 d-flex justify-content-center"
        id="formGridCheckbox"
      >
        <Form.Check type="checkbox" label="Recuerdame" />
      </Form.Group>
    </Container>
  );
}
