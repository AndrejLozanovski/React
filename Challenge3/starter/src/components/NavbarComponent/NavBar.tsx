import { NavLink } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <NavLink to={"/"}>
      <div className="image-container">
        <img
          src={require(`../../images/raw/Girls-Listen-Music_0.jpg`)}
          alt="Girls-Listen-Music_0.jpg"
        />
        <h1>Music DB</h1>
      </div>
    </NavLink>
  );
};
