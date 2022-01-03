import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import axios from "axios";
import Map from "../Components/Map";
import credentials from "../Components/credentials";
import Posts from "../Components/Posts";
import Hero from "../Components/Hero";
import About from "../Components/About";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getPosts = () => {
    // La url luego se reemplazaria por el endpoint de nuestra API para los posts
    axios.get("http://localhost:3001/posts").then((response) => {
      setPosts(response.data);
      setFilteredPosts(response.data);
    });
  };

  useEffect(getPosts, []);

  // Filtro basico para los posts mostrados
  const handleSearch = (event) => {
    console.log(event);
    event.preventDefault();
    const searchInput = event.target.value;
    setSearchValue(searchInput);
    if (searchInput) {
      let lookupText = new RegExp(searchInput, "i");
      let justFilteredPosts = posts.filter((post) =>
        lookupText.test(post.titulo)
      );
      filteredPosts.length !== 0
        ? setFilteredPosts(justFilteredPosts)
        : setFilteredPosts([]);
    } else {
      setFilteredPosts(posts);
    }
  };

  // TODO: refactor later and finish search handling with form
  // at the momment just prevents refresh
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // TODO: finish search handling on button click
  // const handleClick = (event) => {
  //   event.preventDefault();
  //   setFilteredPosts(filteredPosts);
  // };

  return (
    <Container className="text-center" fluid>
      <Row>
        <Hero
          searchValue={searchValue}
          handleSearch={handleSearch}
          handleSubmit={handleSubmit}
          // handleClick={handleClick}
        />
        <Col className="col-12 col-md-6">
          <Map
          // googleMapURL={credentials.mapsKey}
          // containerElement={<div style={{ height: "94vh" }} />}
          // mapElement={<div style={{ height: "100%" }} />}
          // loadingElement={<div style={{ height: "100%" }} />}
          />
        </Col>
      </Row>
      <Posts posts={filteredPosts} />
      <About />
    </Container>
  );
}
