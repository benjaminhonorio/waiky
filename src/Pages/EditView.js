import React, { useState, useEffect } from "react";
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
import config from "../config";
import useAuth from "../auth/useAuth";
import { getToken } from "../user/session";

export default function EditView({ posts, setDataPost }) {
  const [coordinates, setCoordinates] = useState(null);
  const [center, setCenter] = useState([]);
  const [userLocation, setUserLocation] = useState([]); //TODO: let the user find their location with a search box and move the location (if geolocation is not possible)
  const [address, setAddress] = useState(null); // TODO: Use Geolocation to save the address to the post object
  const [petType, setPetType] = useState("pet");
  const [showMap, setShowMap] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const auth = useAuth();
  let navigate = useNavigate();

  // Get user Location with geolocation API
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCenter([latitude, longitude]);
      }
    );
  }, []);

  const handleMap = () => setShowMap(!showMap);
  const handleCancel = () => {
    setCoordinates(null);
    setShowMap(!showMap);
  };
  const [formValues, setFormValues] = useState({
    title: "",
    name: "",
    type: "",
    tags: "",
    sex: "",
    color: "",
    size: "",
    age: "",
    reference: "",
    description: "",
    photos: [],
  });
  const token = getToken();

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
      formData.append("upload_preset", config.CLOUDINARY_UPLOAD_PRESET);
      axios.post(config.CLOUDINARY_UPLOAD_URL, formData).then((response) => {
        setFormValues((previousFormValues) => ({
          ...previousFormValues,
          photos: previousFormValues.photos.concat(response.data.url),
        }));
        setIsUploaded(true);
      });
    }
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const newPost = {
      characteristics: {
        name: formValues.name,
        age: formValues.age,
        color: formValues.color,
        sex: formValues.sex,
        size: formValues.size,
      },
      location: {
        type: "Point",
        address,
        reference: formValues.reference,
        coordinates,
      },
      title: formValues.title,
      type: formValues.type,
      tags: formValues.tags.split(" "),
      description: formValues.description,
      mainPhoto: 0,
      photos: formValues.photos,
    };
    axios
      .post(`${config.BASE_API_URL}/api/v1/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 201) {
          setDataPost(posts.concat(response.data.data));
          navigate(`/post/${response.data.data.id}`);
        } else {
          alert("La publicacion no se guardó, intentelo nuevamente");
        }
      });
  };

  // TODO: refactor styles
  const iconStyle = {
    height: "35px",
    cursor: "pointer",
    margin: "0 5px",
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
                  data-test-id="title-post-form"
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
                  data-test-id="name-post-form"
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
                  data-test-id="specie-post-form"
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
                  data-test-id="tags-post-form"
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
                      data-test-id="sex-select-form"
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
                      data-test-id="color-post-form"
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
                      data-test-id="size-select-form"
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
                      data-test-id="age-post-form"
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
                  data-test-id="location-post-form"
                />
                <Form.Text id="opcion" muted>
                  <BsGeoAltFill className="mx-2 d-inline-block  align-baseline" />
                  (o{" "}
                  {
                    <Button variant="link" onClick={handleMap} id="map-button">
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
                  name="description"
                  onChange={handleInputChange}
                  value={formValues.description}
                  data-test-id="description-post-form"
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
                    data-test-id="photos-post-form"
                  />
                </Form.Group>
              </Col>
            </Form.Group>

            <Button variant="primary" type="submit" id="button-login-form">
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
              formValues.photos.map((photo) => {
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
      <Modal fullscreen={true} show={showMap} onHide={handleMap}>
        <Modal.Header closeButton>
          <Modal.Title>Ubica la mascota</Modal.Title>
          <div style={{ marginLeft: "auto" }}>
            <strong>Elige un icono: </strong>
            {config.PET_TYPES.map((pet) => {
              return (
                <img
                  key={pet}
                  style={iconStyle}
                  onClick={() => setPetType(pet)}
                  src={`/assets/${pet}.svg`}
                  alt={pet}
                />
              );
            })}
          </div>
        </Modal.Header>
        <Modal.Body data-test-id="modal-body">
          <Map
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            setPetType={setPetType}
            petType={petType}
            center={center}
            setCenter={setCenter}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleMap} id="save-modal-button">
            Save and Close
          </Button>
          <Button variant="danger" onClick={handleCancel}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
