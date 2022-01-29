import { Container, Row } from "react-bootstrap";

import Posts from "../Components/Posts";
import Hero from "../Components/Hero";
import About from "../Components/About";

export default function Home({ posts }) {
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
