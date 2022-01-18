import axios from "axios";
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

  // TODO: create object from Form and send to db
  const newPost = {
    caracteristicas: {
      edad: "6 meses",
      color: "marron",
      sexo: "M",
      tamaño: "XS",
    },
    ubicacion: {
      referencia: "Mercado Buenos Aires",
      lat: -9.127000168554577,
      lng: -78.52001851957706,
    },
    titulo: "Gatito perdido",
    tipo: "gato",
    etiquetas: ["gato", "bebe", "ayuda"],
    descripcion:
      "voluptatem sed natus perspiciatis qui enim aut ut ipsum repellat occaecati eveniet aliquam accusamus ipsum delectus corrupti veniam inventore tenetur est totam voluptas culpa nihil eius et dolore molestiae laborum quis quos ut eos dolorem occaecati alias sed voluptates hic delectus velit consequatur",
    foto_principal: 0,
    fotos: ["https://images.dog.ceo/breeds/basenji/n02110806_6035.jpg"],
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements);
    axios
      .post(`${process.env.REACT_APP_BASE_API_URL}/api/v1/posts`, newPost)
      .then((response) => response.data);
  };

  const mapURL = credentials.mapsKey;

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col lg={8}>
          <Form onSubmit={onSubmit}>
            <h2>Publicación</h2>
            <br />
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Título:
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  placeholder="máximo 3 palabras"
                  type="text"
                  name="titulo"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
              <Form.Label column sm="2">
                Especie:
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  placeholder="p.e.j: perro, gato,conejo, etc"
                  type="text"
                  name="tipo"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Etiquetas:
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  placeholder="máximo 10 palabras"
                  type="text"
                  name="etiquetas"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Col>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="4">
                    Sexo:
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      placeholder="máximo 10 palabras"
                      type="text"
                      name="sexo"
                    />
                  </Col>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="2">
                    Color:
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      placeholder="máximo 10 palabras"
                      type="text"
                      name="color"
                    />
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
                    <Form.Control
                      placeholder="pequeño, mediano, grande"
                      type="text"
                      name="tamaño"
                    />
                  </Col>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="2">
                    Edad:
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      placeholder="3 años, adulto"
                      type="text"
                      name="edad"
                    />
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
                  type="text"
                  name="referencia"
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
                <Form.Control
                  as="textarea"
                  rows={3}
                  type="text"
                  name="descripcion"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Fotos:
              </Form.Label>
              <Col sm="10">
                <Form.Group controlId="formFileMultiple" className="mb-3">
                  <Form.Control type="file" multiple name="fotos" />
                </Form.Group>
              </Col>
            </Form.Group>

            <Button variant="primary" type="submit">
              Guardar
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
