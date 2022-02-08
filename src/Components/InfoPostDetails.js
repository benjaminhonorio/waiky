import React, { useState } from "react";
import axios from "axios";
import config from "../config";
import { Col, Button, Alert } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import useAuth from "../auth/useAuth";
import { useParams, useNavigate } from "react-router-dom";
import { getToken } from "../user/session";

export default function InfoPostDetails({ data }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);
  const [deletePost, setDeletePost] = useState(false);
  const auth = useAuth();
  const url = `https://api.whatsapp.com/send?phone=${data.user?.number}&text=Hola,%20quisiera%20conocer%20m%C3%A1s%20detalles%20acerca%20del%20post%20que%20publicaste%20en%20Wayki%20App.`;
  const token = getToken();

  const handleDeletePost = () => {
    axios
      .delete(`${config.BASE_API_URL}/api/v1/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        if (data) {
          setDeletePost(true);
          setAlert(false);
          navigate("/myposts");
        }
      });
  };

  return (
    <>
      {alert && (
        <Alert
          variant="danger"
          onClose={() => {
            setAlert(false);
          }}
          dismissible
        >
          <p className="d-inline">Estás seguro de querer eliminar éste post?</p>
          <Button
            variant="danger"
            onClick={handleDeletePost}
            className="mx-3 d-inline"
          >
            Si
          </Button>
          <Button
            variant="success"
            onClick={() => setAlert(false)}
            className="mx-2 d-inline"
          >
            No
          </Button>
        </Alert>
      )}

      {deletePost && (
        <Alert
          variant="success"
          onClose={() => {
            setDeletePost(false);
          }}
          dismissible
        >
          <p>Éste post ha sido eliminado satisfactoriamente!</p>
        </Alert>
      )}
      <Col className="jumbotron">
        <h6>Creado por: {data.user?.username} </h6>
        <h2>
          {data.title}
          {auth.userLogin?.id === data.user?.id && (
            <Button
              size="sm"
              className="mx-2"
              variant="outline-danger"
              onClick={() => setAlert(true)}
            >
              <BsFillTrashFill className="mx-2d-inline-block align-baseline" />
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
          <strong> Fecha de publicacion: </strong>
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
