import React from "react";
import GoogleMapReact from "google-map-react";
import "./Map.css";
// import { Icon } from "@iconify/react";
// import locationIcon from "@iconify/icons-mdi/map-marker";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map({ zoomLevel }) {
  const location = {
    dirección: "1600 Amphitheatre Parkway, Mountain View, california.",
    Lat: 37.42216,
    lng: -122.08427,
  };
  // const LocationPin = ({ text }) => (
  //   <div className="pin">
  //     <Icon icon={locationIcon} className="pin-icon" />
  //     <p className="pin-text">{text}</p>
  //   </div>
  // );
  return (
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Campus</h2>

      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyBN79o66J0uzzF3g3ViCUc4CowEBgeEzwc",
          }}
          defaultCenter={location}
          defaultZoom={10}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    </div>
  );
}
