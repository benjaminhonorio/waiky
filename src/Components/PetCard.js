import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { formatDistance } from "date-fns";
import { es } from "date-fns/locale";

export default function PetCard({ id, fotos, titulo, fecha }) {
  return (
    <Col key={id} className="py-2">
      <div
        className="d-flex flex-row flex-md-column"
        style={{
          wordWrap: "break-word",
          backgroundColor: "#fff",
          backgroundClip: "border-box",
          border: "1px solid rgba(0,0,0,.125)",
          borderRadius: "0.25rem",
        }}
      >
        <Card.Img
          style={{
            minWidth: "50%",
            height: "300px",
            objectFit: "cover",
          }}
          variant="top"
          src={fotos[0]}
        />
        <Card.Body className="d-flex flex-column justify-content-center">
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>
            Hace{" "}
            {fecha
              ? formatDistance(new Date(), new Date(fecha), {
                  locale: es,
                })
              : ""}
          </Card.Text>
          <Button as={Link} to={`/post/${id}`} variant="primary">
            Contactarse
          </Button>
        </Card.Body>
      </div>
    </Col>
  );
}
