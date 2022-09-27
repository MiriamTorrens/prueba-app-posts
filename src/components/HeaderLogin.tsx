import { NavLink } from "react-router-dom";
import Logo from "../assets/logotipo.png";

export default function HeaderLogin() {
    return (
        <div className="Header">
            <img src={Logo} alt="logotipo" className="Header__logo"/>
            <div className="Header__links">
                <NavLink style={({ isActive }) => ({
                    color: isActive ? "var(--primary-color)" : "var(--secondary-color)",
                    fontWeight: isActive ? "600" : "400",
                    borderBottom: isActive ? "2px solid var(--primary-color)" : "none",
                })} to="/login" className="Header__links-link">ACCESO</NavLink> |
                <NavLink style={({ isActive }) => ({
                    color: isActive ? "var(--primary-color)" : "var(--secondary-color)",
                    fontWeight: isActive ? "600" : "400",
                    borderBottom: isActive ? "2px solid var(--primary-color)" : "none",
                })} to="/signup" className="Header__links-link">REGISTRO</NavLink> 
            </div> 
        </div>
    )   
}