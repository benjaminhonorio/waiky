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
import NotFound from "./Pages/NotFound";
import EmailRecovery from "./Pages/EmailRecovery";
import Profile from "./Pages/Profile";
import PasswordChanged from "./Pages/PasswordChanged";
import PrivateRoute from "./Pages/PrivateRoute";
import RedirectUser from "./Pages/RedirectUser";
import AuthProvider from "./auth/AuthProvider";
import PublicationView from "./Pages/PublicationView";

function App() {
  const [dataPost, setDataPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_API_URL}/api/v1/posts?limit=100`)
      .then((response) => {
        setDataPost(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(true);
      });
  }, []);

  return (
    <>
      <AuthProvider>
        <AppNavBar />
        <Routes>
          <Route
            path="/"
            element={<Home posts={dataPost} setPosts={setDataPost} />}
          />
          <Route
            path="/edit"
            element={
              <PrivateRoute>
                <EditView posts={dataPost} setDataPost={setDataPost} />
              </PrivateRoute>
            }
          />
          <Route
            path="/post/:id"
            element={
              dataPost.length && (
                <DetailPost dataPost={dataPost} loading={loading} />
              )
            }
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
          <Route path="/map" element={<MapView />} />
          <Route path="/password_recovery" element={<PasswordRecovery />} />
          <Route path="/password_reset/:id" element={<PasswordReset />} />
          <Route
            path="/password_changed"
            element={
              <RedirectUser>
                <PasswordChanged />
              </RedirectUser>
            }
          />
          <Route
            path="/email_recovery"
            element={
              <RedirectUser>
                <EmailRecovery />
              </RedirectUser>
            }
          />
          <Route
            exact
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/myposts"
            element={
              <PrivateRoute>
                <PublicationView />
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
