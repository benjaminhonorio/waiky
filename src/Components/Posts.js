import { Row } from "react-bootstrap";
import PetCard from "./PetCard";

export default function Publicaciones({ posts }) {
  return (
    <Row className="row d-flex justify-content-center py-3">
      <h2 className="p-4">Publicaciones</h2>
      {posts.length ? (
        <Row
          className="d-flex justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4"
          style={{ gap: 10 }}
        >
          {posts.map(({ id, title, createdAt: date, photos }) => {
            return (
              <PetCard
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
    </Row>
  );
}
