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
        <h6>Creado por: {data.user?.username} </h6>
        <h2>
          {data.title}
          {auth.userLogin?.id === data.user?.id && (
            <Button variant="light" onClick={handleRedirect}>
              <BsPencilFill className="mx-2 d-inline-block align-baseline" />
            </Button>
          )}
        </h2>
        <h6>
          {data.tags &&
            data.tags.map((d) => (
              <span className="badge rounded-pill bg-secondary m-1" key={d}>
                {d}
              </span>
            ))}
        </h6>
        <div className="d-flex gap-4 py-2">
          <span>
            <strong> Nombre: </strong>
            {data.characteristics["name"]}
          </span>
          <span>
            <strong> Color: </strong>
            {data.characteristics["color"]}
          </span>
          <span>
            <strong> Sexo: </strong>
            {data.characteristics["sex"] === "M" ? "Macho" : "Hembra"}
          </span>
          <span>
            <strong> Tamaño: </strong>
            {data.characteristics["size"]}
          </span>
          <span>
            <strong> Especie: </strong>
            {data.type}
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
