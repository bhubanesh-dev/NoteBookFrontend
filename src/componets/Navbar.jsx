import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    Navigate("/");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg transparent  sticky-lg-top">
        <div className="container-fluid">
          <div className="navbar-brand fs-2 text-light fw-bold ps-lg-3" >
          NoteCraft
          </div>
          <button
            className="navbar-toggler text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-bg-light"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-2 text-light">
              <li className="nav-item">
                <NavLink
                  className="nav-link text-light fs-6 fw-bold"
                  aria-current="page"
                  data-bs-dismiss="navbarSupportedContent"
                  aria-label="Close"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  className="nav-link   text-light fs-6 fw-bold"
                  aria-current="page"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link   text-light fs-6 fw-bold"
                  aria-current="page"
                  to="/note"
                >
                  Note
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link  text-light fs-6  fw-bold"
                  aria-current="page"
                  to="/Profile"
                >
                  Profile
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link   text-light fs-6 fw-bold"
                  aria-current="page"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              {!localStorage.getItem("token") ? (
                <button className="ms-3 nav-item btn btn-dark btn-sm text-light border-0 rounded-4 fw-bold d-none d-md-block">
                  <NavLink
                    className="nav-link text-light"
                    aria-current="page"
                    to="/signin"
                  >
                    Login
                  </NavLink>
                </button>
              ) : (
                <button
                  className="ms-3 nav-item btn btn-dark btn-sm text-light border-0 rounded-4 fw-bold d-none d-md-block"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              )}
              <hr className="d-none d-sm-block"/>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
