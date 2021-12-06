import { Container, Row, Col } from 'react-bootstrap';

import Comments from '../Components/Comments';
import Gallery from '../Components/Gallery';
import InfoPostDetails from '../Components/InfoPostDetails';

export default function DetailPost() {
  return (
    <div>
      <Container className="container-fluid my-4">
        <Row>
          <Gallery />
          <InfoPostDetails />
          <Row className="align-items-center my-4 border p-3">
            <Col lg={6} md={12} xs={12}>
              <h4> Ultima ubicacion </h4>
              <p className="text-secondary">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Col>
            <Col>
              <iframe
                src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                allowfullscreen
                title="Map"
                width="600"
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
      </Container>
    </div>
  );
}
