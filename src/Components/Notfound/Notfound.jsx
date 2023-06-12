import React from "react";
import styles from "./Notfound.module.css";
import ErrorImg from '../../assets/404Error.svg'
const Notfound = () => {
  return <>
    <div style={{ fontFamily: "Montserrat Alternates", height: "60vh" }} className="container py-5 d-flex justify-content-center align-items-center">
      <div className="errorContent text-center py-5">
        <h2 style={{ color: "#ee394a", letterSpacing: 10, fontSize: "100px" }}>4 0 4</h2>
        <h3 className="mt-4 mb-4 text-muted">Page not found</h3>
        <p className="text-danger fs-5">Oops! The page you are looking for does not exist. It might have been removed or deleted</p>
      </div>
    </div>

  </>
};

export default Notfound;
