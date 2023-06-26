import React, { useState, useContext } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../heart.png";
import logoREv from "../../heart-rev.png";
import Selection from "../Selection/Selection";
import { useTranslation } from "react-i18next";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { conTheme } from "../../Context/Context";
//import ContextTheme from "../../Context/Context";
const Navbar = ({ TokenData, setTokenData }) => {
  const [navScroll, setnavScroll] = useState(false);
  const [isSelectionActive, setIsSelectionActive] = useState(false);
  const [isForLogin, setIsForLogin] = useState(false);
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  let { toggleTheme, themeConfig } = useContext(conTheme);
  const theme = themeConfig.palette.mode;
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
  };
  const handleSelectionForLogin = () => {
    !isForLogin ? setIsForLogin(true) : setIsForLogin(false);
  };

  window.addEventListener("scroll", changeNav);
  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <>
      <nav
        style={{ zIndex: "1111111" }}
        className={`navbar navbar-expand-lg position-sticky top-0 p-0 ${navScroll ? styles.scrollActive : styles.scrollNotActive
          } ${theme === "light" ? styles.lightTheme : styles.darkTheme}`}
      >
        <div className="container">
          <Link
            className={`navbar-brand me-5 ${!navScroll ? "main-color" : "text-light"
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
                  className={`nav-link me-3  ${!navScroll ? "" : "text-light"
                    } isColor`}
                  to="/"
                >
                  {t("Home")}
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link me-3  ${!navScroll ? "" : "text-light"
                    } isColor`}
                  to="volunteers"
                >
                  {t("Volunteers")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link me-3 ${!navScroll ? "" : "text-light"
                    } isColor`}
                  to="Hospitals"
                >
                  {t("Hospitals")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link me-3  ${!navScroll ? "" : "text-light"
                    } isColor`}
                  to="Announcement"
                >
                  {t("Announcements")}
                </Link>
              </li>
              <li className="nav-item ">
                <select
                  onChange={changeLanguage}
                  className={`nav-link me-3  ${!navScroll ? "" : "text-light"
                    } isColor`}
                >
                  <option style={{ color: "#000000" }} value="en">
                    English (en)
                  </option>
                  <option style={{ color: "#000000" }} value="ar">
                    العربية (ar)
                  </option>
                </select>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto mt-2 mt-lg-0 d-flex align-items-center">
              {TokenData === null ? (
                <>
                  <li
                    className={`nav-link me-3  ${!navScroll ? "" : "text-light"
                      } isColor`}
                    style={{ cursor: "pointer" }}
                    onClick={handleSelectionForLogin}
                  >
                    {t("Login")}
                  </li>

                  <li
                    className={`nav-item btn p-1 ${!navScroll ? "btn-danger" : "btn-light"
                      }  p-0 m-0 `}
                    onClick={handleSelection}
                  >
                    {t("Register")}
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      className={`nav-link isColor`}
                      to={
                        TokenData.role === "user" ? "userProfile" : "orgProfile"
                      }
                    >
                      Profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      onClick={() => {
                        setTokenData(null);
                        localStorage.removeItem("token");
                      }}
                      className={`nav-link isColor`}
                      to={
                        TokenData.role === "user"
                          ? "Signup-user/signin-user"
                          : "Signup-org/signin-org"
                      }
                    >
                      Logout
                    </Link>
                  </li>
                </>
              )}
            </ul>

            <button
              className={`btn btn-link ${styles.themeToggle}`}
              onClick={toggleTheme}
            >
              {theme === "light" ? (
                <Brightness4 fontSize="small" />
              ) : (
                <Brightness7 fontSize="small" />
              )}
            </button>
          </div>

          {isForLogin && (
            <Selection onSelection={setIsForLogin} isForSignUp={true} />
          )}
          {isSelectionActive && (
            <Selection onSelection={setIsSelectionActive} isForSignUp={false} />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
