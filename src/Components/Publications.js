import React from "react";
import { Row, Card, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { formatDistance } from "date-fns";
import { es } from "date-fns/locale";
import { BsPencilFill } from "react-icons/bs";

export default function Publications({ id, title, date, photos }) {
  // const navigate = useNavigate();

  // const handleRedirect = () => {
  //   navigate("/edit");
  // };

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
          src={photos[0]}
        />
        <Card.Body className="d-flex flex-column justify-content-center">
          <Row>
            <Col>
              <Card.Title>{title}</Card.Title>{" "}
            </Col>
            {/* <Col>
              <Button variant="light" onClick={handleRedirect}>
                <BsPencilFill className="mx-2 d-inline-block align-baseline" />
              </Button>
            </Col> */}
          </Row>
          <Card.Text>
            Hace{" "}
            {date
              ? formatDistance(new Date(), new Date(date), {
                  locale: es,
                })
              : ""}
          </Card.Text>
          <Button as={Link} to={`/post/${id}`} variant="primary" id="see-post">
            Ver
          </Button>
        </Card.Body>
      </div>
    </Col>
  );
}
