import React, { useState } from "react";
import styles from "./User.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import jwtEncode from "jwt-encode";

const User = () => {
  const navigate = useNavigate();
  const secretKey =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
  const [data, SetData] = useState({
    id: uuid(),
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    Address: "",
    city: "",
    pNumber: "",
    bloodType: "",
    gender: "",
    token: "",
  });

  const [isFirstNameValid, setIsFirstNameValid] = useState(false);
  const [isFirstNameFocused, setIsFirstNameFocused] = useState(false);

  const [isLastNameValid, setIsLastNameValid] = useState(false);
  const [isLastNameFocused, setIsLastNameFocused] = useState(false);

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const [isConfirmedPasswordValid, setIsConfirmedPasswordValid] =
    useState(false);
  const [isConfirmedPasswordFocused, setIsConfirmedPasswordFocused] =
    useState(false);

  const [isAddressValid, setIsAdressValid] = useState(false);
  const [isAddressFocused, setIsAddressFocused] = useState(false);

  const [isCityValid, setIsCityValid] = useState(false);
  const [isCityFocused, setIsCityFocused] = useState(false);

  const [isPnumberValid, setIsPnumberValid] = useState(false);
  const [isPnumberFocused, setIsPnumberFocused] = useState(false);

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
    if (name === "firstName") {
      setIsFirstNameValid(isValid);
    } else if (name === "lastName") {
      setIsLastNameValid(isValid);
    } else if (name === "email") {
      setIsEmailValid(isMailValid);
    } else if (name === "password") {
      setIsPasswordValid(isEnteredPasswordValid);
    } else if (name === "confirmPassword") {
      setIsConfirmedPasswordValid(isPassWordConfirmed);
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
    setIsSubmitted(true);

    setIsSubmitted(true);

    e.preventDefault();
    axios.get("http://localhost:3000/users").then((res) => {
      const users = res.data;
      const user = users.find(
        (user) => user.email === data.email && user.password === data.password
      );
      if (user) {
        console.log("this account is existed");
        toast.error("this account is existed");
        setIsEmailExisting(true);
      } else {
        if (
          isFirstNameValid &&
          isLastNameValid &&
          isEmailValid &&
          isPasswordValid &&
          isConfirmedPasswordValid &&
          isAddressValid &&
          isCityValid &&
          isPnumberValid
        ) {
          const payload = {
            id: data.id,
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

          // Set the secret key for the token

          // Generate the token
          const token = jwtEncode(payload, secretKey);
          console.log(token);
          //! get data from thr form and add it to the json data:
          const newUser = {
            id: uuid(),
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
            confirmPassword: data.confirmPassword,
            Address: data.Address,
            city: data.city,
            pNumber: data.pNumber,
            bloodType: data.bloodType,
            gender: data.gender,
            isVolunteer: false,
            token: token,
          };
          axios
            .post("http://localhost:3000/users", newUser)
            .then((res) => {
              //console.log(res.data);
              console.log("Done post");
              navigate("/Signup-user/signin-user");
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
    <div>
      <div className="container">
        <div className="row ">
          <div className="col-lg-6 d-flex justify-content-center">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/user.png"}
              className="img-fluid mt-5"
              alt="signup img"
            />
          </div>
          <div className="col-lg-6">
            <h2 className="text-center my-5 text-danger">
              Sign Up To Save A Life!
            </h2>
            <form className="row g-3" onSubmit={handleSubmit} method="POST">
              <div className="col-lg-6">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className={`${styles.formControl} form-control w-100`}
                  name="firstName"
                  id="firstName"
                  aria-describedby="First Name"
                  value={data.firstName}
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
                {!isFirstNameValid && isFirstNameFocused && (
                  <div className="text-danger">* This Field Can't be Empty</div>
                )}
              </div>
              <div className="col-lg-6">
                <label htmlFor="lastName" className="form-label ">
                  Last Name
                </label>
                <input
                  type="text"
                  className={`${styles.formControl} form-control w-100`}
                  id="lastName"
                  name="lastName"
                  aria-describedby="Last Name"
                  value={data.lastName}
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
                {!isLastNameValid && isLastNameFocused && (
                  <div className="text-danger">* This Field Can't be Empty</div>
                )}
              </div>
              <div className="col-lg-12">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className={`${styles.formControl} form-control`}
                  name="email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={data.email}
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
                {!isEmailValid && isEmailFocused && (
                  <div className="text-danger">
                    * Please Enter A Valid Email
                  </div>
                )}
              </div>
              <div className="col-lg-6">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className={`${styles.formControl} form-control w-100`}
                  name="password"
                  id="password"
                  aria-describedby="password"
                  value={data.password}
                  onChange={handleChange}
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
                {!isPasswordValid && isPasswordFocused && (
                  <div className="text-danger">
                    * Password Must be At least 6 Characters
                  </div>
                )}
              </div>
              <div className="col-lg-6">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className={`${styles.formControl} form-control w-100`}
                  id="confirmPassword"
                  name="confirmPassword"
                  aria-describedby="confirmPassword"
                  value={data.confirmPassword}
                  onChange={handleChange}
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
                {!isConfirmedPasswordValid && isConfirmedPasswordFocused && (
                  <div className="text-danger">
                    * The Password Is Not Matching
                  </div>
                )}
              </div>
              <div className="col-lg-6">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className={`${styles.formControl} form-control w-100`}
                  id="address"
                  name="Address"
                  aria-describedby="address"
                  value={data.Address}
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
                {!isAddressValid && isAddressFocused && (
                  <div className="text-danger">
                    * Please Enter A Valid Address
                  </div>
                )}
              </div>
              <div className="col-lg-6">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className={`${styles.formControl} form-control w-100 `}
                  id="city"
                  name="city"
                  aria-describedby="city"
                  value={data.city}
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
                {!isCityValid && isCityFocused && (
                  <div className="text-danger">* Please Enter A Valid City</div>
                )}
              </div>
              <div className="col-lg-12">
                <label htmlFor="pNumber" className="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  className={`${styles.formControl} form-control`}
                  id="pNumber"
                  name="pNumber"
                  aria-describedby="pNumber"
                  value={data.pNumber}
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
                {!isPnumberValid && isPnumberFocused && (
                  <div className="text-danger">
                    * Please Enter A Valid Phone Number
                  </div>
                )}
              </div>
              <div className="col-lg-4">
                <select
                  className="form-select"
                  name="bloodType"
                  option={data.bloodType}
                  onChange={handleChange}
                  required
                >
                  <option value="" hidden>
                    Select Blood Type
                  </option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B-">B-</option>
                  <option value="B+">B+</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O-">O-</option>
                  <option value="O+">O+</option>
                </select>
              </div>
              <div className="col-lg-4">
                <select
                  className="form-select"
                  name="gender"
                  option={data.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="" hidden>
                    Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <p>
                Have an Account?{" "}
                <Link
                  to="signin-user"
                  className="text-decoration-none text-danger fw-bold"
                >
                  <span>Sign in Here</span>
                </Link>
              </p>
              <button className="btn btn-danger py-3">Sign Up</button>
            </form>
            {isSubmitted && !isEmailExisting && isDataValid && (
              <div className="text-success">
                Your Account Created Successfully
              </div>
            )}
            {isSubmitted && !isEmailExisting && !isDataValid && (
              <div className="text-danger">
                Please Check For Any Missing Field
              </div>
            )}
          </div>
        </div>
      </div>
      {/* {isEmailExisting && (
        <div class="alert alert-danger mt-5" role="alert">
          <span className="text-center fw-bold d-block">
            This Account Exist
          </span>
        </div> */}
      )}
    </div>
  );
};

export default User;
