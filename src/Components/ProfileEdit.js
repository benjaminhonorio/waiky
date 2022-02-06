import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Form, Button, Image } from "react-bootstrap";
import profileIcon from "../blank-profile.png";
import useAuth from "../auth/useAuth";
import { getToken } from "../user/session";
import config from "../config";

export default function ProfileEdit() {
  const auth = useAuth();
  const token = getToken();
  const [formValues, setFormValues] = useState({
    name: "",
    number: "",
    bio: "",
    photo: "",
  });

  useEffect(() => {
    if (token) {
      axios
        .get(`${process.env.REACT_APP_BASE_API_URL}/api/v1/users/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setFormValues(response.data);
        });
    }
  }, [token]);

  const handleInputChange = ({ target }) => {
    setFormValues((state) => ({ ...state, [target.name]: target.value }));
  };

  const handlePhotoChange = ({ target }) => {
    const formData = new FormData();
    let file = target.files[0];
    formData.append("file", file);
    formData.append("upload_preset", config.CLOUDINARY_UPLOAD_PRESET);
    axios.post(config.CLOUDINARY_UPLOAD_URL, formData).then((response) => {
      setFormValues((previousFormValues) => ({
        ...previousFormValues,
        photo: response.data.url,
      }));
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const updatedProfile = {
      name: formValues.name,
      number: formValues.number,
      bio: formValues.bio,
      photo: formValues.photo,
    };

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
    <Form onSubmit={handleSubmitForm}>
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
                value={formValues.name}
                onChange={handleInputChange}
                type="text"
                name="name"
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
                value={formValues.number}
                onChange={handleInputChange}
                type="text"
                name="number"
                placeholder="Porfavor agregar el indicativo segun el País y el numero todo junto"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Bio:
            </Form.Label>
            <Col sm="10">
              <Form.Control
                value={formValues.bio}
                as="textarea"
                rows={3}
                onChange={handleInputChange}
                type="text"
                name="bio"
              />
            </Col>
          </Form.Group>
        </Col>

        <Col md={{ span: 1, offset: 1 }}>
          <figure className="figure">
            {!formValues.photo ? (
              <>
                <Image
                  height={300}
                  draggable={"false"}
                  src={profileIcon}
                  alt="UploadImage"
                />

                <Form.Group as={Row} className="mb-3">
                  <input
                    type="file"
                    name="photo"
                    accept=".jpg,.jpeg,.gif,.png"
                    onChange={handlePhotoChange}
                  />
                </Form.Group>
              </>
            ) : (
              <img
                height={300}
                draggable={"false"}
                src={formValues.photo}
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
