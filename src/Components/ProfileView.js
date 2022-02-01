import React from "react";
import { Row, Col, Form, Image } from "react-bootstrap";

export default function ProfileView({ data }) {
  return (
    <Form>
      <h2>Mi Perfil</h2>
      <br />
      <Row className="align-items-center my-4 sm-8 ">
        <Col lg={6} md={12} xs={12}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Nick:
            </Form.Label>
            <Col sm="10">
              <Form.Label>{data.username}</Form.Label>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Nombre:
            </Form.Label>
            <Col sm="10">
              <Form.Label>{data.name}</Form.Label>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Correo:
            </Form.Label>
            <Col sm="10">
              <Form.Label>{data.email}</Form.Label>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Teléfono:
            </Form.Label>
            <Col sm="10">
              <Form.Label>{data.telephone}</Form.Label>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Bio:
            </Form.Label>
            <Col sm="10">
              <Form.Label>{data.bio}</Form.Label>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3"></Form.Group>
        </Col>

        <Col md={{ span: 1, offset: 1 }}>
          <img
            class="img-circle"
            width={300}
            height={300}
            draggable={"false"}
            // src={userInfo.filepreview}
            alt="UploadImage"
          />
        </Col>
      </Row>

      <br />
      <br />
    </Form>
  );
}
