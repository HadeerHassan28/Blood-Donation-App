import React, { useState } from "react";
import styles from "./Organization.module.css";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import axios from "axios";
import jwtEncode from "jwt-encode";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Organization = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [data, SetData] = useState({
    id: uuid(),
    orgName: "",
    password: "",
    confirmPassword: "",
    OrganizationCode: "",
    email: "",
    Address: "",
    pNumber: "",
    sector: "",
    token: "",
  });
  let lastData = {};

  const [isOrgNameIsValid, setIsOrgNameIsValid] = useState(false);
  const [isOrgNameIsFocused, setIsOrgNameIsFocused] = useState(false);

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const [isConfirmedPasswordValid, setIsConfirmedPasswordValid] =
    useState(false);
  const [isConfirmedPasswordFocused, setIsConfirmedPasswordFocused] =
    useState(false);

  const [isOrganiationCodeValid, setIsOrganiationCodeValid] = useState(false);
  const [isOrganiationCodeFocused, setIsOrganiationCodeFocused] =
    useState(false);

  const [isAddressValid, setIsAdressValid] = useState(false);
  const [isAddressFocused, setIsAddressFocused] = useState(false);

  const [isPnumberValid, setIsPnumberValid] = useState(false);
  const [isPnumberFocused, setIsPnumberFocused] = useState(false);
  const secretKey =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
  const handleChange = (event) => {
    const { name, value } = event.target;

    const lettersRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[\w\\.-]+@\w+\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2})?$/;
    const passwordRegex = /^\w{6,}$/;
    const OrganizationCodeRegex = /^\d{6}$/;
    const addressRegex = /^[a-zA-Z0-9,\s]+$/;
    const phoneNumberRegex = /^(010|011|012)\d{8}$/;

    const isValid = lettersRegex.test(value);
    const isMailValid = emailRegex.test(value);
    const isEnteredPasswordValid = passwordRegex.test(value);
    const isPassWordConfirmed = value.match(data.password);
    const isEnteredCodeValid = OrganizationCodeRegex.test(value);
    const isEnteredAddressValid = addressRegex.test(value);
    const isEnteredPhoneNumberValid = phoneNumberRegex.test(value);

    SetData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    if (name === "orgName") {
      setIsOrgNameIsValid(isValid);
    } else if (name === "email") {
      setIsEmailValid(isMailValid);
      console.log(true);
    } else if (name === "password") {
      setIsPasswordValid(isEnteredPasswordValid);
    } else if (name === "OrganizationCode") {
      setIsOrganiationCodeValid(isEnteredCodeValid);
    } else if (name === "confirmPassword") {
      setIsConfirmedPasswordValid(isPassWordConfirmed);
    } else if (name === "Address") {
      setIsAdressValid(isEnteredAddressValid);
    } else if (name === "pNumber") {
      setIsPnumberValid(isEnteredPhoneNumberValid);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get("http://localhost:3002/org").then((res) => {
      const users = res.data;
      // console.log(users);
      const user = users.find(
        (user) =>
          user.OrganizationCode === data.OrganizationCode &&
          user.password === data.password
      );
      if (user) {
        console.log("this account is existed");
      } else {
        if (
          isOrgNameIsValid &&
          isPasswordValid &&
          isConfirmedPasswordValid &&
          isAddressValid &&
          isOrganiationCodeValid
        ) {
          const payload = {
            id: data.id,
            orgName: data.orgName,
            OrganizationCode: data.OrganizationCode,
            Address: data.Address,
            email: data.email,
            sector: data.sector,
            isNeedsVolunteers: false,
            pNumber: data.pNumber,
            image: process.env.PUBLIC_URL + "/assets/images/userImage.jpg",
            role: "org",
          };

          // Set the secret key for the token

          // Generate the token
          const token = jwtEncode(payload, secretKey);
          //! get data from thr form and add it to the json data:

          lastData = {
            ...data,
            ...payload,
            token: token,
          };
          axios
            .post("http://localhost:3002/org", lastData)
            .then((res) => {
              console.log("Done post");
              navigate("/Signup-org/signin-org");
            })
            .catch((err) => console.log("error post"));
        } else {
          console.log("Your Form Is Not Valid");
        }
      }
    });
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6">
          <h2 className="text-center text-danger my-5">
            {t("Sign Up Your Organization To Save a Life")}
          </h2>
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-lg-12">
              <label htmlFor="orgName" className="form-label">
                {t("Organization Name")}
              </label>
              <input
                type="text"
                className={`${styles.formControl} form-control`}
                name="orgName"
                id="orgName"
                aria-describedby="emailHelp"
                onChange={handleChange}
                value={data.orgName}
                style={
                  !isOrgNameIsFocused
                    ? {}
                    : isOrgNameIsValid
                      ? { border: "2px solid green" }
                      : { border: "2px solid red" }
                }
                onFocus={() => {
                  setIsOrgNameIsFocused(true);
                }}
                onBlur={() => {
                  setIsOrgNameIsFocused(false);
                }}
              />
              {isOrgNameIsFocused && !isOrgNameIsValid && (
                <div className="text-danger">
                  Please Enter A valid Organization Name
                </div>
              )}
            </div>
            <div className="col-lg-12">
              <label htmlFor="email" className="form-label">
                {t("Organization Email")}
              </label>
              <input
                type="email"
                className={`${styles.formControl} form-control`}
                name="email"
                id="email"
                aria-describedby="emailHelp"
                onChange={handleChange}
                value={data.email}
                style={
                  !isEmailFocused
                    ? {}
                    : isEmailValid
                      ? { border: "2px solid green" }
                      : { border: "2px solid red" }
                }
                onFocus={() => {
                  setIsEmailFocused(true);
                }}
                onBlur={() => {
                  setIsEmailFocused(false);
                }}
              />
              {isEmailFocused && !isEmailValid && (
                <div className="text-danger">Please Enter A valid Email</div>
              )}
            </div>
            <div className="col-lg-6">
              <label htmlFor="password" className="form-label">
                {t("Password")}
              </label>
              <input
                type="password"
                className={`${styles.formControl} form-control`}
                name="password"
                id="password"
                aria-describedby="password"
                onChange={handleChange}
                value={data.password}
                style={
                  !isPasswordFocused
                    ? {}
                    : isPasswordValid
                      ? { border: "2px solid green" }
                      : { border: "2px solid red" }
                }
                onFocus={() => {
                  setIsPasswordFocused(true);
                }}
                onBlur={() => {
                  setIsPasswordFocused(false);
                }}
              />
              {isPasswordFocused && !isPasswordValid && (
                <div className="text-danger">Please Enter A valid Password</div>
              )}
            </div>
            <div className="col-lg-6">
              <label htmlFor="confirmPassword" className="form-label">
                {t("Confirm Password")}
              </label>
              <input
                type="password"
                className={`${styles.formControl} form-control`}
                id="confirmPassword"
                name="confirmPassword"
                aria-describedby="confirmPassword"
                onChange={handleChange}
                value={data.confirmPassword}
                style={
                  !isConfirmedPasswordFocused
                    ? {}
                    : isConfirmedPasswordValid
                      ? { border: "2px solid green" }
                      : { border: "2px solid red" }
                }
                onFocus={() => {
                  setIsConfirmedPasswordFocused(true);
                }}
                onBlur={() => {
                  setIsConfirmedPasswordFocused(false);
                }}
              />
              {isConfirmedPasswordFocused && !isConfirmedPasswordValid && (
                <div className="text-danger">Passwords Are Not Matching</div>
              )}
            </div>
            <div className="col-lg-6">
              <label htmlFor="OrganizationCode" className="form-label">
                {t("Organization Code")}
              </label>
              <input
                type="number"
                className={`${styles.formControl} form-control`}
                id="OrganizationCode"
                name="OrganizationCode"
                aria-describedby="OrganizationCode"
                onChange={handleChange}
                value={data.OrganizationCode}
                style={
                  !isOrganiationCodeFocused
                    ? {}
                    : isOrganiationCodeValid
                      ? { border: "2px solid green" }
                      : { border: "2px solid red" }
                }
                onFocus={() => {
                  setIsOrganiationCodeFocused(true);
                }}
                onBlur={() => {
                  setIsOrganiationCodeFocused(false);
                }}
              />
              {isOrganiationCodeFocused && !isOrganiationCodeValid && (
                <div className="text-danger">
                  Please Enter A valid Organization Code
                </div>
              )}
            </div>
            <div className="col-lg-6">
              <label htmlFor="Address" className="form-label">
                {t("Address")}
              </label>
              <input
                type="text"
                className={`${styles.formControl} form-control w-100`}
                id="Address"
                name="Address"
                aria-describedby="Address"
                onChange={handleChange}
                value={data.Address}
                style={
                  !isAddressFocused
                    ? {}
                    : isAddressValid
                      ? { border: "2px solid green" }
                      : { border: "2px solid red" }
                }
                onFocus={() => {
                  setIsAddressFocused(true);
                }}
                onBlur={() => {
                  setIsAddressFocused(false);
                }}
              />
              {isAddressFocused && !isAddressValid && (
                <div className="text-danger">Please Enter A valid Adress</div>
              )}
            </div>
            <div className="col-lg-12">
              <label htmlFor="pNumber" className="form-label">
                {t("Phone Number")}
              </label>
              <input
                type="number"
                className={`${styles.formControl} form-control`}
                id="pNumber"
                name="pNumber"
                aria-describedby="pNumber"
                onChange={handleChange}
                value={data.pNumber}
                style={
                  !isPnumberFocused
                    ? {}
                    : isPnumberValid
                      ? { border: "2px solid green" }
                      : { border: "2px solid red" }
                }
                onFocus={() => {
                  setIsPnumberFocused(true);
                }}
                onBlur={() => {
                  setIsPnumberFocused(false);
                }}
              />
              {isPnumberFocused && !isPnumberValid && (
                <div className="text-danger">
                  Please Enter A valid Phone Number
                </div>
              )}
            </div>
            <div className="col-lg-4">
              <select
                defaultValue="sector"
                className="form-select"
                name="sector"
                onChange={handleChange}
                required
              >
                <option value="sector">{t("Sector")}</option>
                <option value="governmental">{t("governmental")}</option>
                <option value="Private">{t("Private")}</option>
              </select>
            </div>
            <p>
              {t("Have an Account?")}{" "}
              <Link
                to="signin-org"
                className="text-decoration-none text-danger fw-bold"
              >
                <span>{t("Sign in Here")}</span>
              </Link>
            </p>
            <button className="btn btn-danger py-3">{t("Sign Up")}</button>
          </form>
        </div>
        <div className="col-lg-6 mt-5 d-flex align-items-center">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/hospital.jpg"}
            className="img-fluid mt-5"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Organization;
