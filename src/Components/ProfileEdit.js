import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Form, Button, Image } from "react-bootstrap";
import profileIcon from "../blank-profile.png";
import useAuth from "../auth/useAuth";

export default function ProfileEdit() {
  const auth = useAuth();
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [bio, setBio] = useState("");

  const [isUploaded, setIsUploaded] = useState(false);
  const [userInfo, setuserInfo] = useState({
    file: [],
    filepreview: null,
  });

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_API_URL}/api/v1/users/profile/${auth.userLogin.token}`
      )
      .then((response) => {
        setName(response.data.data.name);
        setTelephone(response.data.data.number);
        setBio(response.data.data.bio);
      });
  });

  const handleInputChange = (event) => {
    setIsUploaded(true);
    setuserInfo({
      ...userInfo,
      file: event.target.files[0],
      filepreview: URL.createObjectURL(event.target.files[0]),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProfile = {
      username: auth.userLogin.username,
      name: name,
      email: auth.userLogin.email,
      telephone: telephone,
      bio: bio,
      token: auth.userLogin.token,
    };
    console.log(auth.userLogin);
    axios
      .put(
        `${process.env.REACT_APP_BASE_API_URL}/api/v1/users/profile`,
        newProfile
      )
      .then((response) => console.log(response.data));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Hello {auth.userLogin.username}</h2>
      <br />
      <Row className="align-items-center my-4 sm-8 ">
        <Col lg={6} md={12} xs={12}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Nombre:
            </Form.Label>
            <Col sm="10">
              <Form.Control
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Correo:
            </Form.Label>
            <Col sm="10">
<<<<<<< HEAD
              {/* <Form.Label>{}</Form.Label> */}
              <Form.Control value={auth.userLogin.email} disabled />
=======
              <Form.Control placeholder={auth.userLogin.email} disabled />
>>>>>>> 51e2d58651706481be7075596296ad0ab57ff3ca
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Teléfono:
            </Form.Label>
            <Col sm="10">
              <Form.Control
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Bio:
            </Form.Label>
            <Col sm="10">
              <Form.Control
                value={bio}
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
      <Button className="btn btn-dark mb-6" variant="primary" type="submit">
        Guardar
      </Button>
      <br />
      <br />
    </Form>
  );
}
