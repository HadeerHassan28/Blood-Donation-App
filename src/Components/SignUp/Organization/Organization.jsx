import React, { useState } from "react";
import styles from "./Organization.module.css";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import axios from "axios";
const Organization = () => {
  const [data, SetData] = useState({
    id: uuid(),
    oName: "",
    email: "",
    password: "",
    confirmPassword: "",
    oCode: "",
    Address: "",
    pNumber: "",
    sector: "",
  });

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

  const handleChange = (event) => {
    const { name, value } = event.target;

    const lettersRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[\w\\.-]+@\w+\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2})?$/;
    const passwordRegex = /^\w{6,}$/;
    const orgCodeRegex = /^\d{6}$/;
    const addressRegex = /^[a-zA-Z0-9,\s]+$/;
    const phoneNumberRegex = /^(010|011|012)\d{8}$/;

    const isValid = lettersRegex.test(value);
    const isMailValid = emailRegex.test(value);
    const isEnteredPasswordValid = passwordRegex.test(value);
    const isPassWordConfirmed = value.match(data.password);
    const isEnteredCodeValid = orgCodeRegex.test(value);
    const isEnteredAddressValid = addressRegex.test(value);
    const isEnteredPhoneNumberValid = phoneNumberRegex.test(value);

    SetData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    if (name === "oName") {
      setIsOrgNameIsValid(isValid);
    } else if (name === "email") {
      setIsEmailValid(isMailValid);
      console.log(true);
    } else if (name === "password") {
      setIsPasswordValid(isEnteredPasswordValid);
    } else if (name === "oCode") {
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
    axios.get(" http://localhost:3002/org").then((res) => {
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
          //! get data from thr form and add it to the json data:
          const newUser = {
            id: uuid(),
            orgName: data.oName,
            password: data.password,
            confirmPassword: data.confirmPassword,
            OrganizationCode: data.oCode,
            Address: data.Address,
            sector: data.sector,
            pNumber: data.pNumber,
          };
          axios
            .post("http://localhost:3002/org", newUser)
            .then((res) => {
              console.log(res.data);
              console.log("Done post");
            })
            .catch((err) => console.log("error post"));
        } else {
          console.log("Your Form Is Not Valid");
        }
      }
    });
  };

  return (
    <div className="">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="text-center text-danger my-5">
              Sign Up Your Organization To Save a Life
            </h2>
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-lg-12">
                <label htmlFor="oName" className="form-label">
                  Organization Name
                </label>
                <input
                  type="text"
                  className={`${styles.formControl} form-control`}
                  name="oName"
                  id="oName"
                  aria-describedby="emailHelp"
                  onChange={handleChange}
                  value={data.oName}
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
              </div>
              <div className="col-lg-12">
                <label htmlFor="email" className="form-label">
                  Organization Email
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
              </div>
              <div className="col-lg-6">
                <label htmlFor="password" className="form-label">
                  Password
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
              </div>
              <div className="col-lg-6">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
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
              </div>
              <div className="col-lg-6">
                <label for="oCode" className="form-label">
                  Organization Code
                </label>
                <input
                  type="number"
                  className={`${styles.formControl} form-control`}
                  id="oCode"
                  name="oCode"
                  aria-describedby="oCode"
                  onChange={handleChange}
                  value={data.oCode}
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
              </div>
              <div className="col-lg-6">
                <label for="Address" className="form-label">
                  Address
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
              </div>
              <div className="col-lg-12">
                <label for="pNumber" className="form-label">
                  Phone Number
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
              </div>
              <div className="col-lg-4">
                <select
                  className="form-select"
                  name="gender"
                  onChange={handleChange}
                  required
                >
                  <option selected hidden value="">
                    Sector
                  </option>
                  <option value="governmental">governmental</option>
                  <option value="Private">Private</option>
                </select>
              </div>
              <p>
                Have an Account?{" "}
                <Link
                  to="signin-org"
                  className="text-decoration-none text-danger fw-bold"
                >
                  <span>Sign in Here</span>
                </Link>
              </p>
              <button className="btn btn-danger py-3">Sign Up</button>
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
    </div>
  );
};

export default Organization;
