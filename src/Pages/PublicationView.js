import React, { useEffect, useState } from "react";
import { Row, Container } from "react-bootstrap";
import axios from "axios";
import Publications from "../Components/Publications";
import useAuth from "../auth/useAuth";
import { getToken } from "../user/session";

export default function Publicaciones() {
  const auth = useAuth();
  const [postById, setPostById] = useState([]);
  const token = getToken();

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_API_URL}/api/v1/users/myposts/${auth.userLogin.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setPostById(response.data);
      });
  }, []);

  return (
    <Container className="my-5">
      <h2 className="pt-4">Mis Publicaciones</h2>
      {postById.length ? (
        <Row className="align-items-center my-4 sm-8" lg={12} md={12} xs={12}>
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
