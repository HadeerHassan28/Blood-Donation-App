import React, { useEffect, useState } from "react";
import styles from "./UserEdit.module.css";
import axios from "axios";
import jwtEncode from "jwt-encode";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const UserEdit = ({ TokenData, saveTokenData, setTokenData }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const secretKey =
    Math.random().toString(36).substring(2, 20) +
    Math.random().toString(36).substring(2, 20);
  /*  firstName: TokenData.firstName,
    lastName: TokenData.lastName,
    email: TokenData.email,
    Address: TokenData.Address,
    city: TokenData.city,
    pNumber: TokenData.pNumber,
    image:
    TokenData.image === ""
    ? process.env.PUBLIC_URL + "/assets/images/userImage.jpg"
    : TokenData.image,
    */
  let [newData, setNewData] = useState(TokenData);
  let lastData = null;
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    var fReader = new FileReader();
    fReader.readAsDataURL(file);

    fReader.onloadend = () => {
      setNewData({
        ...newData,
        image: fReader.result,
      });
    };
  };
  const [isFirstNameValid, setIsFirstNameValid] = useState(false);
  const [isFirstNameFocused, setIsFirstNameFocused] = useState(false);

  const [isLastNameValid, setIsLastNameValid] = useState(false);
  const [isLastNameFocused, setIsLastNameFocused] = useState(false);

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const [isAddressValid, setIsAdressValid] = useState(false);
  const [isAddressFocused, setIsAddressFocused] = useState(false);

  const [isCityValid, setIsCityValid] = useState(false);
  const [isCityFocused, setIsCityFocused] = useState(false);

  const [isPnumberValid, setIsPnumberValid] = useState(false);
  const [isPnumberFocused, setIsPnumberFocused] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    const lettersRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[\w\\.-]+@\w+\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2})?$/;
    const addressRegex = /^[a-zA-Z0-9,\s]+$/;
    const phoneNumberRegex = /^(010|011|012)\d{8}$/;

    const isValid = lettersRegex.test(value);
    const isMailValid = emailRegex.test(value);
    const isEnteredAddressValid = addressRegex.test(value);
    const isEnteredPhoneNumberValid = phoneNumberRegex.test(value);

    setNewData({
      ...newData,
      [name]: value,
    });
    if (name === "firstName") {
      setIsFirstNameValid(isValid);
    } else if (name === "lastName") {
      setIsLastNameValid(isValid);
    } else if (name === "email") {
      setIsEmailValid(isMailValid);
    } else if (name === "Address") {
      setIsAdressValid(isEnteredAddressValid);
    } else if (name === "city") {
      setIsCityValid(isValid);
    } else if (name === "pNumber") {
      setIsPnumberValid(isEnteredPhoneNumberValid);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      // isFirstNameValid &&
      // isLastNameValid &&
      // isAddressValid &&
      // isCityValid &&
      // isEmailValid &&
      // isPnumberValid
      true
    ) {
      const payload = {
        id: TokenData.id,
        firstName: newData.firstName,
        lastName: newData.lastName,
        email: newData.email,
        Address: newData.Address,
        city: newData.city,
        pNumber: newData.pNumber,
        bloodType: TokenData.bloodType,
        gender: TokenData.gender,
        isVolunteer: TokenData.isVolunteer,
        image: newData.image,
        role: "user",
      };
      // console.log(payload);
      const token = jwtEncode(payload, secretKey);
      localStorage.setItem("token", token);
      saveTokenData();
      lastData = { ...newData, token: token };

      navigate("/userProfile");

      console.log(lastData);
      axios
        .patch(`http://localhost:3000/users/${newData.id}`, lastData)
        .then((response) => {
          // Set the secret key for the token
          // Generate the token
          console.log("Update successful:", response.data);
        })
        .catch((error) => {
          console.error("Update failed:", error);
        });
    } else {
      console.log("Check Your Fields");
    }
  };

  return (
    <div>
      <div className="container">
        <h2 className="text-center">{t("Edit Account")}</h2>
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-lg-6">
            <label htmlFor="firstName" className="form-label">
              {t("First Name")}
            </label>
            <input
              type="text"
              className={`${styles.formControl} form-control w-100`}
              name="firstName"
              id="firstName"
              aria-describedby="First Name"
              value={newData.firstName}
              onChange={handleChange}
              style={
                !isFirstNameFocused
                  ? {}
                  : isFirstNameValid
                  ? { border: "2px solid green" }
                  : { border: "2px solid red" }
              }
              onFocus={() => {
                setIsFirstNameFocused(true);
              }}
              onBlur={() => {
                setIsFirstNameFocused(false);
              }}
            />
          </div>
          <div className="col-lg-6">
            <label htmlFor="lastName" className="form-label ">
              {t("Last Name")}
            </label>
            <input
              type="text"
              className={`${styles.formControl} form-control w-100`}
              id="lastName"
              name="lastName"
              aria-describedby="Last Name"
              value={newData.lastName}
              onChange={handleChange}
              style={
                !isLastNameFocused
                  ? {}
                  : isLastNameValid
                  ? { border: "2px solid green" }
                  : { border: "2px solid red" }
              }
              onFocus={() => {
                setIsLastNameFocused(true);
              }}
              onBlur={() => {
                setIsLastNameFocused(false);
              }}
            />
          </div>
          <div className="col-lg-12">
            <label htmlFor="exampleInputEmail1" className="form-label">
              {t("Email address")}
            </label>
            <input
              type="email"
              className={`${styles.formControl} form-control`}
              name="email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={newData.email}
              onChange={handleChange}
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
          </div>
          {/*
              <div className="col-lg-6">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className={`form-control w-100`}
                  name="password"
                  id="password"
                  aria-describedby="password"

                />

              </div>
              <div className="col-lg-6">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className={` form-control w-100`}
                  id="confirmPassword"
                  name="confirmPassword"
                  aria-describedby="confirmPassword"
                />
             
              </div>
            */}
          <div className="col-lg-6">
            <label htmlFor="address" className="form-label">
              {t("Address")}
            </label>
            <input
              type="text"
              className={`${styles.formControl} form-control w-100`}
              id="address"
              name="Address"
              aria-describedby="address"
              value={newData.Address}
              onChange={handleChange}
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
          </div>
          <div className="col-lg-6">
            <label htmlFor="city" className="form-label">
              {t("City")}
            </label>
            <input
              type="text"
              className={`${styles.formControl} form-control w-100 `}
              id="city"
              name="city"
              aria-describedby="city"
              value={newData.city}
              onChange={handleChange}
              style={
                !isCityFocused
                  ? {}
                  : isCityValid
                  ? { border: "2px solid green" }
                  : { border: "2px solid red" }
              }
              onFocus={() => {
                setIsCityFocused(true);
              }}
              onBlur={() => {
                setIsCityFocused(false);
              }}
            />
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
              value={newData.pNumber}
              onChange={handleChange}
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
          </div>
          <div className="mb-2 text-center d-flex justify-content-center align-items-center">
            <img
              className="me-2 rounded-2"
              src={newData.image}
              alt=""
              width="150"
              height={150}
            />
            <input
              type="file"
              onChange={(e) => handleImageUpload(e)}
              className="col-4"
            />
          </div>

          <button className="btn btn-danger w-25 mx-auto mb-3">
            {t("Edit Data")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserEdit;
