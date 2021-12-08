import { Routes, Route } from "react-router-dom";
import AppNavBar from "./Components/AppNavBar";
import AppFooter from "./Components/AppFooter";
import Home from "./Pages/Home";
import DetailPost from "./Pages/DetailPost";
import EditView from "./Pages/EditView";
import MapView from "./Pages/MapView";

function App() {
  return (
    <>
      <AppNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<EditView />} />
        <Route path="/detailpost" element={<DetailPost />} />
        <Route path="/mapview" element={<MapView />} />
      </Routes>
      <AppFooter />
    </>
  );
}

export default App;
