import { Alert, Badge } from "react-bootstrap";

const AlertDismissible = ({ showAlert, setShowAlert }) => {
  if (showAlert) {
    return (
      <Alert
        style={{
          position: "absolute",
          top: "1rem",
          left: "1rem",
          zIndex: "100",
        }}
        variant="warning"
        onClose={() => setShowAlert(false)}
        dismissible
      >
        <p>
          Si quieres ver mascotas en tu zona, activa tu ubicacion en el
          navegador!
        </p>
      </Alert>
    );
  }
  return (
    <div style={{ position: "relative" }}>
      <Badge
        style={{
          position: "absolute",
          top: "0.8rem",
          left: "1.5rem",
          zIndex: "100",
          cursor: "pointer",
        }}
        bg="dark"
        onClick={() => setShowAlert(true)}
      >
        i
      </Badge>
    </div>
  );
};

export default AlertDismissible;
