import logo from "../../img/logo.png";
import "./Header.css";

export const Header = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <a href="">
            <img src={logo} alt="logo" />
          </a>
        </div>

        <ul>
          <li>
            <a href="" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="">Bikes</a>
          </li>
          <li>
            <a href="">Gear</a>
          </li>
          <li>
            <a href="">Parts</a>
          </li>
          <li>
            <a href="">Tires</a>
          </li>
          <li>
            <a href="">Service-Info</a>
          </li>
          <li>
            <a href="">Catalogues</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>

        <div className="search-shop-icons">
          <a href="">
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>

          <a href="">
            <i className="fa-solid fa-bag-shopping"></i>
          </a>
        </div>
      </nav>
    </>
  );
};
