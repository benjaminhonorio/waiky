import React, { useState } from "react";
import { Form, Button, Container, Col, Row, Modal } from "react-bootstrap";
import { BsGeoAltFill } from "react-icons/bs";
import Map from "../Components/Map";
import credentials from "../Components/credentials";

export default function EditView() {
  const [showMap, setShowMap] = useState(false);

  const handleCloseMap = () => setShowMap(false);
  const handleShowMap = () => setShowMap(true);
  const [isUploaded, setIsUploaded] = useState(false);
  const [userInfo, setuserInfo] = useState({
    file: [],
    filepreview: null,
  });

  const handleInputChange = (event) => {
    setIsUploaded(true);
    setuserInfo({
      ...userInfo,
      file: event.target.files[0],
      filepreview: URL.createObjectURL(event.target.files[0]),
    });
  };
  const mapURL = credentials.mapsKey;

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
                    <Form.Control />
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
                  aria-describedby="opcion"
                />
                <Form.Text id="opcion" muted>
                  <BsGeoAltFill className="mx-2 d-inline-block  align-baseline" />
                  (o{" "}
                  {
                    <Button variant="link" onClick={handleShowMap}>
                      ubicar en el mapa)
                    </Button>
                  }
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
                <Form.Group controlId="formFileMultiple" className="mb-3">
                  <Form.Control type="file" multiple />
                </Form.Group>
              </Col>
            </Form.Group>

            <Button variant="primary" type="submit">
              Sign In
            </Button>
          </Form>
        </Col>
      </Row>
      <Modal show={showMap} onHide={handleCloseMap}>
        <Modal.Header closeButton>
          <Modal.Title>
            Ubica un punto referencial donde se extravió tu mascota
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Map
            googleMapURL={mapURL}
            containerElement={<div style={{ height: "350px" }} />}
            mapElement={<div style={{ height: "100%" }} />}
            loadingElement={<div style={{ height: `100%` }} />}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseMap}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseMap}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
