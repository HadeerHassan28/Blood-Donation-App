import React, { useState } from "react";
import styles from "./userProfile.module.css";
import { Link } from "react-router-dom";
import user from "../../../assets/user.jpg";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useEffect } from "react";
import jwtEncode from "jwt-encode";
const UserProfile = ({ TokenData, saveTokenData }) => {
  const { t } = useTranslation();
  const [isAvailable, setIsAvailable] = useState(TokenData.isVolunteer);
  console.log(TokenData.isVolunteer);
  const secretKey =
    Math.random().toString(36).substring(2, 10) +
    Math.random().toString(36).substring(2, 10);
  console.log(TokenData.isVolunteer);
  const toggleAvialability = () => {
    TokenData.isVolunteer = !isAvailable;
    const payload = {
      ...TokenData,
    };
    const token = jwtEncode(payload, secretKey);
    localStorage.setItem("token", token);
    saveTokenData();
    updateUser(TokenData);
    setIsAvailable((oldState) => !oldState);
  };

  const updateUser = (updatedTokenData) => {
    axios.get("http://localhost:3000/users").then((res) => {
      const users = res.data;
      const updatedUser = users.find((user) => {
        return user.email === TokenData.email;
      });
      if (updatedUser) {
        axios
          .patch(`http://localhost:3000/users/${updatedUser.id}`, {
            ...updatedTokenData,
          })
          .then((response) => {
            console.log("Update successful:", response.data);
          })
          .catch((error) => {
            console.error("Update failed:", error);
          });
      }
    });
  };

  useEffect(() => {
    // const storedTokenData = localStorage.getItem("tokenData");
    // if (storedTokenData) {
    // const parsedTokenData = JSON.parse(storedTokenData);
    setIsAvailable(TokenData.isVolunteer);
    // }
  }, [TokenData.isVolunteer]);

  return (
    <>
      <section style={{ backgroundColor: "#fbf1f0" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img
                    src={TokenData.image}
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: "150px" }}
                  />
                  <h5 className="my-3">{TokenData.firstName}</h5>
                  <p className="text-muted mb-1">
                    {t("Blood Type")}: {TokenData.bloodType}
                  </p>
                  <p className="text-muted mb-4">
                    {t("City")}: {TokenData.city}
                  </p>
                  <div className="d-flex justify-content-center mb-2">
                    <Link style={{ color: "white" }} to="edit">
                      <button type="button" className="btn btn-danger  px-5">
                        {t("Edit")}
                      </button>
                    </Link>
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
                        {TokenData.firstName} {TokenData.lastName}
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">{t("Email")}</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{TokenData.email}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">{t("Phone")}</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{TokenData.pNumber}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">{t("Address")}</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{TokenData.Address}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">{t("Available to Donate")}</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{`${
                        isAvailable
                          ? `${t("Avialable")}`
                          : `${t("Not Available")}`
                      }`}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button
                  className="d-block mx-auto btn btn-danger"
                  onClick={toggleAvialability}
                >
                  {isAvailable
                    ? t("Be Unavailable for Volunteering")
                    : t("Be Available for Volunteering")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfile;

/* 
   firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            Address: data.Address,
            city: data.city,
            pNumber: data.pNumber,
            bloodType: data.bloodType,
            gender: data.gender,
            isVolunteer: false,
            role: "user",
          };


*/
