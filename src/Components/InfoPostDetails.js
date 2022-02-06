import React from "react";
import { Col, Button } from "react-bootstrap";
import { BsPencilFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function InfoPostDetails({ data }) {
  const navigate = useNavigate();
  const redirect = () => {
    navigate("/edit");
  };
  return (
    <>
      <Col className="jumbotron">
        <h2>
          {data.title}
          <Button variant="light" onSubmit={redirect}>
            <BsPencilFill className="mx-2 d-inline-block  align-baseline" />
          </Button>
        </h2>
        <h6>
          {data.tags &&
            data.tags.map((d) => (
              <span className="badge rounded-pill bg-secondary m-1" key={d}>
                {d}
              </span>
            ))}
        </h6>
        <h5> {data.type} </h5>

        <div className="d-inline">
          <span>
            <strong> Nombre: </strong>
            {data.characteristics["name"]}
          </span>
        </div>
        <div className="d-inline px-4">
          <span>
            <strong> Color: </strong>
            {data.characteristics["color"]}
          </span>
        </div>
        <div className="d-inline">
          <span>
            <strong> Sexo: </strong>
            {data.characteristics["sex"] === "M" ? "Macho" : "Hembra"}
          </span>
        </div>
        <div className="d-inline px-4">
          <span>
            <strong> Tamaño: </strong>
            {data.characteristics["size"]}
          </span>
        </div>
        <p>
          <strong> Fecha de publicacion: </strong>{" "}
          {new Date(data.createdAt).toLocaleDateString()}
        </p>
        <hr className="my-4" />
        <h4> Descripcion </h4>
        <p className="text-secondary">{data.description}</p>
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
