import GoogleMapReact from "google-map-react";
import config from "../config";
import mapStyles from "./mapStyles";

// TODO: take defaults and state from context
const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const defaults = {
  center: {
    lat: 40.662942,
    lng: -73.961704,
  },
  zoom: 12,
};

// TODO: refactor styles
const markerStyle = {
  height: "35px",
  transform: "translate(-50%, -50%)",
  zIndex: 2,
};

const mapOptions = {
  styles: mapStyles,
};

const Marker = ({ children }) => children;

// TODO: move to styles prop later to make reusable
function Map({ coordinates, setCoordinates, petType, center, setCenter }) {
  const onMapClick = (e) => {
    setCoordinates([e.lng, e.lat]);
    setCenter([e.lat, e.lng]);
  };
  return (
    <div style={mapContainerStyle}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: config.GOOGLE_MAPS_API_KEY,
        }}
        defaultCenter={defaults.center}
        center={(center.length && center) || defaults.center}
        defaultZoom={defaults.zoom}
        onClick={onMapClick}
        options={mapOptions}
      >
        {coordinates && (
          <Marker lat={coordinates[1]} lng={coordinates[0]}>
            <img
              style={markerStyle}
              src={`/assets/${petType}.svg`}
              alt={`${petType} icon`}
            />
          </Marker>
        )}
      </GoogleMapReact>
    </div>
  );
}

export default Map;
