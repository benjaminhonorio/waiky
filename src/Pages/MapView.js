import React from "react";
import { Card, Container, Col, Row, Button } from "react-bootstrap";
import Map from "../Components/Map";
import credentials from "../Components/credentials";
import { Link } from "react-router-dom";
import { useState } from "react";

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

const getPosition = (options) => {
  if (navigator.geolocation) {
    return new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject, options)
    );
  } else {
    console.log("Your browser does not support Geolocation");
  }
};

export default function MapView({ posts }) {
  const [center, setCenter] = useState({ lat: -12.046374, lng: -77.042793 }); // initial position

  const position = () => {
    getPosition(options)
      .then((pos) => {
        const crd = pos.coords;
        setCenter({ lat: crd.latitude, lng: crd.longitude }); // move the center to approximate position based on geolocation
      })
      .catch((error) => {
        console.warn("ERROR(" + error.code + "): " + error.message);
      });
  };
  // Set position to current user position if possible
  position();

  const mapURL = credentials.mapsKey;

  return (
    <Container className="my-3" fluid>
      <Row>
        <Col lg={4}>
          {posts &&
            posts.map((post) => {
              return (
                <Card key={post.id} style={{ flexDirection: "row" }}>
                  <Col lg={6}>
                    <Card.Body>
                      <Card.Title>{post.title}</Card.Title>
                      <Card.Text>
                        {post.description.length > 80
                          ? `${post.description.slice(0, 80)}...`
                          : ""}
                      </Card.Text>
                    </Card.Body>
                    <Card.Body>
                      <Button
                        variant="primary"
                        as={Link}
                        to={`/post/${post.id}`}
                      >
                        Contactarse
                      </Button>
                    </Card.Body>
                  </Col>
                  <Col lg={6}>
                    <Card.Img variant="top" src={post.photos[post.mainPhoto]} />
                  </Col>
                </Card>
              );
            })}
        </Col>
        <Col lg={8}>
          {/* <Form>
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
          </Form> */}
          <Button variant="success" onClick={() => setCenter(position)}>
            Ir a mi ubicacion
          </Button>
          <span>(Activa la ubicacion para que funcione)</span>

          <Map
            googleMapURL={mapURL}
            containerElement={<div style={{ height: "100vh" }} />}
            mapElement={<div style={{ height: "100%" }} />}
            loadingElement={<div style={{ height: `100%` }} />}
            posts={posts}
            center={center}
          />
        </Col>
      </Row>
    </Container>
  );
}
