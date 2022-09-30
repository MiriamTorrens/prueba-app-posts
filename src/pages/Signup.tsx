import { useState } from "react";
import { toast } from "react-toastify";
import HeaderLogin from "../components/HeaderLogin";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function Signup() {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [show, setShow] = useState<string>("password");

  const handleShow = () => {
    show === "password" ? setShow("text") : setShow("password");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = {
      name: name,
      password: password,
    };
    if (password === repeatPassword) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      toast.error("La contraseña no coincide", {
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
          <b>¡Bienvenido/a!</b>
          <br />
          Regístrate para acceder
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
          <div className="login__form-input-visible">
            <input
              type={show}
              placeholder="Introduce tu contraseña"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
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
            value="Registrarse"
            className="login__form-submit"
          />
        </form>
      </div>
    </div>
  );
}
