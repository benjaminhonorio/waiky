import React, { useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import profileIcon from "../blank-profile-picture-gb20c8aff5_640.png";

export default function ProfileView() {
  const [name, setName] = useState("");
  const [correo, setCorreo] = useState("");
  const [telephone, setTelephone] = useState("");
  const [bio, setBio] = useState("");
  const [nick, setNick] = useState("");
  // const [form] = Form.useForm();
  const [isUploaded, setIsUploaded] = useState(false);
  const [userInfo, setuserInfo] = useState({
    file: [],
    filepreview: null,
  });

  const handleInputChange = (event) => {
    setIsUploaded(true);
    setuserInfo({
      ...userInfo,
      file: event.target.files[0],
      filepreview: URL.createObjectURL(event.target.files[0]),
    });
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col lg={10}>
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
                    <Form.Control />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="2">
                    Nombre:
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="2">
                    Correo:
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="2">
                    Teléfono:
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="2">
                    Bio:
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control as="textarea" rows={3} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3"></Form.Group>
              </Col>

              <Col md={{ span: 1, offset: 1 }}>
                <figure className="figure">
                  {!isUploaded ? (
                    <>
                      <label htmlFor="upload-input">
                        <img
                          class="rounded"
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
            <Button class="btn btn-dark mb-6" variant="primary" type="submit">
              Guardar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
