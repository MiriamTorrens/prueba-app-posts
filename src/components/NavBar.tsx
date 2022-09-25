import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="NavBar">
            <p className="NavBar__logo">Navbar</p>
            <div className="NavBar__links">
                <NavLink style={({ isActive }) => ({
                    color: isActive ? "cadetblue" : "black",
                    })} to="/posts" className="NavBar__links-link" >Publicaciones</NavLink> |
                <NavLink style={({ isActive }) => ({
                    color: isActive ? "cadetblue" : "black",
                })} to="/signup" className="NavBar__links-link">Registrarse</NavLink> |
                <NavLink style={({ isActive }) => ({
                    color: isActive ? "cadetblue" : "black",
                })} to="/login" className="NavBar__links-link">Iniciar Sesión</NavLink> 
            </div>
        </div>
    )
}