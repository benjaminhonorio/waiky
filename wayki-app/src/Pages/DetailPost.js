import { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';

import Comments from '../Components/Comments';
import Gallery from '../Components/Gallery';
import InfoPostDetails from '../Components/InfoPostDetails';

import { useParams } from 'react-router-dom';

import axios from 'axios';

export default function DetailPost() {
  const [show, setShow] = useState(false);
  const [dataPost, setDataPost] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/posts/${id}`)
      .then((response) => setDataPost(response.data));
  });

  return (
    <div>
      <Container className="container-fluid my-4">
        <Row>
          <Row>
            <Col lg={6} md={6} xs={12}>
              <Gallery dataPost={dataPost} />
            </Col>
            <Col lg={6} md={6} xs={12}>
              <InfoPostDetails dataPost={dataPost} />
            </Col>
          </Row>

          <Row className="align-items-center my-4 border p-3">
            <Col lg={6} md={12} xs={12}>
              <h4> Ultima ubicacion </h4>
              <p className="text-secondary">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button onClick={handleShow} className="my-3">
                Ver mapa en detalle
              </Button>
            </Col>
            <Col>
              <iframe
                src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                title="Map"
                width="600"
                height="200"
              ></iframe>
            </Col>
          </Row>
        </Row>
        <Row>
          <h2 className="text-dark"> Comentarios </h2>
          <Container>
            <Comments />
            <Comments />
          </Container>
        </Row>

        <Modal show={show} onHide={handleClose} fullscreen={true}>
          <Modal.Header closeButton>
            <h3> Ver mapa en detalle </h3>
          </Modal.Header>
          <Modal.Body>
            <iframe
              src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              allowfullscreen
              title="Map"
              width="1200"
              height="800"
            ></iframe>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}
