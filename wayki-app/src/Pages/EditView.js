import React from "react";
import { Form, Card, Button, Container, Col, Row } from "react-bootstrap";
import { BsGeoAltFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function EditView() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col lg={8}>
          <Form>
            <h2>Publicación</h2>
            <br />
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Título:
              </Form.Label>
              <Col sm="10">
                <Form.Control placeholder="máximo 3 palabras" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
              <Form.Label column sm="2">
                Especie:
              </Form.Label>
              <Col sm="10">
                <Form.Control placeholder="p.e.j: perro, gato,conejo, etc" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Etiquetas:
              </Form.Label>
              <Col sm="10">
                <Form.Control placeholder="máximo 10 palabras" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Col>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="4">
                    Sexo:
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control placeholder="máximo 10 palabras" />
                  </Col>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="2">
                    Color:
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control placeholder="máximo 10 palabras" />
                  </Col>
                </Form.Group>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Col>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="4">
                    Tamaño:
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control placeholder="pequeño, mediano, grande" />
                  </Col>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="2">
                    Edad:
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control placeholder="3 años, adulto" />
                  </Col>
                </Form.Group>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Ubicación:
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  placeholder="Av. Buenos Aires 328"
                  aria-describedby="passwordHelpBlock"
                />
                <Form.Text id="passwordHelpBlock" muted>
                  <BsGeoAltFill className="mx-2 d-inline-block  align-baseline" />
                  (o {<Link to="/">ubicar en el mapa)</Link>}
                </Form.Text>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Descripción:
              </Form.Label>
              <Col sm="10">
                <Form.Control as="textarea" rows={3} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Fotos:
              </Form.Label>
              <Col sm="10">
                <Link to="/">Sube una o varias fotos</Link>
              </Col>
            </Form.Group>

            <Button variant="primary" type="submit">
              Sign In
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
