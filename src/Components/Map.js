import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  InfoWindow,
  // Marker
} from "react-google-maps";

function Map() {
  return (
    <div>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: -12.0464, lng: -77.0428 }}
        defaultOptions={{ disableDefaultUI: true }}
      >
        {/* {props.destinosCompleto.map((marker) => {
          return (
            <Marker
              key={marker.id}
              position={{ lat: parseFloat(marker.latitud), lng: parseFloat(marker.longitud) }}
              title={marker.nombre}
            />
          )
        })} */}
      </GoogleMap>
    </div>
  );
}

const MapWrapper = withScriptjs(withGoogleMap(Map));
export default MapWrapper;
