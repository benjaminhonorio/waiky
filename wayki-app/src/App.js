import { Routes, Route } from 'react-router-dom';
import AppNavBar from './Components/AppNavBar';
import AppFooter from './Components/AppFooter';
import Home from './Pages/Home';
import DetailPost from './Pages/DetailPost';
import EditView from "./Pages/EditView";
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <>
      <AppNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<EditView />} />
        <Route path="/detailpost" element={<DetailPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
      <AppFooter />
    </>
  );
}

export default App;
