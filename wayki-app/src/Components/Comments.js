import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Comments() {
  return (
    <Row className="border-top p-4">
      <Col className="me-auto">
        <Row>
          <Col>
            <h4> John Doe </h4>
            <p> August 4 </p>
            &#9733;&#9733;&#9733;&#9733;&#9734;
          </Col>
        </Row>
      </Col>
      <Col>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </Col>
    </Row>
  );
}
