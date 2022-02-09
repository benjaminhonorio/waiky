import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
// import Comments from "../Components/Comments";
import Gallery from "../Components/Gallery";
import InfoPostDetails from "../Components/InfoPostDetails";
import { useParams } from "react-router-dom";
import GoogleMapReact from "google-map-react";
import config from "../config";
import mapStyles from "../Components/mapStyles";

// TODO: refactor styles and make map a reusable component

const mapContainerStyle = {
  width: "100%",
  height: "200px",
};

const defaults = {
  center: {
    lat: 40.662942,
    lng: -73.961704,
  },
  zoom: 12,
};

const markerStyle = {
  height: "35px",
  transform: "translate(-50%, -50%)",
  zIndex: 2,
};

const mapOptions = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
  fullscreenControl: true,
};

const Marker = ({ children }) => children;

export default function DetailPost({ dataPost, loading }) {
  const [center, setCenter] = useState([]);
  const [petIcon, setPetIcon] = useState("pet");

  const handleFullscreen = () => {
    const openFullscreen = document.getElementsByClassName(
      "gm-control-active gm-fullscreen-control"
    );
    openFullscreen[0].click();
  };

  const { id } = useParams();
  const data = dataPost?.find((p) => p.id === id);

  useEffect(() => {
    if (!loading) {
      const {
        location: { coordinates },
        type,
      } = data;
      if (type === "gato") setPetIcon("cat");
      else if (type === "perro") setPetIcon("dog");
      else setPetIcon(petIcon);
      setCenter([coordinates[1], coordinates[0]]);
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Container className="container-fluid my-4">
          <Row>
            <Row>
              <Col lg={6} md={12} xs={12}>
                <Gallery data={data} />
              </Col>
              <Col lg={6} md={12} xs={12}>
                <InfoPostDetails data={data} />
              </Col>
            </Row>

            <Row className="align-items-center my-4 border p-3">
              <Col lg={6} md={12} xs={12}>
                <h4> Ultima ubicacion </h4>
                <p className="text-secondary">{data.location.reference}</p>
                <Button onClick={handleFullscreen} className="my-3">
                  Ver mapa en detalle
                </Button>
              </Col>
              <Col>
                <div style={mapContainerStyle}>
                  <GoogleMapReact
                    bootstrapURLKeys={{
                      key: config.GOOGLE_MAPS_API_KEY,
                    }}
                    defaultCenter={defaults.center}
                    center={(center.length && center) || defaults.center}
                    defaultZoom={defaults.zoom}
                    options={mapOptions}
                  >
                    {center && (
                      <Marker lat={center[0]} lng={center[1]}>
                        <img
                          style={markerStyle}
                          src={`/assets/${petIcon}.svg`}
                          alt={`${petIcon} icon`}
                        />
                      </Marker>
                    )}
                  </GoogleMapReact>
                </div>
              </Col>
            </Row>
          </Row>
          {/* TODO: finish comments section */}
          {/* <Row>
          <h2 className="text-dark"> Comentarios </h2>
          <Container>
            <Comments />
            <Comments />
          </Container>
        </Row> */}
        </Container>
      )}
    </div>
  );
}
