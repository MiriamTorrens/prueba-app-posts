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
        <div className="Login">
            <div className="Login__wraper">
                <HeaderLogin />
                <p className="Login__welcome"><b>¡Bienvenido/a!</b><br/>Regístrate para acceder</p>
                <form onSubmit={(e) => handleSubmit(e)} className="Login__form">
                    <input type="text"
                        placeholder="Introduce tu nombre"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="Login__form-input Login__form-input-user"/><br />
                    <input
                        type="password"
                        placeholder="Introduce tu contraseña"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="Login__form-input Login__form-input-password"/><br />
                    <input
                        type="password"
                        placeholder="Repite tu contraseña"
                        value={repeatPassword}
                        onChange={e => setRepeatPassword(e.target.value)}
                        className="Login__form-input Login__form-input-password"/><br />
                    <input type="submit" value="Registrarse" className="Login__form-submit"/>
                </form>
            </div>
        </div>
    )
}