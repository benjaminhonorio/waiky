import React from 'react';
import { Col, Button } from 'react-bootstrap';

export default function InfoPostDetails({ dataPost }) {
  return (
    <>
      <Col className="jumbotron">
        <h1 className="display-4">{dataPost.titulo}</h1>
        <h4> {dataPost.tipo_mascota} </h4>
        <div className="d-inline">
          <span>
            <strong> Sexo: </strong>
          </span>
        </div>
        <div className="d-inline px-4">
          <span>
            <strong> Color: </strong>
            {/* {dataPost.caracteristicas['color']} */}
          </span>
        </div>
        <p>
          <strong> Fecha de publicacion: </strong> {dataPost.fecha}
        </p>
        <hr className="my-4" />
        <h4> Descripcion </h4>
        <p className="text-secondary">{dataPost.descripcion}</p>
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
