import React, { useState } from "react";
//import styles from "./User.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { v4 as uuid } from "uuid";
const User = () => {
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
  const [modalMsg, setModelMsg] = useState("");
  const [showModal, setShowModal] = useState(false);

  //! to get data from json server:
  const handleSubmit = (event) => {
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
    };
    event.preventDefault();
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        const users = res.data;
        //console.log(users);
        const user = users.find(
          (usr) => usr.email === data.email && usr.password === data.password
        );
        console.log(user);
        if (user) {
          setModelMsg("this account is existed");
          setShowModal(true);
          console.log("existed");
        } else {
          axios
            .post("http://localhost:3000/users", newUser)
            .then((res) => {
              //console.log(res.data);
              console.log("Done post");
              setModelMsg("Welcome to our Blood Donate");
              setShowModal(true);
            })
            .catch((err) => console.log("error post"));
        }
      })

      .catch((err) => console.log("error get"));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    SetData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const closeModal = () => {
    setShowModal(false);
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
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-lg-6">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  id="firstName"
                  aria-describedby="First Name"
                  value={data.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-6">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  aria-describedby="Last Name"
                  value={data.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-12">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={data.email}
                  onChange={handleChange}
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
                  value={data.password}
                  onChange={handleChange}
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
                  value={data.confirmPassword}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-6">
                <label for="address" className="form-label">
                  Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="address"
                  name="Address"
                  aria-describedby="address"
                  value={data.Address}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-6">
                <label for="city" className="form-label">
                  City
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="city"
                  name="city"
                  aria-describedby="city"
                  value={data.city}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-12">
                <label for="pNumber" className="form-label">
                  Phone Number
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="pNumber"
                  name="pNumber"
                  aria-describedby="pNumber"
                  value={data.pNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-4">
                <select
                  className="form-select"
                  name="bloodType"
                  option={data.bloodType}
                  onChange={handleChange}
                >
                  <option selected hidden>
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
                >
                  <option selected hidden>
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
              <button
                className="btn btn-danger py-3"
                // data-bs-toggle="modal"
                // data-bs-target="#exampleModal"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>

      {showModal && (
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className={`modal ${showModal ? "show" : ""}`}
            tabIndex="-1"
            role="dialog"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Notification</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={closeModal}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">{modalMsg}</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
