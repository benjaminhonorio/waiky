import React from "react";
import Publications from "../Components/Publications";
import { Row, Col, Container } from "react-bootstrap";
import Profile from "../Components/Profile";

export default function ProfileView() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col lg={10}>
          <Row>
            <Container>
              <Profile />
            </Container>
            <h2 className="text-dark"> Publicaciones </h2>
            <Container>
              <Publications />
              <Publications />
            </Container>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
