import { TbLogout } from "react-icons/tb";
import Logo from "../assets/logo.png";

export default function NavBar() {
  return (
    <div className="navbar">
      <img
        src={Logo}
        alt="logotipo"
        className="header__logo navbar__logo"
      ></img>
      <div className="navbar__logout">
        <p className="navbar__logout-text">Cerrar sesión</p>
        <TbLogout
          size={25}
          color={"var(--tertiary-color)"}
          className="navbar__logout-icon"
        />
      </div>
    </div>
  );
}
