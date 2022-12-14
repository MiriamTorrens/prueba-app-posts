import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Posts from "./pages/Posts";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./app/PrivateRoute";
import { auth, signup } from "./features/authSlice";
import { useAppSelector } from "./app/hooks";
import { useEffect } from "react";

import "./styles/App.scss";
import NotFound from "./components/NotFound";

function App() {
  const authenticated = useAppSelector(auth);
  const register = useAppSelector(signup);
  const navigate = useNavigate();

  useEffect(() => {
    authenticated
      ? navigate("/", { replace: true })
      : authenticated === false
      ? navigate("/login", { replace: true })
      : navigate("/", { replace: true });
    register === true && navigate("/login", { replace: true });
  }, [authenticated, register]);

  return (
    <>
      <Routes>
        <Route path="/" element={<PrivateRoute component={Posts} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div id="toast">
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
