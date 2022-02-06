import React, { useEffect, useState } from "react";
import { Row, Container } from "react-bootstrap";
import axios from "axios";
import Publications from "../Components/Publications";
import useAuth from "../auth/useAuth";

export default function Publicaciones() {
  const auth = useAuth();
  const [postById, setPostById] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_API_URL}/api/v1/posts/myposts/${auth.userLogin.username}`
      )
      .then((response) => {
        setPostById(response.data.data);
      });
  }, []);

  return (
    <Container className="my-5">
      <h2 className="pt-4">Mis Publicaciones</h2>
      {postById.length ? (
        <Row className="align-items-center my-4 sm-8 ">
          {postById.map(({ id, title, createdAt: date, photos }) => {
            return (
              <Publications
                key={id}
                id={id}
                title={title}
                photos={photos}
                date={date}
              />
            );
          })}
        </Row>
      ) : (
        <div>No se encontraron resultados</div>
      )}
    </Container>
  );
}
