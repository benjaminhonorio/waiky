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
import PrivateRoute from "./Pages/PrivateRoute";
import RedirectUser from "./Pages/RedirectUser";
import AuthProvider from "./auth/AuthProvider";
import useAuth from "./auth/useAuth";

function App() {
  const [dataPost, setDataPost] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_API_URL}/api/v1/posts`)
      .then((response) => setDataPost(response.data.data));
  }, []);

  return (
    <>
      <AuthProvider>
        <AppNavBar />
        <Routes>
          <Route path="/" element={<Home posts={dataPost} />} />
          <Route path="/edit" element={<EditView />} />
          <Route
            path="/post/:id"
            element={dataPost.length && <DetailPost dataPost={dataPost} />}
          />
          <Route
            path="/login"
            element={
              <RedirectUser>
                <Login />
              </RedirectUser>
            }
          />
          <Route
            path="/signup"
            element={
              <RedirectUser>
                <SignUp />
              </RedirectUser>
            }
          />
          <Route path="/map" element={<MapView posts={dataPost} />} />
          <Route path="/password_recovery" element={<PasswordRecovery />} />
          <Route path="/password_reset" element={<PasswordReset />} />
          <Route
            exact
            path="/profile"
            element={
              <PrivateRoute>
                <ProfileView />
              </PrivateRoute>
            }
          />
        </Routes>
        <AppFooter />
      </AuthProvider>
    </>
  );
}

export default App;
