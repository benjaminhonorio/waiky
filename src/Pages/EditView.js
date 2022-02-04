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
import profileIcon from "../pet_placeholder.png";
import { BsGeoAltFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Map from "../Components/Map";
import credentials from "../Components/credentials";
import useAuth from "../auth/useAuth";

export default function EditView({ posts, setDataPost }) {
  const [title, setTitle] = useState("");
  const auth = useAuth();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [hashtags, setHashtags] = useState([]);
  const [gender, setGender] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [age, setAge] = useState("");
  const [ubication, setUbication] = useState("");
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState([]);
  const [showMap, setShowMap] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const handleCloseMap = () => setShowMap(false);
  const handleShowMap = () => setShowMap(true);
  const [userInfo, setuserInfo] = useState({
    file: [],
    filepreview: null,
  });
  let navigate = useNavigate();

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
    username: "paocastg",
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

    if (ValidateForm(e) === true) {
      newPost.username = auth.userLogin.username;
      newPost.id = Math.random() * 100;

      newPost.title = title;

      newPost.type = type;
      newPost.tags = hashtags.split(" ");
      newPost.description = description;
      newPost.mainPhoto = 0;
      newPost.photos = [
        "https://images.dog.ceo/breeds/basenji/n02110806_6035.jpg",
      ];
      newPost.characteristics.name = name;
      newPost.characteristics.age = age;
      newPost.characteristics.color = color;
      newPost.characteristics.sex = gender;
      newPost.characteristics.size = size;
      newPost.location.reference = ubication;
      newPost.location.coordinates = [-78.52001851957706, -9.127000168554577];

      axios
        .post(`${process.env.REACT_APP_BASE_API_URL}/api/v1/posts`, newPost)
        .then((response) => {
          if (response.status === 201) {
            setDataPost(posts.concat(response.data.data));
            navigate(`/post/${response.data.data.id}`);
          } else {
            alert("La publicacion no se guardó, intentelo nuevamente");
          }
        });
    }
  };

  const mapURL = credentials.mapsKey;

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <h2>{auth.userLogin.username}, crea una publicación </h2>

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
                      <option value="XS">petite</option>
                      <option value="S">pequeño</option>
                      <option value="M">mediano</option>
                      <option value="L">grande</option>
                      <option value="XL">extra grande</option>
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
