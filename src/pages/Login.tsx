import { useState } from "react";
import { toast } from 'react-toastify';
import HeaderLogin from "../components/HeaderLogin";

export default function Login() {
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (localStorage.getItem("user")) {
            const user = JSON.parse(localStorage.getItem('user')!);
            if (user.name === name && user.password === password) {
                localStorage.setItem("authorized", "true");
            } else {
                toast.error('Usuario o contraseña incorrecto', {
                position: toast.POSITION.TOP_CENTER,
                progressClassName: "progress"
                });
            }
        } else {
            toast.error('El usuario no existe', {
                position: toast.POSITION.TOP_CENTER,
                progressClassName: "progress"
                });
        } 
    }
    return (
        <div className="login">
            <div className="login__wraper">
                <HeaderLogin />
                <p className="login__welcome">¡Bienvenido/a de nuevo!</p>
                <form onSubmit={(e) => handleSubmit(e)} className="login__form">
                    <input type="text"
                        placeholder="Introduce tu nombre"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="login__form-input login__form-input-user"/><br />
                    <input
                        type="password"
                        placeholder="Introduce tu contraseña"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="login__form-input login__form-input-password"/><br />
                    <input type="submit" value="Iniciar sesión" className="login__form-submit" />
                </form>
            </div>
        </div>
    )
}