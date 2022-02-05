import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Form, Button, Image } from "react-bootstrap";
import profileIcon from "../blank-profile.png";
import useAuth from "../auth/useAuth";
import { getToken } from "../user/session";

export default function ProfileEdit() {
  const auth = useAuth();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [bio, setBio] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);
  const [userInfo, setuserInfo] = useState({
    file: [],
    filepreview: null,
  });

  const token = getToken();
  useEffect(() => {
    if (token) {
      axios
        .get(`${process.env.REACT_APP_BASE_API_URL}/api/v1/users/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setNumber(response.data.number);
          setBio(response.data.bio);
          setName(response.data.name);
          // if (response.data.data.name) {
          // }
          // if (response.data.data.number) {
          //   setTelephone(response.data.data.number);
          // }
          // if (response.data.data.bio) {
          //   setBio(response.data.data.bio);
          // }
          // if (response.data.data.email) {
          //   setEmail(response.data.data.email);
          // }
        });
    }
  }, [token]);

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
    const updatedProfile = {
      name: name,
      number: number,
      bio: bio,
    };
    console.log(updatedProfile);
    axios
      .put(
        `${process.env.REACT_APP_BASE_API_URL}/api/v1/users/profile`,
        updatedProfile,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        alert("se guardó exitosamente");
      });
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
              <Form.Control value={auth.userLogin.email} disabled />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Teléfono:
            </Form.Label>
            <Col sm="10">
              <Form.Control
                value={number}
                onChange={(e) => setNumber(e.target.value)}
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
                className="img-circle"
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
