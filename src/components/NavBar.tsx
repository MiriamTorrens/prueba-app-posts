
import { TbLogout } from "react-icons/tb";
import Logo from "./Logo";


export default function NavBar() {

    return (
        <div className="navbar">
            <Logo />
            <div className="navbar__logout">
                <p className="navbar__logout-text">Cerrar sesión</p>
                <TbLogout size={30} color={"var(--secondary-color)"} className="navbar__logout-icon" />
            </div>
        </div>
    )
}