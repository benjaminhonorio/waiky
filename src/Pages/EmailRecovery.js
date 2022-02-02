import { useState } from "react";
import axios from "axios";
import {
  Alert,
  Container,
  Col,
  Button,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function PasswordRecovery() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState();
  const [alert, setAlert] = useState();
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();

    axios
      .post(
        `${process.env.REACT_APP_BASE_API_URL}/api/v1/users/emailrecovery`,
        { email }
      )
      .then(({ data }) => {
        if (data.error) {
          setMessage(data.message);
          setAlert(data.error);
        } else {
          navigate("/password_recovery");
        }
      });
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Container className="my-5 mx-auto">
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
      <h1 className="text-center">Recuperación de contraseña</h1>
      <Col className="text-center">
        <Form className="col-md-4 mx-auto" onSubmit={handleForm}>
          <Form.Group>
            <FloatingLabel
              controlId="floatingInput"
              label="Escribe el email asociado a tu cuenta"
              className="my-3"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={handleEmail}
              />
            </FloatingLabel>
            <Button variant="primary" type="submit">
              Enviar email de recuperación
            </Button>
          </Form.Group>
        </Form>
      </Col>
    </Container>
  );
}
