import { useState } from "react";
import { toast } from "react-toastify";
import HeaderLogin from "../components/HeaderLogin";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function Login() {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [show, setShow] = useState<string>("password");

  const handleShow = () => {
    show === "password" ? setShow("text") : setShow("password");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user")!);
      if (user.name === name && user.password === password) {
        localStorage.setItem("authorized", "true");
      } else {
        toast.error("Usuario o contraseña incorrecto", {
          position: toast.POSITION.TOP_CENTER,
          progressClassName: "progress",
        });
      }
    } else {
      toast.error("El usuario no existe", {
        position: toast.POSITION.TOP_CENTER,
        progressClassName: "progress",
      });
    }
  };
  return (
    <div className="login">
      <div className="login__wraper">
        <HeaderLogin />
        <p className="login__welcome">
          <b>¡Bienvenido/a de nuevo!</b>
          <br />
          Introduce tus datos de acceso
        </p>
        <form onSubmit={(e) => handleSubmit(e)} className="login__form">
          <input
            type="text"
            placeholder="Introduce tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="login__form-input login__form-input-user"
          />
          <br />
          <div className="login__form-input-visible">
            <input
              type={show}
              placeholder="Introduce tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login__form-input login__form-input-password"
            />
            {show === "password" ? (
              <AiFillEye
                size={18}
                color={"var(--secondary-color)"}
                onClick={handleShow}
              />
            ) : (
              <AiFillEyeInvisible
                size={18}
                color={"var(--secondary-color)"}
                onClick={handleShow}
              />
            )}
          </div>
          <br />
          <input
            type="submit"
            value="Iniciar sesión"
            className="login__form-submit"
          />
        </form>
      </div>
    </div>
  );
}
