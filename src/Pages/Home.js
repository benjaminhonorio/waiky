import { Container, Row } from "react-bootstrap";

import Posts from "../Components/Posts";
import Hero from "../Components/Hero";
import About from "../Components/About";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Home({ posts }) {
  const location = useLocation();
  console.log(location);
  // const [posts, setPosts] = useState([]);
  // const [filteredPosts, setFilteredPosts] = useState([]);
  // const [searchValue, setSearchValue] = useState("");

  // const handleSearch = (event) => {
  //   event.preventDefault();
  //   const searchInput = event.target.value;
  //   setSearchValue(searchInput);
  //   if (searchInput) {
  //     let lookupText = new RegExp(searchInput, "i");
  //     let justFilteredPosts = posts.filter((post) =>
  //       lookupText.test(post.title)
  //     );
  //     filteredPosts.length !== 0
  //       ? setFilteredPosts(justFilteredPosts)
  //       : setFilteredPosts([]);
  //   } else {
  //     setFilteredPosts(posts);
  //   }
  // };

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
      <Posts posts={posts} />
      <About />
    </Container>
  );
}
