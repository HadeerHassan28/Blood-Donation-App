import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../heart.png";
import logoREv from "../../heart-rev.png";
const Navbar = () => {
  const [navScroll, setnavScroll] = useState(false);
  const changeNav = () => {
    if (window.scrollY > 56) {
      setnavScroll(true);
    } else {
      setnavScroll(false);
    }
  };
  window.addEventListener("scroll", changeNav);
  return (
    <>
      <nav
        className={`navbar navbar-expand-sm navbar-light position-sticky top-0 pt-3  ${
          navScroll ? styles.scrollActive : styles.scrollNotActive
        } ${styles.height}`}
      >
        <div className="container">
          <Link
            className={`navbar-brand ${
              !navScroll ? "main-color" : "text-light"
            }`}
            to="/"
          >
            <img
              src={navScroll ? logoREv : logo}
              alt=""
              style={{ width: "50px" }}
            />
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
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link me-3  ${!navScroll ? "" : "text-light"}`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link me-3  ${!navScroll ? "" : "text-light"}`}
                  to="about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link me-3 ${!navScroll ? "" : "text-light"}`}
                  to="blogs"
                >
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link me-3  ${!navScroll ? "" : "text-light"}`}
                  to="volunteers"
                >
                  Volunteers
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto mt-2 mt-lg-0 d-flex align-items-center">
              <li className="nav-item">
                <Link
                  className={`nav-link me-3  ${!navScroll ? "" : "text-light"}`}
                  to=""
                >
                  Login
                </Link>
              </li>
              `
              <li
                className={`nav-item btn ${
                  !navScroll ? "btn-danger" : "btn-light"
                }  p-0 m-0 `}
                // style={{ height: 40 }}
              >
                <Link
                  className={`nav-link p-1 ${navScroll ? "" : "text-light"}`}
                  to=""
                >
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
