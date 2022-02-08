const LocateMeIcon = ({ setCenter, setZoom, map }) => {
  return (
    <img
      style={{
        position: "absolute",
        top: "0.5rem",
        left: "1rem",
        zIndex: "100",
        cursor: "pointer",
        height: "35px",
      }}
      src="/assets/compass.png"
      onClick={() =>
        navigator.geolocation.getCurrentPosition(
          ({ coords: { latitude, longitude } }) => {
            setCenter([latitude, longitude]);
            setZoom(12);
            map.current.panTo({
              lat: latitude,
              lng: longitude,
            });
          }
        )
      }
      alt="locate me"
    />
  );
};

export default LocateMeIcon;
