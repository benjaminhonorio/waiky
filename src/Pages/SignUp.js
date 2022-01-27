import { useState } from "react";

import axios from "axios";

import {
  Button,
  FloatingLabel,
  Container,
  Col,
  Form,
  Row,
  Alert,
} from "react-bootstrap";
import WaykiLogo from "../logoH.png";

export default function SignUp() {
  const url = `${process.env.REACT_APP_BASE_API_URL}/api/v1/users`;

  const [newUsername, setNewUsername] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [validPassword, setValidPassword] = useState("");
  const [alert, setAlert] = useState(false);
  const [validUsername, setValidUsername] = useState(false);
  // const [users, setUsers] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();
    const newObject = {
      username: newUsername,
      pwd: newPassword,
      email: email,
    };
    newPassword === validPassword
      ? axios.post(url, newObject).then((response) => response.data)
      : setAlert(true);
    // ) : (
    //   <Alert variant="danger"> Password is incorrect. Try again! </Alert>
    // );
    setValidUsername(!newUsername);
    setNewUsername("");
    setNewPassword("");
    setEmail("");
  };

  const handleNewUsername = (e) => {
    setNewUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const handleValidPassword = (e) => {
    setValidPassword(e.target.value);
  };

  return (
    <Container className="my-5">
      {alert && (
        <Alert
          variant="danger"
          onClose={() => {
            setAlert(false);
          }}
          dismissible
        >
          <Alert.Heading>Clave Incorrecta!</Alert.Heading>
          <p>Ingresa nuevamente la clave.</p>
        </Alert>
      )}

      {validUsername && (
        <Alert
          variant="danger"
          onClose={() => {
            setAlert(false);
          }}
          dismissible
        >
          <Alert.Heading>No hay username</Alert.Heading>
          <p>Ingresa un username valido</p>
        </Alert>
      )}

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
                controlId="floatingInput"
                label="Ingresa tu correo electronico"
                className="my-3"
              >
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  onChange={handleEmail}
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
