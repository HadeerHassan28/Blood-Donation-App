import React, { useState } from "react";
import styles from "./Organization.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { v4 as uuid } from "uuid";
const Organization = () => {
  const [data, SetData] = useState({
    id: uuid(),
    orgName: "",
    password: "",
    confirmPassword: "",
    OrganizationCode: "",
    Address: "",
    sector: "",
  });

  const [isOrgNameValid, setIsOrgNameValid] = useState(false);

  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const [isConfirmedPasswordValid, setIsConfirmedPasswordValid] =
    useState(false);
  const [isConfirmedPasswordFocused, setIsConfirmedPasswordFocused] =
    useState(false);

  const [isAddressValid, setIsAdressValid] = useState(false);
  const [isAddressFocused, setIsAddressFocused] = useState(false);

  const [isOrgCodeValid, setIsOrgCodeValid] = useState(false);
  const [isOrgCodeFocused, setIsOrgCodeFocused] = useState(false);

  const [isSectorValid, setIsSectorValid] = useState(false);
  const [isSectorFocused, setIsSectorFocused] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDataValid, setIsDataValid] = useState(false);

  const [isEmailExisting, setIsEmailExisting] = useState(false);

  const handleChange = (event) => {
    setIsSubmitted(false);
    setIsEmailExisting(false);
    const { name, value } = event.target;

    const lettersRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[\w\\.-]+@\w+\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2})?$/;
    const passwordRegex = /^\w{6,}$/;
    const addressRegex = /^[a-zA-Z0-9,\s]+$/;
    const phoneNumberRegex = /^(010|011|012)\d{8}$/;

    const isValid = lettersRegex.test(value);
    const isMailValid = emailRegex.test(value);
    const isEnteredPasswordValid = passwordRegex.test(value);
    const isPassWordConfirmed = value.match(data.password);
    const isEnteredAddressValid = addressRegex.test(value);
    const isEnteredPhoneNumberValid = phoneNumberRegex.test(value);

    SetData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    if (name === "orgName") {
      setIsOrgNameValid(isValid);
    } else if (name === "password") {
      setIsPasswordValid(isEnteredPasswordValid);
    } else if (name === "confirmPassword") {
      setIsConfirmedPasswordValid(isPassWordConfirmed);
    } else if (name === "Address") {
      setIsAdressValid(isEnteredAddressValid);
    } else if (name === "sector") {
      setIsSectorValid(isValid);
    } else if (name === "OrganizationCode") {
      setIsOrgCodeValid(isEnteredPhoneNumberValid);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    setIsSubmitted(true);

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
        setIsEmailExisting(true);
      } else {
        if (
          isOrgNameValid &&
          isPasswordValid &&
          isConfirmedPasswordValid &&
          isAddressValid &&
          isOrgCodeValid
        ) {
          //! get data from thr form and add it to the json data:
          const newUser = {
            id: uuid(),
            orgName: data.orgName,
            password: data.password,
            confirmPassword: data.confirmPassword,
            OrganizationCode: data.OrganizationCode,
            Address: data.Address,
            sector: data.sector,
          };
          axios
            .post("http://localhost:3002/org", newUser)
            .then((res) => {
              console.log(res.data);
              console.log("Done post");
            })
            .catch((err) => console.log("error post"));
          setIsDataValid(true);
        } else {
          console.log("Your Form Is Not Valid");
          setIsDataValid(false);
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
                  type="email"
                  className="form-control"
                  name="oName"
                  id="oName"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="col-lg-6">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="email"
                  className="form-control"
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
                  type="email"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  aria-describedby="confirmPassword"
                />
              </div>
              <div className="col-lg-6">
                <label for="oCode" className="form-label">
                  Organization Code
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="oCode"
                  name="oCode"
                  aria-describedby="oCode"
                />
              </div>
              <div className="col-lg-6">
                <label for="Address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Address"
                  name="Address"
                  aria-describedby="Address"
                />
              </div>
              <div className="col-lg-12">
                <label for="pNumber" className="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="pNumber"
                  name="pNumber"
                  aria-describedby="pNumber"
                />
              </div>
              <div className="col-lg-4">
                <select className="form-select" name="gender">
                  <option selected hidden>
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
              <button className="btn btn-danger py-3" onChange={handleChange}>
                Sign Up
              </button>
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
