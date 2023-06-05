import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand main-color" to="/">
            Blood donation
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="blogs">
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="volunteers">
                  Volunteers
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto mt-2 mt-lg-0 d-flex align-items-center">
              <li className="nav-item">
                <Link className="nav-link" to="">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
