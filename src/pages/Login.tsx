import { useState } from "react";
import { login } from "../features/userSlice";
import { UserType } from "../types";
import HeaderLogin from "../components/HeaderLogin";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useAppDispatch } from "../app/hooks";

export default function Login() {
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [show, setShow] = useState<string>("password");

  const user: UserType = {
    name: name,
    password: password,
  };

  const handleShow = () => {
    show === "password" ? setShow("text") : setShow("password");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login(user));
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
            required
          />
          <br />
          <div className="login__form-input-visible">
            <input
              type={show}
              placeholder="Introduce tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login__form-input login__form-input-password"
              required
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
