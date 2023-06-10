import React, { useState } from "react";
import styles from "./Home.module.css";
import Selection from "../Selection/Selection";

const Home = () => {
 const [isSelectionActive, setIsSelectionActive] = useState(false)


 const handleSelection = () => {

  !isSelectionActive ? setIsSelectionActive(true) : setIsSelectionActive(false)

  console.log(isSelectionActive)
 }
 import React, { useState } from "react";
import styles from "./Home.module.css";
import Selection from "../Selection/Selection";

const Home = () => {
 const [isSelectionActive, setIsSelectionActive] = useState(false)


 const handleSelection = () => {

  !isSelectionActive ? setIsSelectionActive(true) : setIsSelectionActive(false)

  console.log(isSelectionActive)
 }
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
            <button className="btn btn-danger fs-5" onClick={handleSelection}>Donate Now</button>
          </div>
        </div>
      </div>
      <section className="py-5 mt-4 sectionOne container">
        <h2 className="text-center text-danger">This all About Us !</h2>
        <div className="mt-3 row"></div>
      </section>
      {isSelectionActive && <Selection onSelection={setIsSelectionActive}/>}

    </>
  );
};

export default Home;
