import { useState } from 'react';

import axios from 'axios';

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
  const url = 'http://localhost:3001/users';

  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  // const [validPassword, setValidPassword] = useState('');
  // const [users, setUsers] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();
    const newObject = {
      username: newUsername,
      password: newPassword,
    };
    axios.post(url, newObject).then((response) => response.data);
    // setNewUsername('');
    // setNewPassword('');
  };

  const handleNewUsername = (e) => {
    setNewUsername(e.target.value);
  };

  const handleNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  // const handleValidPassword = (e) => {
  //   setValidPassword(e.target.value);
  // };

  return (
    <Container className="my-5">
      <Row className="justify-content-center text-center">
        <Col lg={6}>
          <img alt="logo" src={WaykiLogo} className="w-50" />
          <Form onSubmit={handleForm}>
            <Form.Group>
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
              {/* <FloatingLabel
                controlId="floatingPassword"
                label="Ingresa tu contraseña nuevamente "
              >
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={handleValidPassword}
                />
              </FloatingLabel> */}
              <Button
                variant="primary"
                type="submit"
                className="my-4"
                size="lg"
              >
                Regístrate
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
