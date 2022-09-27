import { TbLogout } from "react-icons/tb";
import Logo from '../assets/logotipo.png';

export default function NavBar() {

    return (
        <div className="Navbar">
            <img src={Logo} alt="logotipo" className="Header__logo Navbar__logo"></img>
            <div className="Navbar__logout">
                <p className="Navbar__logout-text">Cerrar sesión</p>
                <TbLogout size={25} color={"var(--tertiary-color)"} className="Navbar__logout-icon" />
            </div>
        </div>
    )
}