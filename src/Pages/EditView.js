import React, { useState } from "react";
import {
  Form,
  Button,
  Container,
  Col,
  Row,
  Modal,
  Image,
} from "react-bootstrap";
import axios from "axios";
import { BsGeoAltFill } from "react-icons/bs"; // will be used in location input
import profileIcon from "../pet_placeholder.png";
import { useNavigate } from "react-router-dom";
import Map from "../Components/Map";
import credentials from "../Components/credentials";
import useAuth from "../auth/useAuth";

export default function EditView({ posts, setDataPost }) {
  const [location, setLocation] = useState(""); // will be receive location from map
  const auth = useAuth();
  const [showMap, setShowMap] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const handleMap = () => setShowMap(!showMap);

  let navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    title: "",
    name: "",
    type: "",
    hashtags: "",
    sex: "",
    color: "",
    size: "",
    age: "",
    reference: "",
    description: "",
    photos: [],
  });

  // TODO: move to configs
  const uploadURL = process.env.REACT_APP_CLOUDINARY_UPLOAD_URL;
  const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;
  const mapURL = credentials.mapsKey;

  const handleInputChange = ({ target }) => {
    setFormValues((state) => ({ ...state, [target.name]: target.value }));
  };

  // Upload images and display them
  const handlePhotoChange = ({ target }) => {
    const formData = new FormData();
    let files = target.files;
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      formData.append("file", file);
      formData.append("upload_preset", uploadPreset);
      axios.post(uploadURL, formData).then((response) => {
        console.log(response);
        setFormValues((previousFormValues) => ({
          ...previousFormValues,
          photos: previousFormValues.photos.concat(response.data.url),
        }));
        setIsUploaded(true);
      });
    }
  };

  // TODO: Submit to backend
  const onSubmitForm = (e) => {
    e.preventDefault();
    // TODO: Build object
    const newPost = {};
    axios
      .post(`${process.env.REACT_APP_BASE_API_URL}/api/v1/posts`, newPost)
      .then((response) => {
        if (response.status === 201) {
          console.log("response");
          setDataPost(posts.concat(response.data.data));
          navigate(`/post/${response.data.data.id}`);
        } else {
          alert("La publicacion no se guardó, intentelo nuevamente");
        }
      });
  };
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        {/* TODO: Change title if its creation or edition of info */}
        <h2>{auth.userLogin.username}, crea una publicación </h2>

        <Col lg={7} className="mt-5">
          <Form onSubmit={onSubmitForm} noValidate autoComplete="off">
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Título:
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  placeholder="máximo 3 palabras"
                  type="text"
                  name="title"
                  onChange={handleInputChange}
                  value={formValues.title}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Nombre:
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  placeholder=""
                  type="text"
                  name="name"
                  onChange={handleInputChange}
                  value={formValues.name}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
              <Form.Label column sm="2">
                Especie:
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  placeholder="p.e.j: perro, gato,conejo, etc"
                  type="text"
                  name="type"
                  onChange={handleInputChange}
                  value={formValues.type}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Etiquetas:
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  placeholder="máximo 10 palabras"
                  type="text"
                  name="tags"
                  onChange={handleInputChange}
                  value={formValues.tags}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Col>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="4">
                    Sexo:
                  </Form.Label>
                  <Col sm="8">
                    <Form.Select
                      name="sex"
                      onChange={handleInputChange}
                      value={formValues.sex}
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="H">Hembra</option>
                      <option value="M">Macho</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="2">
                    Color:
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      placeholder="negro"
                      type="text"
                      name="color"
                      onChange={handleInputChange}
                      value={formValues.color}
                    />
                  </Col>
                </Form.Group>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Col>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="4">
                    Tamaño:
                  </Form.Label>
                  <Col sm="8">
                    <Form.Select
                      name="size"
                      onChange={handleInputChange}
                      value={formValues.size}
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="XS">petite</option>
                      <option value="S">pequeño</option>
                      <option value="M">mediano</option>
                      <option value="L">grande</option>
                      <option value="XL">extra-grande</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="2">
                    Edad:
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      placeholder="3 años"
                      type="text"
                      name="age"
                      onChange={handleInputChange}
                      value={formValues.age}
                    />
                  </Col>
                </Form.Group>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Ubicación:
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  placeholder="Av. Buenos Aires 328"
                  type="text"
                  name="reference"
                  onChange={handleInputChange}
                  value={formValues.reference}
                />
                {/* TODO: Change libraries and allow the user to pin a location on map show */}
                {/* <Form.Text id="opcion" muted>
                  <BsGeoAltFill className="mx-2 d-inline-block  align-baseline" />
                  (o{" "}
                  {
                    <Button variant="link" onClick={handleShowMap}>
                      ubicar en el mapa)
                    </Button>
                  }
                </Form.Text> */}
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Descripción:
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  as="textarea"
                  rows={3}
                  type="text"
                  name="description"
                  onChange={handleInputChange}
                  value={formValues.description}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Fotos:
              </Form.Label>
              <Col sm="10">
                <Form.Group controlId="formFileMultiple" className="mb-3">
                  <input
                    type="file"
                    name="photos"
                    accept=".jpg,.jpeg,.gif,.png"
                    onChange={handlePhotoChange}
                    multiple
                  />
                </Form.Group>
              </Col>
            </Form.Group>

            <Button variant="primary" type="submit">
              Guardar
            </Button>
          </Form>
        </Col>
        <Col lg={4} md={{ span: 1, offset: 1 }} className="mt-5">
          <figure>
            {!isUploaded ? (
              <>
                <Image
                  width={200}
                  draggable={"false"}
                  src={profileIcon}
                  alt="UploadImage"
                />
              </>
            ) : (
              formValues.photos.mapw((photo) => {
                return (
                  <img
                    key={photo.match(/([a-zA-Z0-9]+.jpg)/)[0]}
                    width={200}
                    draggable={"false"}
                    src={photo}
                    alt="UploadImage"
                  />
                );
              })
            )}
          </figure>
        </Col>
      </Row>
      <Modal show={showMap} onHide={handleMap}>
        <Modal.Header closeButton>
          <Modal.Title>
            Ubica un punto referencial donde se extravió tu mascota
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* TODO: Replace map from another library */}
          <Map
            googleMapURL={mapURL}
            containerElement={<div style={{ height: "350px" }} />}
            mapElement={<div style={{ height: "100%" }} />}
            loadingElement={<div style={{ height: `100%` }} />}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleMap}>
            Close
          </Button>
          <Button variant="primary" onClick={handleMap}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
