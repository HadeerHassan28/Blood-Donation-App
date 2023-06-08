import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <section
        className={`${styles.background} d-flex justify-content-center align-items-center text-center text-danger`}
      ></section>
      <div className={`${styles.header} w-50`}>
        <h1 className="fw-bold text-danger">Blood Donation</h1>
        <p className="fs-5 mt-2 lh-lg text-muted ">
          <span className="fw-bold text-danger fs-3">Saves Life</span><br/>Together we are stronger

        </p>
        <button className="btn btn-outline-danger">Sign Up</button>
      </div>
    </>
  );
};

export default Home;
