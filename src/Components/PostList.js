import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const PostList = ({ posts }) => {
  return posts.length ? (
    <>
      <h5>
        Se encontró{" "}
        {posts.length &&
          `${posts.length} mascota${
            posts.length === 1 ? "" : "s"
          } en esta zona`}
      </h5>
      {posts.map((post) => (
        <Card
          md={6}
          key={post.id}
          className="d-flex flex-row justify-content-center"
        >
          <Col md={4} lg={6}>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>
                {post.description.length > 80
                  ? `${post.description.slice(0, 80)}...`
                  : ""}
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Button variant="primary" as={Link} to={`/post/${post.id}`}>
                Más información
              </Button>
            </Card.Body>
          </Col>
          <Col md={4} lg={6}>
            <Card.Img variant="top" src={post.photos[post.mainPhoto]} />
          </Col>
        </Card>
      ))}
    </>
  ) : (
    <div>No hay mascotas en esta zona</div>
  );
};

export default PostList;
