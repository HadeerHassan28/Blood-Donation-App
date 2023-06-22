import React, { useEffect, useState } from "react";
import styles from "./VolunteerProfile.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";

const VolunteerProfile = () => {
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
      <section style={{ backgroundColor: "#fbf1f0" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
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
                    <button
                      type="button"
                      className="btn btn-outline-danger ms-2 px-5"
                    >
                      {t("Message")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
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
