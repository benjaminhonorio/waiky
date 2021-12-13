import React from "react";
import { Form, Container, Col, Row } from "react-bootstrap";
import Map from "../Components/Map";
import credentials from "../Components/credentials";

export default function MapView() {
  const mapURL = credentials.mapsKey;
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
              containerElement={<div style={{ height: "550px" }} />}
              mapElement={<div style={{ height: "100%" }} />}
              loadingElement={<div style={{ height: `100%` }} />}
            />
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
