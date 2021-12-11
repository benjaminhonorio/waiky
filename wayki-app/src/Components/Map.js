import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Map = (props) => {
  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: -12.0464, lng: -77.0428 }}
      defaultOptions={{ disableDefaultUI: true }}
    ></GoogleMap>
  );
};

export default withScriptjs(withGoogleMap(Map));
