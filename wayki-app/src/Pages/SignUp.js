import {
  Button,
  FloatingLabel,
  Container,
  Col,
  Form,
  Row,
} from 'react-bootstrap';
import WaykiLogo from '../logoH.png';

export default function SignUp() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center text-center">
        <Col lg={6}>
          <img alt="logo" src={WaykiLogo} className="w-50" />
          <Form.Group>
            <FloatingLabel
              controlId="floatingInput"
              label="Ingresa tu nuevo nombre de usuario"
            >
              <Form.Control type="name" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Ingresa tu contraseña"
              className="my-3"
            >
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Ingresa tu contraseña nuevamente "
            >
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <Button variant="primary" type="submit" className="my-4" size="lg">
              Regístrate
            </Button>
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
}
