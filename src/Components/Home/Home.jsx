import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={`${styles.landing}`}>
        <div className="landing-content d-flex justify-content-center align-items-center">
          <div className=" text-center">
            <h2
              className="fw-bolder text-danger mb-3 "
              style={{ letterSpacing: 4, fontSize: "35px" }}
            >
              Blood Donation
            </h2>
            <p className="fs-3">
              Save Lifes,
              <span className="text-danger">Together we are stronger</span>
            </p>
            <p className="fs-5 text-black-50">
              few minutes of your time can mean a lifetime for someone else
            </p>
            <button className="btn btn-danger fs-5">Donate Now</button>
          </div>
        </div>
      </div>
      <section className="py-5 mt-4 sectionOne container">
        <h2 className="text-center text-danger">This all About Us !</h2>
        <div className="mt-3 row"></div>
      </section>
    </>
  );
};

export default Home;
