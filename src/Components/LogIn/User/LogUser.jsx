import React, { useState } from "react";
import styles from "./LogUser.module.css";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

const LogUser = () => {
  const navigate = useNavigate();
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
  });

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isEmailExisting, setIsEmailExisting] = useState(false);

  const handleChange = (event) => {
    setIsSubmitted(false);
    setIsEmailExisting(false);
    const { name, value } = event.target;
    const emailRegex = /^[\w\\.-]+@\w+\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2})?$/;
    const passwordRegex = /^\w{6,}$/;
    const isMailValid = emailRegex.test(value);
    const isEnteredPasswordValid = passwordRegex.test(value);

    SetData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (name === "email") {
      setIsEmailValid(isMailValid);
      console.log(true);
    } else if (name === "password") setIsPasswordValid(isEnteredPasswordValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    setIsSubmitted(true);

    e.preventDefault();
    axios.get("http://localhost:3000/users").then((res) => {
      const users = res.data;
      //console.log(users);
      const user = users.find(
        (user) => user.email === data.email && user.password === data.password
      );
      if (user) {
        console.log("Done");
        setIsEmailExisting(true);
        navigate("/userProfile");
      } else console.log("error");
    });
  };
  return (
    <div className={styles.login_user}>
      <div className={styles.login_user_content}>
        <h2 className="text-center text-danger">Log In - Users </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={data.email}
              name="email"
              style={
                !isPasswordFocused
                  ? {}
                  : isPasswordFocused
                  ? { border: "2px solid green" }
                  : { border: "2px solid red" }
              }
              onFocus={() => {
                setIsEmailFocused(true);
              }}
              onBlur={() => {
                setIsEmailFocused(true);
              }}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="password" className="form-label">
              Password
            </label>
            <input
              aria-describedby="Password"
              type="password"
              className="form-control"
              id="password"
              value={data.password}
              name="password"
              onChange={handleChange}
              style={
                !isPasswordFocused
                  ? {}
                  : isPasswordFocused
                  ? { border: "2px solid green" }
                  : { border: "2px solid red" }
              }
              onFocus={() => {
                setIsPasswordFocused(true);
              }}
              onBlur={() => {
                setIsEmailFocused(true);
              }}
            />
          </div>

          <button
            type="submit"
            className="btn btn-danger w-100"
            onChange={handleChange}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogUser;
