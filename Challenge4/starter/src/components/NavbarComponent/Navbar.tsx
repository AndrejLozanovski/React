import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar pt-3 border-bottom">
      <Link to="/" className="text-uppercase text-dark text-decoration-none fw-bold fs-5 my-3">
        Restaurant
      </Link>
      <Link to="/favorites" className="my-3">
        <i className="fa-solid fa-heart fa-xl text-danger "></i>
      </Link>
    </div>
  );
};
