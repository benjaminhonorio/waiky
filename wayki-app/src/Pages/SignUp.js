import { useState } from 'react';

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
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [validPassword, setValidPassword] = useState('');

  const handleForm = (e) => {
    e.preventDefault();
  };

  const handleNewUsername = (e) => {
    setNewUsername(e.target.value);
    console.log(newUsername);
  };

  const handleNewPassword = (e) => {
    setNewPassword(e.target.value);
    console.log(newPassword);
  };

  const handleValidPassword = (e) => {
    setValidPassword(e.target.value);
    console.log(validPassword);
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center text-center">
        <Col lg={6}>
          <img alt="logo" src={WaykiLogo} className="w-50" />
          <Form.Group onSubmit={handleForm}>
            <FloatingLabel
              controlId="floatingInput"
              label="Ingresa tu nuevo nombre de usuario"
            >
              <Form.Control
                type="name"
                placeholder="name@example.com"
                onChange={handleNewUsername}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Ingresa tu contraseña"
              className="my-3"
            >
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={handleNewPassword}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Ingresa tu contraseña nuevamente "
            >
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={handleValidPassword}
              />
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
