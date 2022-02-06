import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const PostList = ({ posts }) => {
  return posts.length ? (
    <>
      <h5>
        Se encontraron {posts.length && `${posts.length} mascotas`} en esta zona
      </h5>
      {posts.map((post) => (
        <Card key={post.id} style={{ flexDirection: "row" }}>
          <Col lg={6}>
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
          <Col lg={6}>
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
