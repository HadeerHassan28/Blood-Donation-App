import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../heart.png";
import logoREv from "../../heart-rev.png";
import Selection from "../Selection/Selection";
const Navbar = ({ theme }) => {
  const [navScroll, setnavScroll] = useState(false);
  const [isSelectionActive, setIsSelectionActive] = useState(false);
  const [isForLogin, setIsForLogin] = useState(false);
  const changeNav = () => {
    if (window.scrollY > 56) {
      setnavScroll(true);
    } else {
      setnavScroll(false);
    }
  };
  const handleSelection = () => {
    !isSelectionActive
      ? setIsSelectionActive(true)
      : setIsSelectionActive(false);

    console.log(isSelectionActive);
  };
  const handleSelectionForLogin = () => {
    !isForLogin ? setIsForLogin(true) : setIsForLogin(false);

    console.log(isSelectionActive);
  };
  window.addEventListener("scroll", changeNav);
  return (
    <>
      <nav
        style={{ zIndex: "1111111" }}
        className={`navbar navbar-expand-lg position-sticky top-0 p-0 ${
          navScroll ? styles.scrollActive : styles.scrollNotActive
        }`}
      >
        <div className="container">
          <Link
            className={`navbar-brand me-5 ${
              !navScroll ? "main-color" : "text-light"
            }`}
            to="/"
          >
            <img
              className={`${styles.heartAnim}`}
              src={navScroll ? logoREv : logo}
              alt=""
              style={{ width: "50px" }}
            />
          </Link>
          <button
            className={`navbar-toggler ${styles.iconToggler}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="navbar-toggler-icon"
              style={{
                width: "20px",
                height: "20px",
              }}
            ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item" aria-current="page">
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
              <li
                className={`nav-link me-3  ${!navScroll ? "" : "text-light"}`}
                style={{ cursor: "pointer" }}
                onClick={handleSelectionForLogin}
              >
                Login
              </li>
              <li
                className={`nav-item btn p-1 ${
                  !navScroll ? "btn-danger" : "btn-light"
                }  p-0 m-0 `}
                onClick={handleSelection}
              >
                Register
              </li>
            </ul>
          </div>

          {isForLogin && (
            <Selection onSelection={setIsForLogin} isForSignUp={false} />
          )}
          {isSelectionActive && (
            <Selection onSelection={setIsSelectionActive} isForSignUp={true} />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
