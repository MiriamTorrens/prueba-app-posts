import React from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Posts from './pages/Posts';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <NavBar />
        <div className='App__wraper'>
          <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/posts" element={<Posts />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/signup"
              element={<Signup />}
            />
          </Routes>
          </div>
    </div>
  );
}

export default App;
