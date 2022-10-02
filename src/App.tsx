import { Routes, Route, HashRouter } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Posts from "./pages/Posts";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./app/PrivateRoute";
import "./styles/App.scss";
import NotFound from "./components/NotFound";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute component={Posts} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </HashRouter>
  );
}

export default App;
