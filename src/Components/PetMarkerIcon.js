const PetMarkerIcon = ({ marker }) => {
  const markerStyle = {
    height: "35px",
    transform: "translate(-50%, -50%)",
    zIndex: 2,
  };

  return (
    <img
      style={markerStyle}
      src={getPetIcon(marker.properties.type)}
      alt={`${marker.properties.type} icon`}
    />
  );
};
const getPetIcon = (pet) => {
  if (pet === "gato") return "/assets/cat.svg";
  if (pet === "perro") return "/assets/dog.svg";
  return "/assets/pet.svg";
};
export default PetMarkerIcon;
