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
    <div
      className={`${styles.landing} d-flex justify-content-center align-items-start`}
    >
      <div className="landing-content">
        <div className=" text-center">
          <h2
            style={{
              letterSpacing: 4,
              fontSize: "3.5rem",
              fontFamily: "Montserrat Alternates",
              fontWeight: "800",
              marginTop: "3rem",
              marginBottom: 0,
              color: "#ff4951",
            }}
          >
            BLOOD <br /> DONATION
          </h2>
          <p
            style={{
              letterSpacing: 4,
              fontSize: "2.5rem",
              fontFamily: "Covered By Your Grace",
              fontWeight: "bold",
              marginBottom: 5,
            }}
          >
            Saves Lifes,
          </p>
          <div className="mb-3">
            <span
              style={{
                letterSpacing: 4,
                backgroundColor: "#fbd6e7",
                fontSize: "1rem",
                fontFamily: "Montserrat Alternates",
                fontWeight: "bold",
                padding: 8,
                borderRadius: 20,
              }}
            >
              Together we are stronger
            </span>
          </div>

          <p
            className="text-black-50 mb-3"
            style={{
              fontSize: "1rem",
              fontFamily: "Montserrat Alternates",
              fontWeight: "bold",
              maxWidth: "500px",
            }}
          >
            Find blood donors near your location and make a blood request in
            less than 5 minutes.
          </p>
          <button className="btn btn-danger fs-5" onClick={handleSelection}>Donate Now</button>
          {isSelectionActive && <Selection onSelection={setIsSelectionActive}/>}

        </div>
      </div>
    </div>
    <div className="row container mx-auto text-center mt-5 p-5">
      <InfoHome></InfoHome>
    </div>
    <div className="text-center mt-5">
      <h2 className="main-color">Join The Cause</h2>
      <p className="text-muted">
        Join our cause and help us save more lives. Everyone should have the
        right to get a blood transfusion.
      </p>
    </div>
    <div className="row container mx-auto mt-2 mb-0 text-center align-items-center justify-content-center">
      <CauseHome></CauseHome>
    </div>


  </>
















  );
};

export default Home;
