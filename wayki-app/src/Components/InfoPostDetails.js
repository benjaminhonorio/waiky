import React from 'react';
import { Col, Button } from 'react-bootstrap';

export default function InfoPostDetails() {
  return (
    <>
      <Col className="jumbotron">
        <h1 className="display-4">Mascota XXX</h1>
        <div class="d-inline">
          <span>
            <strong> Sexo: </strong> Lorem
          </span>
        </div>
        <div class="d-inline px-4">
          <span>
            <strong> Color: </strong> Lorem
          </span>
        </div>
        <p>
          <strong> Fecha de publicacion: </strong> XX/XX/XXXX
        </p>
        <hr className="my-4" />
        <h4> Descripcion </h4>
        <p className="text-secondary">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
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
