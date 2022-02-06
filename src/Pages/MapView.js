import { useState, useEffect, useRef } from "react";
import { Container, Col, Row } from "react-bootstrap";

import config from "../config";
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";
import mapStyles from "../Components/mapStyles";
import AlertDismissible from "../Components/AlertDismissible";
import PostList from "../Components/PostList";
import LocateMeIcon from "../Components/LocateMeIcon";
import PetMarkerIcon from "../Components/PetMarkerIcon";

//  TODO: refactor styles
const mapContainerStyle = {
  width: "100%",
  height: "90vh",
};

const clusterMakerStyle = {
  color: "#fff",
  backgroundColor: "#1978c8",
  borderRadius: "50%",
  padding: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const mapOptions = {
  styles: mapStyles,
};

const Marker = ({ children }) => children;

export default function MapView({ bounds, setBounds, dataPoints }) {
  const [permissionAllowed, setPermissionAllowed] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [center, setCenter] = useState([]);
  const [zoom, setZoom] = useState(12);
  const mapRef = useRef();

  const defaults = {
    center: {
      lat: 40.662942,
      lng: -73.961704,
    },
    zoom: 12,
  };

  useEffect(() => {
    const positionDenied = function () {
      setShowAlert(true);
      setCenter([-12.04318, -77.02824]);
      setPermissionAllowed(false);
    };

    function revealPosition() {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          setCenter([latitude, longitude]);
        }
      );
    }

    function handlePermission() {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            setShowAlert(false);
            revealPosition();
          } else if (result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(
              revealPosition,
              positionDenied
            );
            setPermissionAllowed(true);
          } else if (result.state === "denied") {
            setShowAlert(true);
            setCenter([-12.04318, -77.02824]);
            setPermissionAllowed(false);
          }
        });
    }

    handlePermission();
  }, []);

  const points = dataPoints.map((dataPoint) => ({
    type: "Feature",
    properties: {
      cluster: false,
      markerId: dataPoint.id,
      type: dataPoint.type,
    },
    geometry: {
      type: "Point",
      coordinates: [
        dataPoint.location.coordinates[0],
        dataPoint.location.coordinates[1],
      ],
    },
  }));

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 40, maxZoom: 16 },
  });

  return (
    <Container className="my-3" fluid>
      <Row>
        <Col lg={8}>
          <Row xs="auto" style={{ display: "block", position: "relative" }}>
            {permissionAllowed ? (
              <div style={{ position: "relative" }}>
                <LocateMeIcon
                  setCenter={setCenter}
                  setZoom={setZoom}
                  map={mapRef}
                />
              </div>
            ) : (
              <AlertDismissible
                showAlert={showAlert}
                setShowAlert={setShowAlert}
              />
            )}
          </Row>
          <div style={mapContainerStyle}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: config.GOOGLE_MAPS_API_KEY,
              }}
              defaultCenter={defaults.center}
              center={center}
              defaultZoom={defaults.zoom}
              zoom={zoom}
              options={mapOptions}
              onChange={({ zoom, bounds }) => {
                setZoom(zoom);
                setBounds([
                  bounds.nw.lng,
                  bounds.se.lat,
                  bounds.se.lng,
                  bounds.nw.lat,
                ]);
              }}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({ map }) => {
                mapRef.current = map;
              }}
            >
              {clusters.map((cluster) => {
                const [longitude, latitude] = cluster.geometry.coordinates;
                const { cluster: isCluster } = cluster.properties;
                if (isCluster) {
                  return (
                    <Marker key={cluster.id} lat={latitude} lng={longitude}>
                      <div
                        style={{
                          ...clusterMakerStyle,
                          width: `${
                            10 + cluster.properties.point_count / points.length
                          }px`,
                          height: `${
                            10 + cluster.properties.point_count / points.length
                          }px`,
                          zIndex: 10,
                        }}
                        onClick={() => {
                          const expansionZoom = Math.min(
                            supercluster.getClusterExpansionZoom(cluster.id),
                            20
                          );
                          mapRef.current.setZoom(expansionZoom);
                          mapRef.current.panTo({
                            lat: latitude,
                            lng: longitude,
                          });
                        }}
                      >
                        {cluster.properties.point_count}
                      </div>
                    </Marker>
                  );
                }
                return (
                  <Marker
                    key={cluster.properties.markerId}
                    lat={latitude}
                    lng={longitude}
                    onClick={() => {
                      mapRef.current.setZoom(9);
                      mapRef.current.panTo({ lat: latitude, lng: longitude });
                    }}
                  >
                    <PetMarkerIcon marker={cluster} />
                  </Marker>
                );
              })}
            </GoogleMapReact>
          </div>
        </Col>
        <Col lg={4} style={{ maxHeight: "90vh", overflowY: "auto" }}>
          <PostList posts={dataPoints} />
        </Col>
      </Row>
    </Container>
  );
}
