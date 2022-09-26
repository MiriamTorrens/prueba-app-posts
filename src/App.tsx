import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Posts from './pages/Posts';
import { ToastContainer }  from 'react-toastify';
import './styles/App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/posts" element={<Posts />} />
          <Route path="/login" element={<Login />} />
          <Route
              path="/signup"
              element={<Signup />}
          />
      </Routes>
      <ToastContainer/>
    </>
  );
}

export default App;
