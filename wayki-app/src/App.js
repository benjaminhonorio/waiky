import { Routes, Route } from 'react-router-dom';
import AppNavBar from './Components/AppNavBar';
import AppFooter from './Components/AppFooter';
import Home from './Pages/Home';
import DetailPost from './Pages/DetailPost';

import EditView from "./Pages/EditView";

function App() {
  return (
    <>
      <AppNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD

        <Route path="/edit" element={<EditView />} />
=======
        <Route path="/detailpost" element={<DetailPost />} />
>>>>>>> 234870a (Sketch Mockup DetailPost - Componente Gallery Incompleto)
      </Routes>
      <AppFooter />
    </>
  );
}

export default App;
