import React from "react";
import { Col, Button } from "react-bootstrap";
import { BsPencilFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import useAuth from "../auth/useAuth";

export default function InfoPostDetails({ data }) {
  const navigate = useNavigate();
  const auth = useAuth();
  const url = `https://api.whatsapp.com/send?phone=${data.user?.number}&text=Hola,%20quisiera%20conocer%20m%C3%A1s%20detalles%20acerca%20del%20post%20que%20publicaste%20en%20Wayki%20App.`;

  const handleRedirect = () => {
    navigate("/edit");
  };

  return (
    <>
      <Col className="jumbotron">
        <h2>
          {data.title}
          {auth.userLogin?.id === data.user?.id && (
            <Button variant="light" onClick={handleRedirect}>
              <BsPencilFill className="mx-2 d-inline-block align-baseline" />
            </Button>
          )}
        </h2>
        <h5> Post creado por: {data.user?.username} </h5>
        <h5> {data.type} </h5>
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
          {data.user?.number ? (
            <Button variant="primary" size="lg" href={url}>
              Contactarse ahora Via Whatsapp
            </Button>
          ) : (
            <Button
              variant="primary"
              size="lg"
              href={`mailto:${data.user?.email}`}
            >
              Contactarse ahora Via Email
            </Button>
          )}
        </p>
      </Col>
    </>
  );
}
