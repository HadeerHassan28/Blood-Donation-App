import React, { useEffect, useState } from "react";
import styles from "./OrganizationProfile.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
const OrganizationProfile = () => {
  const { id } = useParams();
  const [hospitalsData, setHospitalsData] = useState({});
  useEffect(() => {
    axios.get("http://localhost:3002/org").then((res) => {
      const orgs = res.data;
      const hospitals = orgs.find((user) => {
        return user.id === id;
      });
      setHospitalsData(hospitals);
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
                    src={hospitalsData.image}
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: "150px" }}
                  />
                  <h5 className="my-3">{hospitalsData.orgName}</h5>

                  <p className="text-muted mb-4">
                    {t("Address")}: {hospitalsData.Address}
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
                      <p className="mb-0">{t("Organization Code")}</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        {hospitalsData.OrganizationCode}
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">{t("Sector")}</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{hospitalsData.sector}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">{t("Phone")}</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{hospitalsData.pNumber}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">{t("Address")}</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{hospitalsData.Address}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">{t("Need Volunteers")}</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{`${`${t("yes")}`}`}</p>
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

export default OrganizationProfile;
