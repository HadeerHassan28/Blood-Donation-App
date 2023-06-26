import React, { useState,useContext } from "react";
import styles from "./Home.module.css";
import InfoHome from "../InfoHome/InfoHome";
import CauseHome from "../CauseHome/CauseHome";
import Selection from "../Selection/Selection";
import { useNavigate } from 'react-router-dom';
import { Trans, useTranslation } from "react-i18next";
import { conTheme } from "../../Context/Context";

const Home = ({ TokenData }) => {

  let { toggleTheme, themeConfig } = useContext(conTheme);
  const theme = themeConfig.palette.mode;

  let navigate = useNavigate()
  const [isSelectionActive, setIsSelectionActive] = useState(false);
  const { t } = useTranslation();
  const handleSelection = () => {
    if (!TokenData) {
      !isSelectionActive
        ? setIsSelectionActive(true)
        : setIsSelectionActive(false);

    } else
      if (TokenData.role === "user") {
        navigate('/userProfile');
      } else {
        navigate('/orgProfile');
      }
  }
  // console.log(isSelectionActive);
  return (
    <>
      <div 
        className={`${theme === "light" ? styles.landing : styles.landingDark} d-flex justify-content-center align-items-start ` }
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
              <Trans>Blood-Donation</Trans>
            </h2>
            <p
            s
              style={
                {
                letterSpacing: 4,
                fontSize: "2.5rem",
                fontFamily: "Covered By Your Grace",
                fontWeight: "bold",
                marginBottom: 5,
                
              }}
            >
              {t("Saves Lives,")}
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
                {t("Together we are stronger")}
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
              {t("Find-blood-donors")}
            </p>
            <button className="btn btn-danger fs-5" onClick={handleSelection}>
              {t("Donate Now")}
            </button>
          </div>

          {isSelectionActive && (
            <Selection onSelection={setIsSelectionActive} />
          )}
        </div>
      </div>
      <div
        className="row container mx-auto text-center mt-5 p-5"
        data-aos="fade-up"
      >
        <InfoHome></InfoHome>
      </div>
      <div className="text-center mt-5">
        <h2 className="main-color">{t("Join The Cause")}</h2>
        <p className="text-muted">{t("Join-our-cause")}</p>
      </div>
      <CauseHome handleSelection={handleSelection}></CauseHome>
    </>
  );
};

export default Home;
