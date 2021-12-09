import React from "react";
import { Form, Container, Col, Row } from "react-bootstrap";
import Map from "../Components/Map";

export default function MapView() {
  const mapURL =
    "https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBN79o66J0uzzF3g3ViCUc4CowEBgeEzwc";
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col lg={8}>
          <Form>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search by name, location, color, etc"
                aria-label="Search bar"
                aria-describedby="basic-addon2"
              />
              <button className="btn btn-outline-secondary" type="button">
                Search
              </button>
            </div>
            <br />
            <Map
              googleMapURL={mapURL}
              containerElement={<div style={{ height: "350px" }} />}
              mapElement={<div style={{ height: "100%" }} />}
              loadingElement={<div style={{ height: `100%` }} />}
            />
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
