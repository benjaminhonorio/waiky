import React from "react";
import { Row, Col, Form, Button, Image } from "react-bootstrap";

export default function ProfileView() {
  return (
    <Form onSubmit={handleSubmit}>
      <h2>Mi Perfil</h2>
      <br />
      <Row className="align-items-center my-4 sm-8 ">
        <Col lg={6} md={12} xs={12}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Nick:
            </Form.Label>
            <Col sm="10">
              <Form.Control onChange={(e) => setNick(e.target.value)} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Nombre:
            </Form.Label>
            <Col sm="10">
              <Form.Control onChange={(e) => setName(e.target.value)} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Correo:
            </Form.Label>
            <Col sm="10">
              <Form.Control onChange={(e) => setCorreo(e.target.value)} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Teléfono:
            </Form.Label>
            <Col sm="10">
              <Form.Control onChange={(e) => setTelephone(e.target.value)} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Bio:
            </Form.Label>
            <Col sm="10">
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => setBio(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3"></Form.Group>
        </Col>

        <Col md={{ span: 1, offset: 1 }}>
          <figure className="figure">
            {!isUploaded ? (
              <>
                <label htmlFor="upload-input">
                  <Image
                    width={300}
                    height={300}
                    draggable={"false"}
                    src={profileIcon}
                    alt="UploadImage"
                  />
                </label>
                <figcaption className="figure-caption text-center">
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.gif,.png"
                    onChange={handleInputChange}
                  />
                </figcaption>
              </>
            ) : (
              <img
                class="img-circle"
                width={300}
                height={300}
                draggable={"false"}
                src={userInfo.filepreview}
                alt="UploadImage"
              />
            )}
          </figure>
        </Col>
      </Row>

      <br />
      <br />
    </Form>
  );
}
