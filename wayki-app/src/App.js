import { Routes, Route } from "react-router-dom";
import AppNavBar from "./Components/AppNavBar";
import AppFooter from "./Components/AppFooter";
import Home from "./Pages/Home";

import EditView from "./Pages/EditView";

function App() {
  return (
    <>
      <AppNavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/edit" element={<EditView />} />
      </Routes>
      <AppFooter />
    </>
  );
}

export default App;
