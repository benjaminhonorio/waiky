import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setSession, setToken } from "../user/session";

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
import useAuth from "../auth/useAuth";

export default function SignUp() {
  const navigate = useNavigate();
  const [newUsername, setNewUsername] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [validPassword, setValidPassword] = useState("");
  const [alert, setAlert] = useState();
  const [message, setMessage] = useState();
  const auth = useAuth();

  const handleForm = (e) => {
    e.preventDefault();

    if (newPassword === validPassword) {
      const newObject = {
        username: newUsername,
        pwd: newPassword,
        email: email,
      };

      axios
        .post(
          `${process.env.REACT_APP_BASE_API_URL}/api/v1/users/signup`,
          newObject
        )
        .then(({ data }) => {
          if (data.error) {
            setMessage(data.message);
            setAlert(data.error);
          } else {
            auth.login(data.id, data.username, data.email);
            const user = {
              id: `${data.id}`,
              username: `${data.username}`,
              email: `${data.email}`,
            };
            setToken(data.token);
            setSession(JSON.stringify(user));
            navigate("/profile");
          }
        });
    } else {
      setAlert(true);
      setMessage("Las contraseñas no coinciden");
    }
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
          <p>{message}</p>
        </Alert>
      )}

      <Row className="justify-content-center text-center">
        <Col lg={6}>
          <img alt="logo" src={WaykiLogo} className="w-50" />
          <Form onSubmit={handleForm} noValidate autoComplete="off">
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
