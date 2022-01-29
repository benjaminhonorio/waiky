import { useState } from "react";
import axios from "axios";
import {
  Alert,
  Button,
  FloatingLabel,
  Container,
  Col,
  Form,
  Row,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import WaykiLogo from "../logoH.png";
import useAuth from "../auth/useAuth";

export default function Login() {
  const navigate = useNavigate();
  const auth = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({});
  const [alert, setAlert] = useState();

  const handleForm = (e) => {
    e.preventDefault();
    const newUserLogin = {
      username: username,
      pwd: password,
    };

    axios
      .post(`${process.env.REACT_APP_BASE_API_URL}/api/v1/users/login`, newUserLogin)
      .then(({ data }) => {
        if (data.error) {
          setData(data);
          setAlert(data.error);
        } else {
          auth.login(data.token, data.username);
          sessionStorage.setItem("jwt", data.token);
          navigate("/");
        }
      });
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
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
          <p>{data.message}</p>
        </Alert>
      )}
      <p> {data.error} </p>
      <Row className="justify-content-center text-center">
        <Col lg={6}>
          <Form onSubmit={handleForm}>
            <Form.Group>
              <img alt="logo" src={WaykiLogo} className="w-50" />
              <FloatingLabel
                controlId="floatingInput"
                label="Escribe tu usuario"
                className="my-3"
              >
                <Form.Control
                  type="name"
                  placeholder="Username"
                  onChange={handleUsername}
                />
              </FloatingLabel>
            </Form.Group>
            <FloatingLabel
              controlId="floatingPassword"
              label="Escribe tu contraseña"
            >
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={handlePassword}
              />
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
          </Form>
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
