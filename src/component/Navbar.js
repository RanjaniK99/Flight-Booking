import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar  navbar-expand-lg  shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            FLIGHT TICKET BOOKING
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto w-100 justify-content-end ">
              <li className="nav-item ms-2 me-2">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item ms-2 me-2">
                <NavLink className="nav-link" to="/products">
                  Flight
                </NavLink>
              </li>

              <li className="nav-item  ms-2 me-2">
                <NavLink to="/login" className="nav-link login">
                  <i className="fa fa-sign-in me-1"></i> Login
                </NavLink>
              </li>
              <li className="nav-item  ms-2 me-2">
                <NavLink to="/register" className="nav-link login">
                  <i className="fa fa-user-plus me-1"></i> Register
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
