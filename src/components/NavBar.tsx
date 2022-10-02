import { TbLogout } from "react-icons/tb";
import Logo from "../assets/logo.png";
import Favicon from "../assets/favicon.png";
import { logout } from "../features/userSlice";
import { useAppDispatch } from "../app/hooks";
import { PropsNavBar } from "../types";

export default function NavBar({ query, setQuery }: PropsNavBar) {
  const dispatch = useAppDispatch();
  const user = localStorage.getItem("user");

  return (
    <div className="navbar">
      <img src={Logo} alt="logotipo" className="header__logo navbar__logo" />
      <img
        src={Favicon}
        alt="logotipo"
        className="header__logo navbar__logo-icon"
      />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar dentro del post"
        className="navbar__input"
      ></input>
      <div className="navbar__logout">
        <p className="navbar__logout-text">{user}</p>
        <TbLogout
          size={25}
          color={"var(--tertiary-color)"}
          className="navbar__logout-icon"
          onClick={() => dispatch(logout())}
        />
      </div>
    </div>
  );
}
