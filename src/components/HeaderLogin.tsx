import { NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function HeaderLogin() {
    return (
        <div className="header">
            <Logo />
            <div className="header__links">
                <NavLink style={({ isActive }) => ({
                    color: isActive ? "var(--primary-color)" : "var(--secondary-color)",
                    fontWeight: isActive ? "600" : "400",
                    borderBottom: isActive ? "2px solid var(--primary-color)" : "none",
                })} to="/login" className="header__links-link">ACCESO</NavLink> |
                <NavLink style={({ isActive }) => ({
                    color: isActive ? "var(--primary-color)" : "var(--secondary-color)",
                    fontWeight: isActive ? "600" : "400",
                    borderBottom: isActive ? "2px solid var(--primary-color)" : "none",
                })} to="/signup" className="header__links-link">REGISTRO</NavLink> 
            </div> 
        </div>
    )   
}