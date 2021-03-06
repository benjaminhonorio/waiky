import { useState, useEffect } from "react";
import axios from "axios";

import { Routes, Route } from "react-router-dom";
import AppNavBar from "./Components/AppNavBar";
import AppFooter from "./Components/AppFooter";
import Home from "./Pages/Home";
import DetailPost from "./Pages/DetailPost";
import EditView from "./Pages/EditView";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import MapView from "./Pages/MapView";
import PasswordRecovery from "./Pages/PasswordRecovery";
import PasswordReset from "./Pages/PasswordReset";
import ProfileView from "./Pages/ProfileView";

function App() {
  const [dataPost, setDataPost] = useState([]);
  const [dataUsers, setDataUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_API_URL}/api/v1/posts`)
      .then((response) => setDataPost(response.data));
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_API_URL}/api/v1/users`)
      .then((response) => setDataUsers(response.data));
  }, []);

  return (
    <>
      <AppNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<EditView />} />
        <Route
          path="/post/:id"
          element={dataPost.length ? <DetailPost dataPost={dataPost} /> : null}
        />
        <Route path="/login" element={<Login dataUsers={dataUsers} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/map" element={<MapView />} />
        <Route path="/password_recovery" element={<PasswordRecovery />} />
        <Route path="/password_reset" element={<PasswordReset />} />
        <Route path="/profile" element={<ProfileView />} />
      </Routes>
      <AppFooter />
    </>
  );
}

export default App;
