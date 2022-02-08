import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import PetCard from "./PetCard";

export default function Posts({ posts, setPosts }) {
  const [queryParams, setQueryParams] = useState({
    type: "",
    limit: "10",
    title: "",
  });
  const [shallowSearch, setShallowSearch] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  const handleShallowSearch = (e) => {
    e.preventDefault();
    const searchInput = e.target.value;
    setShallowSearch(searchInput);
    if (searchInput) {
      let lookupText = new RegExp(searchInput, "i");
      let justFilteredPosts = posts.filter((post) =>
        lookupText.test(post.title)
      );
      setFilteredPosts(justFilteredPosts);
    } else {
      setFilteredPosts(posts);
    }
  };

  const handleInputChange = ({ target }) => {
    setQueryParams((state) => ({ ...state, [target.name]: target.value }));
  };

  useEffect(() => {
    let params = Object.entries(queryParams).filter(([k, v]) => v !== "");

    const fetchData = async () => {
      if (params.length) {
        const queryString = params
          .map((arr) => `${arr[0]}=${arr[1]}`)
          .reduce((k, v) => {
            if (k !== "") {
              let result = `${k}&${v}`;
              return result;
            } else {
              return `${v}`;
            }
          }, "");
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_BASE_API_URL}/api/v1/posts?${queryString}`
          );
          setPosts(response.data.data);
          setFilteredPosts(response.data.data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchData();
  }, [queryParams]);

  return (
    <Row className="row d-flex justify-content-center py-3">
      <h2 className="p-4" id="publications">
        Publicaciones
      </h2>
      <p>
        Estas son las publicaciones más recientes de la comunidad. ¡Ayudemos a
        encontrarlos!
      </p>
      <Row sm={3} className="row d-flex gap-4 justify-content-center py-3 g">
        <Col xs="10" lg="2">
          <Form.Select
            size="md"
            name="type"
            onChange={handleInputChange}
            value={queryParams.type}
          >
            <option value="">Todos</option>
            <option value="perro">perro</option>
            <option value="gato">gato</option>
          </Form.Select>
        </Col>
        <Col xs="10" lg="4">
          <Form.Control
            size="md"
            name="title"
            type="text"
            placeholder="Buscar por titulo de publicación"
            onChange={handleShallowSearch}
            value={shallowSearch}
          />
        </Col>
        <Col xs lg="3">
          <Form.Check
            onChange={handleInputChange}
            inline
            type="radio"
            name="limit"
            id="limit-10"
            label="10"
            value="10"
            checked={queryParams.limit === "10"}
          />
          <Form.Check
            onChange={handleInputChange}
            inline
            type="radio"
            name="limit"
            id="limit-20"
            label="20"
            value="20"
            checked={queryParams.limit === "20"}
          />
          <Form.Check
            onChange={handleInputChange}
            inline
            type="radio"
            name="limit"
            id="limit-30"
            label="30"
            value="30"
            checked={queryParams.limit === "30"}
          />
          <Form.Check
            inline
            type="radio"
            name="limit"
            id="limit-50"
            label="50"
          />
        </Col>
      </Row>
      {filteredPosts.length ? (
        <Row
          className="d-flex justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4"
          style={{ gap: 10 }}
        >
          {filteredPosts.map(({ id, title, createdAt: date, photos }) => {
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
