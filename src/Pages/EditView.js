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
import profileIcon from "../blank-profile.png";
import { BsGeoAltFill } from "react-icons/bs";
import Map from "../Components/Map";
import credentials from "../Components/credentials";

export default function EditView(dataPost) {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [gender, setGender] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [age, setAge] = useState("");
  const [ubication, setUbication] = useState("");
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState("");
  const [showMap, setShowMap] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const handleCloseMap = () => setShowMap(false);
  const handleShowMap = () => setShowMap(true);
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
  // TODO: create object from Form and send to db
  const newPost = {
    id: Math.random() * 100,
    characteristics: {
      name: "Fido",
      age: "2 años",
      color: "blanco",
      sex: "M",
      size: "XL",
    },
    location: {
      reference: "Plaza Mayor de Nuevo Chimbote",
      coordinates: [-78.52001851957706, -9.127000168554577],
    },
    title: "Perro labrador perdido",
    type: "perro",
    tags: ["perro", "labrador", "ayuda"],
    description:
      "quidem molestiae nostrum voluptas velit error similique debitis et nihil hic et at provident aut quo facilis et quae ullam sint velit et rerum non ipsa iure cupiditate adipisci earum reprehenderit aspernatur veri",
    mainPhoto: 0,
    photos: [
      "https://images.dog.ceo/breeds/bluetick/n02088632_2870.jpg",
      "https://images.dog.ceo/breeds/bluetick/n02088632_2870.jpg",
      "https://images.dog.ceo/breeds/bluetick/n02088632_2870.jpg",
    ],
  };

  const ValidateForm = (e) => {
    let isValid = true;
    let alertText = "";
    if (title === "") {
      isValid = false;
      alertText = "Completar título de publicación";
    }
    if (type === "") {
      isValid = false;
      alertText = "Completar especie de mascota";
    }
    if (hashtags === "") {
      isValid = false;
      alertText = "Completar etiquetas de publicación";
    }
    if (gender === "") {
      isValid = false;
      alertText = "Completar sexo de mascota";
    }
    if (color === "") {
      isValid = false;
      alertText = "Completar color de mascota";
    }
    if (size === "") {
      isValid = false;
      alertText = "Completar tamaño de mascota";
    }
    if (age === "") {
      isValid = false;
      alertText = "Completar edad de mascota";
    }
    if (ubication === "") {
      isValid = false;
      alertText = "Completar ubicación de mascota";
    }
    if (description === "") {
      isValid = false;
      alertText = "Completar descripción de publicación";
    }
    if (isValid === false) {
      alert(alertText);
    }
    return isValid;
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(e.target.elements);
    if (ValidateForm(e) === true) {
      newPost.id = Math.random() * 100;
      newPost.titulo = title;

      newPost.tipo = type;
      newPost.etiquetas = hashtags;
      newPost.descripcion = description;
      newPost.foto_principal = 0;
      newPost.fotos = [
        "https://images.dog.ceo/breeds/basenji/n02110806_6035.jpg",
      ];
      newPost.characteristics.newPost.caracteristicas.edad = age;
      newPost.caracteristicas.color = color;
      newPost.caracteristicas.sexo = gender;
      newPost.caracteristicas.tamaño = size;
      newPost.ubicacion.referencia = ubication;
      newPost.ubicacion.lat = -9.127000168554577;
      newPost.ubicacion.lng = -78.52001851957706;

      console.log("este es mi nuevo post", newPost);
      axios
        .post(`${process.env.REACT_APP_BASE_API_URL}/api/v1/posts`, newPost)
        .then((response) => response.data);
      setTitle("");
    }
  };

  const mapURL = credentials.mapsKey;

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <h2>Publicación</h2>

        <Col lg={7} className="mt-5">
          <Form onSubmit={onSubmitForm}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Título:
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  placeholder="máximo 3 palabras"
                  type="text"
                  name="titulo"
                  onChange={(e) => setTitle(e.target.value)}
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
                  name="titulo"
                  onChange={(e) => setName(e.target.value)}
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
                  name="tipo"
                  onChange={(e) => setType(e.target.value)}
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
                  name="etiquetas"
                  onChange={(e) => setHashtags(e.target.value)}
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
                    <Form.Select onChange={(e) => setGender(e.target.value)}>
                      <option></option>
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
                      placeholder="máximo 10 palabras"
                      type="text"
                      name="color"
                      onChange={(e) => setColor(e.target.value)}
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
                    <Form.Select onChange={(e) => setSize(e.target.value)}>
                      <option></option>
                      <option value="xs">xs</option>
                      <option value="s">s</option>
                      <option value="m">m</option>
                      <option value="l">l</option>
                      <option value="xl">xl</option>
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
                      name="edad"
                      onChange={(e) => setAge(e.target.value)}
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
                  name="referencia"
                  onChange={(e) => setUbication(e.target.value)}
                />
                <Form.Text id="opcion" muted>
                  <BsGeoAltFill className="mx-2 d-inline-block  align-baseline" />
                  (o{" "}
                  {
                    <Button variant="link" onClick={handleShowMap}>
                      ubicar en el mapa)
                    </Button>
                  }
                </Form.Text>
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
                  name="descripcion"
                  onChange={(e) => setDescription(e.target.value)}
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
                    accept=".jpg,.jpeg,.gif,.png"
                    onChange={handleInputChange}
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
                  width={300}
                  height={200}
                  draggable={"false"}
                  src={profileIcon}
                  alt="UploadImage"
                />
              </>
            ) : (
              <img
                width={300}
                height={200}
                draggable={"false"}
                src={userInfo.filepreview}
                alt="UploadImage"
              />
            )}
          </figure>
        </Col>
      </Row>
      <Modal show={showMap} onHide={handleCloseMap}>
        <Modal.Header closeButton>
          <Modal.Title>
            Ubica un punto referencial donde se extravió tu mascota
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Map
            googleMapURL={mapURL}
            containerElement={<div style={{ height: "350px" }} />}
            mapElement={<div style={{ height: "100%" }} />}
            loadingElement={<div style={{ height: `100%` }} />}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseMap}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseMap}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
