import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import styles from "./Announcement.module.css";
import { v4 as uuid } from "uuid";
import { useTranslation } from "react-i18next";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephoneOutbound } from "react-icons/bs";

import { Link } from "react-router-dom";
import { conTheme } from "../../Context/Context";
const Announcement = () => {
  const { t } = useTranslation();
  const { isTheme } = useContext(conTheme);

  const [announcements, setAnnouncements] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    setisLoading(true);
    axios
      .get("http://localhost:3005/announcements")
      .then((response) => {
        setAnnouncements(response.data);
        setisLoading(false);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  return (
    <>
      <div
        className="container py-5  "
        style={{
          backgroundColor: isTheme === true ? "black" : "#fbf1f0",
        }}
      >
        <div className="text-center mt-5 mb-5 text-danger ">
          <h2>{t("Announcements")}</h2>
        </div>
        <div className="row gy-3 ">
          {isLoading ? (
            <div>{t("Loading...")}</div>
          ) : (
            announcements.map((a) => (
              <div
                className={`${styles.annoCard} col-lg-12 py-4 px-3 text-center border border-danger`}
                style={{
                  color: isTheme === true ? "white" : "black",
                }}
              >
                <h4>
                  {t("Hospital Name")} :{" "}
                  <span
                    className="h4 text-danger isDark"
                    style={{
                      color: isTheme === true ? "white" : "black",
                    }}
                  >
                    {a.orgData.orgName}
                  </span>
                </h4>
                <h4
                  style={{
                    color: isTheme === true ? "white" : "black",
                  }}
                >
                  {t("Blood Type")} :{" "}
                  <span
                    className="h4 text-danger"
                    style={{
                      color: isTheme === true ? "white" : "black",
                    }}
                  >
                    {a.bloodType}
                  </span>
                </h4>
                <h4
                  style={{
                    color: isTheme === true ? "white" : "black",
                  }}
                >
                  {t("quantity")}:{" "}
                  <span
                    className="h4 text-danger"
                    style={{
                      color: isTheme === true ? "white" : "black",
                    }}
                  >
                    {a.quantity}
                  </span>
                </h4>
                <p
                  className="fs-5 text-secondary"
                  style={{
                    color: isTheme === true ? "white" : "black",
                  }}
                >
                  {a.message}
                </p>
                <div
                  className="icons mt-4 mb-3"
                  style={{
                    color: isTheme === true ? "white" : "black",
                  }}
                >
                  <p className="fs-5">
                    {t("Contact With Hospital", {hosName: a.orgData.orgName} )} :
                  </p>
                  <Link className="me-3" to={`tel:+${a.orgData.pNumber}`}>
                    <BsTelephoneOutbound
                      size={20}
                      className="text-danger"
                    ></BsTelephoneOutbound>
                  </Link>
                  <Link
                    className="me-2"
                    target="_blank"
                    to={`https://wa.me/+${a.orgData.pNumber}`}
                  >
                    <AiOutlineWhatsApp
                      size={25}
                      className="text-danger"
                    ></AiOutlineWhatsApp>
                  </Link>
                  <Link to={""}>
                    <CiLocationOn
                      size={25}
                      className="text-danger"
                    ></CiLocationOn>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Announcement;
