import { Container, Row } from "react-bootstrap";

import Posts from "../Components/Posts";
import Hero from "../Components/Hero";
import About from "../Components/About";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Home({ posts, setPosts }) {
  const location = useLocation();
  useEffect(() => {
    if (!(location?.hash === "#about")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <Container className="text-center" fluid>
      <Row>
        <Hero />
      </Row>
      <Posts posts={posts} setPosts={setPosts} />
      <About />
    </Container>
  );
}
