import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import ProfileView from "../Components/ProfileEdit";

export default function Profile() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col lg={10}>
          <Row>
            <Container>
              <ProfileView />
            </Container>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
