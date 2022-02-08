import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import ProfileView from "../Components/ProfileEdit";

export default function Profile() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
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
