import React, { useEffect, useState, useContext } from "react";
import styles from "./VolunteerProfile.module.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsTelephoneOutbound } from "react-icons/bs";
import { conTheme } from "../../Context/Context";
const VolunteerProfile = () => {
  const { isTheme } = useContext(conTheme);
  const { id } = useParams();
  const [VolunteerData, setVolunteerData] = useState({});
  useEffect(() => {
    axios.get("http://localhost:3000/users").then((res) => {
      const users = res.data;
      const Volunteer = users.find((user) => {
        return user.id === id;
      });
      setVolunteerData(Volunteer);
    });
  }, [id]);
  const { t } = useTranslation();
  return (
    <>
<<<<<<< HEAD
      <section
        style={{ backgroundColor: isTheme === true ? "black" : "#fbf1f0" }}
      >
=======
      <section className="py-4" style={{ backgroundColor: "#fbf1f0" }}>
>>>>>>> c115080648046f11207212e2748e2c0e3a02f42a
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div
                  className="card-body text-center"
                  style={{
                    backgroundColor: isTheme === true ? "black" : "white",

                    color: isTheme === true ? "white" : "black",
                  }}
                >
                  <img
                    src={VolunteerData.image}
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: "150px" }}
                  />
                  <h5 className="my-3">{VolunteerData.firstName}</h5>
                  <p className="text-muted mb-1">
                    {t("Blood Type")}: {VolunteerData.bloodType}
                  </p>
                  <p className="text-muted mb-4">
                    {t("City")}: {VolunteerData.city}
                  </p>
                  <div className="d-flex justify-content-center mb-2">
                    <Link className="me-3" to={`tel:+${VolunteerData.pNumber}`}>
                      <BsTelephoneOutbound
                        size={20}
                        className="text-danger"
                      ></BsTelephoneOutbound>
                    </Link>
                    <Link
                      className="me-2"
                      target="_blank"
                      to={`https://wa.me/+${VolunteerData.pNumber}`}
                    >
                      <AiOutlineWhatsApp
                        size={25}
                        className="text-danger"
                      ></AiOutlineWhatsApp>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div
                  className="card-body"
                  style={{
                    backgroundColor: isTheme === true ? "black" : "white",

                    color: isTheme === true ? "white" : "black",
                  }}
                >
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">{t("Full Name")}</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        {" "}
                        {VolunteerData.firstName} {VolunteerData.lastName}
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">{t("Email")}</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{VolunteerData.email}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">{t("Phone")}</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{VolunteerData.pNumber}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">{t("Address")}</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{VolunteerData.Address}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">{t("Available to Donate")}</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{`${
                        VolunteerData.isVolunteer
                          ? `${t("Avialable")}`
                          : `${t("Not Available")}`
                      }`}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VolunteerProfile;
