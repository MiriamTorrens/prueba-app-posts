import { NavLink } from "react-router-dom";
import "../styles/SideBar.scss";

export default function SideBar() {
    return (
        <div className="SideBar">
            <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "cadetblue" : "black",
                })} to="/home" className="SideBar__link" >Home</NavLink><br />
            <NavLink style={({ isActive }) => ({
                  color: isActive ? "cadetblue" : "black",
            })} to="/posts" className="SideBar__link">Posts</NavLink><br />
        </div>
    )
}