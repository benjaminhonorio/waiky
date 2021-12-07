import { Row, Card, Col, Button } from "react-bootstrap";
import pic from "../dog.jpg";

export default function Home() {
  const posts = Array.from(Array(12).keys());
  return (
    <div className="text-center container-fluid">
      <div className="row">
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
          <h1 className="display-1">Wayki</h1>
          <h2 className="display-6">Search and find missing pets</h2>
          <form className="w-75">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search by name, location, color, etc"
                aria-label="Search bar"
                aria-describedby="basic-addon2"
              />
              <button className="btn btn-outline-secondary" type="button">
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="col-12 col-md-6 vh-100">
          <iframe
            title="map"
            width="100%"
            height="94%"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Lima&t=&z=13&ie=UTF8&iwloc=&output=embed"
            scrolling="no"
          ></iframe>
        </div>
      </div>
      <Row className="row d-flex justify-content-center py-3">
        <h2>All missing pets</h2>
        <Row className="d-flex justify-content-center row-cols-auto">
          {posts.map(function (post) {
            return (
              <Col className="py-2">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={pic} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Row>
      <Row className="container mx-auto py-5">
        <Col>
          <h2>About Wayki</h2>
          <div className="row">
            <div className="col">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              vitae quam a lacus blandit interdum ac congue nulla. Curabitur
              luctus laoreet congue. Integer at nisi malesuada, lacinia massa a,
              luctus ligula. In et fermentum nibh. Aliquam erat volutpat.
              Pellentesque euismod urna at facilisis porta. Praesent a laoreet
              erat. Ut id volutpat arcu. Quisque porttitor tortor mauris,
              posuere tempus elit semper vel. Duis elementum ac nibh sed
              vulputate. Morbi libero tortor, scelerisque non nunc ac,
              pellentesque varius metus. Praesent eu velit turpis. Pellentesque
              rutrum purus eget massa condimentum venenatis.
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
