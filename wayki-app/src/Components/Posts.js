import { Row } from "react-bootstrap";
import PetCard from "./PetCard";

export default function Publicaciones({ posts }) {
  return (
    <Row className="row d-flex justify-content-center py-3">
      <h2 className="pt-4">Publicaciones</h2>
      {posts.length ? (
        <Row className="d-flex justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
          {posts.map(({ id, titulo, createdAt: fecha, fotos }) => {
            return (
              <PetCard
                key={id}
                id={id}
                titulo={titulo}
                fotos={fotos}
                fecha={fecha}
              />
            );
          })}
        </Row>
      ) : (
        <div>No se encontraron resultados</div>
      )}
    </Row>
  );
}
