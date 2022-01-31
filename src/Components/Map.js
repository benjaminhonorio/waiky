import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

function Map({ center, posts }) {
  return (
    <div>
      <GoogleMap
        defaultZoom={12}
        center={center}
        defaultOptions={{ disableDefaultUI: true }}
      >
        {posts.map((post) => {
          return (
            <Marker
              key={post.id}
              position={{
                lat: parseFloat(post.location.coordinates[1]),
                lng: parseFloat(post.location.coordinates[0]),
              }}
              title={post.nombre}
            />
          );
        })}
      </GoogleMap>
    </div>
  );
}

const MapWrapper = withScriptjs(withGoogleMap(Map));
export default MapWrapper;
