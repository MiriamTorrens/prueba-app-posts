import { useState } from "react";
import { toast } from 'react-toastify';
import HeaderLogin from "../components/HeaderLogin";

export default function Signup() {
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [repeatPassword, setRepeatPassword] = useState<string>("");
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = {
            name:  name,
            password: password
        }
        if (password === repeatPassword) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
             toast.error('La contraseña no coincide', {
                position: toast.POSITION.TOP_CENTER,
                progressClassName: "progress"
            });
        }
    }
    
    return (
        <div className="login">
            <div className="login__wraper">
                <HeaderLogin />
                <p className="login__welcome">¡Bienvenido/a!, rellena el formulario para registrarte</p>
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
                    <input
                        type="password"
                        placeholder="Repite tu contraseña"
                        value={repeatPassword}
                        onChange={e => setRepeatPassword(e.target.value)}
                        className="login__form-input login__form-input-password"/><br />
                    <input type="submit" value="Registrarse" className="login__form-submit"/>
                </form>
            </div>
        </div>
    )
}