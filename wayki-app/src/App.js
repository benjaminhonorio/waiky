import { useState, useEffect } from 'react';

import axios from 'axios';

import { Routes, Route } from 'react-router-dom';
import AppNavBar from './Components/AppNavBar';
import AppFooter from './Components/AppFooter';
import Home from './Pages/Home';
import DetailPost from './Pages/DetailPost';
import EditView from './Pages/EditView';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import MapView from './Pages/MapView';

function App() {
  const [dataPost, setDataPost] = useState([]);
  const [dataUsers, setDataUsers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/posts')
      .then((response) => setDataPost(response.data));
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:3001/users')
      .then((response) => setDataUsers(response.data));
  }, []);

  return (
    <>
      <AppNavBar />
      <Routes>
        <Route path="/" element={<Home posts={dataPost} />}></Route>
        <Route path="/edit" element={<EditView />}></Route>
        <Route
          path="/post/:id"
          element={<DetailPost dataPost={dataPost} />}
        ></Route>
        <Route path="/login" element={<Login dataUsers={dataUsers} />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/map" element={<MapView />}></Route>
      </Routes>
      <AppFooter />
    </>
  );
}

export default App;
