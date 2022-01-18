import React from "react";
import { Col, Button } from "react-bootstrap";

export default function InfoPostDetails({ data }) {
  return (
    <>
      <Col className="jumbotron">
        <h2>{data.titulo}</h2>
        <h4> {data.tipo_mascota} </h4>
        <div className="d-inline">
          <span>
            <strong> Sexo: </strong>
            {data.caracteristicas["sexo"] === "M" ? "Macho" : "Hembra"}
          </span>
        </div>
        <div className="d-inline px-4">
          <span>
            <strong> Color: </strong>
            {data.caracteristicas["color"]}
          </span>
        </div>
        <p>
          <strong> Fecha de publicacion: </strong>{" "}
          {new Date(data.createdAt).toLocaleDateString()}
        </p>
        <hr className="my-4" />
        <h4> Descripcion </h4>
        <p className="text-secondary">{data.descripcion}</p>
        <hr className="my-4" />
        <p>
          <Button variant="primary" size="lg">
            Contactarse ahora
          </Button>
        </p>
      </Col>
    </>
  );
}
